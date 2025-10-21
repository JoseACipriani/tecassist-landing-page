import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Posso integrar com qualquer sistema de atendimento?",
    answer: "Sim! Nossa API é flexível e pode ser integrada a qualquer plataforma que suporte conexões via API REST. Oferecemos documentação completa e suporte técnico para facilitar a integração."
  },
  {
    question: "O atendimento parece humano?",
    answer: "Absolutamente. Nossa IA é treinada com técnicas avançadas de processamento de linguagem natural, gerando respostas contextualizadas e naturais que proporcionam uma experiência conversacional autêntica."
  },
  {
    question: "Qual o tempo médio de resposta?",
    answer: "Nossas respostas são praticamente instantâneas, com tempo médio inferior a 2 segundos. A IA processa e responde em tempo real, garantindo uma experiência fluida para seus clientes."
  },
  {
    question: "Como funciona a configuração inicial?",
    answer: "O processo é simples: você nos fornece as informações do seu negócio, integramos via API à sua plataforma escolhida, e nossa IA é treinada especificamente para o seu contexto. Todo o processo leva menos de 48 horas."
  },
  {
    question: "Há limite de mensagens por mês?",
    answer: "Oferecemos planos flexíveis para diferentes volumes de atendimento. Desde startups até grandes empresas, temos uma solução adequada ao seu volume de mensagens e necessidades específicas."
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perguntas <span className="bg-gradient-tech bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossa solução de IA para atendimento automatizado.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card hover:bg-muted/30 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}