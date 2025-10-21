import { Button } from "./ui/button"
import heroImage from "../assets/hero-whatsapp-ai.jpg"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-foreground">Automatize seu </span>
            <span className="bg-gradient-tech bg-clip-text text-transparent">atendimento</span>
            <span className="text-foreground"> com </span>
            <span className="bg-gradient-tech bg-clip-text text-transparent">Inteligência Artificial</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Conecte nosso terminal ao WhatsApp ou qualquer plataforma de atendimento. 
            Respostas exatas, rápidas e inteligentes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg animate-glow"
            >
              Solicitar demonstração
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="WhatsApp AI Chat Interface" 
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl animate-float"
            />
            <div className="absolute inset-0 bg-gradient-tech/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}