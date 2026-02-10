import { useState, useCallback } from "react";
import GalleryModal from "./GalleryModal";
import GallerySection from "./GallerySection";

const sectionsData = [
  {
    key: "eventos-celebraciones-integrales",
    title: "eventos & celebraciones integrales",
    images: [
      { src: "/images/galery/fullEvents/fullEvent-1.webp", caption: "Ceremonia al aire libre" },
      { src: "/images/galery/fullEvents/fullEvent-2.webp", caption: "Recepción con estilo"},
      { src: "/images/galery/fullEvents/fullEvent-3.webp", caption: "Decoración floral" },
      { src: "/images/galery/fullEvents/fullEvent-4.webp", caption: "Baile de los novios" },
    ],
  },
  {
    key: "decoracion",
    title: "decoración",
    images: [
      { src: "/images/decGallery/decGallery1.webp", caption: "Show en vivo" },
      { src: "/images/decGallery/decGallery2.webp", caption: "Ambiente nocturno"},
      { src: "/images/decGallery/decGallery3.webp", caption: "Brindis con amigos" },
      { src: "/images/decGallery/decGallery4.webp", caption: "Celebración especial" },
    ],
  },
  {
    key: "mobiliario",
    title: "mobiliario",
    images: [
      { src: "/images/galery/furniture/furniture-1.webp", caption: "Entrada gourmet" },
      { src: "/images/galery/furniture/furniture-2.webp", caption: "Plato principal" },
      { src: "/images/galery/furniture/furniture-3.webp", caption: "Postre artesanal" },
      { src: "/images/galery/furniture/furniture-4.webp", caption: "Buffet variado" },
    ],
  },
  {
    key: "vajilla",
    title: "vajilla",
    images: [
      { src: "/images/galery/tableware/tableware-1.webp", caption: "Entrada gourmet" },
      { src: "/images/galery/tableware/tableware-2.webp", caption: "Plato principal" },
      { src: "/images/galery/tableware/tableware-3.webp", caption: "Postre artesanal" },
      { src: "/images/galery/tableware/tableware-4.webp", caption: "Buffet variado" },
    ],
  },
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const currentImages = sectionsData[currentSection].images;
  const currentImage = currentImages[currentIndex];

  const openModal = useCallback((sectionIdx, imgIdx) => {
    setCurrentSection(sectionIdx);
    setCurrentIndex(imgIdx);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex < currentImages.length - 1) {
      setCurrentIndex((i) => i + 1);
      return;
    }

    if (currentSection < sectionsData.length - 1) {
      setCurrentSection((s) => s + 1);
      setCurrentIndex(0);
    }
  }, [currentIndex, currentImages.length, currentSection]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      return;
    }

    if (currentSection > 0) {
      const prevSection = currentSection - 1;
      const prevImages = sectionsData[prevSection].images;

      setCurrentSection(prevSection);
      setCurrentIndex(prevImages.length - 1);
    }
  }, [currentIndex, currentSection]);

  return (
    <div className="container mx-auto px-4 py-8 mt-12">
      <section className="mb-16 flex flex-col items-center text-center px-4 sm:px-6 lg:px-0">
        <h1 className="text-xl md:text-4xl font-marcellus font-semibold uppercase mb-2 text-azulOscuro">
          nuestra galeria
        </h1>

        <div className="h-2 w-20 mx-auto mb-4 bg-dorado" />

        <p className="text-gray-800 font-marcellus text-md md:text-lg max-w-3xl">
          Descubrí los momentos más especiales de nuestros eventos, la
          creatividad en nuestra barra de tragos y los detalles que hacen que
          cada experiencia sea única.
        </p>
      </section>

      {sectionsData.map((section, sIdx) => (
        <GallerySection
          key={section.key}
          title={section.title}
          images={section.images}
          onImageClick={(imgIdx) => openModal(sIdx, imgIdx)}
        />
      ))}

      {isOpen && (
        <GalleryModal
          onClose={closeModal}
          src={currentImage.src}
          caption={currentImage.caption}
          goNext={goNext}
          goPrev={goPrev}
        />
      )}
    </div>
  );
}
