import React, { memo } from "react";
import {
  FaLightbulb,
  FaPaintBrush,
  FaRegImages,
  FaVectorSquare,
  FaTools,
  FaUserCheck,
} from "react-icons/fa";

const INCLUDES = [
  {
    title: "Concepto y diseño",
    description:
      "Desarrollamos una propuesta visual coherente con el tipo de evento, el espacio y el estilo buscado.",
    icon: FaLightbulb,
  },
  {
    title: "Curaduría decorativa",
    description:
      "Seleccionamos cuidadosamente colores, materiales y elementos para lograr una ambientación armónica.",
    icon: FaPaintBrush,
  },
  {
    title: "Iluminación ambiental",
    description:
      "Creamos atmósferas a través de la iluminación, resaltando puntos clave del espacio.",
    icon: FaRegImages,
  },
  {
    title: "Estructuras y backdrops",
    description:
      "Diseñamos fondos y estructuras que funcionan como protagonistas visuales del evento.",
    icon: FaVectorSquare,
  },
  {
    title: "Montaje integral",
    description:
      "Nos encargamos de la instalación y desmontaje, cuidando tiempos y detalles.",
    icon: FaTools,
  },
  {
    title: "Supervisión en evento",
    description:
      "Acompañamos el desarrollo del evento para garantizar que todo se vea tal como fue diseñado.",
    icon: FaUserCheck,
  },
];

const DecorationIncludes = () => {
  return (
    <section className="py-20 md:py-28 bg-white w-full">
      <div className="max-w-4xl mx-auto px-6 md:px-12">

        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-semibold text-gray-900 mb-3">
            De la idea al espacio
          </h2>

          <div className="w-20 h-1.5 bg-dorado mx-auto mb-5" />

          <p className="text-gray-600 font-marcellus text-base md:text-lg max-w-2xl mx-auto">
            Cada ambientación nace de un proceso creativo donde diseño,
            estética y ejecución trabajan en perfecta armonía.
          </p>
        </header>

        {/* Container */}
        <div className="relative">

          {/* Línea timeline SOLO desktop */}
          <div className="
            hidden md:block
            absolute left-1/2 top-0 bottom-0
            w-[2px] bg-dorado/30
            -translate-x-1/2
          " />

          <div className="space-y-12 md:space-y-20">

            {INCLUDES.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
                    relative
                    flex md:grid md:grid-cols-2
                    gap-6 md:gap-12
                    items-start md:items-center
                    ${!isEven ? "md:[&>*:first-child]:order-2" : ""}
                  `}
                >
                  {/* Icono */}
                  <div className="
                    flex-shrink-0
                    w-12 h-12 md:w-14 md:h-14
                    rounded-full
                    bg-[#EDF4FF]
                    flex items-center justify-center
                    text-azulOscuro
                    shadow-sm
                    md:absolute md:left-1/2 md:-translate-x-1/2
                    z-10
                  ">
                    <Icon className="text-lg" />
                  </div>

                  {/* Contenido */}
                  <div className="max-w-md">
                    <h3 className="font-urbanist text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>

                    <div className="w-10 h-[2px] bg-dorado mb-3" />

                    <p className="text-gray-600 font-marcellus leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(DecorationIncludes);
