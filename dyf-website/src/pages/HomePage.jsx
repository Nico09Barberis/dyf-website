import { Link } from "react-router-dom";
import CarouselHome from "../components/common/CarouselHome";
import AboutSection from "../sections/home/AboutSection";
import ServicesSection from "../sections/home/ServicesSection";
import ClientsSection from "../sections/home/ClientsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <CarouselHome />

      <AboutSection />

      <ServicesSection />

      <ClientsSection />
    </main>
  );
}
