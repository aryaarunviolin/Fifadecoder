import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MatchControls } from './components/MatchControls';
import { EventTimeline } from './components/EventTimeline';
import { DecisionRoom } from './components/DecisionRoom';
import { ChatInterface } from './components/ChatInterface';
import { TournamentBracket } from './components/TournamentBracket';
import { Instructions } from './components/Instructions';
import { analyzeAnnouncement, sendChatFollowUp, fetchLiveEventsFromSearch, AnalysisResult, ChatMessage } from './services/gemini';
import { t } from './services/i18n';
import {
  FixtureInfo,
  MatchEvent,
  OFFICIAL_2026_FIXTURES,
  MOCK_REPLAY_EVENTS
} from './services/matchFeed';
import './App.css';

export default function App() {
  const defaultApiKey = ((import.meta as any).env?.VITE_GEMINI_API_KEY as string) || '';

  const [apiKey, setApiKey] = useState<string>(() =>
    localStorage.getItem('gemini_api_key') || ''
  );

  const effectiveApiKey = apiKey || defaultApiKey;

  const [useMock, setUseMock] = useState<boolean>(() => {
    const saved = localStorage.getItem('gemini_use_mock');
    if (saved !== null) {
      return saved === 'true';
    }
    return !effectiveApiKey;
  });

  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(
    !localStorage.getItem('gemini_api_key') && !defaultApiKey
  );

  // User Preference States
  const [knowledgeLevel, setKnowledgeLevel] = useState<'Beginner Fan' | 'Casual Viewer' | 'Tactical Analyst'>('Casual Viewer');
  const [language, setLanguage] = useState<string>('English');

  // View State
  const [currentView, setCurrentView] = useState<'timeline' | 'bracket' | 'instructions'>('instructions');

  // Match Fixture List and Selector
  const [fixtures, setFixtures] = useState<FixtureInfo[]>(OFFICIAL_2026_FIXTURES);
  const [selectedFixture, setSelectedFixture] = useState<FixtureInfo | null>(OFFICIAL_2026_FIXTURES.find(f => f.stage === 'QF') || OFFICIAL_2026_FIXTURES[0]);

  // Active Scoreboard & Time (synced from selected fixture)
  const [matchTime, setMatchTime] = useState<number>(0);
  const [homeScore, setHomeScore] = useState<number>(0);
  const [awayScore, setAwayScore] = useState<number>(0);

  // Search query states
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearchingLive, setIsSearchingLive] = useState<boolean>(false);
  const [searchErrorText, setSearchErrorText] = useState<string>('');

  // Timeline Event Stream
  const [events, setEvents] = useState<MatchEvent[]>([]);

  // Active Officiating Explanations
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [activeResult, setActiveResult] = useState<AnalysisResult | null>(null);
  const [apiError, setApiError] = useState<any>(null);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);



  // Loaders & Indicators
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChatLoading, setIsChatLoading] = useState<boolean>(false);

  // Sync Keys to localStorage
  useEffect(() => {
    localStorage.setItem('gemini_api_key', apiKey);
  }, [apiKey]);

  useEffect(() => {
    localStorage.setItem('gemini_use_mock', String(useMock));
  }, [useMock]);

  // ----------------------------------------------------
  // Handle Event Loading when Selected Match changes
  // ----------------------------------------------------
  useEffect(() => {
    if (!selectedFixture) return;

    // Reset old explanation cards
    setSelectedEventId(null);
    setActiveResult(null);
    setApiError(null);
    setChatHistory([]);
    setSearchErrorText('');

    // Sync Scoreboard immediately from fixture meta
    setHomeScore(selectedFixture.homeScore);
    setAwayScore(selectedFixture.awayScore);
    setMatchTime(selectedFixture.minute);

    // 1. Replay Completed Match Mode
    if (selectedFixture.status === 'FT') {
      let savedEvents = MOCK_REPLAY_EVENTS[selectedFixture.id];
      if (!savedEvents) {
        savedEvents = [
          { id: `gen-${selectedFixture.id}-1`, minute: 0, type: 'WHISTLE', isOfficiating: false, text: `Kick-off! ${selectedFixture.homeTeam} vs ${selectedFixture.awayTeam}`, team: 'neutral' }
        ];
        if (selectedFixture.homeScore > 0) {
          savedEvents.push({ id: `gen-${selectedFixture.id}-2`, minute: 30, type: 'GOAL', isOfficiating: false, text: `GOAL! ${selectedFixture.homeTeam} scores.`, team: 'home' });
        }
        if (selectedFixture.awayScore > 0) {
          savedEvents.push({ id: `gen-${selectedFixture.id}-3`, minute: 60, type: 'GOAL', isOfficiating: false, text: `GOAL! ${selectedFixture.awayTeam} scores.`, team: 'away' });
        }
        savedEvents.push({ id: `gen-${selectedFixture.id}-4`, minute: 90, type: 'WHISTLE', isOfficiating: false, text: `Full-time! Result: ${selectedFixture.homeScore} - ${selectedFixture.awayScore}`, team: 'neutral' });
      }
      setEvents(savedEvents);
      
      const goals = savedEvents.filter(e => e.type === 'GOAL');
      const homeG = goals.filter(e => e.team === 'home').length;
      const awayG = goals.filter(e => e.team === 'away').length;
      if (goals.length > 0) {
        setHomeScore(homeG);
        setAwayScore(awayG);
      }
      return;
    }

    // 2. Upcoming Match Mode (NS)
    if (selectedFixture.status === 'NS') {
      setEvents([]);
      return;
    }
  }, [selectedFixture]);

  // ----------------------------------------------------
  // Live Web Ingestion search trigger
  // ----------------------------------------------------
  const handleLiveSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setCurrentView('timeline');
    setIsSearchingLive(true);
    setIsLoading(true);
    setSelectedEventId(null);
    setActiveResult(null);
    setApiError(null);
    setChatHistory([]);
    setSearchErrorText('');

    try {
      // Query Gemini Google Search Grounding to find events
      const retrievedEvents = await fetchLiveEventsFromSearch(searchQuery, effectiveApiKey, language);
      
      if (retrievedEvents && retrievedEvents.length > 0) {
        // Parse team names from search query
        const vsIndex = searchQuery.toLowerCase().indexOf('vs');
        let homeT = 'Home Team';
        let awayT = 'Away Team';
        
        if (vsIndex !== -1) {
          homeT = searchQuery.substring(0, vsIndex).trim();
          awayT = searchQuery.substring(vsIndex + 2).trim();
          // Remove common suffixes
          homeT = homeT.replace(/live/i, '').replace(/world cup/i, '').replace(/2026/i, '').trim();
          awayT = awayT.replace(/live/i, '').replace(/world cup/i, '').replace(/2026/i, '').trim();
        }

        // Dynamically compute scores from parsed events
        const goals = retrievedEvents.filter((e: any) => e.type === 'GOAL');
        const homeG = goals.filter((e: any) => e.team === 'home').length;
        const awayG = goals.filter((e: any) => e.team === 'away').length;

        const newSearchedFixture: FixtureInfo = {
          id: Date.now(),
          stage: 'Final',
          homeTeam: homeT,
          awayTeam: awayT,
          homeScore: homeG,
          awayScore: awayG,
          homeLogo: '⚽',
          awayLogo: '⚽',
          status: 'LIVE',
          minute: retrievedEvents[retrievedEvents.length - 1]?.minute || 90,
          date: 'Live FIFA World Cup 2026 Match Feed',
          venue: 'Web Grounded Real-Time Stream',
          referee: 'FIFA Official Panel'
        };

        // Add to fixtures list and select it
        setFixtures(prev => [newSearchedFixture, ...prev]);
        setSelectedFixture(newSearchedFixture);
        setEvents(retrievedEvents);
      } else {
        // If data is unavailable or match is not 2026 World Cup, set error placeholder text
        setSearchErrorText(t('timeline.empty', language));
        setEvents([]);
      }
    } catch (err: any) {
      console.error(err);
      setSearchErrorText('Error communicating with search engine. Verify your Gemini API key is configured.');
      setEvents([]);
    } finally {
      setIsSearchingLive(false);
      setIsLoading(false);
    }
  };

  // Interactive Officiating Decode click
  const handleSelectEvent = async (event: MatchEvent) => {
    setSelectedEventId(event.id);
    setIsLoading(true);
    setActiveResult(null);
    setApiError(null);
    setChatHistory([]);

    try {
      const result = await analyzeAnnouncement(
        event.text,
        null,
        knowledgeLevel,
        language,
        effectiveApiKey || null,
        useMock
      );
      setActiveResult(result);
    } catch (e: any) {
      console.error(e);
      setApiError(e);
    } finally {
      setIsLoading(false);
    }
  };

  // Follow-up Q&A
  const handleSendMessage = async (message: string) => {
    if (!activeResult) return;

    const newUserMsg: ChatMessage = { role: 'user', content: message };
    const updatedHistory = [...chatHistory, newUserMsg];
    setChatHistory(updatedHistory);
    setIsChatLoading(true);

    try {
      const response = await sendChatFollowUp(
        updatedHistory,
        message,
        activeResult,
        knowledgeLevel,
        language,
        effectiveApiKey || null,
        useMock
      );
      setChatHistory(prev => [...prev, { role: 'model', content: response }]);
    } catch (e) {
      console.error(e);
      setChatHistory(prev => [...prev, { role: 'model', content: 'Chat failed. Check configurations.' }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleSelectMatchFromBracket = (fixture: FixtureInfo) => {
    setSelectedFixture(fixture);
    setCurrentView('timeline');
  };

  return (
    <div className="app-container">
      <Header
        apiKey={apiKey || null}
        useMock={useMock}
        isConfigOpen={isConfigOpen}
        setIsConfigOpen={setIsConfigOpen}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Locker Room Config Bar */}
      {isConfigOpen && (
        <div className="locker-room-bar">
          <div className="config-group" style={{ flex: '1.5' }}>
            <label htmlFor="api-key-input">{t('config.apiKey', language)}</label>
            <input
              id="api-key-input"
              type="password"
              className="config-input"
              placeholder="Paste your Gemini API key (AI Studio)..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>

          <div className="config-group" style={{ maxWidth: '180px' }}>
            <label htmlFor="audience-select">{t('config.fanLevel', language)}</label>
            <select
              id="audience-select"
              className="config-select"
              value={knowledgeLevel}
              onChange={(e) => setKnowledgeLevel(e.target.value as any)}
            >
              <option value="Beginner Fan">Beginner (No Jargon)</option>
              <option value="Casual Viewer">Casual Viewer</option>
              <option value="Tactical Analyst">Tactical Analyst</option>
            </select>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <div 
              className={`toggle-container ${useMock ? 'active' : ''}`}
              onClick={() => setUseMock(!useMock)}
              title="Toggle Mock mode for Gemini LLM queries"
            >
              <div className="toggle-switch"></div>
              <span>{t('config.mockMode', language)}</span>
            </div>

            <button 
              className="btn-icon" 
              onClick={() => setIsConfigOpen(false)}
              title="Close locker room settings"
              style={{ padding: '0.2rem', width: '32px', height: '32px' }}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* View Toggle Tabs */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem', padding: '0 1.25rem' }}>
        <button 
          className={`btn-primary ${currentView === 'instructions' ? 'active-tab' : 'inactive-tab'}`}
          onClick={() => setCurrentView('instructions')}
        >
          Instructions
        </button>
        <button 
          className={`btn-primary ${currentView === 'bracket' ? 'active-tab' : 'inactive-tab'}`}
          onClick={() => setCurrentView('bracket')}
        >
          {t('nav.bracket', language)}
        </button>
        <button 
          className={`btn-primary ${currentView === 'timeline' ? 'active-tab' : 'inactive-tab'}`}
          onClick={() => setCurrentView('timeline')}
        >
          {t('nav.timeline', language)}
        </button>
      </div>

      <style>{`
        .active-tab { background: var(--color-pitch-green); color: black; border-color: transparent; }
        .inactive-tab { background: rgba(0,0,0,0.3); color: var(--color-text-secondary); border: 1px solid rgba(255,255,255,0.1); }
      `}</style>

      {currentView === 'instructions' ? (
        <Instructions onStartDemo={() => setCurrentView('timeline')} />
      ) : currentView === 'bracket' ? (
        <div style={{ marginTop: '1.25rem' }}>
          <TournamentBracket fixtures={fixtures} onSelectMatch={handleSelectMatchFromBracket} language={language} />
        </div>
      ) : (
        <>
          {/* 1. Scoreboard and Live Web Search Banner */}
          <div style={{ marginTop: '1.25rem' }}>
            <MatchControls
              fixtures={fixtures}
              selectedFixture={selectedFixture}
              onSelectFixture={setSelectedFixture}
              matchTime={matchTime}
              homeScore={homeScore}
              awayScore={awayScore}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onLiveSearch={handleLiveSearch}
              isSearchingLive={isSearchingLive}
              language={language}
            />
          </div>

          {/* 2. Main Live Feed Grid */}
          <main className="dashboard-grid" style={{ marginTop: '1.25rem' }}>
            <EventTimeline
              selectedFixture={selectedFixture}
              events={events}
              selectedEventId={selectedEventId}
              onSelectEvent={handleSelectEvent}
              isLoading={isLoading}
              searchErrorText={searchErrorText}
            />

            <div className="dashboard-display">
              {isLoading ? (
                <div className="glass-panel loader-container" style={{ flex: '1.2', border: '1px solid var(--color-var-review)', position: 'relative', overflow: 'hidden' }}>
                  <div className="var-scan-line"></div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', zIndex: 1 }}>
                    <div style={{ padding: '0.5rem 1.5rem', background: 'var(--color-var-review)', color: '#fff', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '2px', borderRadius: '4px' }}>
                      VAR REVIEW IN PROGRESS
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>{t('timeline.fetching', language)}</p>
                    <div className="ref-whistle-spinner" style={{ borderColor: 'var(--color-var-review)', borderBottomColor: 'transparent', width: '40px', height: '40px', marginTop: '1rem' }}></div>
                  </div>
                  <style>{`
                    .var-scan-line {
                      position: absolute;
                      top: 0; left: 0; width: 100%; height: 5px;
                      background: var(--color-var-review);
                      box-shadow: 0 0 15px 5px rgba(255,145,0,0.5);
                      animation: scan 2s infinite linear;
                    }
                    @keyframes scan {
                      0% { top: -10%; }
                      100% { top: 110%; }
                    }
                  `}</style>
                </div>
              ) : (
                <>
                  <DecisionRoom result={activeResult} error={apiError} />
                  
                  {activeResult && (
                    <ChatInterface
                      chatHistory={chatHistory}
                      suggestedQuestions={activeResult.suggestedQuestions}
                      onSendMessage={handleSendMessage}
                      isLoading={isChatLoading}
                    />
                  )}
                </>
              )}
            </div>
          </main>
        </>
      )}
    </div>
  );
}
