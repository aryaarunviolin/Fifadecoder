export type EventType =
  | 'GOAL'
  | 'CARD_RED'
  | 'CARD_YELLOW'
  | 'OFFSIDE'
  | 'VAR_CHECK'
  | 'FOUL'
  | 'SUBSTITUTION'
  | 'WHISTLE'
  | 'DEFAULT';

export interface MatchEvent {
  id: string;
  minute: number;
  type: EventType;
  isOfficiating: boolean;
  text: string;
  team: 'home' | 'away' | 'neutral';
}

export type StageType = 'Group' | 'R32' | 'R16' | 'QF' | 'SF' | 'Final';

export interface FixtureInfo {
  id: number;
  stage: StageType;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  homeLogo: string;
  awayLogo: string;
  status: 'LIVE' | 'FT' | 'NS';
  minute: number;
  date: string;
  venue: string;
  referee: string;
}

export const OFFICIAL_2026_FIXTURES: FixtureInfo[] = [
  {
    "id": 100,
    "stage": "R32",
    "homeTeam": "France",
    "awayTeam": "Senegal",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 101,
    "stage": "R32",
    "homeTeam": "USA",
    "awayTeam": "Ecuador",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 102,
    "stage": "R32",
    "homeTeam": "Morocco",
    "awayTeam": "Japan",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 103,
    "stage": "R32",
    "homeTeam": "Brazil",
    "awayTeam": "Croatia",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 104,
    "stage": "R32",
    "homeTeam": "Spain",
    "awayTeam": "Uruguay",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 105,
    "stage": "R32",
    "homeTeam": "Italy",
    "awayTeam": "Sweden",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 106,
    "stage": "R32",
    "homeTeam": "Belgium",
    "awayTeam": "Denmark",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 107,
    "stage": "R32",
    "homeTeam": "Portugal",
    "awayTeam": "Serbia",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 108,
    "stage": "R32",
    "homeTeam": "England",
    "awayTeam": "South Korea",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 109,
    "stage": "R32",
    "homeTeam": "Germany",
    "awayTeam": "Cameroon",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 110,
    "stage": "R32",
    "homeTeam": "Norway",
    "awayTeam": "Canada",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 111,
    "stage": "R32",
    "homeTeam": "Netherlands",
    "awayTeam": "Wales",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 112,
    "stage": "R32",
    "homeTeam": "Argentina",
    "awayTeam": "Nigeria",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 113,
    "stage": "R32",
    "homeTeam": "Mexico",
    "awayTeam": "Poland",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 114,
    "stage": "R32",
    "homeTeam": "Switzerland",
    "awayTeam": "Ghana",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 115,
    "stage": "R32",
    "homeTeam": "Colombia",
    "awayTeam": "Chile",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 1, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 200,
    "stage": "R16",
    "homeTeam": "France",
    "awayTeam": "USA",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 5, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 201,
    "stage": "R16",
    "homeTeam": "Morocco",
    "awayTeam": "Brazil",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 5, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 202,
    "stage": "R16",
    "homeTeam": "Spain",
    "awayTeam": "Italy",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 5, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 203,
    "stage": "R16",
    "homeTeam": "Belgium",
    "awayTeam": "Portugal",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 5, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 204,
    "stage": "R16",
    "homeTeam": "England",
    "awayTeam": "Germany",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 5, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 205,
    "stage": "R16",
    "homeTeam": "Norway",
    "awayTeam": "Netherlands",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 5, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 206,
    "stage": "R16",
    "homeTeam": "Argentina",
    "awayTeam": "Mexico",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 5, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 207,
    "stage": "R16",
    "homeTeam": "Switzerland",
    "awayTeam": "Colombia",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "⚽",
    "awayLogo": "⚽",
    "status": "FT",
    "minute": 90,
    "date": "July 5, 2026",
    "venue": "USA",
    "referee": "FIFA Ref"
  },
  {
    "id": 301,
    "stage": "QF",
    "homeTeam": "France",
    "awayTeam": "Morocco",
    "homeScore": 2,
    "awayScore": 0,
    "homeLogo": "🇫🇷",
    "awayLogo": "🇲🇦",
    "status": "FT",
    "minute": 90,
    "date": "July 9, 2026",
    "venue": "Gillette Stadium, Boston, USA",
    "referee": "João Pinheiro (Portugal)"
  },
  {
    "id": 302,
    "stage": "QF",
    "homeTeam": "Spain",
    "awayTeam": "Belgium",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "🇪🇸",
    "awayLogo": "🇧🇪",
    "status": "FT",
    "minute": 90,
    "date": "July 10, 2026",
    "venue": "SoFi Stadium, Los Angeles, USA",
    "referee": "Danny Makkelie (Netherlands)"
  },
  {
    "id": 303,
    "stage": "QF",
    "homeTeam": "England",
    "awayTeam": "Norway",
    "homeScore": 2,
    "awayScore": 1,
    "homeLogo": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "awayLogo": "🇳🇴",
    "status": "FT",
    "minute": 120,
    "date": "July 11, 2026",
    "venue": "Hard Rock Stadium, Miami, USA",
    "referee": "Valenzuela Jesus (Venezuela)"
  },
  {
    "id": 304,
    "stage": "QF",
    "homeTeam": "Argentina",
    "awayTeam": "Switzerland",
    "homeScore": 3,
    "awayScore": 1,
    "homeLogo": "🇦🇷",
    "awayLogo": "🇨🇭",
    "status": "FT",
    "minute": 120,
    "date": "July 11, 2026",
    "venue": "Arrowhead Stadium, Kansas City, USA",
    "referee": "Szymon Marciniak (Poland)"
  },
  {
    "id": 305,
    "stage": "SF",
    "homeTeam": "France",
    "awayTeam": "Spain",
    "homeScore": 1,
    "awayScore": 2,
    "homeLogo": "🇫🇷",
    "awayLogo": "🇪🇸",
    "status": "FT",
    "minute": 90,
    "date": "July 14, 2026",
    "venue": "AT&T Stadium, Dallas, USA",
    "referee": "Sandro Schärer (Switzerland)"
  },
  {
    "id": 306,
    "stage": "SF",
    "homeTeam": "England",
    "awayTeam": "Argentina",
    "homeScore": 1,
    "awayScore": 2,
    "homeLogo": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "awayLogo": "🇦🇷",
    "status": "FT",
    "minute": 90,
    "date": "July 15, 2026",
    "venue": "Mercedes-Benz Stadium, Atlanta, USA",
    "referee": "Mustapha Ghorbal (Algeria)"
  },
  {
    "id": 401,
    "stage": "Final",
    "homeTeam": "Spain",
    "awayTeam": "Argentina",
    "homeScore": 2,
    "awayScore": 3,
    "homeLogo": "🇪🇸",
    "awayLogo": "🇦🇷",
    "status": "FT",
    "minute": 90,
    "date": "July 19, 2026",
    "venue": "MetLife Stadium, New York, USA",
    "referee": "Szymon Marciniak (Poland)"
  }
];

export const MOCK_REPLAY_EVENTS: Record<number, MatchEvent[]> = {
  "100": [
    {
      "id": "gen-100-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between France and Senegal is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-100-2",
      "minute": 15,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Senegal. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-100-3",
      "minute": 31,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Senegal. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-100-4",
      "minute": 43,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, France. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-100-5",
      "minute": 49,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Senegal in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-100-6",
      "minute": 53,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 1 - 0 Senegal. A fantastic strike by France!",
      "team": "home"
    },
    {
      "id": "gen-100-7",
      "minute": 57,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 2 - 0 Senegal. A fantastic strike by France!",
      "team": "home"
    },
    {
      "id": "gen-100-8",
      "minute": 68,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Senegal. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-100-9",
      "minute": 77,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, France. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-100-10",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! France 2 - 0 Senegal",
      "team": "neutral"
    }
  ],
  "101": [
    {
      "id": "gen-101-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between USA and Ecuador is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-101-2",
      "minute": 30,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by USA in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-101-3",
      "minute": 38,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, USA. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-101-4",
      "minute": 44,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! USA 1 - 0 Ecuador. A fantastic strike by USA!",
      "team": "home"
    },
    {
      "id": "gen-101-5",
      "minute": 54,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! USA 2 - 0 Ecuador. A fantastic strike by USA!",
      "team": "home"
    },
    {
      "id": "gen-101-6",
      "minute": 68,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Ecuador. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-101-7",
      "minute": 78,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, USA. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-101-8",
      "minute": 86,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from USA is cautioned for a late challenge.",
      "team": "home"
    },
    {
      "id": "gen-101-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! USA 2 - 0 Ecuador",
      "team": "neutral"
    }
  ],
  "102": [
    {
      "id": "gen-102-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Morocco and Japan is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-102-2",
      "minute": 19,
      "type": "CARD_RED",
      "isOfficiating": true,
      "text": "Red Card! A shocking challenge by Morocco results in a straight red!",
      "team": "home"
    },
    {
      "id": "gen-102-3",
      "minute": 32,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Japan is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-102-4",
      "minute": 42,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Morocco in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-102-5",
      "minute": 43,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Morocco 1 - 0 Japan. A fantastic strike by Morocco!",
      "team": "home"
    },
    {
      "id": "gen-102-6",
      "minute": 61,
      "type": "CARD_RED",
      "isOfficiating": true,
      "text": "Red Card! A shocking challenge by Morocco results in a straight red!",
      "team": "home"
    },
    {
      "id": "gen-102-7",
      "minute": 77,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Japan. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-102-8",
      "minute": 82,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Morocco 2 - 0 Japan. Late drama as Morocco scores!",
      "team": "home"
    },
    {
      "id": "gen-102-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Morocco 2 - 0 Japan",
      "team": "neutral"
    }
  ],
  "103": [
    {
      "id": "gen-103-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Brazil and Croatia is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-103-2",
      "minute": 19,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Croatia is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-103-3",
      "minute": 33,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Croatia. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-103-4",
      "minute": 42,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Brazil 1 - 0 Croatia. A fantastic strike by Brazil!",
      "team": "home"
    },
    {
      "id": "gen-103-5",
      "minute": 48,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Brazil is cautioned for a late challenge.",
      "team": "home"
    },
    {
      "id": "gen-103-6",
      "minute": 58,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Brazil 2 - 0 Croatia. A fantastic strike by Brazil!",
      "team": "home"
    },
    {
      "id": "gen-103-7",
      "minute": 69,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Croatia is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-103-8",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Brazil 2 - 0 Croatia",
      "team": "neutral"
    }
  ],
  "104": [
    {
      "id": "gen-104-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Spain and Uruguay is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-104-2",
      "minute": 20,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Uruguay. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-104-3",
      "minute": 28,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Uruguay is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-104-4",
      "minute": 34,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Spain. Decision: Play on.",
      "team": "home"
    },
    {
      "id": "gen-104-5",
      "minute": 37,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 1 - 0 Uruguay. A fantastic strike by Spain!",
      "team": "home"
    },
    {
      "id": "gen-104-6",
      "minute": 48,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 2 - 0 Uruguay. A fantastic strike by Spain!",
      "team": "home"
    },
    {
      "id": "gen-104-7",
      "minute": 60,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Spain in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-104-8",
      "minute": 77,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Uruguay. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-104-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Spain 2 - 0 Uruguay",
      "team": "neutral"
    }
  ],
  "105": [
    {
      "id": "gen-105-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Italy and Sweden is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-105-2",
      "minute": 12,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Sweden in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-105-3",
      "minute": 15,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Italy 1 - 0 Sweden. A fantastic strike by Italy!",
      "team": "home"
    },
    {
      "id": "gen-105-4",
      "minute": 29,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Sweden. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-105-5",
      "minute": 46,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Italy. Decision: Play on.",
      "team": "home"
    },
    {
      "id": "gen-105-6",
      "minute": 63,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Italy. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-105-7",
      "minute": 73,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Italy. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-105-8",
      "minute": 82,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Italy 2 - 0 Sweden. A fantastic strike by Italy!",
      "team": "home"
    },
    {
      "id": "gen-105-9",
      "minute": 88,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Italy in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-105-10",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Italy 2 - 0 Sweden",
      "team": "neutral"
    }
  ],
  "106": [
    {
      "id": "gen-106-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Belgium and Denmark is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-106-2",
      "minute": 18,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Denmark in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-106-3",
      "minute": 31,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Belgium. Decision: Play on.",
      "team": "home"
    },
    {
      "id": "gen-106-4",
      "minute": 41,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Denmark in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-106-5",
      "minute": 43,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Belgium 1 - 0 Denmark. A fantastic strike by Belgium!",
      "team": "home"
    },
    {
      "id": "gen-106-6",
      "minute": 53,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Belgium. Decision: Play on.",
      "team": "home"
    },
    {
      "id": "gen-106-7",
      "minute": 59,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Belgium 2 - 0 Denmark. A fantastic strike by Belgium!",
      "team": "home"
    },
    {
      "id": "gen-106-8",
      "minute": 69,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Denmark. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-106-9",
      "minute": 80,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Denmark. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-106-10",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Belgium 2 - 0 Denmark",
      "team": "neutral"
    }
  ],
  "107": [
    {
      "id": "gen-107-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Portugal and Serbia is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-107-2",
      "minute": 6,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Portugal 1 - 0 Serbia. A fantastic strike by Portugal!",
      "team": "home"
    },
    {
      "id": "gen-107-3",
      "minute": 21,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Portugal is cautioned for a late challenge.",
      "team": "home"
    },
    {
      "id": "gen-107-4",
      "minute": 35,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Portugal is cautioned for a late challenge.",
      "team": "home"
    },
    {
      "id": "gen-107-5",
      "minute": 52,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Serbia. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-107-6",
      "minute": 66,
      "type": "CARD_RED",
      "isOfficiating": true,
      "text": "Red Card! A shocking challenge by Portugal results in a straight red!",
      "team": "home"
    },
    {
      "id": "gen-107-7",
      "minute": 75,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Serbia. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-107-8",
      "minute": 79,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Portugal 2 - 0 Serbia. Late drama as Portugal scores!",
      "team": "home"
    },
    {
      "id": "gen-107-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Portugal 2 - 0 Serbia",
      "team": "neutral"
    }
  ],
  "108": [
    {
      "id": "gen-108-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between England and South Korea is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-108-2",
      "minute": 21,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from South Korea is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-108-3",
      "minute": 25,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 1 - 0 South Korea. A fantastic strike by England!",
      "team": "home"
    },
    {
      "id": "gen-108-4",
      "minute": 33,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for England. Decision: Play on.",
      "team": "home"
    },
    {
      "id": "gen-108-5",
      "minute": 38,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 2 - 0 South Korea. A fantastic strike by England!",
      "team": "home"
    },
    {
      "id": "gen-108-6",
      "minute": 74,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from South Korea is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-108-7",
      "minute": 83,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from South Korea is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-108-8",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! England 2 - 0 South Korea",
      "team": "neutral"
    }
  ],
  "109": [
    {
      "id": "gen-109-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Germany and Cameroon is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-109-2",
      "minute": 24,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Germany. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-109-3",
      "minute": 35,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Germany. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-109-4",
      "minute": 40,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Germany. Decision: Play on.",
      "team": "home"
    },
    {
      "id": "gen-109-5",
      "minute": 51,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Germany 1 - 0 Cameroon. A fantastic strike by Germany!",
      "team": "home"
    },
    {
      "id": "gen-109-6",
      "minute": 57,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Germany 2 - 0 Cameroon. A fantastic strike by Germany!",
      "team": "home"
    },
    {
      "id": "gen-109-7",
      "minute": 75,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Cameroon in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-109-8",
      "minute": 86,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Germany. Decision: Play on.",
      "team": "home"
    },
    {
      "id": "gen-109-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Germany 2 - 0 Cameroon",
      "team": "neutral"
    }
  ],
  "110": [
    {
      "id": "gen-110-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Norway and Canada is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-110-2",
      "minute": 23,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Canada is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-110-3",
      "minute": 32,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Norway 1 - 0 Canada. A fantastic strike by Norway!",
      "team": "home"
    },
    {
      "id": "gen-110-4",
      "minute": 50,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Norway is cautioned for a late challenge.",
      "team": "home"
    },
    {
      "id": "gen-110-5",
      "minute": 62,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Norway in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-110-6",
      "minute": 69,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Norway in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-110-7",
      "minute": 71,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Norway 2 - 0 Canada. A fantastic strike by Norway!",
      "team": "home"
    },
    {
      "id": "gen-110-8",
      "minute": 88,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Canada is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-110-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Norway 2 - 0 Canada",
      "team": "neutral"
    }
  ],
  "111": [
    {
      "id": "gen-111-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Netherlands and Wales is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-111-2",
      "minute": 6,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Netherlands 1 - 0 Wales. A fantastic strike by Netherlands!",
      "team": "home"
    },
    {
      "id": "gen-111-3",
      "minute": 37,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Wales. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-111-4",
      "minute": 56,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Wales. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-111-5",
      "minute": 59,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Netherlands 2 - 0 Wales. A fantastic strike by Netherlands!",
      "team": "home"
    },
    {
      "id": "gen-111-6",
      "minute": 79,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Netherlands. Decision: Play on.",
      "team": "home"
    },
    {
      "id": "gen-111-7",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Netherlands 2 - 0 Wales",
      "team": "neutral"
    }
  ],
  "112": [
    {
      "id": "gen-112-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Argentina and Nigeria is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-112-2",
      "minute": 23,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Argentina. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-112-3",
      "minute": 31,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Nigeria. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-112-4",
      "minute": 45,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Nigeria is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-112-5",
      "minute": 52,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Argentina 1 - 0 Nigeria. A fantastic strike by Argentina!",
      "team": "home"
    },
    {
      "id": "gen-112-6",
      "minute": 63,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Nigeria in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-112-7",
      "minute": 79,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Nigeria in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-112-8",
      "minute": 81,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Argentina 2 - 0 Nigeria. A fantastic strike by Argentina!",
      "team": "home"
    },
    {
      "id": "gen-112-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Argentina 2 - 0 Nigeria",
      "team": "neutral"
    }
  ],
  "113": [
    {
      "id": "gen-113-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Mexico and Poland is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-113-2",
      "minute": 20,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Mexico in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-113-3",
      "minute": 31,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Mexico 1 - 0 Poland. A fantastic strike by Mexico!",
      "team": "home"
    },
    {
      "id": "gen-113-4",
      "minute": 40,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Mexico. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-113-5",
      "minute": 43,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Mexico 2 - 0 Poland. A fantastic strike by Mexico!",
      "team": "home"
    },
    {
      "id": "gen-113-6",
      "minute": 84,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Poland. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-113-7",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Mexico 2 - 0 Poland",
      "team": "neutral"
    }
  ],
  "114": [
    {
      "id": "gen-114-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Switzerland and Ghana is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-114-2",
      "minute": 19,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Ghana is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-114-3",
      "minute": 38,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Switzerland. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-114-4",
      "minute": 39,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Switzerland 1 - 0 Ghana. A fantastic strike by Switzerland!",
      "team": "home"
    },
    {
      "id": "gen-114-5",
      "minute": 63,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Ghana. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-114-6",
      "minute": 72,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Switzerland 2 - 0 Ghana. A fantastic strike by Switzerland!",
      "team": "home"
    },
    {
      "id": "gen-114-7",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Switzerland 2 - 0 Ghana",
      "team": "neutral"
    }
  ],
  "115": [
    {
      "id": "gen-115-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Colombia and Chile is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-115-2",
      "minute": 14,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Chile. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-115-3",
      "minute": 20,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Colombia in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-115-4",
      "minute": 37,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Colombia 1 - 0 Chile. A fantastic strike by Colombia!",
      "team": "home"
    },
    {
      "id": "gen-115-5",
      "minute": 37,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Colombia 2 - 0 Chile. A fantastic strike by Colombia!",
      "team": "home"
    },
    {
      "id": "gen-115-6",
      "minute": 62,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Colombia. Decision: Play on.",
      "team": "home"
    },
    {
      "id": "gen-115-7",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Colombia 2 - 0 Chile",
      "team": "neutral"
    }
  ],
  "200": [
    {
      "id": "gen-200-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between France and USA is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-200-2",
      "minute": 14,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, France. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-200-3",
      "minute": 33,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, USA. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-200-4",
      "minute": 35,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 1 - 0 USA. A fantastic strike by France!",
      "team": "home"
    },
    {
      "id": "gen-200-5",
      "minute": 50,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 2 - 0 USA. A fantastic strike by France!",
      "team": "home"
    },
    {
      "id": "gen-200-6",
      "minute": 60,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, France. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-200-7",
      "minute": 63,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 2 - 1 USA. A fantastic strike by USA!",
      "team": "away"
    },
    {
      "id": "gen-200-8",
      "minute": 81,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, USA. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-200-9",
      "minute": 86,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for USA. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-200-10",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! France 2 - 1 USA",
      "team": "neutral"
    }
  ],
  "201": [
    {
      "id": "gen-201-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Morocco and Brazil is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-201-2",
      "minute": 8,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Morocco 1 - 0 Brazil. A fantastic strike by Morocco!",
      "team": "home"
    },
    {
      "id": "gen-201-3",
      "minute": 25,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Brazil. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-201-4",
      "minute": 43,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Brazil. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-201-5",
      "minute": 47,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Morocco 2 - 0 Brazil. A fantastic strike by Morocco!",
      "team": "home"
    },
    {
      "id": "gen-201-6",
      "minute": 60,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Morocco 2 - 1 Brazil. A fantastic strike by Brazil!",
      "team": "away"
    },
    {
      "id": "gen-201-7",
      "minute": 69,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Brazil. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-201-8",
      "minute": 76,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Morocco. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-201-9",
      "minute": 89,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Brazil. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-201-10",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Morocco 2 - 1 Brazil",
      "team": "neutral"
    }
  ],
  "202": [
    {
      "id": "gen-202-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Spain and Italy is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-202-2",
      "minute": 11,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Italy. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-202-3",
      "minute": 18,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 1 - 0 Italy. A fantastic strike by Spain!",
      "team": "home"
    },
    {
      "id": "gen-202-4",
      "minute": 27,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Italy. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-202-5",
      "minute": 46,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Italy. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-202-6",
      "minute": 57,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 2 - 0 Italy. A fantastic strike by Spain!",
      "team": "home"
    },
    {
      "id": "gen-202-7",
      "minute": 66,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 2 - 1 Italy. A fantastic strike by Italy!",
      "team": "away"
    },
    {
      "id": "gen-202-8",
      "minute": 72,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Italy. The flag goes up as the attacker mistimes their run.",
      "team": "away"
    },
    {
      "id": "gen-202-9",
      "minute": 87,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Italy in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-202-10",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Spain 2 - 1 Italy",
      "team": "neutral"
    }
  ],
  "203": [
    {
      "id": "gen-203-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Belgium and Portugal is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-203-2",
      "minute": 11,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Belgium 1 - 0 Portugal. A fantastic strike by Belgium!",
      "team": "home"
    },
    {
      "id": "gen-203-3",
      "minute": 20,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Belgium 2 - 0 Portugal. A fantastic strike by Belgium!",
      "team": "home"
    },
    {
      "id": "gen-203-4",
      "minute": 34,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Portugal in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-203-5",
      "minute": 48,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Portugal is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-203-6",
      "minute": 61,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Belgium in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-203-7",
      "minute": 65,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Belgium 2 - 1 Portugal. A fantastic strike by Portugal!",
      "team": "away"
    },
    {
      "id": "gen-203-8",
      "minute": 85,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Belgium. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-203-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Belgium 2 - 1 Portugal",
      "team": "neutral"
    }
  ],
  "204": [
    {
      "id": "gen-204-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between England and Germany is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-204-2",
      "minute": 22,
      "type": "CARD_RED",
      "isOfficiating": true,
      "text": "Red Card! A shocking challenge by England results in a straight red!",
      "team": "home"
    },
    {
      "id": "gen-204-3",
      "minute": 35,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, England. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-204-4",
      "minute": 41,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 1 - 0 Germany. A fantastic strike by England!",
      "team": "home"
    },
    {
      "id": "gen-204-5",
      "minute": 42,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 2 - 0 Germany. A fantastic strike by England!",
      "team": "home"
    },
    {
      "id": "gen-204-6",
      "minute": 58,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review: Checking for a potential penalty for Germany. Decision: Play on.",
      "team": "away"
    },
    {
      "id": "gen-204-7",
      "minute": 65,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 2 - 1 Germany. A fantastic strike by Germany!",
      "team": "away"
    },
    {
      "id": "gen-204-8",
      "minute": 85,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Germany in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-204-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! England 2 - 1 Germany",
      "team": "neutral"
    }
  ],
  "205": [
    {
      "id": "gen-205-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Norway and Netherlands is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-205-2",
      "minute": 11,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Netherlands. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-205-3",
      "minute": 32,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Norway 1 - 0 Netherlands. A fantastic strike by Norway!",
      "team": "home"
    },
    {
      "id": "gen-205-4",
      "minute": 40,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Norway 2 - 0 Netherlands. A fantastic strike by Norway!",
      "team": "home"
    },
    {
      "id": "gen-205-5",
      "minute": 54,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Netherlands. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-205-6",
      "minute": 66,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Norway in the midfield. Free kick awarded.",
      "team": "home"
    },
    {
      "id": "gen-205-7",
      "minute": 71,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Norway. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-205-8",
      "minute": 81,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Norway 2 - 1 Netherlands. A fantastic strike by Netherlands!",
      "team": "away"
    },
    {
      "id": "gen-205-9",
      "minute": 87,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Norway. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-205-10",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Norway 2 - 1 Netherlands",
      "team": "neutral"
    }
  ],
  "206": [
    {
      "id": "gen-206-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Argentina and Mexico is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-206-2",
      "minute": 12,
      "type": "CARD_RED",
      "isOfficiating": true,
      "text": "Red Card! A shocking challenge by Argentina results in a straight red!",
      "team": "home"
    },
    {
      "id": "gen-206-3",
      "minute": 18,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Argentina 1 - 0 Mexico. A fantastic strike by Argentina!",
      "team": "home"
    },
    {
      "id": "gen-206-4",
      "minute": 24,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Argentina is cautioned for a late challenge.",
      "team": "home"
    },
    {
      "id": "gen-206-5",
      "minute": 36,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Mexico. Tactical change to bring on fresh legs.",
      "team": "away"
    },
    {
      "id": "gen-206-6",
      "minute": 52,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Argentina. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-206-7",
      "minute": 61,
      "type": "SUBSTITUTION",
      "isOfficiating": false,
      "text": "Substitution, Argentina. Tactical change to bring on fresh legs.",
      "team": "home"
    },
    {
      "id": "gen-206-8",
      "minute": 73,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Argentina 2 - 0 Mexico. A fantastic strike by Argentina!",
      "team": "home"
    },
    {
      "id": "gen-206-9",
      "minute": 83,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Argentina 2 - 1 Mexico. A fantastic strike by Mexico!",
      "team": "away"
    },
    {
      "id": "gen-206-10",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Argentina 2 - 1 Mexico",
      "team": "neutral"
    }
  ],
  "207": [
    {
      "id": "gen-207-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match between Switzerland and Colombia is underway at USA.",
      "team": "neutral"
    },
    {
      "id": "gen-207-2",
      "minute": 6,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Switzerland 1 - 0 Colombia. A fantastic strike by Switzerland!",
      "team": "home"
    },
    {
      "id": "gen-207-3",
      "minute": 23,
      "type": "FOUL",
      "isOfficiating": false,
      "text": "Foul by Colombia in the midfield. Free kick awarded.",
      "team": "away"
    },
    {
      "id": "gen-207-4",
      "minute": 39,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Colombia is cautioned for a late challenge.",
      "team": "away"
    },
    {
      "id": "gen-207-5",
      "minute": 52,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Switzerland 2 - 0 Colombia. A fantastic strike by Switzerland!",
      "team": "home"
    },
    {
      "id": "gen-207-6",
      "minute": 66,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: A player from Switzerland is cautioned for a late challenge.",
      "team": "home"
    },
    {
      "id": "gen-207-7",
      "minute": 72,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Switzerland 2 - 1 Colombia. A fantastic strike by Colombia!",
      "team": "away"
    },
    {
      "id": "gen-207-8",
      "minute": 86,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, Switzerland. The flag goes up as the attacker mistimes their run.",
      "team": "home"
    },
    {
      "id": "gen-207-9",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Switzerland 2 - 1 Colombia",
      "team": "neutral"
    }
  ],
  "301": [
    {
      "id": "fm-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! The match is underway in Boston.",
      "team": "neutral"
    },
    {
      "id": "fm-2",
      "minute": 22,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: Hakimi cautioned for a slide tackle from behind on Mbappe.",
      "team": "away"
    },
    {
      "id": "fm-3",
      "minute": 60,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 1 - 0 Morocco. Kylian Mbappe scores with a clinical near-post finish.",
      "team": "home"
    },
    {
      "id": "fm-4",
      "minute": 66,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 2 - 0 Morocco. Ousmane Dembele doubles the lead from close range.",
      "team": "home"
    },
    {
      "id": "fm-5",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! France advances to the Semi-Finals.",
      "team": "neutral"
    }
  ],
  "302": [
    {
      "id": "sb-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off at SoFi Stadium!",
      "team": "neutral"
    },
    {
      "id": "sb-2",
      "minute": 30,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 1 - 0 Belgium. Fabian Ruiz opens the scoring with a brilliant volley.",
      "team": "home"
    },
    {
      "id": "sb-3",
      "minute": 41,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 1 - 1 Belgium. Charles De Ketelaere equalizes with a header.",
      "team": "away"
    },
    {
      "id": "sb-4",
      "minute": 73,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: Witsel booked for a tactical pull on Dani Olmo.",
      "team": "away"
    },
    {
      "id": "sb-5",
      "minute": 88,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 2 - 1 Belgium. Mikel Merino scores the late winner!",
      "team": "home"
    },
    {
      "id": "sb-6",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Spain goes through to play France.",
      "team": "neutral"
    }
  ],
  "303": [
    {
      "id": "en-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! England vs Norway under high humidity in Miami.",
      "team": "neutral"
    },
    {
      "id": "en-2",
      "minute": 36,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 0 - 1 Norway. Andreas Schjelderup slots it past Pickford.",
      "team": "away"
    },
    {
      "id": "en-3",
      "minute": 45,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 1 - 1 Norway. Jude Bellingham scoring a diving header in stoppage time.",
      "team": "home"
    },
    {
      "id": "en-4",
      "minute": 78,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: Ajer cautioned for time-wasting.",
      "team": "away"
    },
    {
      "id": "en-5",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Regulation time ends. We go to Extra Time.",
      "team": "neutral"
    },
    {
      "id": "en-6",
      "minute": 93,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 2 - 1 Norway. Jude Bellingham fires home a loose rebound!",
      "team": "home"
    },
    {
      "id": "en-7",
      "minute": 120,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time in Extra Time! England progresses to the Semi-Finals.",
      "team": "neutral"
    }
  ],
  "304": [
    {
      "id": "as-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off at Kansas City Stadium!",
      "team": "neutral"
    },
    {
      "id": "as-2",
      "minute": 10,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Argentina 1 - 0 Switzerland. Alexis Mac Allister strikes early.",
      "team": "home"
    },
    {
      "id": "as-3",
      "minute": 44,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: Breel Embolo cautioned for a tactical foul breaking a counters.",
      "team": "away"
    },
    {
      "id": "as-4",
      "minute": 67,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Argentina 1 - 1 Switzerland. Dan Ndoye scores a fine equalizer.",
      "team": "away"
    },
    {
      "id": "as-5",
      "minute": 72,
      "type": "CARD_RED",
      "isOfficiating": true,
      "text": "VAR Review - Red Card: Breel Embolo is shown a second yellow card for simulation (diving) trying to win a penalty against Paredes.",
      "team": "away"
    },
    {
      "id": "as-6",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Regulation ends 1-1. Extra Time starts.",
      "team": "neutral"
    },
    {
      "id": "as-7",
      "minute": 112,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Argentina 2 - 1 Switzerland. Julian Alvarez breaks Swiss hearts with a smart finish!",
      "team": "home"
    },
    {
      "id": "as-8",
      "minute": 120,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Argentina 3 - 1 Switzerland. Lautaro Martinez scores in counter-attack.",
      "team": "home"
    },
    {
      "id": "as-9",
      "minute": 121,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! 10-man Switzerland is knocked out 3-1 by Argentina.",
      "team": "neutral"
    }
  ],
  "305": [
    {
      "id": "sf1-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! France vs Spain at AT&T Stadium.",
      "team": "neutral"
    },
    {
      "id": "sf1-2",
      "minute": 24,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 1 - 0 Spain. Kylian Mbappé scores a brilliant solo goal!",
      "team": "home"
    },
    {
      "id": "sf1-3",
      "minute": 42,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: Tchouaméni cautioned for a tactical foul on Lamine Yamal.",
      "team": "home"
    },
    {
      "id": "sf1-4",
      "minute": 55,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review - Penalty Check: Potential handball by Upamecano in the French penalty box. Verdict: Penalty awarded to Spain!",
      "team": "away"
    },
    {
      "id": "sf1-5",
      "minute": 56,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 1 - 1 Spain. Rodri converts the penalty cleanly into the bottom corner.",
      "team": "away"
    },
    {
      "id": "sf1-6",
      "minute": 78,
      "type": "OFFSIDE",
      "isOfficiating": true,
      "text": "Offside, France. Mbappé is caught just offside on a through ball from Griezmann.",
      "team": "home"
    },
    {
      "id": "sf1-7",
      "minute": 86,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! France 1 - 2 Spain. Lamine Yamal curls a beautiful shot into the top corner from outside the box!",
      "team": "away"
    },
    {
      "id": "sf1-8",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Spain defeats France 2-1 to reach the World Cup Final!",
      "team": "neutral"
    }
  ],
  "306": [
    {
      "id": "sf2-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! England vs Argentina at Mercedes-Benz Stadium.",
      "team": "neutral"
    },
    {
      "id": "sf2-2",
      "minute": 18,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: Otamendi cautioned for a heavy challenge on Harry Kane.",
      "team": "away"
    },
    {
      "id": "sf2-3",
      "minute": 33,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 1 - 0 Argentina. Bukayo Saka taps in a cross from Trippier.",
      "team": "home"
    },
    {
      "id": "sf2-4",
      "minute": 62,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review - Offside Check: Lionel Messi feeds Lautaro Martinez who scores. VAR confirms Martinez was onside. Goal stands!",
      "team": "away"
    },
    {
      "id": "sf2-5",
      "minute": 63,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 1 - 1 Argentina. Lautaro Martinez scores the equalizer!",
      "team": "away"
    },
    {
      "id": "sf2-6",
      "minute": 82,
      "type": "CARD_RED",
      "isOfficiating": true,
      "text": "Red Card: Declan Rice receives a straight red card for a serious foul tackle on Mac Allister.",
      "team": "home"
    },
    {
      "id": "sf2-7",
      "minute": 89,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! England 1 - 2 Argentina. Lionel Messi scores a signature free kick to win it for Argentina!",
      "team": "away"
    },
    {
      "id": "sf2-8",
      "minute": 90,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! 10-man England is knocked out by Argentina 2-1.",
      "team": "neutral"
    }
  ],
  "401": [
    {
      "id": "f-1",
      "minute": 0,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Kick-off! Spain vs Argentina - The FIFA World Cup 2026 Final!",
      "team": "neutral"
    },
    {
      "id": "f-2",
      "minute": 12,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 0 - 1 Argentina. Julian Alvarez scores early from a Messi assist.",
      "team": "away"
    },
    {
      "id": "f-3",
      "minute": 35,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 1 - 1 Argentina. Nico Williams equalizes with a powerful low drive.",
      "team": "home"
    },
    {
      "id": "f-4",
      "minute": 55,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review - Penalty Check: Lamine Yamal falls inside the box under Romero's challenge. Verdict: Penalty to Spain!",
      "team": "home"
    },
    {
      "id": "f-5",
      "minute": 56,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 2 - 1 Argentina. Dani Olmo converts the penalty to put Spain ahead!",
      "team": "home"
    },
    {
      "id": "f-6",
      "minute": 72,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 2 - 2 Argentina. Lionel Messi scores from a rebounding shot!",
      "team": "away"
    },
    {
      "id": "f-7",
      "minute": 85,
      "type": "CARD_YELLOW",
      "isOfficiating": true,
      "text": "Yellow Card: Rodrigo De Paul cautioned for tactical foul in midfield.",
      "team": "away"
    },
    {
      "id": "f-8",
      "minute": 89,
      "type": "VAR_CHECK",
      "isOfficiating": true,
      "text": "VAR Review - Offside Check: Lautaro Martinez scores in the 89th minute. VAR check confirms he was onside. Goal stands!",
      "team": "away"
    },
    {
      "id": "f-9",
      "minute": 90,
      "type": "GOAL",
      "isOfficiating": false,
      "text": "GOAL! Spain 2 - 3 Argentina. Lautaro Martinez scores what could be the World Cup winning goal!",
      "team": "away"
    },
    {
      "id": "f-10",
      "minute": 95,
      "type": "WHISTLE",
      "isOfficiating": false,
      "text": "Full-time! Argentina are the FIFA World Cup 2026 Champions, winning 3-2!",
      "team": "neutral"
    }
  ]
};
