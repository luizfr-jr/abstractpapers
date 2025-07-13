import { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";

// Schemas
const analysisRequestSchema = z.object({
  abstract: z.string().min(50, "Abstract must be at least 50 characters long"),
});

interface AnalysisResults {
  journalSuggestions: {
    name: string;
    description: string;
    relevance: number;
  }[];
  keywords: string[];
  titleSuggestions: string[];
  laySummary: string;
  researchArea: string;
  confidence: number;
}

interface Analysis {
  id: number;
  abstract: string;
  results: AnalysisResults;
  createdAt: Date;
}

// In-memory storage
class MemStorage {
  private analyses: Map<number, Analysis>;
  private currentAnalysisId: number;

  constructor() {
    this.analyses = new Map();
    this.currentAnalysisId = 1;
  }

  async createAnalysis(analysis: { abstract: string; results: AnalysisResults }): Promise<Analysis> {
    const id = this.currentAnalysisId++;
    const newAnalysis: Analysis = { 
      ...analysis, 
      id,
      createdAt: new Date()
    };
    this.analyses.set(id, newAnalysis);
    return newAnalysis;
  }

  async getRecentAnalyses(): Promise<Analysis[]> {
    return Array.from(this.analyses.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 10);
  }
}

const storage = new MemStorage();

// Gemini AI service
async function analyzeAbstract(abstract: string): Promise<AnalysisResults> {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY not configured");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { pathname } = new URL(req.url!, `http://${req.headers.host}`);
  
  try {
    // Rota: POST /api/analyze
    if (pathname === '/api/analyze' && req.method === 'POST') {
      console.log('POST /api/analyze called');
      console.log('Request body:', req.body);
      
      const { abstract } = analysisRequestSchema.parse(req.body);
      
      console.log('Analyzing abstract:', abstract.substring(0, 100) + '...');
      
      const results = await analyzeAbstract(abstract);
      
      console.log('Analysis results:', results);
      
      // Store analysis in memory
      const analysis = await storage.createAnalysis({
        abstract,
        results,
      });
      
      console.log('Analysis stored with ID:', analysis.id);
      
      res.status(200).json({
        success: true,
        data: {
          id: analysis.id,
          results: analysis.results,
        },
      });
      return;
    }
    
    // Rota: GET /api/analyses
    if (pathname === '/api/analyses' && req.method === 'GET') {
      console.log('GET /api/analyses called');
      const analyses = await storage.getRecentAnalyses();
      res.status(200).json({
        success: true,
        data: analyses,
      });
      return;
    }
    
    // Rota não encontrada
    console.log('Route not found:', pathname, req.method);
    res.status(404).json({
      success: false,
      error: 'Route not found',
      path: pathname,
      method: req.method,
    });
    
  } catch (error) {
    console.error("API error:", error);
    
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        error: "Invalid request data",
        details: error.errors,
      });
    } else {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : "Internal server error",
      });
    }
  }
}