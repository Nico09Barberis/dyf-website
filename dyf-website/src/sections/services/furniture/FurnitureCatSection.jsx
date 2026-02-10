import React from "react";

const categories = [
  {
    title: "Sillas",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mesas",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Livings",
    image:
      "/images/catFurniture/catSillones.webp",
  },
  {
    title: "Barras",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Mobiliario decorativo",
    image:
      "/images/catFurniture/catDecoracion.webp",
  },
  {
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
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-bold text-azulOscuro mb-2">
            Nuestro mobiliario
          </h2>
          <div className="w-20 h-1.5 mx-auto bg-dorado mb-4"></div>
          <p className="text-gray-700 max-w-3xl mx-auto font-marcellus text-md md:text-lg">
            Contamos con una amplia variedad de mobiliario para adaptarnos al estilo y
            escala de tu evento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {categories.map((cat, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden rounded-xl shadow-md
                transition-transform duration-300 ease-out
                hover:scale-[1.02]
              "
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                <h3 className="text-xl font-urbanist font-semibold text-white">
                  {cat.title}
                </h3>

                <span className="inline-block w-12 h-1 bg-dorado"></span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FurnitureCatSection;
