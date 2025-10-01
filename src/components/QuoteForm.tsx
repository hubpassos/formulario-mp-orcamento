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
    phone: "",
    procedures: "",
    projectDetails: "",
    budget: "",
    timeline: "",
    location: ""
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
      phone: "",
      procedures: "",
      projectDetails: "",
      budget: "",
      timeline: "",
      location: ""
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
              Móveis Passos
              <span className="block text-3xl md:text-4xl text-primary mt-2">Móveis para Salão de Beleza</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforme seu espaço com móveis que unem conforto, design e durabilidade.
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Cidade/Estado</Label>
                  <Input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    placeholder="Ex: São Paulo - SP"
                    required
                    className="border-input focus:ring-ring"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="procedures">Procedimentos do Salão</Label>
                  <Textarea
                    id="procedures"
                    value={formData.procedures}
                    onChange={(e) => handleChange("procedures", e.target.value)}
                    placeholder="Descreva os procedimentos que você oferece no seu salão (ex: corte, escova, coloração, manicure, etc.)"
                    rows={3}
                    required
                    className="border-input focus:ring-ring resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectDetails">O que você deseja no orçamento?</Label>
                  <Textarea
                    id="projectDetails"
                    value={formData.projectDetails}
                    onChange={(e) => handleChange("projectDetails", e.target.value)}
                    placeholder="Ex: 3 cadeiras para cabeleireiro, 1 para maquiagem, 2 lavatórios..."
                    rows={4}
                    required
                    className="border-input focus:ring-ring resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Orçamento Estimado</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                      <SelectTrigger className="border-input focus:ring-ring">
                        <SelectValue placeholder="Selecione a faixa de orçamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ate-5k">Até R$ 5.000</SelectItem>
                        <SelectItem value="5k-10k">De R$ 5.000 a R$ 10.000</SelectItem>
                        <SelectItem value="acima-10k">Acima de R$ 10.000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Em qual prazo você pretende realizar essa compra?</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                      <SelectTrigger className="border-input focus:ring-ring">
                        <SelectValue placeholder="Selecione o prazo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="imediato">Imediato</SelectItem>
                        <SelectItem value="30-dias">Nos próximos 30 dias</SelectItem>
                        <SelectItem value="mais-2-meses">Mais de 2 meses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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