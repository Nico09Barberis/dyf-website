import React, { useState } from "react";
import GalleryModal from "./GalleryModal";
import GallerySection from "./GallerySection";

const sectionsData = [
  {
    key: "bodas",
    title: "bodas",
    images: [
      { src: "/images/bodas/boda-1.jpg", caption: "Ceremonia al aire libre" },
      { src: "/images/bodas/boda-2.jpg", caption: "Recepción con estilo" },
      { src: "/images/bodas/boda-3.jpg", caption: "Decoración floral" },
      { src: "/images/bodas/boda-4.jpg", caption: "Baile de los novios" },
    ],
  },
  {
    key: "eventos",
    title: "eventos",
    images: [
      { src: "/images/eventos/evento-1.jpg", caption: "Show en vivo" },
      { src: "/images/eventos/evento-2.jpg", caption: "Ambiente nocturno" },
      { src: "/images/eventos/evento-3.jpg", caption: "Brindis con amigos" },
      { src: "/images/eventos/evento-4.jpg", caption: "Celebración especial" },
    ],
  },
  {
    key: "comidas",
    title: "comidas",
    images: [
      { src: "/images/comidas/comida-1.jpg", caption: "Entrada gourmet" },
      { src: "/images/comidas/comida-2.jpg", caption: "Plato principal" },
      { src: "/images/comidas/comida-3.jpg", caption: "Postre artesanal" },
      { src: "/images/comidas/comida-4.jpg", caption: "Buffet variado" },
    ],
  },
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
          src={sectionsData[currentSection].images[currentIndex].src}
          goNext={goNext}
          goPrev={goPrev}
          caption={sectionsData[currentSection].images[currentIndex].caption}
        />
      )}
    </div>
  );
}
