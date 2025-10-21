import React from "react";
import { Link } from "react-router-dom";
import { CgMathPlus } from "react-icons/cg";
import CustomButton from "../../components/ui/CustomButton";

const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row my-6 p-2">
      {/* Contenedor Izquierdo */}
      <div className="w-full md:w-1/2 flex">
        {/* Columna izquierda (2 imágenes apiladas) */}
        <div className="w-1/2 flex flex-col gap-3">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
            alt="Equipo trabajando"
            className="w-full h-1/2 object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Reunión de trabajo"
            className="w-full h-1/2 object-cover"
          />
        </div>

        {/* Columna derecha (1 imagen alta) */}
        <div className="w-1/2 ml-3">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="Oficina moderna"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contenedor Derecho */}
      <div className="w-full md:w-1/2 flex flex-col shadow-2xl justify-center px-6 py-10">
        <h2 className="text-xl font-bold mb-2">dyf</h2>
        <h3 className="text-3xl font-semibold text-gray-600 mb-1">
          Sobre nosotros
        </h3>
        <div className="w-20 h-2 bg-[#ddc53b] mb-2"></div>
        <p className="text-gray-700 leading-relaxed">
          Somos una empresa comprometida con la innovación y el desarrollo
          tecnológico. Nuestro equipo multidisciplinario trabaja día a día para
          ofrecer soluciones creativas que transforman la manera en que las
          personas y las empresas se conectan con el mundo digital.
        </p>
        <div className="w-auto mt-4">
          <CustomButton to="/contacto" label="saber mas" icon={CgMathPlus} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
