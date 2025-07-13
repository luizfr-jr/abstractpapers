import { GoogleGenerativeAI } from "@google/generative-ai";
import { AnalysisResults } from "@shared/schema";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function analyzeAbstract(abstract: string): Promise<AnalysisResults> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    const prompt = `
Analyze this scientific abstract and provide structured recommendations:

Abstract: "${abstract}"

Please provide a comprehensive analysis with:
1. Journal suggestions (3-5 relevant journals with descriptions)
2. Keywords (5-8 relevant keywords)
3. Title suggestions (3 alternative titles)
4. Lay summary (simplified explanation for general audience)
5. Research area classification
6. Confidence score (0-1)

Respond in JSON format with the exact structure:
{
  "journalSuggestions": [
    {
      "name": "Journal Name",
      "description": "Brief description of why this journal is suitable",
      "relevance": 0.95
    }
  ],
  "keywords": ["keyword1", "keyword2"],
  "titleSuggestions": ["Title 1", "Title 2", "Title 3"],
  "laySummary": "Simple explanation of the research",
  "researchArea": "Field of study",
  "confidence": 0.85
}

Ensure all suggestions are realistic and based on the abstract content. Use Portuguese for descriptions and lay summary.
`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    const analysisResults: AnalysisResults = JSON.parse(text);
    return analysisResults;
  } catch (error) {
    console.error("Error analyzing abstract:", error);
    throw new Error(`Failed to analyze abstract: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
