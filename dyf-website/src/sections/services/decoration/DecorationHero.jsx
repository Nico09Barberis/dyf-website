import React from "react";

const DecorationHero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* Eyebrow */}
        <p className="text-sm tracking-widest uppercase font-urbanist text-blue-600 mb-4">
          Ambientación & Decoración
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold font-urbanist text-gray-900 leading-tight mb-6">
          Creamos experiencias
          <span className="block text-blue-600">
            que transforman espacios
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-gray-600 font-marcellus text-lg md:text-xl mb-10">
          Diseñamos y producimos ambientaciones únicas para eventos sociales,
          corporativos e institucionales, cuidando cada detalle para lograr
          una experiencia visual memorable.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contacto"
            className="px-8 py-4 bg-blue-600 text-white font-urbanist font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            Solicitar asesoramiento
          </a>

          <a
            href="#estilos"
            className="px-8 py-4 border border-blue-600 text-blue-600 font-urbanist font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Ver estilos
          </a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
    </section>
  );
};

export default DecorationHero;
