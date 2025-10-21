import { ThemeToggle } from "./theme-toggle"
import { Button } from "./ui/button"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-tech bg-clip-text text-transparent">
            TECH ASSIST
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('sobre')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre o Produto
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('faq')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('contato')}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contato
          </Button>
          <ThemeToggle />
        </nav>

        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}