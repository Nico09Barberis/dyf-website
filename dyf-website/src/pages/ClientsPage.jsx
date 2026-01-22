import HeroWithBreadcrumb from "../components/navigation/HeroWithBreadcrumb";
import ClientsIntroSection from "../sections/bussines/clientsSections/ClientIntroSection";
import ClientsCatSection from "../sections/bussines/clientsSections/ClientsCatSection";
import ClientsGallerySection from "../sections/bussines/clientsSections/ClientsGallerySection";
import ClientTestimonialsSection from "../sections/bussines/clientsSections/ClientTestimonialSection";
import HeroBanner from "../sections/home/HeroBanner";

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
        imageUrl="../../public/images/bgPages/bgClients.webp"
      />

      <ClientsIntroSection />

      <ClientsCatSection />

      <ClientsGallerySection />

      <ClientTestimonialsSection />

    </main>
  );
}
