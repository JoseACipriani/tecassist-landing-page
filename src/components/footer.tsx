export function Footer() {
  return (
    <footer className="bg-primary/5 border-t py-12">
      <div className="container">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold bg-gradient-tech bg-clip-text text-transparent">
            TECH ASSIST
          </div>
          
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
          </div>
          
          <div className="pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 Tech Assist - Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}