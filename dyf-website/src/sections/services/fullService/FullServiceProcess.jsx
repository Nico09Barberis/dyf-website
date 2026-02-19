import React, { memo } from "react";
import {
  FiSearch,
  FiLayers,
  FiUsers,
  FiPlay,
  FiCheckCircle,
} from "react-icons/fi";

const STEPS = [
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
    <section className="py-20 md:py-28 bg-[#FAFBFD]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <header className="text-center mb-20">
          <h2 className="text-xl md:text-4xl font-marcellus font-bold uppercase text-gray-900 mb-3">
            Nuestro proceso de trabajo
          </h2>

          <div className="w-20 h-1.5 bg-dorado mx-auto mb-5" />

          <p className="max-w-2xl mx-auto text-gray-700 font-marcellus text-base md:text-lg">
            Un método probado para planificar, coordinar y ejecutar eventos sin
            margen de error.
          </p>
        </header>

        {/* Timeline */}
        <div className="relative">

          {/* Línea desktop */}
          <div className="
            hidden md:block
            absolute top-7 left-0 right-0
            h-[2px] bg-dorado/30
          " />

          <div className="
            flex flex-col md:flex-row
            gap-14 md:gap-6
            justify-between
          ">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const number = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={index}
                  className="relative flex-1 text-center md:text-left"
                >
                  {/* Nodo */}
                  <div className="
                    mx-auto md:mx-0
                    w-14 h-14
                    rounded-full
                    bg-white
                    border-2 border-dorado
                    flex items-center justify-center
                    text-azulOscuro text-xl
                    shadow-sm
                    relative z-10
                  ">
                    <Icon />
                  </div>

                  {/* Número */}
                  <span className="
                    block mt-4
                    text-dorado
                    font-urbanist
                    font-bold
                    tracking-widest
                    text-sm
                  ">
                    {number}
                  </span>

                  {/* Contenido */}
                  <h3 className="font-urbanist font-semibold text-lg text-gray-900 mt-2 mb-2">
                    {step.title}
                  </h3>

                  <p className="font-marcellus text-gray-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                    {step.text}
                  </p>

                  {/* Línea mobile */}
                  {index !== STEPS.length - 1 && (
                    <div className="
                      md:hidden
                      w-[2px] h-10
                      bg-dorado/30
                      mx-auto mt-6
                    " />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(PlanningProcess);
