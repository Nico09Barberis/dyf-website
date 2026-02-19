import {
  FaClipboardList,
  FaCalendarCheck,
  FaTruck,
  FaCouch,
  FaUndoAlt,
} from "react-icons/fa";

const steps = [
  {
    title: "Solicitá cotización",
    description:
      "Indicanos fecha, ubicación, tipo de evento y cantidad estimada de invitados.",
    icon: FaClipboardList,
  },
  {
    title: "Confirmá la reserva",
    description:
      "Verificamos disponibilidad del mobiliario y bloqueamos tu fecha.",
    icon: FaCalendarCheck,
  },
  {
    title: "Entrega y montaje",
    description:
      "Llevamos el mobiliario al lugar del evento y realizamos el montaje.",
    icon: FaTruck,
  },
  {
    title: "Disfrutá tu evento",
    description:
      "Todo queda listo para que te enfoques únicamente en tus invitados.",
    icon: FaCouch,
  },
  {
    title: "Retiro y desmontaje",
    description:
      "Finalizado el evento, retiramos el mobiliario y dejamos el espacio ordenado.",
    icon: FaUndoAlt,
  },
];

const FurnitureRentalProcess = () => {
  return (
    <section className="w-full py-12 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-marcellus uppercase font-semibold text-azulOscuro mb-3">
            ¿Cómo funciona el alquiler?
          </h2>

          <div className="w-16 h-[2px] bg-dorado mx-auto mb-5"></div>

          <p className="text-gray-600 max-w-2xl mx-auto font-marcellus text-base md:text-lg">
            Un proceso simple y organizado para garantizar que todo salga perfecto.
          </p>
        </header>

        {/* TIMELINE */}
        <div className="relative">

          {/* Línea horizontal desktop */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center max-w-xs"
                >
                  {/* STEP LABEL */}
                  <span className="absolute -top-8 text-xs font-urbanist tracking-widest text-gray-400">
                    PASO {index + 1}
                  </span>

                  {/* ICON */}
                  <div
                    className="
                      relative z-10
                      w-16 h-16
                      flex items-center justify-center
                      rounded-full
                      bg-[#EDF4FF]
                      border border-blue-200
                      shadow-sm
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:bg-[#DCE9FF]
                      group-hover:shadow-md
                    "
                  >
                    <Icon className="text-azulOscuro text-xl" />
                  </div>

                  {/* MOBILE CONNECTOR */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden w-[2px] h-12 bg-blue-200 mt-6" />
                  )}

                  {/* TEXT */}
                  <div className="mt-6">
                    <h3 className="font-marcellus font-semibold text-lg mb-2 text-gray-900">
                      {step.title}
                    </h3>

                    <p className="font-marcellus text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* DOT desktop */}
                  <div className="hidden lg:block absolute top-10 w-3 h-3 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FurnitureRentalProcess;
