import { useState, useEffect, useCallback, memo } from "react";
import {
  FaSearchPlus,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const images = [
  "/images/catFurniture/catDecoracion.webp",
  "/images/galery/fullEvents/fullEvent-2.webp",
  "/images/galery/tableware/tableware-3.webp",
  "/images/galery/furniture/furniture-2.webp",
  "/images/galery/furniture/furniture-3.webp",
  "/images/galery/tableware/tableware-4.webp",
  "/images/home/servHome2.webp",
  "/images/galery/tableware/tableware-1.webp",
];

function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((i) => (i + 1) % images.length);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((i) => (i - 1 + images.length) % images.length);
  }, []);

  // 🔥 Activar teclado SOLO cuando el modal está abierto
  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, handleClose, handleNext, handlePrev]);

  return (
    <section className="w-full content-visibility-auto">
      
      {/* Grid */}
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
              loading="lazy"
              decoding="async"
              className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
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

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <img
            src={images[selectedIndex]}
            alt="Ampliada"
            className="max-w-[90%] max-h-[85%] object-contain rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-3xl hover:text-gray-300"
          >
            <FaTimes />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-6 text-white text-4xl hover:text-gray-300"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-6 text-white text-4xl hover:text-gray-300"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default memo(HomeGallery);
