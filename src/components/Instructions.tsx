import React from 'react';
import { Globe, ShieldAlert, Search, Trophy, PlayCircle } from 'lucide-react';

interface InstructionsProps {
  onStartDemo: () => void;
}

export const Instructions: React.FC<InstructionsProps> = ({ onStartDemo }) => {
  return (
    <div className="glass-panel" style={{ 
      marginTop: '1.25rem', 
      padding: '0', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, rgba(3, 5, 30, 0.9) 0%, rgba(0, 229, 255, 0.15) 100%)',
        padding: '4rem 2rem', 
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          background: 'rgba(0, 230, 118, 0.1)',
          border: '1px solid var(--color-pitch-green)',
          borderRadius: '20px',
          color: 'var(--color-pitch-green)',
          fontSize: '0.85rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <span className="status-dot mock" style={{ width: '8px', height: '8px', margin: 0 }}></span>
          FIFA World Cup 2026 Ready
        </div>
        
        <h2 style={{ 
          fontFamily: 'var(--font-heading)', 
          fontSize: '3.5rem', 
          color: 'var(--color-text-primary)', 
          textTransform: 'uppercase', 
          letterSpacing: '2px',
          lineHeight: '1.1',
          margin: 0
        }}>
          Demystify Every <br/>
          <span style={{ color: 'var(--color-accent-gold)' }}>Crucial Call.</span>
        </h2>
        
        <p style={{ 
          color: 'var(--color-text-secondary)', 
          fontSize: '1.2rem', 
          maxWidth: '600px',
          lineHeight: '1.6',
          margin: 0
        }}>
          An AI-powered multilingual football decision explainer designed to bring broadcast-quality VAR analysis directly to the fans.
        </p>

        <button 
          onClick={onStartDemo}
          className="btn-primary"
          style={{
            marginTop: '1rem',
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'var(--color-pitch-green)',
            color: '#000',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            border: 'none',
            boxShadow: '0 0 20px rgba(0, 230, 118, 0.4)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <PlayCircle size={24} />
          Launch Interactive Demo
        </button>
      </div>

      <div style={{ padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
        {/* Core Features */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(0, 230, 118, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <Globe size={28} style={{ color: 'var(--color-pitch-green)' }} />
            </div>
            <div>
              <strong style={{ color: '#fff', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem' }}>12-Language Intelligence</strong>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', display: 'block' }}>Translate complex IFAB laws into 12 languages instantly, ensuring global fans understand every decision.</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(0, 230, 118, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <Search size={28} style={{ color: 'var(--color-pitch-green)' }} />
            </div>
            <div>
              <strong style={{ color: '#fff', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem' }}>Live Match Ingestion</strong>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', display: 'block' }}>Powered by Gemini Search Grounding. Fetch live timelines for any match directly from the web in real-time.</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '1rem', borderRadius: '12px' }}>
              <Trophy size={28} style={{ color: 'var(--color-accent-gold)' }} />
            </div>
            <div>
              <strong style={{ color: '#fff', fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem' }}>Broadcast Quality</strong>
              <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', display: 'block' }}>A premium, stadium-inspired UI that breaks down verdicts, laws, and assumptions like a professional pundit.</span>
            </div>
          </div>
        </div>

        {/* Info for Hackathon Judges */}
        <div style={{
          padding: '2rem',
          borderRadius: '16px',
          background: 'rgba(212, 175, 55, 0.05)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          height: 'fit-content'
        }}>
          <h4 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '1.2rem', 
            color: 'var(--color-accent-gold)', 
            textTransform: 'uppercase', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            margin: 0
          }}>
            <ShieldAlert size={22} /> Hackathon Judge Notes
          </h4>
          <div style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem', lineHeight: '1.5' }}>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#fff' }}>1. Zero Setup Demo:</strong> The app is pre-configured with offline Mock Mode. Click "Launch Interactive Demo" to explore.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#fff' }}>2. Live Gemini Testing:</strong> Enter your API key using the ⚙️ Settings icon in the top right to enable Live Web Ingestion and real-time AI Chat.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: '#fff' }}>3. How it works:</strong> Go to the Match Timeline, select an officiating event (VAR, Red Card), and watch the AI decode the rules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
