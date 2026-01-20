import HeroWithBreadcrumb from "../../components/navigation/HeroWithBreadcrumb";
import AboutSection from "../../sections/home/AboutSection";
import HeroSection from "../../sections/services/tableware/HeroSection";
import TypesSection from "../../sections/services/tableware/TypesSection";

export default function TablewarePage() {
  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Alquiler de vajilla" }, // último item no necesita href
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      <HeroWithBreadcrumb
        title="Alquiler de vajilla"
        breadcrumbItems={breadcrumb}
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      />

      <HeroSection />

      <TypesSection />

      <AboutSection />

    </main>
  );
}
