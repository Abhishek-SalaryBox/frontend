import { Link } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { Button } from "./ui/button"
import { ActivitySquare } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <ActivitySquare className="h-6 w-6" />
          <span>Web Performance Analyzer</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
