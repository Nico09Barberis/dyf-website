import {
  FaClipboardList,
  FaCalendarCheck,
  FaTruck,
  FaGlassCheers,
  FaUndoAlt,
} from "react-icons/fa";

const steps = [
  {
    title: "Solicitá cotización",
    description: "Contanos fecha, cantidad de invitados y tipo de evento.",
    icon: FaClipboardList,
  },
  {
    title: "Confirmá reserva",
    description: "Aprobamos disponibilidad y bloqueamos tu fecha.",
    icon: FaCalendarCheck,
  },
  {
    title: "Entregamos la vajilla",
    description: "Recibís todo listo para usar en el horario acordado.",
    icon: FaTruck,
  },
  {
    title: "Disfrutá tu evento",
    description: "Vos te ocupás de tu evento, nosotros del resto.",
    icon: FaGlassCheers,
  },
  {
    title: "Retiramos",
    description: "Pasamos a buscar la vajilla y nos encargamos de la limpieza.",
    icon: FaUndoAlt,
  },
];

export default function RentalProcessSection() {
  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-semibold mb-2">
            ¿Cómo funciona el alquiler?
          </h2>
          <div className="w-20 h-2 bg-dorado mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto font-marcellus text-md md:text-lg">
            Un proceso simple y transparente, pensado para que no pierdas tiempo.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="flex flex-col items-center text-center max-w-xs relative">

                {/* Icono */}
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-100 mb-4
                                shadow-sm transition-transform duration-300 hover:scale-110">
                  <Icon className="text-azulOscuro text-xl" />
                </div>

                {/* Título */}
                <h3 className="font-marcellus font-semibold text-lg mb-2">
                  {step.title}
                </h3>

                {/* Descripción */}
                <p className="font-marcellus text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Línea conectora desktop */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-full w-24 h-0.5 bg-sky-200" />
                )}

                {/* Línea conectora mobile */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-sky-200 mt-6" />
                )}
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
