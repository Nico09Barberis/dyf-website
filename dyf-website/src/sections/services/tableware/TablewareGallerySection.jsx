import React from "react";

const images = [
  {
    src: "/images/galery/tableware/tableware-1.webp",
    title: "Vajilla clasica",
  },
  {
    src: "/images/galery/tableware/tableware-3.webp",
    title: "Vajilla premium para eventos exclusivos",
  },
  {
    src: "/images/galery/tableware/tableware-4.webp",
    title: "Vajilla moderna para eventos actuales",
  },
];

const TablewareGallerySection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-marcellus uppercase font-bold text-gray-900 mb-2">
            Galeria de eventos
          </h2>
          <div className="w-20 h-1.5 mx-auto bg-dorado mb-4"></div>
          <p className="text-gray-700 max-w-3xl mx-auto font-marcellus text-md md:text-lg">
            Algunos momentos reales utilizando nuestro servicio de vajilla.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {images.map((item, index) => (
            <div
              key={index}
              className="
                relative
                z-0
                group
                overflow-hidden rounded-xl
                duration-300 ease-out
                hover:z-20
              "
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-72 object-cover 
                  transition-transform duration-500 ease-out
                  group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <p className="font-urbanist font-semibold text-white mb-2">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Galería completa */}
        <div className="flex justify-center mt-10">
          <a
            href="/galeria"
            className="
              inline-flex items-center justify-center
              px-8 py-3
              bg-dorado text-white
              font-urbanist font-semibold
              rounded-full
              shadow-md
              transition-all duration-300
              hover:bg-dorado/90 hover:shadow-lg hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-dorado focus:ring-offset-2
            "
          >
            Ver galería completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default TablewareGallerySection;
