// src/components/sections/InfoSection.jsx
import React from "react";

const InfoSection = () => {
  const sections = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
      title: "Asesoramiento Personalizado",
      text: "Contamos con un equipo de profesionales listos para ofrecerte soluciones adaptadas a tus necesidades.",
      reverse: false, // imagen izquierda, texto derecha
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
      title: "Experiencia y Confianza",
      text: "Más de 10 años brindando asesoramiento integral a empresas y particulares.",
      reverse: true, // texto izquierda, imagen derecha
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
      title: "Resultados Reales",
      text: "Nuestro compromiso es acompañarte hasta alcanzar tus objetivos de forma eficiente y transparente.",
      reverse: false, // imagen derecha, texto izquierda
    },
  ];

  return (
    <section className="w-full py-24 space-y-12 bg-[#A7C7E7]">
      {sections.map(({ id, image, title, text, reverse }) => (
        <div
          key={id}
          className={`grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-6 gap-8 md:gap-12 ${
            reverse ? "md:[&:nth-child(even)]:flex-row-reverse" : ""
          }`}
        >
          {/* Imagen */}
          <div
            className={`w-full h-64 md:h-96 bg-cover bg-center rounded-3xl ${
              reverse ? "md:order-2" : ""
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>

          {/* Texto */}
          <div
            className={`flex flex-col justify-center text-center md:text-left px-6 ${
              reverse ? "md:order-1" : ""
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-marcellus font-semibold mb-4">
              {title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg">{text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoSection;
