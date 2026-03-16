import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import cadeiraNature from "@/assets/cadeira-nature.jpg";
import cadeiraLisboa from "@/assets/cadeira-lisboa.jpg";
import lavatorioVogue from "@/assets/lavatorio-vogue.jpg";

const products = [
  {
    title: "Cadeira Nature",
    description: "Conforto e ergonomia que elevam cada atendimento.",
    image: cadeiraNature,
    tag: "Cadeiras",
  },
  {
    title: "Cadeira Lisboa",
    description: "Elegância e funcionalidade para qualquer ambiente.",
    image: cadeiraLisboa,
    tag: "Cadeiras",
  },
  {
    title: "Lavatório Vogue",
    description: "Modernidade e praticidade a cada lavagem.",
    image: lavatorioVogue,
    tag: "Lavatórios",
  },
];

const GallerySection = () => {
  const scrollToContact = () => {
    document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
            Portfólio
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Peças que transformam espaços e elevam experiências
          </p>
        </motion.div>

        {/* Mobile: full-width stacked cards */}
        <div className="flex flex-col md:hidden gap-4 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-white/20 glass-effect text-white text-xs font-medium rounded-full border border-white/20">
                    {product.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {product.title}
                  </h3>
                  <p className="text-white/70 text-sm">{product.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2 bg-card border border-border/40">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {product.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Mais de{" "}
            <span className="font-bold text-primary">10 mil espaços</span>{" "}
            transformados em todo o Brasil
          </p>
          <Button variant="premium" size="lg" onClick={scrollToContact} className="group rounded-xl h-12">
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
