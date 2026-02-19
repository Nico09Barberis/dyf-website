import React from "react";

const images = [
  {
    src: "/images/galery/tableware/tableware-1.webp",
    title: "Vajilla clásica",
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
    <section className="py-14 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-marcellus uppercase font-semibold text-azulOscuro mb-3">
            Galería de eventos
          </h2>

          <div className="w-16 h-[2px] mx-auto bg-dorado mb-5"></div>

          <p className="text-gray-600 max-w-3xl mx-auto font-marcellus text-base md:text-lg">
            Algunos momentos reales utilizando nuestro servicio de vajilla.
          </p>
        </div>

        {/* GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {images.map((item, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden rounded-2xl
                shadow-sm hover:shadow-xl
                transition-all duration-500
              "
            >
              {/* IMAGE */}
              <img
                src={item.src}
                alt={item.title}
                className="
                  w-full h-72 object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-black/75 via-black/30 to-transparent
                opacity-90
                transition-opacity duration-500
                group-hover:opacity-100
              " />

              {/* GOLD ACCENT LINE */}
              <div className="
                absolute bottom-0 left-0 h-[3px] w-0
                bg-dorado
                transition-all duration-500
                group-hover:w-full
              " />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="
                  font-urbanist font-semibold text-white
                  text-lg leading-snug
                  translate-y-2 opacity-90
                  transition-all duration-500
                  group-hover:translate-y-0 group-hover:opacity-100
                ">
                  {item.title}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="/galeria"
            className="
              inline-flex items-center justify-center
              px-9 py-3.5
              bg-dorado text-white
              font-urbanist font-semibold
              rounded-full
              shadow-md
              transition-all duration-300
              hover:bg-dorado/90
              hover:-translate-y-0.5
              hover:shadow-lg
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
