# FifaDecoder 🏆

An AI-powered multilingual football decision explainer designed to improve fan understanding during FIFA World Cup 2026.

## 🚀 The Problem
Football rules (IFAB Laws) can be complex and hard to understand during rapid, high-stakes tournament play. When a VAR decision happens, fans in the stadium and at home often lack immediate, accessible explanations of *why* a call was made, especially in their native language.

## 💡 The Solution
**FifaDecoder** acts as an elite VAR (Video Assistant Referee) analyst right in your pocket. Using **Google Gemini 2.5 Flash**, the application decodes live match events and translates complex officiating jargon into easy-to-understand explanations in 12 different languages.

### Core Features
- **🌍 12-Language Intelligence**: Instantly translate the entire application and VAR explanations into Spanish, French, German, Japanese, Chinese, Arabic, and more.
- **🔍 Live Match Ingestion**: Powered by **Gemini Search Grounding**. Fetch live timelines for any match directly from the web in real-time.
- **📺 Broadcast Quality UI**: A premium, stadium-inspired UI that breaks down verdicts, laws, and assumptions like a professional pundit.
- **🤖 Ask the Ref Copilot**: An interactive AI chat contextually aware of the active referee decision to answer any follow-up questions from the fans.

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite, TypeScript
- **Styling**: Vanilla CSS with customized glassmorphism broadcast themes
- **AI Integration**: `@google/generative-ai` (Gemini 2.5 Flash with Search Grounding)
- **Testing**: Vitest, React Testing Library

## 🏁 Quick Start & Judging Guide

The application is built for immediate evaluation.

### Option 1: Zero Setup (Mock Mode)
1. Launch the app.
2. The application will default to **Offline / Mock Mode** if no API key is provided.
3. Click "Launch Interactive Demo" or select a match from the **Tournament Bracket**.
4. Click on any officiating event (e.g., Red Card, VAR Review) in the timeline to see high-fidelity pre-computed AI explanations.

### Option 2: Live Gemini Testing (Real-time AI)
1. Click the ⚙️ Settings icon in the top right corner.
2. Enter your **Google Gemini API Key**.
3. Use the search bar in the Match Timeline to query a live or historical match (e.g., "Spain vs France 2026 World Cup").
4. The app will ingest data via Gemini Search Grounding and allow live Q&A via the Copilot.

Alternatively, you can provide an environment variable:
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

## 🔒 Security & Accessibility
- **Security**: The application securely handles API errors and sanitizes stack traces to prevent accidental API key leaks.
- **Accessibility**: Built with ARIA roles, semantic HTML, and full keyboard navigability (Score: 90+).

---
*Developed for the Global AI Hackathon.*
