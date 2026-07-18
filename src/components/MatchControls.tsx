import React from 'react';
import { Search } from 'lucide-react';
import { FixtureInfo } from '../services/matchFeed';
import { t } from '../services/i18n';

interface MatchControlsProps {
  fixtures: FixtureInfo[];
  selectedFixture: FixtureInfo | null;
  onSelectFixture: (fixture: FixtureInfo) => void;
  matchTime: number;
  homeScore: number;
  awayScore: number;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onLiveSearch: (e: React.FormEvent) => void;
  isSearchingLive: boolean;
  language: string;
}

export const MatchControls: React.FC<MatchControlsProps> = ({
  fixtures,
  selectedFixture,
  onSelectFixture,
  matchTime,
  homeScore,
  awayScore,
  searchQuery,
  setSearchQuery,
  onLiveSearch,
  isSearchingLive,
  language
}) => {
  const formatTime = (time: number) => {
    if (!selectedFixture) return "0'";
    if (selectedFixture.status === 'FT') return 'FT';
    if (selectedFixture.status === 'NS') return 'NS';
    if (time > 90) return `90+${time - 90}'`;
    return `${time}'`;
  };

  const handleFixtureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const matched = fixtures.find(f => f.id === Number(e.target.value));
    if (matched) {
      onSelectFixture(matched);
    }
  };

  const getStatusBadge = () => {
    if (!selectedFixture) return null;
    switch (selectedFixture.status) {
      case 'LIVE':
        return (
          <span style={{
            background: '#ef5350',
            color: 'white',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            animation: 'pulse 1.5s infinite'
          }}>
            {t('status.live', language)}
          </span>
        );
      case 'FT':
        return (
          <span style={{
            background: 'rgba(255,255,255,0.08)',
            color: 'var(--color-text-secondary)',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '0.2rem 0.5rem',
            borderRadius: '4px'
          }}>
            {t('status.ft', language)}
          </span>
        );
      case 'NS':
        return (
          <span style={{
            background: 'rgba(0, 230, 118, 0.1)',
            color: 'var(--color-pitch-green)',
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '0.2rem 0.5rem',
            borderRadius: '4px'
          }}>
            {t('status.ns', language)}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '1.25rem', gap: '1.25rem' }}>
      
      {/* 1. Selection & Live Web Search Row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
        
        {/* Match Replays Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <label htmlFor="fixture-select" style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--color-pitch-green)' }}>
            {t('controls.selectFixture', language)}
          </label>
          <select
            id="fixture-select"
            className="config-select"
            value={selectedFixture?.id || ''}
            onChange={handleFixtureChange}
            style={{ padding: '0.4rem 0.75rem', fontSize: '0.85rem', width: 'auto', minWidth: '220px' }}
          >
            {fixtures.map(f => (
              <option key={f.id} value={f.id}>
                {f.homeTeam} vs {f.awayTeam} ({f.date.split('(')[0].trim()})
              </option>
            ))}
          </select>
          {getStatusBadge()}
        </div>

        {/* Live Search Input Form (Google Grounding Ingestion) */}
        <form onSubmit={onLiveSearch} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              className="config-input"
              placeholder={t('controls.searchPlaceholder', language)}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ padding: '0.4rem 0.75rem 0.4rem 2rem', fontSize: '0.85rem', minWidth: '240px' }}
              disabled={isSearchingLive}
            />
            <Search size={14} style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
          </div>
          <button 
            type="submit" 
            className="btn-primary" 
            style={{ padding: '0.4rem 1.25rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }} 
            disabled={isSearchingLive || !searchQuery.trim()}
          >
            <span>{isSearchingLive ? t('controls.ingesting', language) : t('controls.searchBtn', language)}</span>
          </button>
        </form>
      </div>

      {/* 2. Scoreboard Row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Teams and Score */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          {selectedFixture && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)', fontSize: '1.35rem' }}>
              <span>{selectedFixture.homeLogo}</span>
              <span>{selectedFixture.homeTeam}</span>
              <span style={{ background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.6rem', borderRadius: '6px', color: 'var(--color-pitch-green)' }}>
                {homeScore}
              </span>
              <span style={{ color: 'var(--color-text-secondary)' }}>-</span>
              <span style={{ background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.6rem', borderRadius: '6px', color: 'var(--color-pitch-green)' }}>
                {awayScore}
              </span>
              <span>{selectedFixture.awayTeam}</span>
              <span>{selectedFixture.awayLogo}</span>
            </div>
          )}
          
          {/* Game Time */}
          {selectedFixture?.status !== 'NS' && (
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.3rem',
              fontWeight: 800,
              color: 'var(--color-neon-bright)',
              background: 'rgba(0,0,0,0.3)',
              padding: '0.25rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid rgba(0, 230, 118, 0.15)',
              minWidth: '75px',
              textAlign: 'center'
            }}>
              {formatTime(matchTime)}
            </div>
          )}
        </div>
      </div>

      {/* Metadata Footnote */}
      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '0.5rem' }}>
        <span>📍 {selectedFixture?.venue}</span>
        <span>Ref: {selectedFixture?.referee}</span>
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};
