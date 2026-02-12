import React from "react";
import {
  FiSearch,
  FiLayers,
  FiUsers,
  FiPlay,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    title: "Diagnóstico y concepto",
    text: "Analizamos el evento, objetivos, público y estilo para definir una propuesta clara.",
  },
  {
    icon: FiLayers,
    title: "Planificación integral",
    text: "Desarrollamos el plan completo: proveedores, tiempos, logística y recursos.",
  },
  {
    icon: FiUsers,
    title: "Coordinación general",
    text: "Articulamos todos los equipos y supervisamos cada etapa previa.",
  },
  {
    icon: FiPlay,
    title: "Ejecución del evento",
    text: "Presencia activa durante el evento, control de tiempos y resolución en tiempo real.",
  },
  {
    icon: FiCheckCircle,
    title: "Cierre y seguimiento",
    text: "Desmontaje, evaluación final y seguimiento post-evento.",
  },
];

const PlanningProcess = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-4xl font-marcellus font-bold uppercase text-gray-900 mb-2">
            Nuestro proceso de trabajo
          </h2>
          <div className="w-20 h-1.5 bg-dorado mx-auto mb-4" />
          <p className="max-w-2xl mx-auto text-gray-700 font-marcellus text-base md:text-lg">
            Un método probado para planificar, coordinar y ejecutar eventos sin
            margen de error.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Número decorativo */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-gray-100 select-none">
                  {number}
                </span>

                {/* Icono */}
                <div className="w-14 h-14 rounded-full bg-[#3A6EA5] text-white flex items-center justify-center text-xl mb-6 shadow">
                  <Icon />
                </div>

                {/* Título */}
                <h3 className="font-urbanist font-semibold text-lg text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Texto */}
                <p className="font-marcellus text-gray-600 text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlanningProcess;
