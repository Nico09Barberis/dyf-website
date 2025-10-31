import React, { useEffect } from "react";
import { IoClose, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export default function GalleryModal({ src, onClose, goNext, goPrev, caption }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // Evita scroll del body
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      {/* Imagen central */}
      <img
        src={src}
        alt={caption}
        className="max-w-full max-h-screen p-2 md:p-4 object-contain select-none"
      />

      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full opacity-80 hover:opacity-100 transition"
        aria-label="Cerrar"
      >
        <IoClose size={24} />
      </button>

      {/* Flecha izquierda */}
      <button
        onClick={goPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 text-white rounded-full opacity-80 hover:opacity-100 transition"
        aria-label="Anterior"
      >
        <IoChevronBackOutline size={28} />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={goNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/40 hover:bg-black/70 text-white rounded-full opacity-80 hover:opacity-100 transition"
        aria-label="Siguiente"
      >
        <IoChevronForwardOutline size={28} />
      </button>

      {/* Texto / caption */}
      <div className="absolute bottom-4 w-full text-center text-sm text-white/80">
        {caption}
      </div>
    </div>
  );
}
