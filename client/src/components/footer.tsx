import { BookOpen, Mail, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About project */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-semibold">Hub Científico</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Plataforma moderna para auxiliar pesquisadores na escolha de periódicos científicos 
              e análise de métricas de impacto, utilizando as melhores ferramentas disponíveis.
            </p>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#gemini" className="hover:text-blue-400 transition-colors">Análise com IA</a></li>
              <li><a href="#journals" className="hover:text-blue-400 transition-colors">Sugestão de Revistas</a></li>
              <li><a href="#metrics" className="hover:text-blue-400 transition-colors">Análise de Métricas</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Sobre o Projeto</a></li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Desenvolvido por</h3>
            <div className="space-y-3">
              <div className="text-slate-300">
                <p className="font-medium">Dr. Luiz Fernando Rodrigues Jr.</p>
                <p className="font-medium">Kalleby Evangelho Mota</p>
              </div>
              <a href="https://github.com/KallebyX" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 dark:border-slate-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-300 dark:text-slate-400">
              <span>Desenvolvido com</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>para a comunidade científica</span>
            </div>
            
            <div className="text-slate-400 dark:text-slate-500 text-sm">
              © 2025 Hub Científico. Todos os direitos reservados.
            </div>
          </div>
        </div>

        {/* External tools note */}
        <div className="mt-8 p-4 bg-slate-800 dark:bg-slate-900 rounded-lg">
          <p className="text-slate-300 dark:text-slate-400 text-sm text-center">
            <strong>Nota:</strong> Este hub conecta você às melhores ferramentas científicas disponíveis. 
            Todas as análises e sugestões são fornecidas pelas respectivas plataformas especializadas.
          </p>
        </div>
      </div>
    </footer>
  );
}
