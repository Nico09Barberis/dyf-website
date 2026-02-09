import React from "react";

const FullServiceHero = () => {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
        bg-blue-200/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">

        {/* Badge */}
        <span className="
          inline-flex items-center gap-2
          mb-8 px-5 py-2
          rounded-full uppercase tracking-wider
          text-sm font-urbanist font-light
          text-dorado
          bg-blue-50/80 backdrop-blur
          border border-blue-100
        ">
          Servicio premium
        </span>

        {/* Title */}
        <h1 className="
          text-4xl md:text-5xl lg:text-6xl
          font-urbanist font-extrabold
          uppercase
          text-gray-900
          leading-tight
          mb-6
        ">
          Organización integral <br className="hidden md:block" />
          de eventos
        </h1>

        {/* Accent line */}
        <div className="w-28 h-2 bg-dorado mx-auto mb-10"></div>

        {/* Description */}
        <p className="
          max-w-3xl mx-auto
          text-gray-700
          font-marcellus
          text-lg md:text-xl
          leading-relaxed
          mb-12
        ">
          Planificamos, coordinamos y ejecutamos cada aspecto del evento:
          estructuras, ambientación, vajilla, iluminación, fotografía, video y logística.
          Vos solo te ocupás de vivir la experiencia.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="/contacto"
            className="
              inline-flex items-center justify-center
              px-10 py-4
              rounded-full
              bg-blue-600 text-white
              font-urbanist font-semibold uppercase
              tracking-wide
              shadow-lg shadow-blue-500/30
              transition-all duration-300
              hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/40
              hover:-translate-y-0.5
            "
          >
            Planificar mi evento
          </a>
        </div>

      </div>
    </section>
  );
};

export default FullServiceHero;
