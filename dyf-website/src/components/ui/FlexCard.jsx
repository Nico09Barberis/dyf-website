import React, { useState } from "react";
import CustomButton from "./CustomButton";

const FlexCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const cards = [
    {
      title: "Organización total",
      subtitle: "Eventos sin estrés",
      button: "Ver más",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
      link: "/diseno",
    },
    {
      title: "Momentos únicos",
      subtitle: "Recuerdos inolvidables",
      button: "Detalles",
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&auto=format&fit=crop&q=80",
      link: "/desarrollo",
    },
    {
      title: "Eventos corporativos",
      subtitle: "Profesional y elegante",
      button: "Explorar",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=80",
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
          onFocus={() => setActiveIndex(index)}
          onBlur={() => setActiveIndex(null)}
          tabIndex={0}
          aria-label={`${card.title}: ${card.subtitle}`}
          className={`
            relative flex flex-col items-center justify-center
            text-white border border-pink-500 rounded-md
            cursor-pointer overflow-hidden
            transition-[flex,font-size,opacity,transform] duration-500 ease-out
            will-change-[flex,font-size,opacity,transform]
            ${activeIndex === index ? "flex-[4]" : "flex-[1]"}
          `}
        >
          {/* Fondo con lazy-load */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform scale-100 group-hover:scale-105"
            loading="lazy"
          />

          {/* Overlay dinámico */}
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-500
              ${activeIndex === index ? "bg-black/60" : "bg-black/40"}
            `}
          ></div>

          {/* Contenido */}
          <div className="relative z-10 text-center p-4 transition-[opacity,transform] duration-500 ease-out">
            <h2
              className={`font-bold font-urbanist mb-2 transition-[font-size] duration-500
                ${activeIndex === index ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}
              `}
            >
              {card.title}
            </h2>

            <div
              className={`flex flex-col items-center gap-3 transition-[opacity,transform] duration-700 ease-out
                ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
              `}
            >
              <p
                className={`max-w-xl mx-auto text-lg font-urbanist font-semibold text-gray-200 transition-[opacity,transform] duration-700 delay-100
                  ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                `}
              >
                {card.subtitle}
              </p>

              <div
                className={`transition-[opacity,transform] duration-700 delay-200
                  ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                <CustomButton to={card.link} label={card.button} variant="dark" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlexCard;
