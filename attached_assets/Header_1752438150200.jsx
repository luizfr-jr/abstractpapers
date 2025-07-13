import { Sparkles, BookOpen, TrendingUp } from 'lucide-react'

function Header() {
  return (
    <header className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        {/* Ícones decorativos */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
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
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

