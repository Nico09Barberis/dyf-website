import React from "react";

const types = [
  {
    title: "Vajilla Clásica",
    description: "Diseño tradicional ideal para eventos formales y familiares.",
    image: "/images/galery/tableware/tableware-1.webp",
  },
  {
    title: "Vajilla Moderna",
    image: "/images/galery/tableware/tableware-2.webp",
  },
  {
    title: "Vajilla Premium",
    image: "/images/galery/tableware/tableware-3.webp",
  },
  {
    title: "Cristalería",
    image: "/images/galery/tableware/tableware-4.webp",
  },
];


const TablewareTypes = () => {
  return (
    <section className="py-12 text-azulOscuro">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-urbanist font-semibold uppercase text-center mb-2">
          Tipos de Vajilla
        </h2>
        <div className="w-20 h-2 bg-dorado mx-auto mb-4"></div>

        <p className="text-center max-w-3xl mx-auto text-gray-600 text-base md:text-lg mb-12 font-marcellus">
          Contamos con una amplia variedad de estilos para adaptarnos a cada tipo de evento.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8">

          {types.map((item, index) => (
            <div
              key={index}
              className="group relative h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-neutral-100"
            >
              {/* Imagen */}
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Título (estado normal) */}
              <div className="absolute inset-0 flex items-end p-5 transition-opacity duration-500 group-hover:opacity-0">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>

              {/* Contenido hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-br from-[#A7C7E7] to-[#5B9BD5] text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-xl font-urbanist uppercase font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-md mb-4 font-marcellus font-semibold">
                  {item.description}
                </p>

                <span className="text-sm font-semibold underline underline-offset-4">
                  Ver más
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};


export default TablewareTypes;
