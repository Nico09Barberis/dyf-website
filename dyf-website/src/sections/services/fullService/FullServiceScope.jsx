import React from "react";
import {
  FiClipboard,
  FiUsers,
  FiLayout,
  FiStar,
  FiCamera,
  FiClock,
} from "react-icons/fi";

const items = [
  {
    icon: <FiClipboard />,
    title: "Planificación estratégica",
    text: "Concepto general, cronograma y toma de decisiones.",
  },
  {
    icon: <FiUsers />,
    title: "Proveedores",
    text: "Coordinación de todos los equipos involucrados.",
  },
  {
    icon: <FiLayout />,
    title: "Estructuras y montaje",
    text: "Armado completo del espacio y layout del evento.",
  },
  {
    icon: <FiStar />,
    title: "Ambientación",
    text: "Diseño estético alineado al estilo del evento.",
  },
  {
    icon: <FiCamera />,
    title: "Producción audiovisual",
    text: "Foto, video, iluminación y sonido.",
  },
  {
    icon: <FiClock />,
    title: "Supervisión total",
    text: "Presencia y control durante todo el evento.",
  },
];

const FullServiceScope = () => {
  return (
    <section className="relative py-8 md:py-16 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xl md:text-4xl font-marcellus font-bold uppercase text-gray-900 mb-2">
            Todo bajo una sola coordinación
          </h2>
          <div className="w-20 h-2 bg-dorado mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-700 font-marcellus text-lg">
            Centralizamos cada área del evento para garantizar coherencia,
            eficiencia y resultados impecables.
          </p>
        </div>

        {/* Desktop map */}
        <div className="relative hidden lg:grid grid-cols-3 gap-x-16 items-center">
          {/* Left column */}
          <div className="flex flex-col justify-center gap-14">
            {items.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 group transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="
                    w-14 h-14
                    rounded-xl
                    bg-blue-50
                    text-[#3A6EA5]
                    flex items-center justify-center
                    text-xl
                    transition-colors
                    group-hover:bg-[#3A6EA5] group-hover:text-white
                  "
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-urbanist font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="font-marcellus text-sm text-gray-600 max-w-xs">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center */}
          <div className="relative flex justify-center">
            <div className="
              absolute
              w-80 h-80
              rounded-full
              bg-blue-500/30
              blur-3xl
            "></div>

            <div
              className="
                relative z-10
                w-72 h-72
                rounded-full
                bg-gradient-to-br
               from-[#355C8C] to-[#4F7FD9]

                text-white
                flex flex-col items-center justify-center
                text-center
                shadow-2xl shadow-blue-500/40
              "
            >

              <span className="font-urbanist uppercase text-sm tracking-widest mb-2">
                Servicio central
              </span>
              <h3 className="font-urbanist font-bold text-2xl leading-tight">
                Organización
                <br />
                Integral
              </h3>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center gap-14">
            {items.slice(3).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 group transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="
                    w-14 h-14
                    rounded-xl
                    bg-blue-50
                    text-[#3A6EA5]
                    flex items-center justify-center
                    text-xl
                    transition-colors
                    group-hover:bg-[#3A6EA5] group-hover:text-white
                  "
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-urbanist font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="font-marcellus text-sm text-gray-600 max-w-xs">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile narrative */}
        <div className="lg:hidden space-y-12 max-w-md mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center text-center
                gap-4
              "
            >
              <div
                className="
                  w-14 h-14
                  rounded-xl
                  bg-[#3A6EA5]
                  text-white
                  flex items-center justify-center
                  text-xl
                "
              >
                {item.icon}
              </div>

              <div>
                <h4 className="font-urbanist font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="font-marcellus text-sm text-gray-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullServiceScope;
