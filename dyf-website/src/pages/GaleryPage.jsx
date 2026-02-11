
import HeroWithBreadcrumb from "../components/navigation/HeroWithBreadcrumb";
import Gallery from "../sections/gallery/Gallery";

export default function GaleryPage() {

  const breadcrumb = [
    { label: "Home", href: "/" },
    { label: "Galeria" },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">

      <HeroWithBreadcrumb
        title="Galeria de imagenes"
        breadcrumbItems={breadcrumb}
        imageUrl="/images/bgPages/bgGallery.webp"
      />

      <Gallery />

    </main>
  );
}
