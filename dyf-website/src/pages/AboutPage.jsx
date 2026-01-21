import HeroWithBreadcrumb from "../components/navigation/HeroWithBreadcrumb";
import InfoSection from "../sections/bussines/InfoSection";
import PresentationSection from "../sections/bussines/PresentationSection";
import ValuesSection from "../sections/bussines/ValuesSection";
import HeroBanner from "../sections/home/HeroBanner";

export default function AboutPage() {
  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Empresa" },
    { label: "Nosotros" }, // último item no necesita href
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <HeroWithBreadcrumb
        title="Acerca de nosotros"
        breadcrumbItems={breadcrumb}
        imageUrl="/images/bgPages/bgAbout.webp"
      />

      <PresentationSection />

      <InfoSection />
      
      <HeroBanner
        title="¿Buscas ayuda ahora mismo?"
        buttonText="Contactanos"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
      />


      <ValuesSection />

    </main>
  );
}
