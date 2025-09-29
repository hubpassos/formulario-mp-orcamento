import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Droplets, Bed, Users, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Cadeiras de Corte",
    description: "Cadeiras ergonômicas e elegantes para cabelereiros. Conforto superior para longas jornadas de trabalho."
  },
  {
    icon: Droplets,
    title: "Lavatórios Premium",
    description: "Lavatórios modernos com design sofisticado e funcionalidade profissional para lavagem de cabelos."
  },
  {
    icon: Bed,
    title: "Macas para Estética",
    description: "Macas reguláveis e confortáveis para tratamentos faciais, massagens e procedimentos estéticos."
  },
  {
    icon: Users,
    title: "Recepção Completa",
    description: "Balcões de recepção, poltronas de espera e móveis que criam a primeira impressão perfeita."
  },
  {
    icon: Sparkles,
    title: "Estações de Trabalho",
    description: "Penteadeiras com espelhos iluminados, gavetas organizadoras e design que inspira profissionalismo."
  },
  {
    icon: ArrowRight,
    title: "Projetos Completos",
    description: "Planejamento total do seu salão: layout, móveis customizados e ambientação premium."
  }
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Móveis Premium para Salão de Beleza
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Especializados em móveis profissionais que elevam a experiência dos seus clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="premium" 
            size="lg" 
            onClick={scrollToContact}
            className="group"
          >
            Solicitar Orçamento Personalizado
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;