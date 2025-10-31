import React, { useState } from "react";
import GalleryModal from "./GalleryModal";
import GallerySection from "./GallerySection";
import { FaImages } from "react-icons/fa";

const sectionsData = [
  {
    key: "bodas",
    title: "bodas",
    images: [
      "/images/bodas/boda-1.jpg",
      "/images/bodas/boda-2.jpg",
      "/images/bodas/boda-3.jpg",
      "/images/bodas/boda-4.jpg",
    ],
  },
  {
    key: "eventos",
    title: "eventos",
    images: [
      "/images/eventos/evento-1.jpg",
      "/images/eventos/evento-2.jpg",
      "/images/eventos/evento-3.jpg",
      "/images/eventos/evento-4.jpg",
    ],
  },
  {
    key: "comidas",
    title: "comidas",
    images: [
      "/images/comidas/comida-1.jpg",
      "/images/comidas/comida-2.jpg",
      "/images/comidas/comida-3.jpg",
      "/images/comidas/comida-4.jpg",
    ],
  },
  // agregá más secciones acá
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  // arreglo combinado para navegación lineal en modal (opcional)
  /*  const flattened = useMemo(
    () => sectionsData.map(s => s.images).flat(),
    []
  ); */

  const openModal = (sectionIdx, imgIdx) => {
    setCurrentSection(sectionIdx);
    setCurrentIndex(imgIdx);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const goNext = () => {
    const images = sectionsData[currentSection].images;
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // si querés rotar entre secciones (opcional), podés hacer:
      // pasar a siguiente sección si existe
      if (currentSection < sectionsData.length - 1) {
        setCurrentSection(currentSection + 1);
        setCurrentIndex(0);
      }
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      if (currentSection > 0) {
        const prevSection = currentSection - 1;
        const prevImgs = sectionsData[prevSection].images;
        setCurrentSection(prevSection);
        setCurrentIndex(prevImgs.length - 1);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Sección introductoria a la galería */}
      <section className="mb-16 flex flex-col items-center text-center px-4 sm:px-6 lg:px-0">
        {/* Título */}
        <h1 className="text-4xl md:text-4xl font-italiana font-bold uppercase mb-2">
          nuestra galeria
        </h1>

        {/* Línea decorativa */}
        <div className="bg-dorado h-2 w-16 sm:w-20 mb-6"></div>

        {/* Mensaje */}
        <p className="text-gray-700 font-lora text-lg md:text-xl font-semibold max-w-3xl">
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
          src={sectionsData[currentSection].images[currentIndex]}
          goNext={goNext}
          goPrev={goPrev}
          caption={`${sectionsData[currentSection].title} — ${
            currentIndex + 1
          } / ${sectionsData[currentSection].images.length}`}
        />
      )}
    </div>
  );
}
