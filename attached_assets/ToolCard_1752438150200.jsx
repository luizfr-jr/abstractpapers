import { ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

function ToolCard({ logo, title, description, tags, url, logoStyle = {} }) {
  return (
    <Card className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] h-full group">
      <CardHeader className="text-center pb-4">
        {logo && (
          <div className="flex justify-center mb-4">
            <img 
              className="max-w-[120px] h-12 object-contain transition-all duration-300 hover:scale-110 hover:brightness-110" 
              src={logo} 
              alt={`Logo ${title}`}
              style={logoStyle}
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          </div>
        )}
        
        <CardTitle className="text-lg font-bold text-slate-900 dark:text-white min-h-[3rem] flex items-center justify-center">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex flex-col h-full">
        <div className="flex justify-center gap-2 flex-wrap mb-4">
          {tags.map((tag, index) => (
            <Badge 
              key={index}
              className={`text-xs font-medium ${getBadgeClass(tag.type)}`}
            >
              {tag.label}
            </Badge>
          ))}
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex-grow mb-6">
          {description}
        </p>
        
        <Button
          asChild
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full mt-auto group-hover:scale-105"
        >
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar {title.split(' ')[0]}
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  )
}

function getBadgeClass(type) {
  const classes = {
    ia: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    text: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    index: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    publisher: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    metrics: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    'free-access': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200'
  }
  return classes[type] || 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
}

export default ToolCard

