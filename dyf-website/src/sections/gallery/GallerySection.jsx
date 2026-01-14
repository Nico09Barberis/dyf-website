import { memo, useCallback } from "react";
import { FaCameraRetro, FaSearchPlus } from "react-icons/fa";

function GallerySection({ title, images = [], onImageClick }) {
  const handleClick = useCallback(
    (index) => {
      onImageClick(index);
    },
    [onImageClick]
  );

  return (
    <section className="mt-8 mb-12">
      {/* Título */}
      <div className="flex items-center gap-3 mb-4 border-l-4 border-dorado pl-3">
        <FaCameraRetro className="text-gray-800 text-2xl" aria-hidden />
        <h2 className="text-xl md:text-3xl font-italiana font-semibold uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => handleClick(index)}
            className="relative overflow-hidden rounded-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-dorado"
            aria-label={`${title} imagen ${index + 1}`}
          >
            {/* Imagen */}
            <img
              src={image.src}
              alt={image.caption || `${title} ${index + 1}`}
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              className="w-full aspect-[4/3] object-cover block transform group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-black/60 text-white flex items-center justify-between px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
              <span className="text-sm uppercase font-medium truncate">
                {image.caption}
              </span>
              <FaSearchPlus className="text-white/90 text-lg shrink-0" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export default memo(GallerySection);
