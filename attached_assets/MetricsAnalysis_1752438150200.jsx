import { BarChart3, TrendingUp, Award } from 'lucide-react'
import ToolCard from './ToolCard'

function MetricsAnalysis() {
  const tools = [
    {
      logo: "https://clarivate.com/wp-content/uploads/2022/11/clarivate-logo-dark-RGB-300x53.png",
      title: "Journal Citation Reports",
      description: "A principal fonte mundial para encontrar o Fator de Impacto (JIF) e os quartis dos periódicos científicos. Requer acesso via Web of Science.",
      tags: [
        { label: "Fator de Impacto", type: "metrics" },
        { label: "Indexado em WoS", type: "index" }
      ],
      url: "https://jcr.clarivate.com/"
    },
    {
      logo: "https://www.elsevier.com/__data/assets/image/0009/825669/scopus-logo-srgb.png",
      title: "Scopus",
      description: "Analise métricas abrangentes de revistas (CiteScore, SJR, SNIP) e de autores (Índice H, publicações, citações) na maior base de dados científica.",
      tags: [
        { label: "CiteScore / Índice H", type: "metrics" },
        { label: "Indexado em Scopus", type: "index" }
      ],
      url: "https://www.scopus.com"
    },
    {
      logo: "https://www.scimagojr.com/img/logo.png",
      title: "SCImago Journal Rank",
      description: "Plataforma gratuita que utiliza dados da Scopus para classificar e analisar periódicos por quartis, H-Index e indicador SJR de forma acessível.",
      tags: [
        { label: "SJR / Quartis", type: "metrics" },
        { label: "Acesso Livre", type: "free-access" }
      ],
      url: "https://www.scimagojr.com/"
    },
    {
      logo: "https://scholar.google.com/scholar/images/google_scholar_logo_M_bleed.png",
      title: "Google Scholar Metrics",
      description: "Visualize as principais publicações por área e idioma, classificadas pelo índice h5. Permite criar perfil de autor e acompanhar métricas acadêmicas.",
      tags: [
        { label: "Índice h5", type: "metrics" },
        { label: "Acesso Livre", type: "free-access" }
      ],
      url: "https://scholar.google.com/citations?view_op=top_venues&hl=pt-BR"
    }
  ]

  const metrics = [
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
  ]

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

        {/* Cards de métricas explicativas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className={`inline-flex p-3 rounded-lg bg-white dark:bg-slate-700 mb-4`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {metric.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>

        {/* Seção informativa sobre métricas */}
        <div className="mt-16 p-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl border border-purple-200 dark:border-purple-800">
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
        </div>
      </div>
    </section>
  )
}

export default MetricsAnalysis

