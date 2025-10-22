
import HeroWithBreadcrumb from "../components/navigation/HeroWithBreadcrumb";
import GallerySection from "../sections/home/GallerySection";

export default function AboutPage() {

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Empresa" },
    { label: "Nosotros" }, // último item no necesita href
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">

      <HeroWithBreadcrumb
        title="Acerca de nosotros"
        breadcrumbItems={breadcrumb}
        imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
      />

      <GallerySection />

    </main>
  );
}
