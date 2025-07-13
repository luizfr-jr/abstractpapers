import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { analyzeAbstract } from "./services/gemini";
import { analysisRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Abstract analysis endpoint
  app.post("/api/analyze", async (req, res) => {
    try {
      const { abstract } = analysisRequestSchema.parse(req.body);
      
      const results = await analyzeAbstract(abstract);
      
      // Store analysis in database
      const analysis = await storage.createAnalysis({
        abstract,
        results,
      });
      
      res.json({
        success: true,
        data: {
          id: analysis.id,
          results: analysis.results,
        },
      });
    } catch (error) {
      console.error("Analysis error:", error);
      
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          error: "Invalid request data",
          details: error.errors,
        });
      } else {
        res.status(500).json({
          success: false,
          error: error instanceof Error ? error.message : "Analysis failed",
        });
      }
    }
  });

  // Get analysis history
  app.get("/api/analyses", async (req, res) => {
    try {
      const analyses = await storage.getRecentAnalyses();
      res.json({
        success: true,
        data: analyses,
      });
    } catch (error) {
      console.error("Get analyses error:", error);
      res.status(500).json({
        success: false,
        error: "Failed to fetch analyses",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
