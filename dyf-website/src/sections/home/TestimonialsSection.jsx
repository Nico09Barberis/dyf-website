// src/components/sections/TestimonialsSection.jsx
import React from "react";
import SliderCards from "../../components/common/SliderCards";

const TestimonialsSection = () => {
  return (
    <section className="w-full py-16 bg-[#E3EBF6]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Lo que dicen nuestros clientes
        </h2>

        {/* Subtítulo */}
        <p className="text-gray-600 text-base md:text-lg mb-12">
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
