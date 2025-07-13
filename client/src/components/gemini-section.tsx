import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Brain, Sparkles, Zap, FileText, AlertCircle, Loader2 } from "lucide-react";
import { AnalysisResults } from "@shared/schema";

export default function GeminiSection() {
  const [abstractText, setAbstractText] = useState("");
  const [analysisResults, setAnalysisResults] = useState<AnalysisResults | null>(null);

  const analyzeMutation = useMutation({
    mutationFn: async (abstract: string) => {
      const response = await apiRequest("POST", "/api/analyze", { abstract });
      return response.json();
    },
    onSuccess: (data) => {
      if (data.success) {
        setAnalysisResults(data.data.results);
      }
    },
  });

  const handleAnalyze = () => {
    if (abstractText.trim().length < 50) {
      return;
    }
    analyzeMutation.mutate(abstractText.trim());
  };

  const isValid = abstractText.trim().length >= 50;

  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full mb-6">
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by AI</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Análise Inteligente com
            <span className="text-gradient"> Gemini</span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Cole o resumo do seu artigo e receba insights valiosos sobre revistas adequadas, palavras-chave relevantes e sugestões de títulos.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <h3 className="text-xl font-semibold">Análise de Resumo Científico</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Resumo do Artigo
                </label>
                <Textarea
                  value={abstractText}
                  onChange={(e) => setAbstractText(e.target.value)}
                  placeholder="Cole aqui o resumo (abstract) do seu artigo em inglês ou português..."
                  className="min-h-[200px] resize-none"
                />
                <p className="text-sm text-slate-500 mt-2">
                  Mínimo de 50 caracteres • <span>{abstractText.length}</span> caracteres digitados
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={handleAnalyze}
                  disabled={!isValid || analyzeMutation.isPending}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {analyzeMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Zap className="w-4 h-4" />
                  )}
                  {analyzeMutation.isPending ? "Analisando..." : "Analisar Resumo"}
                </Button>
              </div>

              {analyzeMutation.isError && (
                <Alert className="border-red-200 dark:border-red-800">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {analyzeMutation.error instanceof Error 
                      ? analyzeMutation.error.message 
                      : "Erro ao analisar o resumo. Tente novamente."}
                  </AlertDescription>
                </Alert>
              )}

              {!isValid && abstractText.length > 0 && (
                <Alert className="border-red-200 dark:border-red-800">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Por favor, insira um resumo com pelo menos 50 caracteres.
                  </AlertDescription>
                </Alert>
              )}

              {analysisResults && (
                <div className="space-y-8 mt-8 animate-slide-up">
                  {/* Journal suggestions */}
                  <Card className="bg-slate-50 dark:bg-slate-800">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <h4 className="text-xl font-semibold">Sugestões de Revistas</h4>
                      </div>
                      <div className="grid gap-4">
                        {analysisResults.journalSuggestions.map((journal, index) => (
                          <div key={index} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            <div className="flex items-start justify-between mb-2">
                              <h5 className="font-semibold text-slate-900 dark:text-white">{journal.name}</h5>
                              <Badge variant="secondary" className="text-xs">
                                {Math.round(journal.relevance * 100)}% relevância
                              </Badge>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">{journal.description}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Keywords */}
                    <Card className="bg-slate-50 dark:bg-slate-800">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4">Palavras-chave</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResults.keywords.map((keyword, index) => (
                            <Badge key={index} variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Title suggestions */}
                    <Card className="bg-slate-50 dark:bg-slate-800">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4">Sugestões de Título</h4>
                        <ul className="space-y-3">
                          {analysisResults.titleSuggestions.map((title, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-slate-700 dark:text-slate-300">{title}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Lay summary */}
                  <Card className="bg-slate-50 dark:bg-slate-800">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4">Resumo para Leigos</h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {analysisResults.laySummary}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Research area and confidence */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-slate-50 dark:bg-slate-800">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4">Área de Pesquisa</h4>
                        <p className="text-slate-700 dark:text-slate-300">{analysisResults.researchArea}</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-slate-50 dark:bg-slate-800">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-semibold mb-4">Confiança da Análise</h4>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${analysisResults.confidence * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {Math.round(analysisResults.confidence * 100)}%
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
