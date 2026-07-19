import React from 'react';
import { Settings, Globe } from 'lucide-react';
import { t } from '../services/i18n';

interface HeaderProps {
  apiKey: string | null;
  useMock: boolean;
  isConfigOpen: boolean;
  setIsConfigOpen: (open: boolean) => void;
  language: string;
  setLanguage: (lang: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  apiKey,
  useMock,
  isConfigOpen,
  setIsConfigOpen,
  language,
  setLanguage
}) => {
  const getStatusText = () => {
    if (useMock) return t('nav.status.demo', language);
    if (apiKey) return t('nav.status.live', language);
    return t('nav.status.setup', language);
  };

  const getStatusClass = () => {
    if (useMock) return 'mock';
    if (apiKey) return 'active';
    return '';
  };

  return (
    <header className="app-header" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.5rem 0 1rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="logo-section">
          <svg 
            className="logo-icon" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
            <path d="M12 2v20" />
            <path d="M4.93 4.93A14.5 14.5 0 0 1 12 12a14.5 14.5 0 0 1-7.07 7.07" />
            <path d="M19.07 4.93A14.5 14.5 0 0 0 12 12a14.5 14.5 0 0 0 7.07 7.07" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ marginBottom: '-4px' }}>FifaDecoder</h1>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Understand Every Decision</span>
          </div>
        </div>

        <div className="header-controls" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} role="navigation" aria-label="Main Navigation">
          {/* Prominent Language Switcher */}
          <div className="lang-switcher-container" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(0, 229, 255, 0.1)',
            border: '1.5px solid var(--color-accent-gold)',
            padding: '0.4rem 0.8rem',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.2)'
          }}>
            <Globe size={18} style={{ color: 'var(--color-accent-gold)' }} aria-hidden="true" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Select Language"
              title="Select Language"
              style={{
                background: 'transparent',
                border: 'none',
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                cursor: 'pointer',
                outline: 'none',
                paddingRight: '5px'
              }}
            >
              <option value="English" style={{ background: '#03051E' }}>EN - English</option>
              <option value="Spanish" style={{ background: '#03051E' }}>ES - Español</option>
              <option value="French" style={{ background: '#03051E' }}>FR - Français</option>
              <option value="German" style={{ background: '#03051E' }}>DE - Deutsch</option>
              <option value="Portuguese" style={{ background: '#03051E' }}>PT - Português</option>
              <option value="Italian" style={{ background: '#03051E' }}>IT - Italiano</option>
              <option value="Dutch" style={{ background: '#03051E' }}>NL - Nederlands</option>
              <option value="Japanese" style={{ background: '#03051E' }}>JA - 日本語</option>
              <option value="Arabic" style={{ background: '#03051E' }}>AR - العربية</option>
              <option value="Hindi" style={{ background: '#03051E' }}>HI - हिन्दी</option>
              <option value="Chinese" style={{ background: '#03051E' }}>ZH - 中文</option>
              <option value="Korean" style={{ background: '#03051E' }}>KO - 한국어</option>
            </select>
          </div>

          <div className={`api-status`} aria-live="polite">
            <span className={`status-dot ${getStatusClass()}`} aria-hidden="true"></span>
            <span>{getStatusText()}</span>
          </div>
          
          <button 
            className="btn-icon" 
            onClick={() => setIsConfigOpen(!isConfigOpen)} 
            title="Locker Room Settings"
            aria-label={isConfigOpen ? "Close Locker Room Settings" : "Open Locker Room Settings"}
            aria-expanded={isConfigOpen}
            aria-controls="locker-room-settings"
            style={{ position: 'relative' }}
          >
            <Settings size={20} aria-hidden="true" />
            {!apiKey && !useMock && (
              <span style={{
                position: 'absolute',
                top: -2,
                right: -2,
                background: '#ef5350',
                width: 8,
                height: 8,
                borderRadius: '50%'
              }} aria-label="Action required" />
            )}
          </button>
        </div>
      </div>
      
      {/* Broadcast selling point banner */}
      <div 
        role="banner"
        style={{
          background: 'linear-gradient(90deg, rgba(212, 175, 55, 0.1) 0%, rgba(0, 229, 255, 0.05) 100%)',
          borderLeft: '4px solid var(--color-accent-gold)',
          padding: '0.5rem 1rem',
          borderRadius: '0 8px 8px 0',
          fontSize: '0.85rem',
          color: 'var(--color-text-secondary)',
          fontWeight: 500,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <span><span aria-hidden="true">🌍</span> <strong>Multilingual Intelligence Room:</strong> Real-time laws of the game decoded instantly in 12 languages.</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', fontWeight: 'bold' }}>FIFA World Cup 2026 Companion</span>
      </div>
    </header>
  );
};
