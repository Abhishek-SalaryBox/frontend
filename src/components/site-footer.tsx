import { Link } from "react-router-dom"
import { ActivitySquare, Github, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <div className="flex items-center gap-2">
          <ActivitySquare className="h-5 w-5" />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Web Performance Analyzer</p>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/about" className="text-sm text-muted-foreground hover:underline">
            About
          </Link>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/bhattabhi013" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/AbhishekBtwt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
