import HeroWithBreadcrumb from "../../components/navigation/HeroWithBreadcrumb";
import AboutSection from "../../sections/home/AboutSection";

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

      <AboutSection />

    </main>
  );
}
