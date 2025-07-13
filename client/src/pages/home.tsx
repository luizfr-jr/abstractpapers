import { useEffect } from "react";
import Header from "@/components/header";
import GeminiSection from "@/components/gemini-section";
import JournalSuggestions from "@/components/journal-suggestions";
import MetricsAnalysis from "@/components/metrics-analysis";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "Hub de Ferramentas para Publicação Científica";
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Header />
      <main className="relative">
        <GeminiSection />
        <JournalSuggestions />
        <MetricsAnalysis />
      </main>
      <Footer />
    </div>
  );
}
