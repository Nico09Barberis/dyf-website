import React from "react";

const images = [
  {
    src: "/images/galery/fullEvents/fullEvent-7.webp",
    title: "Despedida de año corporativa"
  },
  {
    src: "/images/home/servHome2.webp",
    title: "Boda al aire libre"
  },
  {
    src: "/images/galery/fullEvents/fullEvent-6.webp",
    title: "Evento institucional nocturno"
  }
];

const ClientsGallerySection = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-bold text-azulOscuro mb-2">
            Eventos realizados
          </h2>
          <div className="w-20 h-1.5 mx-auto bg-dorado mb-4"></div>
          <p className="text-gray-700 max-w-3xl mx-auto font-marcellus text-base md:text-lg">
            Algunos momentos de los eventos que hemos acompañado, reflejando nuestro
            compromiso con la organización, la ambientación y cada detalle.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {images.map((item, index) => (
            <div
              key={index}
              className="
                relative
                group
                overflow-hidden
                rounded-xl
              "
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="
                  w-full
                  h-72
                  object-cover
                  rounded-xl
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <p className="font-urbanist font-semibold text-white mb-2">
                  {item.title}
                </p>

                <a
                  href="/galeria"
                  className="inline-flex items-center text-dorado font-urbanist text-sm font-medium hover:underline"
                >
                  Ver más →
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ClientsGallerySection;
