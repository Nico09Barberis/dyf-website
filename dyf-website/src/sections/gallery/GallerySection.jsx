import { memo, useCallback } from "react";
import { FaCameraRetro } from "react-icons/fa";

function GallerySection({ title, images = [], onImageClick }) {
  const handleClick = useCallback(
    (index) => {
      onImageClick?.(index);
    },
    [onImageClick]
  );

  return (
    <section className="mt-8 mb-12">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 border-l-4 border-dorado pl-3">
        <FaCameraRetro className="text-gray-800 text-2xl" aria-hidden />
        <h2 className="text-lg md:text-2xl font-marcellus font-semibold uppercase tracking-wide">
          {title}
        </h2>
      </div>

      {/* MOBILE → Carousel */}
      <div className="block md:hidden">
        <div
          className="
            flex 
            overflow-x-auto 
            snap-x 
            snap-mandatory 
            scroll-smooth 
            gap-3
          "
        >
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => handleClick(index)}
              className="
                min-w-full 
                snap-center 
                overflow-hidden 
                rounded-md
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-dorado
                cursor-zoom-in
              "
              aria-label={`${title} imagen ${index + 1}`}
            >
              <img
                src={image.src}
                alt={`${title} ${index + 1}`}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover block"
              />
            </button>
          ))}
        </div>
      </div>

      {/* DESKTOP → Grid */}
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => handleClick(index)}
            className="
              overflow-hidden 
              rounded-md
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-dorado
              cursor-zoom-in
            "
            aria-label={`${title} imagen ${index + 1}`}
          >
            <img
              src={image.src}
              alt={`${title} ${index + 1}`}
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 25vw"
              className="w-full aspect-[4/3] object-cover block"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

export default memo(GallerySection);
