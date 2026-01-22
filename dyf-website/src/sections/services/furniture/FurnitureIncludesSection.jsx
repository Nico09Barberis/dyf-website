import { useRef } from "react";
import {
  FaTruckMoving,
  FaPeopleCarry,
  FaTools,
  FaBroom,
  FaUserTie,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const includes = [
  {
    title: "Transporte especializado",
    description:
      "Traslado seguro del mobiliario con vehículos adaptados para evitar daños.",
    icon: FaTruckMoving,
  },
  {
    title: "Montaje y desmontaje",
    description:
      "Nuestro equipo se encarga de instalar y retirar todo el mobiliario.",
    icon: FaPeopleCarry,
  },
  {
    title: "Mobiliario en óptimas condiciones",
    description:
      "Cada pieza es revisada y mantenida para garantizar calidad y estética.",
    icon: FaTools,
  },
  {
    title: "Limpieza posterior",
    description:
      "Retiramos el mobiliario y nos ocupamos de su limpieza y acondicionamiento.",
    icon: FaBroom,
  },
  {
    title: "Asesoramiento profesional",
    description:
      "Te ayudamos a definir cantidades, distribución y estilo según tu evento.",
    icon: FaUserTie,
  },
];

const FurnitureIncludesSection = () => {
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
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-bold text-azulOscuro mb-2">
            ¿Qué incluye el servicio?
          </h2>
          <div className="w-20 h-1.5 mx-auto bg-dorado mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto font-marcellus text-md md:text-lg">
            Un servicio integral pensado para que no tengas que preocuparte por nada.
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative">

          {/* Left button */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md border hover:bg-gray-100 transition z-10"
          >
            <FaChevronLeft />
          </button>

          {/* Right button */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-md border hover:bg-gray-100 transition z-10"
          >
            <FaChevronRight />
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
                    bg-gray-50 rounded-2xl p-6
                    shadow-sm hover:shadow-lg transition
                    relative group
                  "
                >
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition blur-xl bg-dorado/10" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-dorado/15">
                      <Icon className="text-dorado text-xl" />
                    </div>

                    <h3 className="text-lg font-urbanist font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
};

export default FurnitureIncludesSection;
