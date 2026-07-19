# Architecture Overview

## Project Structure
FifaDecoder is a React 18 single-page application built with Vite and TypeScript. 

The application architecture is divided into the following layers:

### 1. View Layer (`src/components/`)
Contains all React components. State is primarily managed at the top level (`App.tsx`) and passed down via props. 

- `Header.tsx`: Global navigation, multilingual toggles, and API status indicator.
- `Instructions.tsx`: The primary landing and onboarding experience.
- `TournamentBracket.tsx`: A visual representation of the knockout stages.
- `MatchControls.tsx` & `EventTimeline.tsx`: Handles match selection, real-time fetching logic triggers, and displaying the minute-by-minute action.
- `DecisionRoom.tsx` & `ChatInterface.tsx`: The core AI decoding UI where VAR explanations and follow-up Q&A take place.

### 2. Service Layer (`src/services/`)
Encapsulates all external dependencies and data fetching.

- `gemini.ts`: Central hub for all interactions with the Google Generative AI API (`@google/generative-ai`).
  - Implements **Gemini Search Grounding** to query the live web for match events.
  - Implements structured JSON output parsing for the decision explainer.
  - Contains robust error handling and API key sanitization to prevent leaks (`parseGeminiError`).
- `matchFeed.ts`: Contains static bracket data, mock events, and types for Fixtures.
- `i18n.ts`: A lightweight translation lookup for UI elements to support the 12-language requirement.

### 3. Testing Layer (`src/**/*.test.ts`)
- Configured with `Vitest` and `React Testing Library`.
- Tests ensure the integrity of the API error handling (security) and UI component behaviors (accessibility/interaction).

## Data Flow: Web Ingestion to UI

1. **User Action**: The user searches for a live match (e.g., "Spain vs Argentina live").
2. **Web Grounding (Gemini)**: The `fetchLiveEventsFromSearch` function calls the Gemini 2.5 Flash model equipped with the `googleSearch` tool.
3. **Data Structuring**: Gemini retrieves the latest web data, translates it to the selected language, and formats it as a strict JSON array of `MatchEvent` objects.
4. **UI Update**: `App.tsx` receives the events and updates the `EventTimeline.tsx`.
5. **AI Decode**: When the user clicks a specific officiating event (like a Red Card), `analyzeAnnouncement` sends the event text to Gemini, which returns a structured breakdown of the IFAB Laws, assumptions, and hand signals.

## Security & State Management
- API Keys are retrieved via Vite Environment variables (`VITE_GEMINI_API_KEY`) or overridden by user input saved in `localStorage`.
- All `localStorage` state initialization runs lazily to prevent hydration mismatches and unnecessary re-renders.
- Raw HTTP errors from the Gemini API are sanitized before being displayed or logged, guaranteeing that query parameters (which contain the API key) are redacted.
