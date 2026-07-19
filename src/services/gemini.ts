import { GoogleGenerativeAI } from '@google/generative-ai';

export interface AnalysisResult {
  verdict: 'RED_CARD' | 'YELLOW_CARD' | 'GREEN_CARD' | 'VAR_REVIEW';
  verdictText: string;
  retrievedFacts: string[];
  aiExplanation: string;
  aiAssumptions: string[];
  lawReference: string;
  handSignal: string;
  suggestedQuestions: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

// Preset Mock Data for Sandbox & Offline Match Replays
const PRESET_MOCK_DATA: Record<string, AnalysisResult> = {
  'var-handball': {
    verdict: 'VAR_REVIEW',
    verdictText: 'PENALTY AWARDED (HANDBALL)',
    retrievedFacts: [
      'Defender Upamecano blocked the shot inside the penalty box.',
      'Ball made contact with Upamecano\'s right arm.',
      'Referee initially let play continue, then paused for VAR check.'
    ],
    aiExplanation: 'The defender blocked the shot with their arm extended away from the body in an unnatural position. Under IFAB Law 12, making the body silhouette unnaturally bigger is a handling offence, regardless of intent.',
    aiAssumptions: [
      'Assumption: The defender did not intentionally strike the ball, but rather was trying to block the shot and failed to pull his arm back in time.',
      'Assumption: Replays showed the ball did not deflect off the defender\'s chest first, which would have negated the penalty.'
    ],
    lawReference: 'IFAB Law 12: Fouls and Misconduct - Handling the Ball',
    handSignal: 'The referee blows the whistle, points to the penalty spot (index finger pointing down), and draws a rectangle in the air to signify the VAR review completion.',
    suggestedQuestions: [
      'Why was this not a red card for denying a goal?',
      'What counts as a "natural body silhouette"?',
      'Can a team appeal a VAR handball decision?'
    ]
  },
  'dogso-red': {
    verdict: 'RED_CARD',
    verdictText: 'RED CARD (DOGSO)',
    retrievedFacts: [
      'Romero tripped Kolo Muani outside the penalty area.',
      'Kolo Muani was clean through on goal with only the goalie to beat.',
      'Referee displayed a straight Red Card.'
    ],
    aiExplanation: 'Denying an Obvious Goal-Scoring Opportunity (DOGSO) outside the penalty area results in a straight red card. Since the foul was committed outside the box, double-jeopardy protection (which reduces a red to yellow if a penalty is awarded) does not apply.',
    aiAssumptions: [
      'Assumption: The referee determined that no other Argentinian defenders had a realistic chance of running back to cover.',
      'Assumption: The distance to goal and the direction of play were directly aligned with the center of the goal.'
    ],
    lawReference: 'IFAB Law 12: Section 3: Disciplinary Action (DOGSO)',
    handSignal: 'Referee blows the whistle, runs to the spot of the foul, and holds up the Red Card high in the air.',
    suggestedQuestions: [
      'What is the "double jeopardy" rule?',
      'What are the 4 criteria required to call DOGSO?',
      'How many matches will the player be suspended for?'
    ]
  },
  'var-offside': {
    verdict: 'GREEN_CARD',
    verdictText: 'GOAL DISALLOWED (OFFSIDE)',
    retrievedFacts: [
      'Mbappe put the ball in the net in the 57th minute.',
      'VAR review checked the build-up phase.',
      'Semi-automated offside technology showed Mbappe\'s shoulder was slightly ahead of the second-last defender.'
    ],
    aiExplanation: 'The goal is disallowed because the attacker was in an offside position at the exact moment the ball was passed to him by his teammate. Any part of the head, body, or feet that is nearer to the opponent\'s goal line than both the ball and the second-last opponent is offside.',
    aiAssumptions: [
      'Assumption: The automated line-drawing system correctly synced the frame of the kick (pass release) with the player positions.',
      'Assumption: The assistant referee purposely delayed raising the flag in accordance with VAR delay protocols.'
    ],
    lawReference: 'IFAB Law 11: Offside - Section 2: Offside Offence',
    handSignal: 'The referee blows the whistle, raises one arm straight up in the air to signal an indirect free kick for the defense.',
    suggestedQuestions: [
      'How does semi-automated offside work?',
      'Can a player be offside from a throw-in?',
      'Why do assistant referees wait to raise the flag?'
    ]
  },
  'simulation-yellow': {
    verdict: 'YELLOW_CARD',
    verdictText: 'YELLOW CARD (SIMULATION)',
    retrievedFacts: [
      'Player fell inside the penalty box.',
      'Referee issued a yellow card for simulation (diving).',
      'VAR checked in the background and did not recommend an On-Field Review.'
    ],
    aiExplanation: 'Attempting to deceive the referee by feigning injury or pretending to have been fouled (simulation) is unsporting behaviour and must be cautioned with a yellow card under IFAB Law 12.',
    aiAssumptions: [
      'Assumption: Replays showed zero contact was made by the defender\'s foot, and the attacker exaggerated his fall.',
      'Assumption: The referee was positioned close enough to spot the clear intent to deceive.'
    ],
    lawReference: 'IFAB Law 12: Section 3: Cautions for Unsporting Behaviour',
    handSignal: 'Referee runs to the player, blows the whistle, mimics a diving motion with hands, and displays the Yellow Card.',
    suggestedQuestions: [
      'Can VAR overturn a yellow card for diving?',
      'What happens if there was minor contact but the player exaggerated?',
      'Is simulation always a yellow card?'
    ]
  }
};

const SYSTEM_PROMPT = `You are "FIFA Fan Copilot", an elite VAR (Video Assistant Referee) analyst and official rules expert for the FIFA World Cup 2026.
Your job is to decode officiating decisions and explain them in simple terms to fans.

CRITICAL TRUTH CONSTRAINTS:
1. NEVER invent or fabricate facts, player names/numbers, player positions, yards/distances, or referee reasoning not explicitly mentioned in the input text or visible in the image.
2. Distinguish clearly between:
   - Retrieved Facts (what actually happened according to the input reports)
   - AI Rules Explanation (the official IFAB law citation and standard refereeing guidelines)
   - AI Assumptions (any educated guesses, probable reasons, or likely interpretations you are making due to missing details)
3. If information is incomplete or missing, you MUST explicitly start the AI Assumptions section with:
   "The exact reasoning is not available from the event feed. Based on the available information, the most likely explanation is..."

Return a strict JSON object matching this structure:
{
  "verdict": "RED_CARD" | "YELLOW_CARD" | "GREEN_CARD" | "VAR_REVIEW",
  "verdictText": "SHORT HEADING OF DECISION IN ALL CAPS AND TRANSLATED",
  "retrievedFacts": ["Verbatim fact 1", "Verbatim fact 2..."],
  "aiExplanation": "AI rule explanation based on knowledgeLevel, translated",
  "aiAssumptions": ["LHL Labeled assumption 1", "LHL Labeled assumption 2..."],
  "lawReference": "Official IFAB Law Reference, translated",
  "handSignal": "Actionable explanation of the referee's hand signal, translated",
  "suggestedQuestions": ["3 relevant follow-up questions, translated"]
}

Important: Return ONLY the JSON object. Do not wrap it in markdown code blocks (\`\`\`json ... \`\`\`).`;

function cleanAndParseJSON(text: string): any {
  let clean = text.trim();
  if (clean.startsWith('```')) {
    clean = clean.replace(/^```[a-zA-Z]*\s*/, '');
    clean = clean.replace(/\s*```$/, '');
  }
  return JSON.parse(clean.trim());
}

// 1. Fetch live events using Google Search Grounding
export async function fetchLiveEventsFromSearch(
  matchQuery: string,
  apiKey: string,
  language: string
): Promise<any[]> {
  const modelName = 'gemini-2.5-flash';
  const tools = [{ googleSearch: {} } as any];
  const mimeType = 'text/plain';
  console.log(`[Gemini Request] Ingesting match events.\n- Model: ${modelName}\n- Tools: ${JSON.stringify(tools)}\n- MIME Type: ${mimeType}`);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: modelName,
      tools: tools
    });

    const prompt = `Search the web to verify if the match query "${matchQuery}" is an official, real match of the FIFA World Cup 2026 (either completed or currently in progress in June/July 2026).

CRITICAL RULE: If the match is NOT a verified match of the FIFA World Cup 2026 (for example, it is a club competition match, a match from a previous World Cup like 2022 or 2018, or entirely hallucinated/fictional), you MUST return an empty JSON array: []
Do not fabricate or create timeline details.

If verified as an official FIFA World Cup 2026 match, translate results into: ${language}
Extract the last 5-8 chronological timeline events (minutes and descriptions) including goals, cards, and officiating incidents (VAR, red cards, offsides, penalties).

Return them as a strict JSON array of objects matching this structure (return ONLY JSON, no markdown code blocks):
[
  {
    "id": "e_search_1",
    "minute": 12,
    "type": "GOAL" | "CARD_RED" | "CARD_YELLOW" | "OFFSIDE" | "VAR_CHECK" | "FOUL" | "SUBSTITUTION" | "DEFAULT",
    "isOfficiating": true_or_false,
    "text": "Detailed event text describing the action",
    "team": "home" | "away" | "neutral"
  }
]`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    console.log('[Gemini Response] Ingested live match timeline successfully.');
    return cleanAndParseJSON(responseText);
  } catch (error) {
    console.error('[Gemini Response] Ingestion failed.');
    return [];
  }
}

export interface EnrichedAPIError {
  status: number | string;
  message: string;
  body: string;
}

export function parseGeminiError(err: unknown): EnrichedAPIError {
  let status: number | string = 'Unknown';
  
  // Safe cast for error properties
  const errorObj = typeof err === 'object' && err !== null ? (err as Record<string, unknown>) : {};
  let message = errorObj.message ? String(errorObj.message) : String(err);
  let body = '';

  // Log full error object to browser console (masking if it contains key)
  const safeLogErr = JSON.parse(JSON.stringify(err, (_k, v) => 
    (typeof v === 'string' && v.includes('AIza')) ? v.replace(/AIza[a-zA-Z0-9_-]+/, 'REDACTED_API_KEY') : v
  ));
  console.error("Full Gemini API Error Object:", safeLogErr);

  if (errorObj.status) {
    status = errorObj.status as number | string;
  }

  try {
    if (errorObj.response) {
      body = JSON.stringify(errorObj.response, null, 2);
    }
  } catch (e) {}
  
  // Sanitize API Key leaks in body or message
  if (body) {
    body = body.replace(/AIza[a-zA-Z0-9_-]+/g, 'REDACTED_API_KEY');
  }
  message = message.replace(/AIza[a-zA-Z0-9_-]+/g, 'REDACTED_API_KEY');

  const msgLower = message.toLowerCase();
  
  if (msgLower.includes('api_key_invalid') || msgLower.includes('api key') || msgLower.includes('invalid api key') || status === 401 || msgLower.includes('401')) {
    status = 401;
    message = "Invalid API Key. Please verify your Gemini API key in the configuration.";
  } else if (msgLower.includes('permission') || status === 403 || msgLower.includes('403')) {
    status = 403;
    message = "Permission Denied. The configured API key does not have access to this resource or Google Search Grounding.";
  } else if (msgLower.includes('quota') || msgLower.includes('rate limit') || status === 429 || msgLower.includes('429')) {
    status = 429;
    message = "Quota Exceeded. You have hit the rate limit for this model. Please try again in a moment.";
  } else if (msgLower.includes('model') && (msgLower.includes('not found') || msgLower.includes('404') || status === 404)) {
    status = 404;
    message = "Model Not Found. The requested model (gemini-2.5-flash) could not be located.";
  } else if (msgLower.includes('invalid') || msgLower.includes('bad request') || status === 400 || msgLower.includes('400')) {
    status = 400;
    message = "Invalid Request Payload. There was an issue with the parameters sent to the Gemini API.";
  } else if (msgLower.includes('fetch') || msgLower.includes('network') || msgLower.includes('connect')) {
    status = 'Network';
    message = "Network Failure. Failed to communicate with the Gemini API. Check your internet connection.";
  }

  return {
    status,
    message,
    body: body || (err as any).stack || JSON.stringify(err, null, 2)
  };
}

// 2. Analyze individual officiating event
export async function analyzeAnnouncement(
  text: string,
  imageBase64: string | null,
  level: 'Beginner Fan' | 'Casual Viewer' | 'Tactical Analyst',
  language: string,
  apiKey: string | null,
  useMock: boolean
): Promise<AnalysisResult> {
  if (useMock || !apiKey) {
    const cleanText = text.toLowerCase();
    if (cleanText.includes('handball') || cleanText.includes('penalty')) {
      return translateMock(PRESET_MOCK_DATA['var-handball'], language);
    } else if (cleanText.includes('dogso') || cleanText.includes('obvious goal') || cleanText.includes('tripped') || cleanText.includes('red card')) {
      return translateMock(PRESET_MOCK_DATA['dogso-red'], language);
    } else if (cleanText.includes('offside') || cleanText.includes('disallowed')) {
      return translateMock(PRESET_MOCK_DATA['var-offside'], language);
    } else if (cleanText.includes('simulation') || cleanText.includes('dive') || cleanText.includes('diving') || cleanText.includes('yellow card')) {
      return translateMock(PRESET_MOCK_DATA['simulation-yellow'], language);
    }
    return translateMock(PRESET_MOCK_DATA['var-handball'], language);
  }

  const modelName = 'gemini-2.5-flash';
  const tools = [{ googleSearch: {} } as any];
  const mimeType = 'text/plain'; // Removed application/json to support tools
  console.log(`[Gemini Request] Analyzing decision.\n- Model: ${modelName}\n- Tools: ${JSON.stringify(tools)}\n- MIME Type: ${mimeType}`);

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: modelName,
      tools: tools
    });

    const prompt = `Analyze this live referee decision.
Knowledge Level: ${level}
Target Language: ${language}

Input Text: "${text}"
${imageBase64 ? 'An image of the stadium decision screen is attached.' : ''}`;

    const parts: any[] = [];
    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      parts.push({
        inlineData: {
          data: cleanBase64,
          mimeType: 'image/jpeg'
        }
      });
    }
    parts.push({ text: prompt });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts }],
      systemInstruction: SYSTEM_PROMPT
    });

    const responseText = result.response.text();
    console.log('[Gemini Response] Successfully received decision breakdown.');
    return cleanAndParseJSON(responseText) as AnalysisResult;
  } catch (error: unknown) {
    console.error('[Gemini Response] Request failed.');
    throw parseGeminiError(error);
  }
}

export async function sendChatFollowUp(
  history: ChatMessage[],
  message: string,
  decisionContext: AnalysisResult,
  level: 'Beginner Fan' | 'Casual Viewer' | 'Tactical Analyst',
  language: string,
  apiKey: string | null,
  useMock: boolean
): Promise<string> {
  if (useMock || !apiKey) {
    return `[Mock Response in ${language} at ${level} level] Under FIFA rules related to: "${decisionContext.lawReference}", this action is governed strictly by the referee's discretion. Regarding your question: "${message}", the rule states that player safety and the natural flow of the game are prioritized.`;
  }

  try {
    const systemInstruction = `You are "FIFA Fan Copilot", answering a fan's follow-up questions.
The active referee decision being discussed is:
- Verdict: ${decisionContext.verdictText}
- Explanation: ${decisionContext.aiExplanation}
- Facts: ${decisionContext.retrievedFacts.join(', ')}

Answer in simple, conversational terms matching the fan's knowledge level: "${level}".
Answer in the requested language: "${language}".
Keep answers concise (2-4 sentences max). Do not give essays.`;

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: 'gemini-2.5-flash',
      systemInstruction
    });

    // Slice off the last message because it is sent via sendMessage(message)
    const chatHistory = history.slice(0, -1).map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({
      history: chatHistory
    });

    const response = await chat.sendMessage(message);
    return response.response.text();
  } catch (error) {
    console.error('Chat API Error:', error);
    return `Sorry, there was an issue processing that chat question. Please verify your connection.`;
  }
}

function translateMock(data: AnalysisResult, language: string): AnalysisResult {
  const isEn = language.toLowerCase().includes('en');
  if (isEn) return data;

  const l = language.toLowerCase();
  let vText = data.verdictText;
  let exp = data.aiExplanation;
  let law = data.lawReference;
  let sig = data.handSignal;

  if (l.includes('es') || l.includes('spa')) { // Spanish
    vText = vText.replace('PENALTY AWARDED', 'PENALTI CONCEDIDO').replace('RED CARD', 'TARJETA ROJA').replace('GOAL DISALLOWED', 'GOL ANULADO').replace('YELLOW CARD', 'TARJETA AMARILLA');
    exp = 'Explicación del árbitro: ' + exp + ' (Traducido en Modo Demo)';
    law = law.replace('Law', 'Regla');
    sig = 'Señal: ' + sig;
  } else if (l.includes('fr')) { // French
    vText = vText.replace('PENALTY AWARDED', 'PENALTY ACCORDÉ').replace('RED CARD', 'CARTON ROUGE').replace('GOAL DISALLOWED', 'BUT REFUSÉ').replace('YELLOW CARD', 'CARTON JAUNE');
    exp = 'Explication de l\'arbitre: ' + exp + ' (Traduit en Mode Démo)';
    law = law.replace('Law', 'Loi');
    sig = 'Signal: ' + sig;
  } else if (l.includes('de')) { // German
    vText = vText.replace('PENALTY AWARDED', 'ELFMETER ERTEILT').replace('RED CARD', 'ROTE KARTE').replace('GOAL DISALLOWED', 'TOR ABSERKANNT').replace('YELLOW CARD', 'GELBE KARTE');
    exp = 'Schiedsrichter Erklärung: ' + exp + ' (Demo-Modus)';
    law = law.replace('Law', 'Regel');
    sig = 'Handzeichen: ' + sig;
  }

  return {
    ...data,
    verdictText: vText,
    aiExplanation: exp,
    lawReference: law,
    handSignal: sig
  };
}
