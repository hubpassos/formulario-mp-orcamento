import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import QuoteForm from "@/components/QuoteForm";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="servicos">
        <ServicesSection />
      </div>
      <div id="projetos">
        <GallerySection />
      </div>
      <QuoteForm />
      <div id="contato">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
