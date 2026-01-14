import HeroWithBreadcrumb from "../components/navigation/HeroWithBreadcrumb";
import AboutSection from "../sections/home/AboutSection";
import HeroBanner from "../sections/home/HeroBanner";

export default function ServicesPage() {
  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Servicios" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <HeroWithBreadcrumb
        title="Servicios"
        breadcrumbItems={breadcrumb}
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      />

      <AboutSection />

      <HeroBanner
        title="¿Buscas ayuda ahora mismo?"
        buttonText="Contactanos"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
      />
    </main>
  );
}
