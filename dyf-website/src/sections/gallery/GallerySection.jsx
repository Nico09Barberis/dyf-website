import React from "react";
import { FaCameraRetro, FaSearchPlus } from "react-icons/fa";

export default function GallerySection({ title, images = [], onImageClick }) {
  return (
    <section className="mt-8 mb-12">
      {/* Título de la sección */}
      <div className="flex items-center gap-3 mb-4 border-l-4 border-dorado pl-3">
        <FaCameraRetro className="text-gray-800 text-2xl" />
        <span className="text-3xl font-italiana font-semibold uppercase tracking-wide">
          {title}
        </span>
      </div>

      {/* Grid de imágenes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => onImageClick(i)}
            className="relative overflow-hidden rounded-md group focus:outline-none"
            aria-label={`${title} imagen ${i + 1}`}
          >
            {/* Imagen */}
            <img
              src={image.src}
              alt={image.caption || `${title} ${i + 1}`}
              className="w-full h-40 object-cover block transform group-hover:scale-105 transition duration-500"
              loading="lazy"
            />

            {/* Overlay (efecto hover con título individual) */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/60 text-white flex items-center justify-between px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <span className="text-md uppercase font-medium truncate">{image.caption}</span>
              <FaSearchPlus className="text-white/90 text-lg" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
