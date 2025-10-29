import React, { useState } from "react";
import CustomButton from "./CustomButton"; // 🔹 tu botón reutilizable

const FlexCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    {
      title: "Organización total",
      subtitle: "Eventos sin estrés",
      button: "Ver más",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1920&q=80",
      link: "/diseno",
    },
    {
      title: "Momentos únicos",
      subtitle: "Recuerdos inolvidables",
      button: "Detalles",
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1920&q=80",
      link: "/desarrollo",
    },
    {
      title: "Eventos corporativos",
      subtitle: "Profesional y elegante",
      button: "Explorar",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80",
      link: "/innovacion",
    },
  ];

  return (
    <div className="flex w-full h-[500px] gap-3 p-3 rounded-lg overflow-hidden">
      {cards.map((card, index) => (
        <div
          key={index}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className={`
            relative flex flex-col items-center justify-center 
            text-white border border-pink-500 rounded-md 
            transition-all duration-500 cursor-pointer overflow-hidden
            ${activeIndex === index ? "flex-[4]" : "flex-[1]"}
          `}
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/60 transition-all duration-500"></div>

          {/* Contenido */}
          <div className="relative z-10 text-center p-4 transition-all duration-500">
            {/* 🔹 Título que se agranda al hover */}
            <h2
              className={`font-bold font-urbanist mb-2 transition-all duration-500 
                ${activeIndex === index ? "text-4xl" : "text-2xl"}
              `}
            >
              {card.title}
            </h2>

            {/* 🔹 Contenedor de subtítulo y botón con animación secuencial */}
            <div
              className={`flex flex-col items-center gap-3 transition-all duration-700 ease-out
                ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }
              `}
            >
              {/* Subtítulo con entrada suave */}
              <p
                className={`max-w-xl mx-auto text-lg font-urbanist font-semibold text-gray-200 transition-all duration-700 delay-100
                  ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }
                `}
              >
                {card.subtitle}
              </p>

              {/* Botón con animación ligeramente más tardía */}
              <div
                className={`transition-all duration-700 delay-200
                  ${
                    activeIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }
                `}
              >
                <CustomButton
                  to={card.link}
                  label={card.button}
                  variant="dark"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlexCard;
