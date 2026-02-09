import React from "react";

const FullServiceOurApproach = () => {
  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden">
      
      {/* Decorative blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-marcellus font-bold uppercase text-gray-900 mb-2">
          Nuestro enfoque
        </h2>

        {/* Divider */}
        <div className="w-20 h-2 mx-auto bg-dorado mb-8"></div>

        {/* Main text */}
        <p className="font-marcellus text-gray-700 text-lg md:text-xl leading-relaxed mb-10">
          Creemos que un evento exitoso no se improvisa.  
          Se diseña con intención, se planifica con precisión y se ejecuta
          con atención absoluta en cada detalle.
        </p>

        {/* Highlight phrase */}
        <p className="font-urbanist text-azulOscuro text-sm md:text-base tracking-wide uppercase">
          Organización, estética y experiencia trabajando en armonía
        </p>
      </div>
    </section>
  );
};

export default FullServiceOurApproach;
