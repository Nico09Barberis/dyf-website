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
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-bold text-gray-900 mb-3">
            ¿Cómo funciona el alquiler?
          </h2>
          <div className="w-20 h-1.5 mx-auto bg-dorado mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto font-marcellus text-md md:text-lg">
            Un proceso simple y organizado para garantizar que todo salga perfecto.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-xs relative"
              >
                {/* Icon */}
                <div
                  className="
                    w-14 h-14 flex items-center justify-center rounded-full
                    bg-dorado/15 mb-4 shadow-sm
                    transition-transform duration-300 hover:scale-110
                  "
                >
                  <Icon className="text-dorado text-xl" />
                </div>

                {/* Title */}
                <h3 className="font-urbanist font-semibold text-lg mb-2 text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed font-marcellus">
                  {step.description}
                </p>

                {/* Connector desktop */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-24 h-0.5 bg-dorado/40" />
                )}

                {/* Connector mobile */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-dorado/40 mt-6" />
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default FurnitureRentalProcess;
