import React, { useState } from "react";
import {
  FiLayers,
  FiAward,
  FiStar,
  FiUsers,
  FiClock,
  FiGrid
} from "react-icons/fi";

const benefits = [
  {
    title: "Servicios flexibles",
    description:
      "Contrata uno o varios servicios según las necesidades de tu evento, sin obligación de paquetes cerrados.",
    icon: FiLayers
  },
  {
    title: "Experiencia en eventos",
    description:
      "Acompañamos celebraciones sociales y corporativas, cuidando cada detalle desde la planificación hasta la ejecución.",
    icon: FiAward
  },
  {
    title: "Calidad garantizada",
    description:
      "Trabajamos con vajilla y mobiliario en excelente estado, seleccionados para ofrecer una presentación elegante y profesional.",
    icon: FiStar
  },
  {
    title: "Atención personalizada",
    description:
      "Escuchamos tus ideas y te asesoramos para crear una propuesta acorde a tu estilo, presupuesto y tipo de evento.",
    icon: FiUsers
  },
  {
    title: "Puntualidad y compromiso",
    description:
      "Cumplimos con los tiempos acordados para que tu evento se desarrolle sin imprevistos.",
    icon: FiClock
  },
  {
    title: "Soluciones integrales",
    description:
      "Si lo deseas, coordinamos todos los servicios en una sola propuesta para mayor comodidad y tranquilidad.",
    icon: FiGrid
  }
];

const WhyChooseUsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = benefits[activeIndex].icon;

  return (
    <section className="py-20 px-6 md:px-12 w-full bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-bold mb-3">
            ¿Por qué elegir DyF Celebraciones?
          </h2>
          <div className="w-20 h-2 mx-auto bg-dorado mb-5"></div>
          <p className="text-gray-300 max-w-3xl mx-auto font-marcellus text-lg md:text-xl">
            Nos especializamos en brindar soluciones confiables, elegantes y
            adaptadas a cada tipo de evento, combinando experiencia, calidad y
            atención personalizada.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {/* Active feature */}
          <div className="lg:col-span-2 bg-[#161616] rounded-2xl border border-white/10 p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-dorado/15 flex items-center justify-center">
                  <ActiveIcon className="text-dorado text-2xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-urbanist font-bold">
                  {benefits[activeIndex].title}
                </h3>
              </div>

              <p className="text-sm uppercase tracking-widest text-dorado mb-5 font-urbanist">
                Solución adaptable a todo tipo de eventos
              </p>

              <p className="text-gray-300 font-marcellus text-lg leading-relaxed mb-8 max-w-2xl">
                {benefits[activeIndex].description}
              </p>

              <ul className="space-y-3 text-gray-300 font-marcellus">
                <li>• Contratación flexible por servicio o paquete</li>
                <li>• Asesoramiento profesional personalizado</li>
                <li>• Coordinación clara, puntual y confiable</li>
              </ul>
            </div>

            <div className="mt-10">
              <button className="inline-flex items-center gap-2 text-dorado font-urbanist font-medium hover:underline transition">
                Consultar por los servicios →
              </button>
            </div>
          </div>

          {/* Selectors */}
          <div className="flex flex-col gap-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-3 p-4 rounded-lg border text-left transition-all duration-200
                    ${
                      isActive
                        ? "border-dorado bg-dorado/10"
                        : "border-white/10 hover:border-dorado/60 hover:bg-white/5"
                    }
                  `}
                >
                  <Icon
                    className={`text-xl ${
                      isActive ? "text-dorado" : "text-gray-400"
                    }`}
                  />
                  <span
                    className={`font-urbanist font-medium ${
                      isActive ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
