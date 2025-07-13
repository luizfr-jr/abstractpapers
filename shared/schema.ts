import { pgTable, text, serial, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const analyses = pgTable("analyses", {
  id: serial("id").primaryKey(),
  abstract: text("abstract").notNull(),
  results: jsonb("results").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertAnalysisSchema = createInsertSchema(analyses).pick({
  abstract: true,
  results: true,
});

export const analysisRequestSchema = z.object({
  abstract: z.string().min(50, "Abstract must be at least 50 characters long"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertAnalysis = z.infer<typeof insertAnalysisSchema>;
export type Analysis = typeof analyses.$inferSelect;
export type AnalysisRequest = z.infer<typeof analysisRequestSchema>;

export interface AnalysisResults {
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
