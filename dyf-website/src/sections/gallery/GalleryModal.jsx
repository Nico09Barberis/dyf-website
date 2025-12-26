import { useEffect, memo } from "react";
import {
  IoClose,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

function GalleryModal({ src, onClose, goNext, goPrev, caption }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de imágenes"
      onClick={onClose}
    >
      {/* Contenedor interno para evitar cierre por propagación */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen */}
        <img
          src={src}
          alt={caption || "Imagen de la galería"}
          className="max-w-full max-h-screen p-2 md:p-4 object-contain select-none"
          draggable={false}
        />

        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-80 hover:opacity-100 transition"
          aria-label="Cerrar"
        >
          <IoClose size={24} />
        </button>

        {/* Anterior */}
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 text-white rounded-full opacity-80 hover:opacity-100 transition"
          aria-label="Imagen anterior"
        >
          <IoChevronBackOutline size={28} />
        </button>

        {/* Siguiente */}
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 text-white rounded-full opacity-80 hover:opacity-100 transition"
          aria-label="Imagen siguiente"
        >
          <IoChevronForwardOutline size={28} />
        </button>

        {/* Caption */}
        {caption && (
          <div className="absolute bottom-4 w-full text-center text-sm text-white/80 px-4">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(GalleryModal);
