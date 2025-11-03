import CarouselHome from "../components/common/CarouselHome";
import AboutSection from "../sections/home/AboutSection";
import ServicesSection from "../sections/home/ServicesSection";
import ClientsSection from "../sections/home/ClientsSection";
import HeroBanner from "../sections/home/HeroBanner";
import BlurCard from "../components/ui/BlurCard";
import GallerySection from "../sections/home/GallerySection";
import ProcessSection from "../sections/home/ProcessSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
import CountersSection from "../sections/home/CounterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <CarouselHome />

      <AboutSection />

      <CountersSection />

      <ServicesSection />

      <ClientsSection />

      <HeroBanner
        title="¿Necesitás asesoramiento inmediato?"
        buttonText="Hablá con nosotros"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
      />

      <BlurCard />

      <GallerySection />

      <ProcessSection />

      <TestimonialsSection />
    </main>
  );
}
