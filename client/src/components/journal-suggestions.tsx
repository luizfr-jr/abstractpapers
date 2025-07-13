import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, ExternalLink, BookOpen } from "lucide-react";

const journalTools = [
  {
    name: "JANE",
    description: "Cole o título ou resumo do seu artigo para receber uma lista de revistas relevantes da base de dados Medline com análise baseada em IA.",
    badges: ["Baseado em IA", "Busca por Resumo"],
    url: "https://jane.biosemantics.org/",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjMDA2NkNDIi8+Cjx0ZXh0IHg9IjYwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPkpBTkU8L3RleHQ+Cjwvc3ZnPgo="
  },
  {
    name: "Elsevier Journal Finder",
    description: "Utiliza inteligência artificial avançada para sugerir revistas da editora Elsevier que melhor se encaixam com seu resumo e campo de pesquisa.",
    badges: ["Baseado em IA", "Editora Específica"],
    url: "https://journalfinder.elsevier.com/",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRkY2NjAwIi8+Cjx0ZXh0IHg9IjYwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPkVsc2V2aWVyPC90ZXh0Pgo8L3N2Zz4K"
  },
  {
    name: "Wiley Journal Finder",
    description: "Insira o texto do seu manuscrito para encontrar as melhores opções de publicação no extenso portfólio de revistas científicas da Wiley.",
    badges: ["Baseado em IA", "Editora Específica"],
    url: "https://journalfinder.wiley.com/search?type=match",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjMDA1NkE0Ii8+Cjx0ZXh0IHg9IjYwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPldpbGV5PC90ZXh0Pgo8L3N2Zz4K"
  },
  {
    name: "T&F Journal Suggester",
    description: "Analisa seu resumo científico para recomendar as publicações mais adequadas dentro do catálogo especializado da editora Taylor & Francis.",
    badges: ["Baseado em IA", "Editora Específica"],
    url: "https://authorservices.taylorandfrancis.com/publishing-your-research/choosing-a-journal/journal-suggester/",
    logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiB2aWV3Qm94PSIwIDAgMTIwIDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRDczNTAyIi8+Cjx0ZXh0IHg9IjYwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPlRheWxvciAmYW1wOyBGcmFuY2lzPC90ZXh0Pgo8L3N2Zz4K"
  }
];

export default function JournalSuggestions() {
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
          {journalTools.map((tool, index) => (
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

        {/* Informative section */}
        <Card className="mt-16">
          <CardContent className="p-8">
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
