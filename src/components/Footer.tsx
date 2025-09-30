import { Heart, Clock, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Olá! Vim do formulário e gostaria de um orçamento para móveis de salão de beleza.");
    window.open(`https://wa.me/5587991342364?text=${message}`, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-2xl mb-4 text-purple-glow">Móveis Passos</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Transformando espaços com móveis premium para salões de beleza. 
              Conforto, design e durabilidade que valorizam sua marca.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Heart className="h-4 w-4 text-purple-glow" />
              Móveis para Salão de Beleza
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-purple-glow">Horário</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-purple-glow flex-shrink-0" />
                <div>
                  <p>Seg a Sex: 8:30h às 17:30h</p>
                  <p>Sáb: 9h às 13h</p>
                  <p>Dom: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-purple-glow">Conecte-se Conosco</h4>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/moveispassos_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5 text-purple-glow flex-shrink-0" />
                <span>@moveispassos_</span>
              </a>
              
              <Button 
                onClick={openWhatsApp}
                variant="secondary"
                size="sm"
                className="w-full group"
              >
                <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Móveis Passos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;