import React from 'react';
import { FixtureInfo } from '../services/matchFeed';
import { t } from '../services/i18n';
import './TournamentBracket.css';

interface TournamentBracketProps {
  fixtures: FixtureInfo[];
  onSelectMatch: (fixture: FixtureInfo) => void;
  language: string;
}

export const TournamentBracket: React.FC<TournamentBracketProps> = ({ fixtures, onSelectMatch, language }) => {
  // Group by stage
  const stages = ['R32', 'R16', 'QF', 'SF', 'Final'];
  
  const matchesByStage: Record<string, FixtureInfo[]> = {};
  stages.forEach(stage => {
    matchesByStage[stage] = fixtures.filter(f => f.stage === stage).sort((a, b) => a.id - b.id);
  });

  const getStageTitle = (stage: string) => {
    switch (stage) {
      case 'R32': return t('bracket.group', language);
      case 'R16': return t('bracket.r16', language);
      case 'QF': return t('bracket.qf', language);
      case 'SF': return t('bracket.sf', language);
      case 'Final': return t('bracket.final', language);
      default: return stage;
    }
  };

  return (
    <div className="bracket-container glass-panel">
      <div className="bracket-scroll-area">
        {stages.map((stage) => {
          const stageMatches = matchesByStage[stage];
          if (!stageMatches || stageMatches.length === 0) return null;
          
          return (
            <div key={stage} className={`bracket-column stage-${stage}`}>
              <h3 className="stage-title">{getStageTitle(stage)}</h3>
              <div className="match-list" role="list" aria-label={`Matches in ${getStageTitle(stage)}`}>
                {stageMatches.map((match) => (
                  <div 
                    key={match.id} 
                    className="match-card" 
                    onClick={() => onSelectMatch(match)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectMatch(match);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Match: ${match.homeTeam} versus ${match.awayTeam}`}
                  >
                    <div className="match-team">
                      <span><span aria-hidden="true">{match.homeLogo}</span> {match.homeTeam}</span>
                      <span className="match-score">{match.status === 'NS' ? '-' : match.homeScore}</span>
                    </div>
                    <div className="match-team">
                      <span><span aria-hidden="true">{match.awayLogo}</span> {match.awayTeam}</span>
                      <span className="match-score">{match.status === 'NS' ? '-' : match.awayScore}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
