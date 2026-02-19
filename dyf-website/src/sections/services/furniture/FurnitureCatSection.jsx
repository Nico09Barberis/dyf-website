import React, { memo } from "react";

const CATEGORIES = [
  {
    id: "sillas",
    title: "Sillas",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "mesas",
    title: "Mesas",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "livings",
    title: "Livings",
    image: "/images/catFurniture/catSillones.webp",
  },
  {
    id: "barras",
    title: "Barras",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "decorativo",
    title: "Mobiliario decorativo",
    image: "/images/catFurniture/catDecoracion.webp",
  },
  {
    id: "carpas",
    title: "Carpas y estructuras",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=900&q=80",
  },
];

const FurnitureCatSection = () => {
  return (
    <section id="categorias" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-bold text-azulOscuro mb-3">
            Nuestro mobiliario
          </h2>

          <div className="w-20 h-1.5 mx-auto bg-dorado mb-5"></div>

          <p className="text-gray-600 max-w-3xl mx-auto font-marcellus text-md md:text-lg">
            Diferentes estilos y soluciones para adaptarnos a cualquier tipo de evento.
          </p>
        </div>

        {/* Grid catálogo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {CATEGORIES.map((cat) => (
            <article
              key={cat.id}
              className="
                group relative overflow-hidden rounded-2xl
                cursor-pointer
              "
            >
              {/* Imagen */}
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                decoding="async"
                className="
                  w-full h-[280px] object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-105
                "
              />

              {/* Overlay elegante */}
              <div className="
                absolute inset-0
                bg-gradient-to-t from-black/70 via-black/20 to-transparent
                transition-opacity duration-500
              " />

              {/* Contenido */}
              <div className="
                absolute inset-0
                flex flex-col justify-end
                p-6
              ">
                <h3 className="
                  text-2xl font-marcellus text-white
                  transition-transform duration-500
                  group-hover:-translate-y-1
                ">
                  {cat.title}
                </h3>

                {/* Línea animada */}
                <span className="
                  block w-0 h-[2px] bg-dorado mt-2
                  transition-all duration-500
                  group-hover:w-14
                " />
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default memo(FurnitureCatSection);
