import React from "react";
import {
  FaLightbulb,
  FaPaintBrush,
  FaRegImages,
  FaVectorSquare,
  FaTools,
  FaUserCheck
} from "react-icons/fa";

const includes = [
  {
    title: "Concepto y diseño",
    description:
      "Desarrollamos una propuesta visual coherente con el tipo de evento, el espacio y el estilo buscado.",
    icon: <FaLightbulb />
  },
  {
    title: "Curaduría decorativa",
    description:
      "Seleccionamos cuidadosamente colores, materiales y elementos para lograr una ambientación armónica.",
    icon: <FaPaintBrush />
  },
  {
    title: "Iluminación ambiental",
    description:
      "Creamos atmósferas a través de la iluminación, resaltando puntos clave del espacio.",
    icon: <FaRegImages />
  },
  {
    title: "Estructuras y backdrops",
    description:
      "Diseñamos fondos y estructuras que funcionan como protagonistas visuales del evento.",
    icon: <FaVectorSquare />
  },
  {
    title: "Montaje integral",
    description:
      "Nos encargamos de la instalación y desmontaje, cuidando tiempos y detalles.",
    icon: <FaTools />
  },
  {
    title: "Supervisión en evento",
    description:
      "Acompañamos el desarrollo del evento para garantizar que todo se vea tal como fue diseñado.",
    icon: <FaUserCheck />
  }
];

const DecorationIncludes = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-urbanist text-gray-900 mb-2">
            Un servicio pensado de principio a fin
          </h2>
          <div className="w-24 h-2 bg-dorado mx-auto mb-4" />
          <p className="text-gray-600 font-marcellus text-lg max-w-3xl mx-auto">
            Cada ambientación es el resultado de un proceso creativo cuidado,
            donde diseño, estética y ejecución trabajan en conjunto.
          </p>
        </div>

        {/* List */}
        <div className="space-y-10">
          {includes.map((item, index) => (
            <div
              key={index}
              className="
                group
                flex items-start gap-6
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div className="
                flex-shrink-0
                w-12 h-12
                flex items-center justify-center
                rounded-lg
                bg-blue-100
                text-blue-600
                text-xl
                transition-transform
                duration-300
                group-hover:scale-110
              ">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 pb-10 border-b border-gray-200 group-last:border-b-0">
                <h3 className="font-urbanist text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-marcellus max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DecorationIncludes;
