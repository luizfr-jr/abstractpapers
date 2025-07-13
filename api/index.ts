import { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from "../server/storage";
import { analyzeAbstract } from "../server/services/gemini";
import { analysisRequestSchema } from "../shared/schema";
import { z } from "zod";

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
      const { abstract } = analysisRequestSchema.parse(req.body);
      
      const results = await analyzeAbstract(abstract);
      
      // Store analysis in database
      const analysis = await storage.createAnalysis({
        abstract,
        results,
      });
      
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
      const analyses = await storage.getRecentAnalyses();
      res.status(200).json({
        success: true,
        data: analyses,
      });
      return;
    }
    
    // Rota não encontrada
    res.status(404).json({
      success: false,
      error: 'Route not found',
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