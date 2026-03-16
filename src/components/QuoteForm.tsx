import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Send, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { motion } from "framer-motion";

const quoteFormSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100).regex(/^[a-zA-ZÀ-ÿ\s]+$/, "Nome deve conter apenas letras"),
  phone: z.string().trim().regex(/^\d{11}$/, "WhatsApp deve ter 11 dígitos").refine((val) => val[2] === '9', "O número deve começar com 9 após o DDD"),
  location: z.string().trim().min(1, "Cidade/Estado é obrigatório").max(200),
  procedures: z.string().trim().min(1, "Procedimentos são obrigatórios").max(1000),
  projectDetails: z.string().trim().min(1, "Detalhes do projeto são obrigatórios").max(2000),
  budget: z.string().min(1, "Orçamento é obrigatório"),
  timeline: z.string().min(1, "Prazo é obrigatório"),
});

const WEBHOOK_URL = "https://api.datacrazy.io/v1/crm/api/crm/flows/webhooks/9177b699-0ad3-4539-b7c4-f706253d2be0/c14dc5d3-6eae-4a80-8839-38fb83b086f5";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "", phone: "", procedures: "", projectDetails: "", budget: "", timeline: "", location: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length !== 11) {
      setPhoneError("WhatsApp deve ter 11 dígitos (DDD + 9 números)");
      return false;
    }
    if (digitsOnly[2] !== '9') {
      setPhoneError("O número deve começar com 9 após o DDD");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) return;
    try {
      const cleanedPhone = formData.phone.replace(/\D/g, '');
      quoteFormSchema.parse({ ...formData, phone: cleanedPhone });
      setShowConfirmDialog(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Erro na validação do formulário");
      }
    }
  };

  const confirmSubmit = async () => {
    setShowConfirmDialog(false);
    setIsSubmitting(true);
    try {
      const cleanedPhone = formData.phone.replace(/\D/g, '');
      const sanitizedData = {
        name: formData.name.trim().slice(0, 100),
        phone: cleanedPhone,
        location: formData.location.trim().slice(0, 200),
        procedures: formData.procedures.trim().slice(0, 1000),
        project_details: formData.projectDetails.trim().slice(0, 2000),
        budget: formData.budget,
        timeline: formData.timeline,
      };

      // Save to database
      const { error } = await (supabase as any).from('quote_requests').insert([sanitizedData]);
      if (error) throw error;

      // Send to webhook (fire & forget)
      fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      }).catch((err) => console.error('Webhook error:', err));

      setShowSuccessDialog(true);
      setFormData({ name: "", phone: "", procedures: "", projectDetails: "", budget: "", timeline: "", location: "" });
    } catch (error) {
      toast.error("Erro ao enviar orçamento. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === "phone") setPhoneError("");
  };

  return (
    <section id="orcamento" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
              Orçamento gratuito
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Solicite seu orçamento
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Preencha o formulário e receba uma proposta personalizada em até 48h.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-card rounded-2xl shadow-card border border-border/40 overflow-hidden">
              <div className="bg-gradient-hero p-4 md:p-5">
                <h3 className="text-base md:text-lg font-semibold text-primary-foreground text-center">
                  Formulário de Orçamento
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="p-5 md:p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium">Nome Completo</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="h-11 rounded-xl border-input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium">WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="(13) 9 91892123"
                      required
                      className={`h-11 rounded-xl border-input ${phoneError ? 'border-destructive' : ''}`}
                    />
                    {phoneError && <p className="text-xs text-destructive">{phoneError}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="location" className="text-sm font-medium">Cidade/Estado</Label>
                  <Input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    placeholder="Ex: São Paulo - SP"
                    required
                    className="h-11 rounded-xl border-input"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="procedures" className="text-sm font-medium">Procedimentos do Salão</Label>
                  <Textarea
                    id="procedures"
                    value={formData.procedures}
                    onChange={(e) => handleChange("procedures", e.target.value)}
                    placeholder="Ex: corte, escova, coloração, manicure..."
                    rows={2}
                    required
                    className="rounded-xl border-input resize-none text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="projectDetails" className="text-sm font-medium">O que deseja no orçamento?</Label>
                  <Textarea
                    id="projectDetails"
                    value={formData.projectDetails}
                    onChange={(e) => handleChange("projectDetails", e.target.value)}
                    placeholder="Ex: 3 cadeiras para cabeleireiro, 1 para maquiagem, 2 lavatórios..."
                    rows={3}
                    required
                    className="rounded-xl border-input resize-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Orçamento Estimado</Label>
                    <Select value={formData.budget} onValueChange={(v) => handleChange("budget", v)} required>
                      <SelectTrigger className="h-11 rounded-xl border-input">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5k-10k">R$ 5.000 a R$ 10.000</SelectItem>
                        <SelectItem value="10k-20k">R$ 10.000 a R$ 20.000</SelectItem>
                        <SelectItem value="acima-20k">Acima de R$ 20.000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Prazo para compra</Label>
                    <Select value={formData.timeline} onValueChange={(v) => handleChange("timeline", v)} required>
                      <SelectTrigger className="h-11 rounded-xl border-input">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="imediato">Imediato</SelectItem>
                        <SelectItem value="30-dias">Próximos 30 dias</SelectItem>
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
                  className="w-full group rounded-xl h-12 text-sm"
                >
                  {isSubmitting ? "Enviando..." : (
                    <>
                      Solicitar Orçamento Gratuito
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Confirm Dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="rounded-2xl mx-4">
          <DialogHeader>
            <DialogTitle>Confirmar WhatsApp</DialogTitle>
            <DialogDescription>
              Entraremos em contato por este número. Está correto?
            </DialogDescription>
          </DialogHeader>
          <p className="text-lg font-semibold text-center py-3">{formData.phone}</p>
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)} className="rounded-xl">
              Corrigir
            </Button>
            <Button onClick={confirmSubmit} disabled={isSubmitting} className="rounded-xl">
              {isSubmitting ? "Enviando..." : "Confirmar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="rounded-2xl mx-4">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <DialogTitle className="text-center text-xl">Orçamento Solicitado!</DialogTitle>
            <DialogDescription className="text-center text-sm pt-2">
              Nossos especialistas prepararão seu orçamento personalizado e entrarão em contato pelo WhatsApp em até 48 horas.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowSuccessDialog(false)} className="w-full rounded-xl">
              Fechar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default QuoteForm;
