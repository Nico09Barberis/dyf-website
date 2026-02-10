// src/components/sections/ValuesSection.jsx
import React from "react";
import AnimatedCard from "../../components/ui/AnimatedCard";

const ValuesSection = () => {
  return (
    <section className="w-full py-20 bg-white text-azulOscuro flex flex-col items-center text-center">
      {/* Título */}
      <h2 className="text-xl md:text-4xl font-marcellus font-semibold uppercase mb-2 text-azulOscuro">
        Nuestra Esencia
      </h2>
      <div className="w-20 h-2 mx-auto bg-dorado mb-4"></div>

      {/* Subtítulo */}
      <p className="max-w-2xl font-marcellus text-md md:text-lg text-gray-800 text-center mb-12">
        Descubrí qué nos motiva como empresa, nuestros principios y cómo
        generamos valor para nuestros clientes y la comunidad.
      </p>

      {/* Contenedor de Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 max-w-full overflow-hidden">
        <AnimatedCard
          title="Misión"
          heading="Nuestra Misión"
          text="Brindar soluciones innovadoras que empoderen a nuestros clientes y generen un impacto duradero en nuestro sector."
        />
        <AnimatedCard
          title="Valores"
          heading="Nuestros Valores"
          text="Integridad, compromiso, excelencia y colaboración están en el corazón de todo lo que hacemos."
        />
        <AnimatedCard
          title="Visión"
          heading="Nuestra Visión"
          text="Convertirnos en un referente de calidad y confianza, liderando con integridad e inspirando crecimiento para todos los que servimos."
        />
      </div>
    </section>
  );
};

export default ValuesSection;
