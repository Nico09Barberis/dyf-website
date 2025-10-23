import React, { useState } from "react";
import CustomButton from "./CustomButton"; // 🔹 tu botón reutilizable

const FlexCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    { 
      title: "Diseño", 
      subtitle: "Interfaz moderna", 
      button: "Ver más", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", 
      link: "/diseno" 
    },
    { 
      title: "Desarrollo", 
      subtitle: "Código limpio", 
      button: "Detalles", 
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", 
      link: "/desarrollo" 
    },
    { 
      title: "Innovación", 
      subtitle: "Ideas nuevas", 
      button: "Explorar", 
      image: "https://images.unsplash.com/photo-1526403226209-7bcd65f60845", 
      link: "/innovacion" 
    },
  ];

  return (
    <div className="flex w-full h-[500px] gap-3 p-3 bg-neutral-900 rounded-lg overflow-hidden">
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
              className={`font-bold mb-2 transition-all duration-500 
                ${activeIndex === index ? "text-4xl" : "text-2xl"}
              `}
            >
              {card.title}
            </h2>

            {/* 🔹 Contenedor de subtítulo y botón con animación secuencial */}
            <div
              className={`flex flex-col items-center gap-3 transition-all duration-700 ease-out
                ${activeIndex === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
                }
              `}
            >
              {/* Subtítulo con entrada suave */}
              <p
                className={`text-sm text-gray-200 transition-all duration-700 delay-100
                  ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                `}
              >
                {card.subtitle}
              </p>

              {/* Botón con animación ligeramente más tardía */}
              <div
                className={`transition-all duration-700 delay-200
                  ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <CustomButton
                  to={card.link}
                  label={card.button}
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
