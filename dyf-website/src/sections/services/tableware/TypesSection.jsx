import React, { memo } from "react";

/* ✅ fuera del componente → no se recrea */
const TYPES = [
  {
    id: "clasica",
    title: "Vajilla Clásica",
    description: "Diseño tradicional ideal para eventos formales y familiares.",
    image: "/images/galery/tableware/tableware-1.webp",
  },
  {
    id: "moderna",
    title: "Vajilla Moderna",
    description: "Estilo minimalista y contemporáneo para celebraciones actuales.",
    image: "/images/galery/tableware/tableware-2.webp",
  },
  {
    id: "premium",
    title: "Vajilla Premium",
    description: "Porcelana y terminaciones de alta gama para eventos exclusivos.",
    image: "/images/galery/tableware/tableware-3.webp",
  },
  {
    id: "cristaleria",
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
          <h2 className="text-xl md:text-4xl font-marcellus font-semibold uppercase mb-3">
            Tipos de Vajilla
          </h2>

          <div className="w-16 h-[2px] bg-dorado mx-auto mb-5" />

          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg font-marcellus leading-relaxed">
            Contamos con una amplia variedad de estilos para adaptarnos a cada tipo de evento,
            combinando estética, calidad y funcionalidad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {TYPES.map((item) => (
            <article
              key={item.id}
              className="
                group relative h-[320px]
                rounded-2xl overflow-hidden
                shadow-md hover:shadow-lg
                transition-shadow duration-300
                will-change-transform
              "
            >
              {/* Imagen */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="
                  absolute inset-0 w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-80" />

              {/* Título base */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4">
                <h3 className="text-xl font-marcellus text-white font-semibold">
                  {item.title}
                </h3>
              </div>

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-marcellus font-semibold mb-4 tracking-wide">
                  {item.title}
                </h3>

                <div className="w-10 h-[2px] bg-dorado mb-4" />

                <p className="font-marcellus leading-relaxed text-sm md:text-base max-w-xs">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

/* ✅ evita renders si el padre cambia */
export default memo(TablewareTypes);
