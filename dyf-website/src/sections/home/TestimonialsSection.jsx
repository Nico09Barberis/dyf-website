// src/components/sections/TestimonialsSection.jsx
import SliderCards from "../../components/common/SliderCards";

const TestimonialsSection = () => {
  return (
    <section className="w-full py-16 bg-[#BBDCE5]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-bold text-azulOscuro mb-2">
          Lo que dicen nuestros clientes
        </h2>
        <div className="bg-azulOscuro w-20 h-2 mx-auto mb-4"></div>

        {/* Subtítulo */}
        <p className="text-gray-800 text-md md:text-lg font-marcellus  mb-12">
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
