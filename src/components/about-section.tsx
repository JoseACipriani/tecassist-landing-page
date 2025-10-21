import { Zap, Target, Cpu, MessageCircle } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const benefits = [
  {
    icon: Zap,
    title: "Velocidade",
    description: "Respostas instantâneas 24/7, sem tempo de espera para seus clientes."
  },
  {
    icon: Target,
    title: "Precisão",
    description: "IA treinada para fornecer respostas exatas e contextualizadas."
  },
  {
    icon: Cpu,
    title: "Integração Fácil",
    description: "API simples que se conecta a qualquer plataforma de atendimento."
  },
  {
    icon: MessageCircle,
    title: "Humanizado",
    description: "Conversas naturais que seus clientes vão adorar."
  }
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre a <span className="bg-gradient-tech bg-clip-text text-transparent">Solução</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Tech Assist nasceu para revolucionar o atendimento automatizado. Nosso terminal com IA 
            conecta-se facilmente ao WhatsApp e outras plataformas, oferecendo respostas 
            precisas, rápidas e humanizadas com técnicas avançadas de inteligência artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title} 
              className="relative overflow-hidden border-border/50 hover:border-secondary/50 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-tech rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}