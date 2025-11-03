// src/components/sections/ValuesSection.jsx
import React from "react";
import AnimatedCard from "../../components/ui/AnimatedCard";

const ValuesSection = () => {
  return (
    <section className="w-full py-20 bg-beige text-azulOscuro flex flex-col items-center">
      {/* Título */}
      <h2 className="text-3xl md:text-5xl font-italiana font-bold uppercase mb-4 text-center">
        Nuestra Esencia
      </h2>

      {/* Subtítulo */}
      <p className="font-lora font-semibold text-base md:text-lg text-gray-600 max-w-2xl text-center mb-12">
        Descubrí qué nos motiva como empresa, nuestros principios y cómo generamos valor 
        para nuestros clientes y la comunidad.
      </p>

      {/* Contenedor de Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <AnimatedCard
          title="Misión"
          heading="Nuestra Misión"
          text="Brindar soluciones innovadoras que empoderen a nuestros clientes y generen un impacto duradero en nuestro sector."
        />
        <AnimatedCard
          title="Visión"
          heading="Nuestra Visión"
          text="Convertirnos en un referente de calidad y confianza, liderando con integridad e inspirando crecimiento para todos los que servimos."
        />
        <AnimatedCard
          title="Valores"
          heading="Nuestros Valores"
          text="Integridad, compromiso, excelencia y colaboración están en el corazón de todo lo que hacemos."
        />
      </div>
    </section>
  );
};

export default ValuesSection;
