import HeroWithBreadcrumb from "../../components/navigation/HeroWithBreadcrumb";
import AboutSection from "../../sections/home/AboutSection";
import HeroBanner from "../../sections/home/HeroBanner";
import DecorationGallery from "../../sections/services/decoration/DecorationGallery";
import DecorationHero from "../../sections/services/decoration/DecorationHero";
import DecorationIncludes from "../../sections/services/decoration/DecorationIncludes";
import DecorationStyles from "../../sections/services/decoration/DecorationStyles";

export default function DecorationPage() {
  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Ambientación y decoración" }, // último item no necesita href
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <HeroWithBreadcrumb
        title="Ambientación y decoración"
        breadcrumbItems={breadcrumb}
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      />

      <DecorationHero />

      <DecorationStyles />

      <DecorationIncludes />

      <HeroBanner
        title="¿Listo para organizar tu evento?"
        buttonText="Contactanos"
        message="¡Hola! Me gustaría recibir más información sobre sus servicios."
        backgroundImage="/images/varias/varias.webp"
      />

      <DecorationGallery />

    </main>
  );
}
