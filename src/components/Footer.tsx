import { Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Horário</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-white flex-shrink-0" />
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
            <h4 className="font-semibold text-lg mb-4 text-white">Conecte-se Conosco</h4>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/moveispassos_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5 text-white flex-shrink-0" />
                <span>@moveispassos_</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Móveis Passos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;