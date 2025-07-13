import { Brain, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Header() {
  return (
    <header className="gradient-bg text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Theme toggle in top right */}
        <div className="flex justify-end mb-8">
          <ThemeToggle />
        </div>
        
        <div className="text-center">
          {/* Decorative icons */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="p-3 glass-effect rounded-full">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 glass-effect rounded-full">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="p-3 glass-effect rounded-full">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
        
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hub de Ferramentas para
            <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Publicação Científica
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Encontre a revista ideal para sua pesquisa com inteligência artificial e analise métricas de impacto de periódicos e autores com ferramentas modernas e precisas.
          </p>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
