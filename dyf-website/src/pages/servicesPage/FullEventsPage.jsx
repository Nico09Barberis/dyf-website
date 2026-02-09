import HeroWithBreadcrumb from "../../components/navigation/HeroWithBreadcrumb";
import FullServiceHero from "../../sections/services/fullService/FullServiceHero";
import PlanningProcess from "../../sections/services/fullService/FullServiceProcess";
import FullServiceScope from "../../sections/services/fullService/FullServiceScope";
import HeroBanner from "../../sections/home/HeroBanner";

export default function FullEventsPage() {
  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Organización integral de eventos" }, // último item no necesita href
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <HeroWithBreadcrumb
        title="Organización integral de eventos"
        breadcrumbItems={breadcrumb}
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      />

      <FullServiceHero />

      <FullServiceScope />

      <PlanningProcess />

      <HeroBanner
        title="¿Listo para organizar tu evento?"
        buttonText="Contactanos"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="/images/varias/varias.webp"
      />


    </main>
  );
}
