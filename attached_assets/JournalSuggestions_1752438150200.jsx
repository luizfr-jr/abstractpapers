import { Search, BookOpen } from 'lucide-react'
import ToolCard from './ToolCard'

function JournalSuggestions() {
  const tools = [
    {
      logo: "https://jane.biosemantics.org/img/logo-jane.png",
      title: "JANE",
      description: "Cole o título ou resumo do seu artigo para receber uma lista de revistas relevantes da base de dados Medline com análise baseada em IA.",
      tags: [
        { label: "Baseado em IA", type: "ia" },
        { label: "Busca por Resumo", type: "text" }
      ],
      url: "https://jane.biosemantics.org/",
      logoStyle: { maxWidth: '80px' }
    },
    {
      logo: "https://www.elsevier.com/__data/assets/image/0011/69365/elsevier-wordmark-1-srgb.png",
      title: "Elsevier Journal Finder",
      description: "Utiliza inteligência artificial avançada para sugerir revistas da editora Elsevier que melhor se encaixam com seu resumo e campo de pesquisa.",
      tags: [
        { label: "Baseado em IA", type: "ia" },
        { label: "Editora Específica", type: "publisher" }
      ],
      url: "https://journalfinder.elsevier.com/"
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Wiley_logo.svg/2560px-Wiley_logo.svg.png",
      title: "Wiley Journal Finder",
      description: "Insira o texto do seu manuscrito para encontrar as melhores opções de publicação no extenso portfólio de revistas científicas da Wiley.",
      tags: [
        { label: "Baseado em IA", type: "ia" },
        { label: "Editora Específica", type: "publisher" }
      ],
      url: "https://journalfinder.wiley.com/search?type=match"
    },
    {
      logo: "https://authorservices.taylorandfrancis.com/wp-content/uploads/2022/12/tandf-logo.png",
      title: "T&F Journal Suggester",
      description: "Analisa seu resumo científico para recomendar as publicações mais adequadas dentro do catálogo especializado da editora Taylor & Francis.",
      tags: [
        { label: "Baseado em IA", type: "ia" },
        { label: "Editora Específica", type: "publisher" }
      ],
      url: "https://authorservices.taylorandfrancis.com/publishing-your-research/choosing-a-journal/journal-suggester/"
    }
  ]

  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full mb-6">
            <Search className="w-4 h-4" />
            <span className="text-sm font-medium">Ferramentas Externas</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Sugestão de
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Revistas</span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Descubra as revistas científicas mais adequadas para sua pesquisa usando ferramentas especializadas baseadas em inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>

        {/* Seção informativa */}
        <div className="mt-16 p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                Como escolher a revista ideal?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Utilize múltiplas ferramentas para comparar sugestões, verifique o escopo da revista, 
                analise métricas de impacto e considere o tempo de revisão. Cada ferramenta oferece 
                perspectivas únicas baseadas em diferentes algoritmos e bases de dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JournalSuggestions

