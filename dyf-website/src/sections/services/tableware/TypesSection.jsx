import React from "react";

const types = [
  {
    title: "Vajilla Clásica",
    description: "Diseño tradicional ideal para eventos formales y familiares.",
    image: "/images/galery/tableware/tableware-1.webp",
  },
  {
    title: "Vajilla Moderna",
    description: "Estilo minimalista y contemporáneo para celebraciones actuales.",
    image: "/images/galery/tableware/tableware-2.webp",
  },
  {
    title: "Vajilla Premium",
    description: "Porcelana y terminaciones de alta gama para eventos exclusivos.",
    image: "/images/galery/tableware/tableware-3.webp",
  },
  {
    title: "Cristalería",
    description: "Copas y vasos para todo tipo de bebidas y mesas elegantes.",
    image: "/images/galery/tableware/tableware-4.webp",
  },
];

const TablewareTypes = () => {
  return (
    <section className="py-20 text-azulOscuro">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-marcellus font-semibold uppercase mb-3">
            Tipos de Vajilla
          </h2>

          <div className="w-16 h-[2px] bg-dorado mx-auto mb-5"></div>

          <p className="text-center max-w-3xl mx-auto text-gray-600 text-base md:text-lg font-marcellus leading-relaxed">
            Contamos con una amplia variedad de estilos para adaptarnos a cada tipo de evento,
            combinando estética, calidad y funcionalidad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {types.map((item, index) => (
            <div
              key={index}
              className="group relative h-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              {/* Imagen */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Overlay oscuro base */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/60 transition duration-500" />

              {/* Título visible */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-6">
                <h3 className="text-xl font-marcellus text-white font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* Contenido hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl font-marcellus font-semibold mb-4 tracking-wide">
                  {item.title}
                </h3>

                <div className="w-10 h-[2px] bg-dorado mb-4"></div>

                <p className="font-marcellus leading-relaxed text-sm md:text-base max-w-xs">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TablewareTypes;
