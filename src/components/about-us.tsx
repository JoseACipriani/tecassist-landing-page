import { Quote } from "lucide-react"
import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import type { UseEmblaCarouselType } from "embla-carousel-react"

type CarouselApi = UseEmblaCarouselType[1]

const storySlides = [
  {
    image: "/story-1-problem.jpg",
    quote: "Tudo começou com uma frustração. Éramos uma pequena empresa de tecnologia e perdíamos clientes porque não conseguíamos responder todas as mensagens no WhatsApp a tempo. Era 2023, e víamos nossos concorrentes crescendo enquanto lutávamos para acompanhar a demanda.",
    author: "Lucas - CEO & Fundador",
    phase: "O Problema"
  },
  {
    image: "/story-2-inspiration.jpg", 
    quote: "Foi numa madrugada que tive a ideia. 'E se pudéssemos criar uma IA que conversasse como um humano, mas nunca dormisse?' Passei noites estudando processamento de linguagem natural e APIs do WhatsApp. Minha família achava que eu tinha enlouquecido.",
    author: "Lucas - CEO & Fundador",
    phase: "A Inspiração"
  },
  {
    image: "/story-3-success.jpg",
    quote: "Depois de meses de desenvolvimento, fizemos o primeiro teste com um cliente real. Em 24 horas, a IA respondeu 847 mensagens com 96% de satisfação. O cliente disse: 'Vocês salvaram meu negócio!' Naquele momento, soubemos que tínhamos algo especial.",
    author: "Equipe Tech Assist",
    phase: "O Primeiro Sucesso"
  },
  {
    image: "/story-4-future.jpg",
    quote: "Hoje, nossa IA processa milhares de conversas diariamente, aprendendo e evoluindo a cada interação. Transformamos a frustração de uma pequena empresa em uma solução que revoluciona o atendimento automatizado. E isso é apenas o começo da nossa jornada.",
    author: "Equipe Tech Assist",
    phase: "O Presente e Futuro"
  }
]

export function AboutUsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre <span className="bg-gradient-tech bg-clip-text text-transparent">Nós</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubra como um desafio cotidiano se transformou na solução que revoluciona o atendimento automatizado
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {storySlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center p-6 story-slide-enter">
                    {/* Imagem */}
                    <div className="order-2 md:order-1">
                      <div className="story-image relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                        <img
                          src={slide.image}
                          alt={slide.phase}
                          className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="order-1 md:order-2 space-y-6">
                      <div className="story-phase-badge inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        {slide.phase}
                      </div>
                      
                      <div className="story-content story-quote relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/30 transform rotate-180" />
                        <blockquote className="text-lg md:text-xl leading-relaxed text-foreground/90 font-medium italic pl-6 pr-6">
                          {slide.quote}
                        </blockquote>
                        <Quote className="absolute -bottom-2 -right-2 w-8 h-8 text-primary/30" />
                      </div>

                      <div className="story-author flex items-center gap-3 pt-4">
                        <div className="w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-primary font-bold text-lg">
                            {slide.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{slide.author}</p>
                          <p className="text-sm text-muted-foreground">Tech Assist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative translate-y-0 translate-x-0 hover:scale-105 transition-transform" />
              <CarouselNext className="relative translate-y-0 translate-x-0 hover:scale-105 transition-transform" />
            </div>
          </Carousel>

          {/* Indicadores de slide */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index + 1 === current
                    ? "bg-primary scale-125"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Contador de slides */}
          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">
              {current} de {count}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}