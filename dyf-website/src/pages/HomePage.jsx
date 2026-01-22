import CarouselHome from "../components/common/CarouselHome";
import AboutSection from "../sections/home/AboutSection";
import ServicesSection from "../sections/home/ServicesSection";
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

      <HeroBanner
        title="¿Necesitás asesoramiento inmediato?"
        buttonText="Hablá con nosotros"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="../../public/images/varias/varias.webp"
      />

      <BlurCard />

      <GallerySection />

      <ProcessSection />

      <TestimonialsSection />
    </main>
  );
}
