// src/components/sections/TestimonialsSection.jsx
import React from "react";
import SliderCards from "../../components/common/SliderCards";

const TestimonialsSection = () => {
  return (
    <section className="w-full py-16 bg-[#E3EBF6]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-italiana uppercase font-bold text-gray-800 mb-2">
          Lo que dicen nuestros clientes
        </h2>
        <div className="bg-dorado w-20 h-2 mx-auto mb-2"></div>

        {/* Subtítulo */}
        <p className="text-gray-600 text-xl font-lora font-semibold mb-12">
          Escucha directamente de quienes ya confiaron en nosotros y tuvieron
          una experiencia increíble.
        </p>
      </div>
      {/* Slider de testimonios */}
      <SliderCards />
    </section>
  );
};

export default TestimonialsSection;
