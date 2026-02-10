import React from "react";

const images = [
  {
    src: "/images/decGallery/decGallery1.webp",
    alt: "Ambientación de evento elegante",
  },
  {
    src: "/images/decGallery/decGallery2.webp",
    alt: "Decoración moderna con flores",
  },
  {
    src: "/images/decGallery/decGallery3.webp",
    alt: "Ambientación minimalista",
  },
  {
    src: "/images/decGallery/decGallery4.webp",
    alt: "Decoración personalizada para eventos",
  },
  {
    src: "/images/decGallery/decGallery5.webp",
    alt: "Detalles premium en ambientación",
  },
];

const DecorationGallery = () => {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-xl md:text-4xl font-semibold font-marcellus uppercase text-gray-900 mb-2">
            Ambientaciones que inspiran
          </h2>
          <div className="w-20 h-1.5 bg-dorado mx-auto mb-4" />
          <p className="max-w-3xl mx-auto text-gray-600 font-marcellus text-base md:text-lg">
            Cada espacio es diseñado desde cero para reflejar una identidad
            única, cuidando cada detalle estético y funcional.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, index) => {
            const isFeatured = index === 0;
            const isDesktopOnly = index === 4;

            return (
              <div
                key={index}
                className={`
                group relative overflow-hidden rounded-xl md:rounded-none bg-gray-100
                ${isFeatured ? "lg:col-span-2 lg:row-span-2" : ""}
                ${isDesktopOnly ? "hidden lg:block" : ""}
              `}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-black/0
                    group-hover:bg-black/20
                    transition-colors duration-500
                  "
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DecorationGallery;
