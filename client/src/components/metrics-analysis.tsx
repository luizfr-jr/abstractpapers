import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Award, TrendingUp, ExternalLink } from "lucide-react";

const metricsInfo = [
  {
    icon: Award,
    title: "Fator de Impacto (JIF)",
    description: "Métrica tradicional que mede a frequência com que artigos de uma revista são citados",
    color: "text-yellow-600"
  },
  {
    icon: TrendingUp,
    title: "CiteScore",
    description: "Métrica da Scopus que calcula citações por documento publicado em um período de 4 anos",
    color: "text-blue-600"
  },
  {
    icon: BarChart3,
    title: "Índice H",
    description: "Mede tanto a produtividade quanto o impacto das citações de um pesquisador ou revista",
    color: "text-purple-600"
  }
];

const metricsTools = [
  {
    name: "Journal Citation Reports",
    description: "A principal fonte mundial para encontrar o Fator de Impacto (JIF) e os quartis dos periódicos científicos. Requer acesso via Web of Science.",
    badges: ["Fator de Impacto", "Indexado em WoS"],
    url: "https://jcr.clarivate.com/",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRkY2NjAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPkNsYXJpdmF0ZSBKQ1I8L3RleHQ+Cjwvc3ZnPgo="
  },
  {
    name: "Scopus",
    description: "Analise métricas abrangentes de revistas (CiteScore, SJR, SNIP) e de autores (Índice H, publicações, citações) na maior base de dados científica.",
    badges: ["CiteScore / Índice H", "Indexado em Scopus"],
    url: "https://www.scopus.com",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRkY2NjAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPlNjb3B1czwvdGV4dD4KPC9zdmc+Cg=="
  },
  {
    name: "SCImago Journal Rank",
    description: "Plataforma gratuita que utiliza dados da Scopus para classificar e analisar periódicos por quartis, H-Index e indicador SJR de forma acessível.",
    badges: ["SJR / Quartis", "Acesso Livre"],
    url: "https://www.scimagojr.com/",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjNDA4MDQwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPlNDSW1hZ288L3RleHQ+Cjwvc3ZnPgo="
  },
  {
    name: "Google Scholar Metrics",
    description: "Visualize as principais publicações por área e idioma, classificadas pelo índice h5. Permite criar perfil de autor e acompanhar métricas acadêmicas.",
    badges: ["Índice h5", "Acesso Livre"],
    url: "https://scholar.google.com/citations?view_op=top_venues&hl=pt-BR",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjNDI4NUY0Ii8+Cjx0ZXh0IHg9IjYwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPkdvb2dsZSBTY2hvbGFyPC90ZXh0Pgo8L3N2Zz4K"
  }
];

export default function MetricsAnalysis() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full mb-6">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium">Métricas Científicas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Análise de
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Métricas</span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Avalie o impacto e a qualidade de periódicos científicos através de métricas reconhecidas mundialmente e ferramentas especializadas.
          </p>
        </div>

        {/* Metrics explanation cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metricsInfo.map((metric, index) => (
            <Card key={index} className="bg-slate-50 dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="inline-flex p-3 rounded-lg bg-white dark:bg-slate-700 mb-4">
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {metric.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metricsTools.map((tool, index) => (
            <Card key={index} className="card-hover h-full group">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={tool.logo} 
                    alt={`${tool.name} Logo`} 
                    className="max-w-[120px] h-12 object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{tool.name}</h3>
                
                <div className="flex justify-center gap-2 flex-wrap mb-4">
                  {tool.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {tool.description}
                </p>
                
                <Button
                  asChild
                  className="w-full group-hover:scale-105 transition-all duration-200"
                >
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    Acessar {tool.name.split(' ')[0]}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Metrics interpretation section */}
        <Card className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-800">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Interpretando Métricas Científicas
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  As métricas de impacto são ferramentas importantes, mas devem ser interpretadas com cuidado. 
                  Considere sempre o contexto da área de pesquisa, pois diferentes campos têm padrões de citação distintos.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-slate-900 dark:text-white">Quartis (Q1-Q4):</strong>
                    <p className="text-slate-600 dark:text-slate-300">Q1 representa os 25% melhores periódicos da área</p>
                  </div>
                  <div>
                    <strong className="text-slate-900 dark:text-white">Acesso Aberto:</strong>
                    <p className="text-slate-600 dark:text-slate-300">Considere políticas de acesso aberto para maior visibilidade</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
