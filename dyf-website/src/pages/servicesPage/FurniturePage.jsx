import HeroWithBreadcrumb from "../../components/navigation/HeroWithBreadcrumb";
import FurnitureAdvantages from "../../sections/services/furniture/FurnitureAdvantages";
import FurnitureCatSection from "../../sections/services/furniture/FurnitureCatSection";
import FurnitureIncludes from "../../sections/services/furniture/FurnitureIncludes";
import FurnitureHeroSection from "../../sections/services/furniture/FurnitureHeroSection";
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
        imageUrl="/images/bgPages/bgFurniture.webp"
      />

      <FurnitureHeroSection />

      <FurnitureCatSection />

      <FurnitureIncludes />

      <FurnitureRentalProcess />

      <HeroBanner
        title="Creamos espacios que se sienten"
        buttonText="Quiero asesoramiento"
        message="Hola, me gustaría recibir asesoramiento para la ambientación de mi evento."
        backgroundImage="/images/varias/varias.webp"
      />

      <FurnitureAdvantages />

    </main>
  );
}
