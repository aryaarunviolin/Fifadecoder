import React, { useState, useEffect } from 'react';
import { Tv, Flag, AlertCircle, ArrowUpDown, Info, Calendar, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { MatchEvent, FixtureInfo } from '../services/matchFeed';

interface EventTimelineProps {
  selectedFixture: FixtureInfo | null;
  events: MatchEvent[];
  selectedEventId: string | null;
  onSelectEvent: (event: MatchEvent) => void;
  isLoading: boolean;
  searchErrorText?: string;
}

export const EventTimeline: React.FC<EventTimelineProps> = ({
  selectedFixture,
  events,
  selectedEventId,
  onSelectEvent,
  isLoading,
  searchErrorText
}) => {
  const [countdownText, setCountdownText] = useState('Calculating Kickoff...');

  useEffect(() => {
    if (!selectedFixture || selectedFixture.status !== 'NS') return;

    const parseKickoffTime = () => {
      // e.g. date: 'July 14, 2026 - Semi-Final (NS)'
      const cleaned = selectedFixture.date.split(' - ')[0].trim(); // Extracts 'July 14, 2026'
      try {
        const kickoff = new Date(`${cleaned} 20:00:00 UTC`); // Default to 20:00 UTC kickoff
        if (isNaN(kickoff.getTime())) {
          return new Date(Date.now() + 86400000); // Fallback: +1 day
        }
        return kickoff;
      } catch {
        return new Date(Date.now() + 86400000);
      }
    };

    const targetDate = parseKickoffTime();

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setCountdownText('Match is currently in progress!');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdownText(`${days}d ${hours}h ${mins}m ${secs}s`);
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [selectedFixture]);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'GOAL':
        return (
          <span style={{ fontSize: '1.25rem', filter: 'drop-shadow(0 0 4px white)' }} role="img" aria-label="Goal">
            ⚽
          </span>
        );
      case 'CARD_RED':
        return <div style={{ width: '12px', height: '18px', background: 'var(--color-red-card)', borderRadius: '2px', boxShadow: '0 2px 5px rgba(239, 83, 80, 0.4)' }}></div>;
      case 'CARD_YELLOW':
        return <div style={{ width: '12px', height: '18px', background: 'var(--color-yellow-card)', borderRadius: '2px', boxShadow: '0 2px 5px rgba(255, 213, 79, 0.4)' }}></div>;
      case 'VAR_CHECK':
        return <Tv size={16} style={{ color: 'var(--color-var-review)' }} />;
      case 'OFFSIDE':
        return <Flag size={16} style={{ color: 'var(--color-yellow-card)' }} />;
      case 'FOUL':
        return <AlertCircle size={16} style={{ color: 'var(--color-text-secondary)' }} />;
      case 'SUBSTITUTION':
        return <ArrowUpDown size={16} style={{ color: 'var(--color-pitch-green)' }} />;
      case 'WHISTLE':
        return (
          <span style={{ fontSize: '1rem' }} role="img" aria-label="Whistle">
            📢
          </span>
        );
      default:
        return <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-text-secondary)' }}></div>;
    }
  };

  const getOfficiatingThemeClass = (event: MatchEvent) => {
    if (!event.isOfficiating) return '';
    if (event.type === 'CARD_RED') return 'RED_CARD';
    if (event.type === 'CARD_YELLOW') return 'YELLOW_CARD';
    if (event.type === 'OFFSIDE') return 'GREEN_CARD';
    return 'VAR_REVIEW';
  };

  // 1. Upcoming Match Preview State
  if (selectedFixture?.status === 'NS') {
    return (
      <div className="glass-panel" style={{ flex: '1.2' }}>
        <h2 className="panel-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
          Upcoming Match Preview
        </h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '2.5rem 1rem',
          textAlign: 'center',
          flex: 1
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '3rem' }}>{selectedFixture.homeLogo}</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{selectedFixture.homeTeam}</span>
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-heading)' }}>
              VS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '3rem' }}>{selectedFixture.awayLogo}</span>
              <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>{selectedFixture.awayTeam}</span>
            </div>
          </div>

          <div style={{
            background: 'rgba(0, 230, 118, 0.05)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '1.25rem 2rem',
            boxShadow: '0 0 15px rgba(0, 230, 118, 0.05)'
          }}>
            <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-text-secondary)', letterSpacing: '1px', marginBottom: '0.35rem' }}>
              Kick-off Countdown
            </span>
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-pitch-green)', letterSpacing: '0.5px' }}>
              {countdownText}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '380px', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <Calendar size={15} style={{ color: 'var(--color-pitch-green)' }} />
              <span>{selectedFixture.date.split(' - ')[0]}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <MapPin size={15} style={{ color: 'var(--color-pitch-green)' }} />
              <span>{selectedFixture.venue}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              <Clock size={15} style={{ color: 'var(--color-pitch-green)' }} />
              <span>Referee: {selectedFixture.referee}</span>
            </div>
          </div>
          
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', maxWidth: '350px' }}>
            Official match event timelines will populate dynamically once the kickoff whistle blows.
          </div>
        </div>
      </div>
    );
  }

  // 2. Standard Event Timeline Rendering
  return (
    <div className="glass-panel" style={{ flex: '1.2', maxHeight: '680px' }}>
      <h2 className="panel-title" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
          FIFA World Cup 2026 Match Feed
        </div>
        {events.length > 0 && (
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-pitch-green)' }}>
            {events.length} Events
          </span>
        )}
      </h2>

      <div style={{
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse', // Chronological bottom-to-top (newest at top)
        gap: '0.75rem',
        paddingRight: '0.25rem',
        flex: 1
      }}>
        {/* Error Placeholder State (Priority 1) */}
        {searchErrorText && events.length === 0 ? (
          <div style={{
            textAlign: 'center',
            color: '#ef5350',
            border: '1px dashed rgba(239, 83, 80, 0.3)',
            background: 'rgba(239, 83, 80, 0.03)',
            borderRadius: '12px',
            padding: '2.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            margin: '2rem 1rem'
          }}>
            <AlertTriangle size={32} />
            <span style={{ fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Official Data Unavailable
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: '1.5', maxWidth: '340px' }}>
              {searchErrorText}
            </p>
          </div>
        ) : events.length === 0 ? (
          <div style={{
            textAlign: 'center',
            color: 'var(--color-text-secondary)',
            fontSize: '0.85rem',
            padding: '3rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Info size={24} style={{ opacity: 0.3 }} />
            <span>No official match events loaded.</span>
            <span>Select a completed replay fixture or search above to ingest live World Cup 2026 data.</span>
          </div>
        ) : (
          events.map((event) => {
            const isSelected = selectedEventId === event.id;
            const themeClass = getOfficiatingThemeClass(event);
            
            return (
              <div
                key={event.id}
                onClick={() => event.isOfficiating && !isLoading && onSelectEvent(event)}
                className={`preset-card ${event.isOfficiating ? 'officiating' : ''} ${isSelected ? 'active' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '0.85rem 1rem',
                  margin: 0,
                  cursor: event.isOfficiating ? 'pointer' : 'default',
                  border: isSelected 
                    ? `1px solid var(--color-${themeClass.toLowerCase().replace('_', '-') || 'pitch-green'})` 
                    : event.isOfficiating 
                      ? '1px dashed rgba(255,255,255,0.1)' 
                      : '1px solid rgba(255,255,255,0.03)',
                  boxShadow: isSelected ? `0 0 10px rgba(0, 230, 118, 0.05)` : 'none',
                  background: isSelected 
                    ? 'rgba(255,255,255,0.04)' 
                    : event.isOfficiating 
                      ? 'rgba(0, 230, 118, 0.02)' 
                      : 'rgba(255,255,255,0.01)'
                }}
              >
                {/* 1. Time Badge */}
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: event.isOfficiating ? 'var(--color-neon-bright)' : 'var(--color-text-secondary)',
                  width: '32px',
                  flexShrink: 0
                }}>
                  {event.minute}'
                </div>

                {/* 2. Event Type Icon */}
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {getEventIcon(event.type)}
                </div>

                {/* 3. Text & Interaction Details */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div style={{
                    fontSize: '0.85rem',
                    color: event.isOfficiating ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                    fontWeight: event.isOfficiating ? 600 : 400,
                    lineHeight: '1.4'
                  }}>
                    {event.text}
                  </div>
                  
                  {event.isOfficiating && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: isSelected ? 'var(--color-pitch-green)' : 'var(--color-var-review)',
                      marginTop: '0.15rem'
                    }}>
                      <span>⚡ AI Decode Available</span>
                      <span>•</span>
                      <span>{isSelected ? 'Viewing' : 'Click to inspect'}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
