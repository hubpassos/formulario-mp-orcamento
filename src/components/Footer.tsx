import { Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Horário de Atendimento
            </h4>
            <div className="flex items-start gap-3 text-white/80 text-sm">
              <Clock className="h-4 w-4 mt-0.5 text-white/50 flex-shrink-0" />
              <div className="space-y-0.5">
                <p>Seg a Sex: 8:30h às 17:30h</p>
                <p>Sáb: 9h às 13h</p>
                <p>Dom: Fechado</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
              Redes Sociais
            </h4>
            <a
              href="https://www.instagram.com/moveispassos_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <Instagram className="h-4 w-4" />
              @moveispassos_
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Móveis Passos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
