import { Card, CardContent } from "@/components/ui/card";
import { Home, ChefHat, Bed, Users, Hammer, Palette } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Móveis para Sala",
    description: "Estantes, racks, mesas de centro e sofás sob medida para criar o ambiente perfeito para sua família."
  },
  {
    icon: ChefHat,
    title: "Cozinhas Planejadas",
    description: "Projetos completos de cozinha com armários, bancadas e ilhas que otimizam espaço e funcionalidade."
  },
  {
    icon: Bed,
    title: "Dormitórios",
    description: "Guarda-roupas, camas, criados-mudos e penteadeiras que transformam seu quarto em um refúgio."
  },
  {
    icon: Users,
    title: "Salas de Jantar",
    description: "Mesas, cadeiras, buffets e cristaleiras para momentos especiais em família e com amigos."
  },
  {
    icon: Hammer,
    title: "Marcenaria Personalizada",
    description: "Projetos únicos e personalizados para atender suas necessidades específicas e estilo de vida."
  },
  {
    icon: Palette,
    title: "Design e Decoração",
    description: "Consultoria completa em design de interiores para harmonizar todos os elementos do ambiente."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em móveis sob medida para todos os ambientes da sua casa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-wood transition-all duration-300 hover:-translate-y-2 border-border/50"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-wood rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
      </div>
    </section>
  );
};

export default ServicesSection;