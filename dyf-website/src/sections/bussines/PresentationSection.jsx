import React from "react";
import { CgMathPlus } from "react-icons/cg";
import CustomButton from "../../components/ui/CustomButton";

const PresentationSection = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row my-20 p-2">
      {/* Contenedor Izquierdo */}
      <div className="w-full md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
          alt="Oficina moderna"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenedor Derecho */}
      <div className="w-full md:w-1/2 flex flex-col shadow-2xl justify-center px-6 py-10">
        <h2 className="text-2xl uppercase font-lora font-semibold mb-2">d&f</h2>
        <h3 className="text-3xl font-lora font-semibold text-gray-800 mb-1">
          Sobre nosotros
        </h3>
        <div className="w-20 h-2 bg-[#F4D03F] mb-2"></div>
        <p className="text-gray-800 font-marcellus text-md md:text-lg leading-relaxed">
          En d&f creemos que cada evento cuenta una historia, y nuestro
          propósito es ayudarte a contar la tuya de la mejor manera. Nos
          especializamos en la gestión, organización y planificación integral de
          todo tipo de eventos, creando experiencias únicas que reflejan la
          esencia y estilo de cada cliente.<br /> Acompañamos a nuestros
          clientes desde la primera idea hasta el último detalle, creando
          experiencias únicas, cuidadas y llenas de emoción.
        </p>
        <div className="w-auto mt-4">
          <CustomButton
            to="/empresa/nosotros"
            label="saber mas"
            icon={CgMathPlus}
          />
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
