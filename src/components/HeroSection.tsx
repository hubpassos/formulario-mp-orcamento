import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 pt-20 md:py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 glass-effect border border-white/20 mb-6">
              <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-medium text-white/90 tracking-wide uppercase">
                Referência em móveis para salão
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] text-balance"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Transforme seu
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
                salão de beleza
              </span>
            </h1>

            <p className="text-base md:text-lg text-white/75 mb-8 max-w-lg leading-relaxed">
              Móveis de alto padrão que unem design, conforto e durabilidade.
              Projetos sob medida para elevar a experiência do seu espaço.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="group bg-white text-primary hover:bg-white/90 border-0 font-semibold text-sm px-6 h-12 rounded-xl shadow-lg"
              >
                Solicitar Orçamento Gratuito
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-white">10K+</p>
                <p className="text-xs text-white/50">Salões transformados</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
              <div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-xs text-white/50">Anos de experiência</p>
              </div>
              <div className="w-px h-10 bg-white/15" />
                            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
