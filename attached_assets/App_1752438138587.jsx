import './App.css'
import Header from './components/Header'
import GeminiSection from './components/GeminiSection'
import JournalSuggestions from './components/JournalSuggestions'
import MetricsAnalysis from './components/MetricsAnalysis'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-scientific">
      <Header />
      <main className="relative">
        <GeminiSection />
        <JournalSuggestions />
        <MetricsAnalysis />
      </main>
      <Footer />
    </div>
  )
}

export default App

