import HeroWithBreadcrumb from "../../components/navigation/HeroWithBreadcrumb";
import FurnitureAdvantages from "../../sections/services/furniture/FurnitureAdvantages";
import FurnitureCatSection from "../../sections/services/furniture/FurnitureCatSection";
import FurnitureHeroSection from "../../sections/services/furniture/FurnitureHeroSection";
import FurnitureIncludesSection from "../../sections/services/furniture/FurnitureIncludesSection";
import FurnitureRentalProcess from "../../sections/services/furniture/FurnitureRentalProcess";
import HeroBanner from "../../sections/home/HeroBanner";

export default function FurniturePage() {
  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Alquiler de mobiliario" }, // último item no necesita href
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <HeroWithBreadcrumb
        title="Alquiler de mobiliario"
        breadcrumbItems={breadcrumb}
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      />

      <FurnitureHeroSection />

      <FurnitureCatSection />

      <FurnitureIncludesSection />

      <FurnitureRentalProcess />

       <HeroBanner
        title="¿Listo para organizar tu evento?"
        buttonText="Contactanos"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
      />

      <FurnitureAdvantages />

    </main>
  );
}
