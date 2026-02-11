import CarouselHome from "../components/common/CarouselHome";
import HeroBanner from "../sections/home/HeroBanner";

import HomeAbout from "../sections/home/HomeAbout";
import HomeServices from "../sections/home/HomeServices";
import HomeCounter from "../sections/home/HomeCounter";
import HomeProcess from "../sections/home/HomeProcess";
import HomeGallery from "../sections/home/HomeGalley";
import HomeTestimonials from "../sections/home/HomeTestimonial";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      
      <CarouselHome />

      <HomeAbout />

      <HomeCounter />

      <HomeServices />

      <HeroBanner
        title="¿Necesitás asesoramiento inmediato?"
        buttonText="Hablá con nosotros"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="/images/bgPages/bgGallery.webp"
      />

      <HomeProcess />

      <HomeGallery />

      <HomeTestimonials />

    </main>
  );
}
