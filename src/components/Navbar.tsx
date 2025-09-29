import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Phone, Calculator } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-bold text-xl text-primary cursor-pointer hover:text-purple-light transition-colors"
            onClick={scrollToTop}
          >
            Móveis Premium Salão
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={scrollToTop}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Contato
            </button>
            <Button 
              onClick={() => scrollToSection('orcamento')}
              variant="premium"
              size="sm"
            >
              <Calculator className="h-4 w-4" />
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={scrollToTop}
                className="text-left text-foreground hover:text-primary transition-colors flex items-center gap-2 py-2"
              >
                <Home className="h-4 w-4" />
                Início
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('projetos')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-colors flex items-center gap-2 py-2"
              >
                <Phone className="h-4 w-4" />
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('orcamento')}
                variant="premium"
                size="sm"
                className="w-full"
              >
                <Calculator className="h-4 w-4" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;