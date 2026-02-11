import { useRef } from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaHandsHelping,
  FaBoxOpen,
  FaSoap,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const includes = [
  {
    title: "Lavado e higienización",
    description:
      "Vajilla entregada completamente limpia y sanitizada con estándares profesionales.",
    icon: FaSoap,
  },
  {
    title: "Reposición por roturas",
    description:
      "Cobertura ante roturas accidentales durante el evento, sin costos ocultos.",
    icon: FaShieldAlt,
  },
  {
    title: "Entrega y retiro",
    description:
      "Coordinamos logística en el horario que mejor se adapte a tu evento.",
    icon: FaTruck,
  },
  {
    title: "Embalaje seguro",
    description:
      "Protección profesional para evitar daños en el traslado.",
    icon: FaBoxOpen,
  },
  {
    title: "Asesoramiento personalizado",
    description:
      "Te ayudamos a calcular cantidades y elegir el tipo de vajilla ideal.",
    icon: FaHandsHelping,
  },
];

export default function ServiceIncludesSection() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const width = sliderRef.current.offsetWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-8 md:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <header className="text-center mb-14">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-bold mb-2 text-gray-900">
            ¿Qué incluye nuestro servicio?
          </h2>
          <div className="w-20 h-1.5 bg-dorado mx-auto mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto text-md md:text-lg font-marcellus">
            Diseñado para que tu evento sea simple, seguro y sin preocupaciones.
          </p>
        </header>

        <div className="relative">

          {/* Left button */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-blue-200 shadow-md hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300 z-10"
          >
            <FaChevronLeft className="text-[#5F8AE6]" />
          </button>

          {/* Right button */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-blue-200 shadow-md hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300 z-10"
          >
            <FaChevronRight className="text-[#5F8AE6]" />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              pb-6
              scrollbar-hide
            "
          >
            {includes.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    snap-center
                    min-w-[280px] sm:min-w-[340px] md:min-w-[380px]
                    bg-[#EDF4FF]
                    rounded-2xl p-6
                    shadow-sm hover:shadow-md
                    transition-all duration-300
                    relative group
                  "
                >
                  {/* Glow azul sutil */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-blue-300/10" />

                  <div className="relative z-10">
                    {/* Icono */}
                    <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-blue-600/10">
                      <Icon className="text-azulOscuro text-xl" />
                    </div>

                    {/* Texto */}
                    <h3 className="font-marcellus text-lg font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h3>

                    <p className="font-marcellus text-gray-700 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hint text mobile */}
          <p className="text-center text-sm text-gray-400 mt-4 md:hidden">
            Deslizá para ver más →
          </p>

        </div>
      </div>
    </section>
  );
}
