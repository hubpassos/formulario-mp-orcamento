import { Card } from "@/components/ui/card";
import kitchenImage from "@/assets/custom-kitchen.jpg";
import bedroomImage from "@/assets/bedroom-set.jpg";
import diningImage from "@/assets/dining-room.jpg";

const projects = [
  {
    title: "Cozinha Moderna",
    description: "Projeto completo com ilha central e marcenaria em madeira nobre",
    image: kitchenImage,
    category: "Cozinha"
  },
  {
    title: "Dormitório Casal",
    description: "Guarda-roupa amplo com cama box integrada e criados suspensos",
    image: bedroomImage,
    category: "Dormitório"
  },
  {
    title: "Sala de Jantar",
    description: "Mesa extensível para 8 lugares com buffet e cristaleira combinando",
    image: diningImage,
    category: "Sala de Jantar"
  }
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja alguns dos nossos trabalhos realizados com amor e dedicação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-wood transition-all duration-500 hover:-translate-y-2 border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            + de <span className="font-bold text-primary">200 projetos</span> realizados com sucesso
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;