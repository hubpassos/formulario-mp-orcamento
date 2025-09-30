import { Card, CardContent } from "@/components/ui/card";
import { Clock, Instagram } from "lucide-react";

const ContactSection = () => {

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-4 text-purple-glow" />
              <h3 className="font-semibold mb-2">Horário</h3>
              <p className="text-sm opacity-90">
                Seg a Sex: 8:30h às 17:30h<br />
                Sáb: 9h às 13h<br />
                Dom: Fechado
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
            <CardContent className="p-6 text-center">
              <Instagram className="h-8 w-8 mx-auto mb-4 text-purple-glow" />
              <h3 className="font-semibold mb-2">Instagram</h3>
              <a 
                href="https://www.instagram.com/moveispassos_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm opacity-90 hover:opacity-100 transition-opacity underline"
              >
                @moveispassos_
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;