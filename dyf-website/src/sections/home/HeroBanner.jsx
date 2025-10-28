// src/components/sections/HeroBanner.jsx
import React from "react";

const HeroBanner = () => {
  const whatsappNumber = "5491123456789"; // reemplaza con tu número
  const defaultMessage = "Hola! Estoy interesado en sus servicios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <section
      className="relative w-full h-[30vh] md:h-[40vh] bg-cover bg-center flex items-center justify-center my-12"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-3xl md:text-5xl font-italiana uppercase font-bold mb-6">
          Impulsa tu negocio con tecnología innovadora
        </h2>

        {/* Botón WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-white text-white px-6 py-3 text-sm uppercase font-marcellus font-semibold tracking-wider bg-transparent hover:bg-white hover:text-black transition-all duration-300"
        >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
