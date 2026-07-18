import { GoogleGenerativeAI } from '@google/generative-ai';

async function run() {
  const apiKey = process.argv[2];
  if (!apiKey) {
    console.error("Error: Please provide your Gemini API key as an argument.");
    console.error("Usage: node test_api.js <YOUR_GEMINI_API_KEY>");
    process.exit(1);
  }

  console.log("Initializing Gemini 2.5 Flash with googleSearch tool...");
  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      tools: [{ googleSearch: {} } as any]
    });

    console.log("Sending prompt: 'Reply with the word WORKING'...");
    const result = await model.generateContent("Reply with the word WORKING");
    const text = result.response.text();
    console.log("\nResponse received:");
    console.log("------------------");
    console.log(text.trim());
    console.log("------------------");
  } catch (error) {
    console.error("Test failed with error:", error);
  }
}

run();
