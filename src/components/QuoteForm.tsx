import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Send, Calculator, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (phone: string): boolean => {
    // Remove all non-digit characters
    const digitsOnly = phone.replace(/\D/g, '');
    
    // Check if it has 11 digits (DDD + 9 digits)
    if (digitsOnly.length !== 11) {
      setPhoneError("WhatsApp deve ter 11 dígitos (DDD + 9 números)");
      return false;
    }
    
    // Check if the third digit is 9
    if (digitsOnly[2] !== '9') {
      setPhoneError("O número deve começar com 9 após o DDD");
      return false;
    }
    
    setPhoneError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone before showing confirmation
    if (!validatePhone(formData.phone)) {
      return;
    }
    
    // Show confirmation dialog
    setShowConfirmDialog(true);
  };

  const confirmSubmit = async () => {
    setShowConfirmDialog(false);
    setIsSubmitting(true);

    try {
      // Save to Supabase database
      const { error } = await supabase
        .from('quote_requests')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            location: formData.location,
            procedures: formData.procedures,
            project_details: formData.projectDetails,
            budget: formData.budget,
            timeline: formData.timeline
          }
        ]);

      if (error) {
        console.error('Error saving quote request:', error);
        alert('Erro ao enviar orçamento. Por favor, tente novamente.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setShowSuccessDialog(true);

      // Reset form
      setFormData({
        name: "",
        phone: "",
        procedures: "",
        projectDetails: "",
        budget: "",
        timeline: "",
        location: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao enviar orçamento. Por favor, tente novamente.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === "phone") {
      setPhoneError("");
    }
  };

  return (
    <section id="orcamento" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Faça seu orçamento personalizado
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
                    <Label htmlFor="phone">WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="(13) 9 91892123"
                      required
                      className={`border-input focus:ring-ring ${phoneError ? 'border-red-500' : ''}`}
                    />
                    {phoneError && (
                      <p className="text-sm text-red-500">{phoneError}</p>
                    )}
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
                    <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)} required>
                      <SelectTrigger className="border-input focus:ring-ring">
                        <SelectValue placeholder="Selecione a faixa de orçamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">De R$ 5.000 a R$ 10.000</SelectItem>
                        <SelectItem value="10k-20k">De R$ 10.000 a R$ 20.000</SelectItem>
                        <SelectItem value="acima-20k">Acima de R$ 20.000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Em qual prazo você pretende realizar essa compra?</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)} required>
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

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar WhatsApp</DialogTitle>
            <DialogDescription>
              Por favor, confirme se o número de WhatsApp está correto. Entraremos em contato por este número.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-lg font-semibold text-center">{formData.phone}</p>
          </div>
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Corrigir
            </Button>
            <Button onClick={confirmSubmit} disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Confirmar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <DialogTitle className="text-center text-2xl">Orçamento Solicitado!</DialogTitle>
            <DialogDescription className="text-center text-base pt-4">
              Nossos especialistas irão preparar seu orçamento personalizado e entrarão em contato pelo WhatsApp informado em até 48 horas no máximo.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)} className="w-full">
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default QuoteForm;