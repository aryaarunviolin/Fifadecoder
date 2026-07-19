import React from 'react';
import { Globe, ShieldAlert, Award, Compass, Search, Trophy } from 'lucide-react';


export const Instructions: React.FC = () => {
  return (
    <div className="glass-panel" style={{ marginTop: '1.25rem', padding: '2rem', gap: '2rem' }}>
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Welcome to FifaDecoder 🏆
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginTop: '0.5rem' }}>
          An AI-powered multilingual football decision explainer designed to improve fan understanding during FIFA World Cup 2026.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* How to use */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#ffffff', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Compass style={{ color: 'var(--color-pitch-green)' }} /> Quick Start Guide
          </h3>
          <ul style={{ color: 'var(--color-text-secondary)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.95rem' }}>
            <li>
              <strong style={{ color: '#fff' }}>1. Select a Match:</strong> Head over to the <span style={{ color: 'var(--color-pitch-green)' }}>Tournament Bracket</span> tab to select any match from the Group Stage to the Finals, or use the drop-down on the <span style={{ color: 'var(--color-pitch-green)' }}>Match Timeline</span> tab.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>2. Browse the Timeline:</strong> Check the chronological minute-by-minute timeline of events. Look for highlighted referee decisions (VAR reviews, cards, offside).
            </li>
            <li>
              <strong style={{ color: '#fff' }}>3. Decode Officiating Decisions:</strong> Click on any officiating event in the timeline. The <span style={{ color: 'var(--color-accent-gold)' }}>Decision Room</span> will display details: the decision, the official law of the game, and why fans might find it confusing.
            </li>
            <li>
              <strong style={{ color: '#fff' }}>4. Ask the Copilot:</strong> Need more explanation? Use the <span style={{ color: 'var(--color-pitch-green)' }}>Ask the Ref Copilot</span> chat at the bottom to ask follow-up questions about specific rules.
            </li>
          </ul>
        </div>

        {/* Core Features */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#ffffff', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award style={{ color: 'var(--color-accent-gold)' }} /> Key Features
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Globe size={32} style={{ color: 'var(--color-pitch-green)', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff', display: 'block' }}>12-Language Support</strong>
                <span style={{ color: 'var(--color-text-secondary)' }}>Instantly translate the entire application and VAR explanations into Spanish, French, German, Japanese, Chinese, Arabic, and more.</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Search size={32} style={{ color: 'var(--color-pitch-green)', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff', display: 'block' }}>Live Web Ingestion</strong>
                <span style={{ color: 'var(--color-text-secondary)' }}>Enter any real-time or past match query in the search bar (e.g. "Spain vs France 2026 World Cup") to fetch live timelines directly from the web using Gemini Search Grounding.</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <Trophy size={32} style={{ color: 'var(--color-pitch-green)', flexShrink: 0 }} />
              <div>
                <strong style={{ color: '#fff', display: 'block' }}>Full 2026 Tournament Bracket</strong>
                <span style={{ color: 'var(--color-text-secondary)' }}>Visualized match trees starting from Group Stages/R32 to Argentina's historic title defense in the Finals.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Info for Hackathon Judges */}
      <div style={{
        marginTop: '1.5rem',
        padding: '1.25rem',
        borderRadius: '12px',
        background: 'rgba(212, 175, 55, 0.05)',
        border: '1.5px solid var(--color-accent-gold)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--color-accent-gold)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldAlert size={20} /> Developer & Judge Setup Notes
        </h4>
        <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p>
            - <strong style={{ color: '#fff' }}>API Key Configuration:</strong> The application looks for a default key set in your environment variables via <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>VITE_GEMINI_API_KEY</code>.
          </p>
          <p>
            - <strong style={{ color: '#fff' }}>Manual Override:</strong> You can still input a custom Gemini API key manually by clicking the settings gear icon (⚙️) on the top right. User keys override the default env key.
          </p>
          <p>
            - <strong style={{ color: '#fff' }}>Mock Mode fallback:</strong> If no key is set in env or settings, the app runs in <span style={{ color: 'var(--color-accent-gold)' }}>Offline / Mock Mode</span>, using high-fidelity pre-computed explanations for the demo matches.
          </p>
        </div>
      </div>
    </div>
  );
};
