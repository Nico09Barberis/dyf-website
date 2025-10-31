import React from "react";
import { FaCameraRetro } from "react-icons/fa";

export default function GallerySection({ title, images = [], onImageClick }) {
  return (
    <section className="mt-8 mb-12">
      <div className="flex items-center gap-3 mb-4 border-l-4 border-dorado pl-3">
        <FaCameraRetro className="text-gray-800 text-2xl" />
        <span className="text-3xl font-italiana font-semibold uppercase tracking-wide">
          {title}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => onImageClick(i)}
            className="overflow-hidden rounded-md focus:outline-none transform hover:scale-[1.02] transition"
            aria-label={`${title} imagen ${i + 1}`}
          >
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full h-40 object-cover block"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
