import {
  FaTruckMoving,
  FaPeopleCarry,
  FaTools,
  FaBroom,
  FaUserTie,
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {includes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group relative bg-gray-50 rounded-2xl p-6
                  shadow-sm transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                {/* Glow effect */}
                <div
                  className="
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition
                    blur-xl bg-dorado/10
                  "
                />

                <div className="relative z-10 flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-dorado/15">
                    <Icon className="text-dorado text-xl" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-urbanist font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FurnitureIncludesSection;
