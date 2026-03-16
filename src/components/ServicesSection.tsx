import { Scissors, Droplets, Bed, Users, Hand, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    icon: Scissors,
    title: "Cadeiras",
    description: "Cadeiras ergonômicas e elegantes para cabeleireiros.",
  },
  {
    icon: Droplets,
    title: "Lavatórios",
    description: "Design sofisticado com funcionalidade profissional.",
  },
  {
    icon: Bed,
    title: "Macas",
    description: "Reguláveis e confortáveis para tratamentos estéticos.",
  },
  {
    icon: Users,
    title: "Recepção",
    description: "Balcões e poltronas que criam a primeira impressão perfeita.",
  },
  {
    icon: Hand,
    title: "Manicure",
    description: "Mesas e cadeiras especializadas com design funcional.",
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById("orcamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-3">
            O que oferecemos
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Móveis de Alto Padrão
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Cada peça é projetada para transformar seu espaço com elegância e funcionalidade.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll cards */}
        <div className="flex md:hidden gap-3 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[260px] snap-center"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/40 h-full">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/40 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 h-full text-center">
                <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button variant="premium" size="lg" onClick={scrollToContact} className="group rounded-xl h-12">
            Solicitar Orçamento
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
