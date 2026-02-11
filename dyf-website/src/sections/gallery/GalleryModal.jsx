import { useEffect, memo } from "react";
import {
  IoClose,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

function GalleryModal({ src, onClose, goNext, goPrev }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          goNext();
          break;
        case "ArrowLeft":
          goPrev();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de imágenes"
      onClick={onClose}
    >
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen */}
        <img
          src={src}
          alt="Imagen de la galería"
          className="max-w-full max-h-screen p-4 object-contain select-none transition-opacity duration-300"
          draggable={false}
        />

        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 
                     bg-white/10 hover:bg-white/20 
                     text-white rounded-full 
                     transition"
          aria-label="Cerrar"
        >
          <IoClose size={26} />
        </button>

        {/* Anterior */}
        <button
          onClick={goPrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 
                     bg-white/10 hover:bg-white/20 
                     text-white rounded-full 
                     transition"
          aria-label="Imagen anterior"
        >
          <IoChevronBackOutline size={30} />
        </button>

        {/* Siguiente */}
        <button
          onClick={goNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 
                     bg-white/10 hover:bg-white/20 
                     text-white rounded-full 
                     transition"
          aria-label="Imagen siguiente"
        >
          <IoChevronForwardOutline size={30} />
        </button>
      </div>
    </div>
  );
}

export default memo(GalleryModal);
