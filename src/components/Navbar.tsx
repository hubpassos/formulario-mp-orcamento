import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calculator } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const links = [
    { label: "Início", action: scrollToTop },
    { label: "Serviços", action: () => scrollToSection("servicos") },
    { label: "Produtos", action: () => scrollToSection("projetos") },
    { label: "Contato", action: () => scrollToSection("contato") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 glass-effect shadow-soft border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          <div
            className="font-bold text-lg tracking-tight cursor-pointer transition-colors"
            style={{ fontFamily: "'Playfair Display', serif" }}
            onClick={scrollToTop}
          >
            <span className={scrolled ? "text-primary" : "text-white"}>
              Móveis Passos
            </span>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={link.action}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("orcamento")}
              variant="hero"
              size="sm"
            >
              <Calculator className="h-4 w-4" />
              Orçamento
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 glass-effect border-b border-border/50 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={link.action}
                  className="text-left text-foreground hover:text-primary font-medium py-3 px-3 rounded-lg hover:bg-muted/50 transition-all text-sm"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="pt-2"
              >
                <Button
                  onClick={() => scrollToSection("orcamento")}
                  variant="hero"
                  size="sm"
                  className="w-full"
                >
                  <Calculator className="h-4 w-4" />
                  Solicitar Orçamento
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
