import React from "react";
import {
  FiSearch,
  FiLayers,
  FiUsers,
  FiPlay,
  FiCheckCircle
} from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    title: "Diagnóstico y concepto",
    text: "Analizamos el evento, objetivos, público y estilo para definir una propuesta clara."
  },
  {
    icon: FiLayers,
    title: "Planificación integral",
    text: "Desarrollamos el plan completo: proveedores, tiempos, logística y recursos."
  },
  {
    icon: FiUsers,
    title: "Coordinación general",
    text: "Articulamos todos los equipos y supervisamos cada etapa previa."
  },
  {
    icon: FiPlay,
    title: "Ejecución del evento",
    text: "Presencia activa durante el evento, control de tiempos y resolución en tiempo real."
  },
  {
    icon: FiCheckCircle,
    title: "Cierre y seguimiento",
    text: "Desmontaje, evaluación final y seguimiento post-evento."
  }
];

const PlanningProcess = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-marcellus font-bold uppercase text-gray-900 mb-2">
            Nuestro proceso de trabajo
          </h2>
          <div className="w-20 h-1.5 bg-dorado mx-auto mb-4" />
          <p className="max-w-2xl mx-auto text-gray-700 font-marcellus text-lg">
            Un método probado para planificar, coordinar y ejecutar eventos sin margen de error.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-10 md:space-y-14 relative md:pl-10">

          {/* Línea desktop */}
          <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-blue-100" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="
                  flex flex-col md:flex-row
                  items-center md:items-start
                  gap-4 md:gap-6
                "
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="
                    w-10 h-10 md:w-12 md:h-12
                    rounded-full bg-[#3A6EA5] text-white
                    flex items-center justify-center
                    text-lg shadow-md
                  ">
                    <Icon />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
                  <h3 className="font-urbanist font-semibold text-lg text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="font-marcellus text-gray-600 text-sm">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PlanningProcess;
