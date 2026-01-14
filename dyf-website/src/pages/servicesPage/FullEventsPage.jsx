import HeroWithBreadcrumb from "../../components/navigation/HeroWithBreadcrumb";
import AboutSection from "../../sections/home/AboutSection";

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

      <AboutSection />

    </main>
  );
}
