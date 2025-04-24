import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { ModeToggle } from "./mode-toggle"
import { ActivitySquare, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <ActivitySquare className="h-6 w-6" />
          <span className="text-xl">Web Performance Analyzer</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-colors"
            }
          >
            About Us
          </NavLink>
          <ModeToggle />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg md:hidden">
            <div className="container py-4 flex flex-col space-y-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary font-medium" : "text-foreground hover:text-primary transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </NavLink>
              <div className="pt-2">
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
