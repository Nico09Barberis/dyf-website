import React from "react";

const AnimatedCard = ({ title = "Hola", heading = "Título", text = "Contenido del texto" }) => {
  return (
    <div className="relative w-[300px] h-[300px] shadow-xl overflow-hidden group">
      {/* Front content */}
      <div className="w-full h-full flex items-center justify-center transition-all duration-[600ms] ease-custom group-hover:-translate-x-[30%]">
        <p className="text-[32px] font-italiana font-bold uppercase bg-gradient-to-br from-[#A7C7E7] to-[#5B9BD5] bg-clip-text text-transparent transition-all duration-[600ms] ease-custom group-hover:opacity-0">
          {title}
        </p>
      </div>

      {/* Hidden content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center gap-2 bg-gradient-to-br from-[#A7C7E7] to-[#5B9BD5] text-white p-5 rounded-md pointer-events-none transform -translate-x-[96%] transition-all duration-[600ms] ease-custom group-hover:translate-x-0">
        <h3 className="text-[32px] font-italiana font-bold uppercase">{heading}</h3>
        <p className="leading-relaxed font-lora">{text}</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
