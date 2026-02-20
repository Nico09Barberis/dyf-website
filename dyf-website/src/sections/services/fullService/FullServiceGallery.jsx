import React, { useState, useEffect, useCallback } from "react";
import {
  FaSearchPlus,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const images = [
  "/images/catFurniture/catDecoracion.webp",
  "/images/galery/fullEvents/fullEvent-7.webp",
  "/images/galery/fullEvents/fullEvent-2.webp",
  "/images/galery/fullEvents/fullEvent-6.webp",
  "../../../../public/images/galery/fullEvents/fullEvent-8.webp",
  "/images/galery/furniture/furniture-3.webp",
  "/images/home/servHome2.webp", 
  "/images/galery/fullEvents/fullEvent-5.webp",
];

const FullServiceGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = useCallback(() => setSelectedIndex(null), []);
  const handleNext = useCallback(
    () => setSelectedIndex((i) => (i + 1) % images.length),
    []
  );
  const handlePrev = useCallback(
    () => setSelectedIndex((i) => (i - 1 + images.length) % images.length),
    []
  );

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleClose, handleNext, handlePrev]);

  return (
    <section className="w-full pt-16 md:pt-20 bg-white">

      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16">
        <h2 className="text-xl md:text-4xl font-marcellus font-bold uppercase text-gray-900 mb-2">
          Nuestros eventos
        </h2>

        <div className="w-20 h-1.5 bg-dorado mx-auto mb-4"></div>

        <p className="font-marcellus text-gray-700 text-base md:text-xl leading-relaxed">
          Cada proyecto refleja planificación, estética y atención al detalle.
          Descubrí algunos de los eventos que diseñamos y coordinamos integralmente.
        </p>
      </div>

      {/* Galería */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-48 md:h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-dorado rounded-full p-3 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
                  <FaSearchPlus className="text-white text-md" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 transition-all duration-300"
          onClick={handleClose}
        >
          <img
            src={images[selectedIndex]}
            alt="Ampliada"
            className="max-w-[90%] max-h-[85%] object-contain rounded-lg shadow-2xl transition-transform duration-500 scale-100 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
          >
            <FaTimes />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 text-white text-4xl hover:text-gray-300 transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 text-white text-4xl hover:text-gray-300 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default FullServiceGallery;
