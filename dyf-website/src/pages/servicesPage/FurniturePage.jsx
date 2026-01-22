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
        imageUrl="../../../public/images/bgPages/bgFurniture.webp"
      />

      <FurnitureHeroSection />

      <FurnitureCatSection />

      <FurnitureIncludesSection />

      <FurnitureRentalProcess />

       <HeroBanner
        title="¿Listo para organizar tu evento?"
        buttonText="Contactanos"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="../../../public/images/varias/varias.webp"
      />

      <FurnitureAdvantages />

    </main>
  );
}
