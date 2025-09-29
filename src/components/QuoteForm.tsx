import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, Calculator } from "lucide-react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    budget: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Orçamento Solicitado!",
      description: "Entraremos em contato em até 24 horas para apresentar nossa proposta.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      description: "",
      budget: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="orcamento" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Solicite seu Orçamento
            </h2>
            <p className="text-xl text-muted-foreground">
              Conte-nos sobre seu projeto e receba uma proposta personalizada sem compromisso
            </p>
          </div>

          <Card className="shadow-wood border-border/50">
            <CardHeader className="bg-gradient-hero rounded-t-lg">
              <CardTitle className="text-2xl text-primary-foreground text-center">
                Formulário de Orçamento
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="border-input focus:ring-ring"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="border-input focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="border-input focus:ring-ring"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service">Tipo de Serviço</Label>
                    <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                      <SelectTrigger className="border-input focus:ring-ring">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cadeiras">Cadeiras de Corte/Escova</SelectItem>
                        <SelectItem value="lavatorios">Lavatórios Profissionais</SelectItem>
                        <SelectItem value="macas">Macas para Estética</SelectItem>
                        <SelectItem value="recepcao">Móveis de Recepção</SelectItem>
                        <SelectItem value="estacoes">Estações de Trabalho</SelectItem>
                        <SelectItem value="completo">Salão Completo</SelectItem>
                        <SelectItem value="reforma">Reforma/Modernização</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Orçamento Estimado</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                    <SelectTrigger className="border-input focus:ring-ring">
                      <SelectValue placeholder="Selecione a faixa de orçamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-25k">R$ 10.000 - R$ 25.000</SelectItem>
                      <SelectItem value="25k-50k">R$ 25.000 - R$ 50.000</SelectItem>
                      <SelectItem value="50k-100k">R$ 50.000 - R$ 100.000</SelectItem>
                      <SelectItem value="100k-200k">R$ 100.000 - R$ 200.000</SelectItem>
                      <SelectItem value="200k+">Acima de R$ 200.000</SelectItem>
                      <SelectItem value="conversar">Prefiro conversar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição do Projeto</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Descreva seu salão: quantas cadeiras precisa, tipo de serviços oferecidos, metragem do espaço, estilo desejado..."
                    rows={5}
                    required
                    className="border-input focus:ring-ring resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero"
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Solicitar Orçamento Gratuito
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;