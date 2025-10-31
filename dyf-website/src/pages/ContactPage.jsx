
import ContactForm from "../components/common/ContactForm";
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
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      />

      <ContactSection />
    </main>
  );
}
