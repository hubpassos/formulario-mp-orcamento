import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para móveis sob medida.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-wood text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Estamos prontos para transformar seus sonhos em realidade. 
            Entre em contato conosco e vamos conversar sobre seu projeto!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
            <CardContent className="p-6 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-4 text-amber-glow" />
              <h3 className="font-semibold mb-2">Endereço</h3>
              <p className="text-sm opacity-90">
                Rua dos Móveis, 123<br />
                São Paulo - SP<br />
                CEP: 01234-567
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-amber-glow" />
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-sm opacity-90">
                (11) 99999-9999<br />
                (11) 3333-4444
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-amber-glow" />
              <h3 className="font-semibold mb-2">E-mail</h3>
              <p className="text-sm opacity-90">
                contato@moveis.com.br<br />
                orcamento@moveis.com.br
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-4 text-amber-glow" />
              <h3 className="font-semibold mb-2">Horário</h3>
              <p className="text-sm opacity-90">
                Seg a Sex: 8h às 18h<br />
                Sáb: 8h às 12h<br />
                Dom: Fechado
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={openWhatsApp}
            variant="secondary"
            size="lg"
            className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Falar pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;