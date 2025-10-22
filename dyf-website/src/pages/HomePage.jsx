import CarouselHome from "../components/common/CarouselHome";
import AboutSection from "../sections/home/AboutSection";
import ServicesSection from "../sections/home/ServicesSection";
import ClientsSection from "../sections/home/ClientsSection";
import HeroBanner from "../sections/home/HeroBanner";
import BlurCard from "../components/ui/BlurCard";
import GallerySection from "../sections/home/GallerySection";
import ProcessSection from "../sections/home/ProcessSection";
import SliderCards from "../components/common/SliderCards";
import TestimonialsSection from "../sections/home/TestimonialsSection";

export default function HomePage() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">

      <CarouselHome />

      <AboutSection />

      <ServicesSection />

      <ClientsSection />

      <HeroBanner />

      <BlurCard />

      <GallerySection />

      <ProcessSection />

      <TestimonialsSection />

    </main>
  );
}
