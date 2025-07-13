import { useState } from 'react'
import { Sparkles, AlertCircle, Zap, Brain, FileText } from 'lucide-react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

function GeminiSection() {
  const [abstractText, setAbstractText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')

  const handleAnalyze = async () => {
    if (abstractText.trim().length < 50) {
      setError('Por favor, insira um resumo com pelo menos 50 caracteres.')
      return
    }

    setIsLoading(true)
    setError('')
    setResults(null)

    try {
      // Simulação de análise (substitua pela API real)
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Dados de exemplo
      const mockResults = {
        suggested_journals: [
          { name: "Nature", reason: "Revista de alto impacto ideal para pesquisas inovadoras" },
          { name: "Science", reason: "Publicação prestigiosa para descobertas científicas" },
          { name: "Cell", reason: "Especializada em biologia celular e molecular" },
          { name: "PNAS", reason: "Amplo escopo científico com revisão rigorosa" },
          { name: "Journal of Biological Chemistry", reason: "Foco específico em bioquímica" }
        ],
        keywords: ["inteligência artificial", "machine learning", "análise de dados", "bioinformática", "algoritmos", "redes neurais", "processamento", "classificação"],
        title_suggestions: [
          "Aplicação de Inteligência Artificial na Análise de Dados Científicos",
          "Machine Learning para Descobertas em Pesquisa Biomédica",
          "Algoritmos Avançados para Processamento de Dados Científicos"
        ],
        lay_summary: "Esta pesquisa utiliza técnicas avançadas de inteligência artificial para analisar grandes volumes de dados científicos, permitindo descobertas mais rápidas e precisas em diversas áreas do conhecimento."
      }
      
      setResults(mockResults)
    } catch (error) {
      setError('Erro ao processar a análise. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Gemini</span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Cole o resumo do seu artigo e receba insights valiosos sobre revistas adequadas, palavras-chave relevantes e sugestões de títulos.
          </p>
        </div>

        <Card className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              Análise de Resumo Científico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Resumo do Artigo
              </label>
              <Textarea
                value={abstractText}
                onChange={(e) => setAbstractText(e.target.value)}
                placeholder="Cole aqui o resumo (abstract) do seu artigo em inglês ou português..."
                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors min-h-[200px] resize-none"
              />
              <p className="text-sm text-slate-500 mt-2">
                Mínimo de 50 caracteres • {abstractText.length} caracteres digitados
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleAnalyze}
                disabled={isLoading || abstractText.trim().length < 50}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <div className="inline-block w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Analisando...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Analisar Resumo
                  </>
                )}
              </Button>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                <AlertCircle className="w-5 h-5" />
                <span>{error}</span>
              </div>
            )}

            {results && (
              <div className="space-y-8 mt-8">
                {/* Sugestões de Revistas */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-600" />
                      Sugestões de Revistas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      {results.suggested_journals.map((journal, index) => (
                        <div key={index} className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{journal.name}</h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">{journal.reason}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Palavras-chave */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Palavras-chave</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {results.keywords.map((keyword, index) => (
                          <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sugestões de Título */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Sugestões de Título</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {results.title_suggestions.map((title, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-slate-700 dark:text-slate-300">{title}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Resumo para Leigos */}
                <Card>
                  <CardHeader>
                    <CardTitle>Resumo para Leigos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {results.lay_summary}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default GeminiSection

