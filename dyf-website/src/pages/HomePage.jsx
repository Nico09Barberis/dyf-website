import CarouselHome from "../components/common/CarouselHome";
import AboutSection from "../sections/home/AboutSection";
import ServicesSection from "../sections/home/ServicesSection";
import ClientsSection from "../sections/home/ClientsSection";
import HeroBanner from "../sections/home/HeroBanner";
import BlurCard from "../components/ui/BlurCard";
import GallerySection from "../sections/home/GallerySection";
import ProcessSection from "../sections/home/ProcessSection";
import HeroWithBreadcrumb from "../components/navigation/HeroWithBreadcrumb";

export default function HomePage() {

  const breadcrumb = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Eventos" }, // último item no necesita href
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">

      <HeroWithBreadcrumb
        title="Eventos & Decoración"
        breadcrumbItems={breadcrumb}
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      />

      <CarouselHome />

      <AboutSection />

      <ServicesSection />

      <ClientsSection />

      <HeroBanner />

      <BlurCard />

      <GallerySection />

      <ProcessSection />
      
    </main>
  );
}
