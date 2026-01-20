import {
  FaTruck,
  FaShieldAlt,
  FaHandsHelping,
  FaBoxOpen,
  FaSoap,
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
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">

        <header className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-bold mb-2">
            ¿Qué incluye nuestro servicio?
          </h2>
          <div className="w-20 h-2 bg-dorado mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-md md:text-lg font-marcellus">
            Diseñado para que tu evento sea simple, seguro y sin preocupaciones.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {includes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-md transition-all duration-300
                          hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Glow azul */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition 
                            blur-xl bg-sky-200/40"
                />

                <div className="relative z-10 flex items-center gap-4">
                  {/* Icono */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100">
                    <Icon className="text-sky-600 text-xl" />
                  </div>

                  {/* Texto */}
                  <div>
                    <h3 className="font-marcellus text-lg font-semibold tracking-wider mb-1">
                      {item.title}
                    </h3>
                    <p className="font-marcellus text-gray-600 text-md leading-relaxed">
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
}
