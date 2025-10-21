import React from "react";
import { FaCode, FaMobileAlt, FaCogs } from "react-icons/fa";

const cards = [
  {
    id: 1,
    icon: <FaCode className="text-4xl mb-3 text-red-500" />,
    title: "Desarrollo Web",
    subtitle: "Sitios modernos y rápidos",
    color: "from-red-700/70 via-red-600/60 to-red-500/50",
  },
  {
    id: 2,
    icon: <FaMobileAlt className="text-4xl mb-3 text-blue-500" />,
    title: "Apps Móviles",
    subtitle: "Experiencias nativas y fluidas",
    color: "from-blue-700/70 via-blue-600/60 to-blue-500/50",
  },
  {
    id: 3,
    icon: <FaCogs className="text-4xl mb-3 text-green-500" />,
    title: "Automatización",
    subtitle: "Optimización inteligente",
    color: "from-green-700/70 via-green-600/60 to-green-500/50",
  },
];

const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 py-2 my-12 group">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`
            relative w-[220px] h-[200px] rounded-xl 
            flex flex-col items-center justify-center text-center
            font-semibold text-black cursor-pointer
            transition-all duration-300 ease-in-out
            backdrop-blur-xl bg-white/20 border border-white/30
            group-hover:blur-sm group-hover:opacity-50 hover:!blur-none hover:!opacity-100 hover:scale-110
          `}
        >
          {/* Glow de fondo dinámico */}
          <div
            className={`
              absolute top-[10%] left-1/2 -translate-x-1/2 
              w-40 h-40 rounded-full blur-2xl opacity-70 
              bg-gradient-to-br ${card.color}
              transition-all duration-500 group-hover:opacity-50 hover:opacity-100
            `}
          ></div>

          {/* Contenido */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {card.icon}
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm font-normal text-gray-700 mt-1">
              {card.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
