import React from "react";

const FurnitureHeroSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* Eyebrow */}
        <span className="inline-block mb-4 text-sm tracking-widest uppercase text-dorado font-urbanist">
          Servicio premium
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-urbanist uppercase font-bold text-azulOscuro leading-tight mb-2">
          Alquiler de mobiliario para eventos
        </h1>

        {/* Separator */}
        <div className="w-24 h-1.5 mx-auto bg-dorado mb-8"></div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-700 font-marcellus text-md md:text-lg mb-10">
          Proveemos mobiliario funcional y elegante para todo tipo de eventos.
          Nos encargamos de la logística, el montaje y cada detalle para que tu
          experiencia sea impecable.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="/contacto"
            className="
              inline-flex items-center justify-center
              px-8 py-3
              bg-dorado text-white
              font-urbanist font-semibold
              rounded-full
              shadow-md
              transition-all duration-300
              hover:bg-dorado/90 hover:-translate-y-0.5 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-dorado focus:ring-offset-2
            "
          >
            Solicitar cotización
          </a>

          <a
            href="#categorias"
            className="
              inline-flex items-center justify-center
              px-8 py-3
              border border-dorado text-dorado
              font-urbanist font-semibold
              rounded-full
              transition-all duration-300
              hover:bg-dorado hover:text-white
              focus:outline-none focus:ring-2 focus:ring-dorado focus:ring-offset-2
            "
          >
            Ver mobiliario disponible
          </a>

        </div>

      </div>
    </section>
  );
};

export default FurnitureHeroSection;
