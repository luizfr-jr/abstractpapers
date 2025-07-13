import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 group hover:scale-105 active:scale-95 theme-toggle-glow"
      >
        {/* Outer glow ring */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md" />
        
        {/* Background glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
        
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-300/20 to-purple-300/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        {/* Icon container with smooth transitions */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative">
            {/* Moon icon for light theme */}
            <div className={`absolute inset-0 transition-all duration-700 ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-180 scale-0"}`}>
              <Moon className="h-7 w-7 text-white drop-shadow-lg" />
            </div>
            
            {/* Sun icon for dark theme */}
            <div className={`absolute inset-0 transition-all duration-700 ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"}`}>
              <Sun className="h-7 w-7 text-white drop-shadow-lg" />
            </div>
            
            {/* Placeholder for consistent sizing */}
            <div className="h-7 w-7 opacity-0">
              <Sun className="h-7 w-7" />
            </div>
            
            {/* Sparkle effects */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 theme-toggle-sparkle" />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 theme-toggle-sparkle" style={{animationDelay: '0.3s'}} />
            <div className="absolute top-0 -left-2 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 theme-toggle-sparkle" style={{animationDelay: '0.6s'}} />
          </div>
        </div>
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-0 transition-all duration-500" />
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-spin" style={{animationDuration: '3s'}} />
        
        <span className="sr-only">
          {theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
        </span>
      </button>
      
      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
        {theme === "light" ? "Modo Escuro" : "Modo Claro"}
      </div>
    </div>
  );
}