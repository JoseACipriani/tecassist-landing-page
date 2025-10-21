import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { useToast } from "@/hooks/use-toast"
import { apiService, handleApiError, type ContactData } from "@/services/api"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isSubmitting) return
    
    setIsSubmitting(true)
    
    try {
      const contactData: ContactData = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim()
      }

      const response = await apiService.submitContact(contactData)
      
      if (response.success) {
        toast({
          title: "Mensagem enviada com sucesso!",
          description: response.message || "Entraremos em contato em breve para apresentar nossa solução.",
        })
        
        // Reset form
        setFormData({ name: '', phone: '', email: '' })
      } else {
        throw new Error(response.message || 'Erro ao enviar formulário')
      }
    } catch (error) {
      const errorMessage = handleApiError(error)
      toast({
        title: "Erro ao enviar mensagem",
        description: errorMessage,
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const formatPhone = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, '')
    
    // Aplica a máscara baseada no tamanho
    if (numbers.length <= 2) {
      return `(${numbers}`
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    
    if (name === 'phone') {
      const formattedPhone = formatPhone(value)
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container max-w-2xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entre em <span className="bg-gradient-tech bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pronto para revolucionar seu atendimento? Fale conosco e descubra como nossa IA pode transformar sua empresa.
          </p>
        </div>

        <Card className="shadow-xl border-border/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Solicite uma Demonstração</CardTitle>
            <CardDescription>
              Preencha os dados abaixo e nossa equipe entrará em contato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-border/50 focus:border-secondary"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-border/50 focus:border-secondary"
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-border/50 focus:border-secondary"
                  placeholder="seu@email.com"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}