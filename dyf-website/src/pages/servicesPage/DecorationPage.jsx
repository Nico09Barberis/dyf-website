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
        imageUrl="../../../public/images/home/slide4.webp"
      />

      <DecorationHero />

      <DecorationStyles />

      <DecorationIncludes />

      <HeroBanner
        title="Diseñamos experiencias únicas"
        buttonText="Hablemos"
        message="Hola, quisiera conocer más sobre sus propuestas de ambientación."
        backgroundImage="/images/varias/varias.webp"
      />

      <DecorationGallery />

    </main>
  );
}
