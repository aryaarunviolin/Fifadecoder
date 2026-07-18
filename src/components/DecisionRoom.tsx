import React from 'react';
import { ClipboardList, BookOpen, ShieldAlert, HelpCircle } from 'lucide-react';
import { AnalysisResult, EnrichedAPIError } from '../services/gemini';

interface DecisionRoomProps {
  result: AnalysisResult | null;
  error?: EnrichedAPIError | null;
}

export const DecisionRoom: React.FC<DecisionRoomProps> = ({ result, error }) => {
  if (error) {
    return (
      <div className="glass-panel" style={{ flex: '1.2', gap: '1.25rem', borderColor: '#FF0D00' }}>
        <h2 className="panel-title" style={{ color: '#FF0D00' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Gemini API Error Detected
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', background: 'rgba(255, 13, 0, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 13, 0, 0.2)' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#FF0D00' }}>
            HTTP Status Code: {error.status}
          </div>
          <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>
            Error Message: {error.message}
          </div>
          
          <details style={{ marginTop: '0.5rem', cursor: 'pointer' }}>
            <summary style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 700 }}>
              Show Gemini Response Body / Stack Trace
            </summary>
            <pre style={{
              marginTop: '0.5rem',
              padding: '1rem',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '0.75rem',
              color: '#FF8A80',
              overflowX: 'auto',
              whiteSpace: 'pre-wrap'
            }}>
              {error.body}
            </pre>
          </details>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="glass-panel" style={{ flex: '1.2' }}>
        <div className="empty-state">
          <svg 
            className="empty-icon" 
            width="64" 
            height="64" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 11l2 2 4-4" />
          </svg>
          <h3>AI Decision Room</h3>
          <p>Click on any officiating event highlighted in the match feed timeline to automatically decode facts, rules, and assumptions.</p>
        </div>
      </div>
    );
  }

  const getCardThemeClass = () => {
    switch (result.verdict) {
      case 'RED_CARD': return 'RED_CARD';
      case 'YELLOW_CARD': return 'YELLOW_CARD';
      case 'GREEN_CARD': return 'GREEN_CARD';
      case 'VAR_REVIEW': return 'VAR_REVIEW';
      default: return '';
    }
  };

  return (
    <div className="glass-panel" style={{ flex: '1.2', gap: '1.25rem' }}>
      <h2 className="panel-title">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        AI Officiating Breakdown
      </h2>

      {/* 1. Decision Card Header */}
      <div className={`referee-verdict-card ${getCardThemeClass()}`}>
        <div className={`visual-card-element ${getCardThemeClass()}`}></div>
        <div className="verdict-info">
          <span className="verdict-badge">Decision verdict</span>
          <h2>{result.verdictText}</h2>
        </div>
        <div className="verdict-glow"></div>
      </div>

      {/* 2. Retrieved Facts Section */}
      <div className="explanation-card" style={{ borderLeft: '3px solid #29b6f6' }}>
        <h4 style={{ color: '#29b6f6' }}>
          <ClipboardList size={16} />
          Retrieved Facts (Verbatim Match Report)
        </h4>
        <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-primary)' }}>
          {result.retrievedFacts && result.retrievedFacts.map((fact, idx) => (
            <li key={idx} style={{ marginBottom: '0.35rem' }}>{fact}</li>
          ))}
        </ul>
      </div>

      {/* 3. AI Rules Explanation */}
      <div className="explanation-card" style={{ borderLeft: '3px solid var(--color-pitch-green)' }}>
        <h4 style={{ color: 'var(--color-pitch-green)' }}>
          <BookOpen size={16} />
          AI Rules Explanation (IFAB Laws)
        </h4>
        <p style={{ fontSize: '0.92rem', color: 'var(--color-text-primary)', marginTop: '0.35rem' }}>
          {result.aiExplanation}
        </p>
        <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-pitch-green)' }}>
          Law Citation: {result.lawReference}
        </div>
      </div>

      {/* 4. AI Assumptions & Interpretations */}
      <div className="explanation-card" style={{
        borderLeft: '3px solid var(--color-yellow-card)',
        background: 'rgba(255, 213, 79, 0.01)'
      }}>
        <h4 style={{ color: 'var(--color-yellow-card)' }}>
          <ShieldAlert size={16} />
          AI Assumptions & Interpretations
        </h4>
        <ul style={{ paddingLeft: '1.25rem', marginTop: '0.5rem', fontSize: '0.88rem', color: 'var(--color-text-primary)', fontStyle: 'italic' }}>
          {result.aiAssumptions && result.aiAssumptions.map((assump, idx) => (
            <li key={idx} style={{ marginBottom: '0.35rem', lineHeight: '1.4' }}>{assump}</li>
          ))}
        </ul>
      </div>

      {/* 5. On-Field Signal */}
      <div className="explanation-card">
        <h4 style={{ color: 'var(--color-text-secondary)' }}>
          <HelpCircle size={16} />
          On-Field Referee Signal
        </h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>
          {result.handSignal}
        </p>
      </div>
    </div>
  );
};
