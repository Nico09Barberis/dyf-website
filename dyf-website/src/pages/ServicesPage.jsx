import HeroWithBreadcrumb from "../components/navigation/HeroWithBreadcrumb";
import HeroBanner from "../sections/home/HeroBanner";
import ServicesIntroSection from "../sections/services/ServicesIntroSection";
import ServicesZigZagSection from "../sections/services/ServiceZigZagSection";
import WhyChooseUsSection from "../sections/services/WhyChooseUsSection";
import MiniFAQSection from "../sections/services/MiniFAQSection";

export default function ServicesPage() {
  const breadcrumb = [{ label: "Home", href: "/" }, { label: "Servicios" }];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <HeroWithBreadcrumb
        title="Servicios"
        breadcrumbItems={breadcrumb}
        imageUrl="/images/galery/fullEvents/fullEvent-2.webp"
      />

      <ServicesIntroSection />

      <ServicesZigZagSection />

      <WhyChooseUsSection />

      <HeroBanner
        title="¿Necesitas asesoramiento para tu evento?"
        buttonText="Escríbenos"
        message="Hola, quisiera conocer más detalles sobre los servicios que ofrecen."
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
      />

      <MiniFAQSection />

    </main>
  );
}
