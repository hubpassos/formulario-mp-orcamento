import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import salonChairImage from "@/assets/salon-chair-premium.jpg";
import washbasinImage from "@/assets/salon-washbasin.jpg";
import treatmentBedImage from "@/assets/salon-treatment-bed.jpg";
import receptionImage from "@/assets/salon-reception.jpg";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Cadeira Premium",
    description: "Cadeira ergonômica para corte e escova com design sofisticado e máximo conforto",
    image: salonChairImage,
    category: "Cadeiras"
  },
  {
    title: "Lavatório Moderno",
    description: "Lavatório profissional com design elegante e funcionalidade superior",
    image: washbasinImage,
    category: "Lavatórios"
  },
  {
    title: "Maca para Estética",
    description: "Maca regulável e confortável para tratamentos faciais e corporais",
    image: treatmentBedImage,
    category: "Macas"
  },
  {
    title: "Recepção Premium",
    description: "Ambiente de recepção completo com móveis que transmitem sofisticação",
    image: receptionImage,
    category: "Recepção"
  }
];

const GallerySection = () => {
  const scrollToContact = () => {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Portfólio Premium
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Móveis que transformam salões em espaços de excelência e sofisticação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <p className="text-lg text-muted-foreground">
            + de <span className="font-bold text-primary">500 salões</span> equipados com nossos móveis premium
          </p>
          <Button 
            variant="premium" 
            size="lg" 
            onClick={scrollToContact}
            className="group"
          >
            Ver Seu Projeto Personalizado
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;