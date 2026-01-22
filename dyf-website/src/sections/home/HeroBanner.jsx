// src/components/sections/HeroBanner.jsx
import React from "react";

const HeroBanner = ({
  title = "¿Buscás ayuda ahora mismo?",
  buttonText = "Contáctanos",
  message = "Hola! Estoy interesado en sus servicios.",
  backgroundImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
}) => {
  const whatsappNumber = "5491123456789"; // número fijo
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      className="relative w-full h-auto p-6 md:p-12 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-2xl md:text-4xl font-urbanist uppercase font-bold mb-2 md:mb-4">
          {title}
        </h2>

        {/* Botón WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-white text-white px-6 py-3 text-sm uppercase font-marcellus font-semibold tracking-wider bg-transparent hover:bg-white hover:text-black transition-all duration-300"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
