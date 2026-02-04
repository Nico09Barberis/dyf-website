
import HeroWithBreadcrumb from "../components/navigation/HeroWithBreadcrumb";
import ContactSection from "../sections/contact/ContactSection";

export default function ContactPage() {

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Contacto" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">

      <HeroWithBreadcrumb
        title="Contacto"
        breadcrumbItems={breadcrumb}
        imageUrl="/images/bgPages/bgContact.webp"
      />

      <ContactSection />
    </main>
  );
}
