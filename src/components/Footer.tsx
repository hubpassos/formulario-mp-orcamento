import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wood-dark text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-2xl mb-4 text-amber-glow">Móveis Premium</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Há mais de 15 anos criando móveis únicos e personalizados para transformar 
              sua casa em um lar especial. Qualidade, design e atendimento diferenciado.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <Heart className="h-4 w-4 text-amber-glow" />
              Feito com amor em São Paulo
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-glow">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-glow mt-0.5 flex-shrink-0" />
                <div>
                  <p>Rua dos Móveis, 123</p>
                  <p>São Paulo - SP, CEP: 01234-567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-glow flex-shrink-0" />
                <div>
                  <p>(11) 99999-9999</p>
                  <p>(11) 3333-4444</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-glow flex-shrink-0" />
                <div>
                  <p>contato@moveis.com.br</p>
                  <p>orcamento@moveis.com.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-amber-glow">Horário de Funcionamento</h4>
            <div className="space-y-2 text-primary-foreground/80 mb-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-amber-glow flex-shrink-0" />
                <div>
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2 text-amber-glow">Nossos Serviços</h5>
              <ul className="text-sm text-primary-foreground/70 space-y-1">
                <li>• Móveis sob medida</li>
                <li>• Cozinhas planejadas</li>
                <li>• Dormitórios completos</li>
                <li>• Design de interiores</li>
                <li>• Marcenaria personalizada</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Móveis Premium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;