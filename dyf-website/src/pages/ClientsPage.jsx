
import HeroWithBreadcrumb from "../components/navigation/HeroWithBreadcrumb";
import ClientCardSection from "../sections/bussines/ClientCardSection";
import ClientIntroSection from "../sections/bussines/ClientIntroSection";
import HeroBanner from "../sections/home/HeroBanner";
import TestimonialsSection from "../sections/home/TestimonialsSection";

export default function ClientsPage() {

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Empresa" },
    { label: "Clientes" }, // último item no necesita href
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">

      <HeroWithBreadcrumb
        title="Clientes"
        breadcrumbItems={breadcrumb}
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      />

      <ClientIntroSection />

      <ClientCardSection />

      <HeroBanner
        title="¿Necesitás asesoramiento inmediato?"
        buttonText="Hablá con nosotros"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
      />

      <TestimonialsSection />

    </main>
  );
}
