import React, { useState, useEffect, useCallback } from "react";
import {
  FaSearchPlus,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const images = [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=900&q=80",
];

const GallerySection = () => {
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

  // Cerrar con tecla Esc
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
    <section className="w-full my-12">
      {/* Galería sin separación */}
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

            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
              {/* Ícono aparece solo al hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-yellow-400 rounded-full p-3 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110">
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
          {/* Imagen ampliada */}
          <img
            src={images[selectedIndex]}
            alt="Ampliada"
            className="max-w-[90%] max-h-[85%] object-contain rounded-lg shadow-2xl transition-transform duration-500 scale-100 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Botón Cerrar */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300 transition"
          >
            <FaTimes />
          </button>

          {/* Navegación izquierda */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 text-white text-4xl hover:text-gray-300 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Navegación derecha */}
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

export default GallerySection;
