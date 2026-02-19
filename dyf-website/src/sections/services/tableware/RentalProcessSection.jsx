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
    <section className="w-full py-12 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-20">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-semibold text-azulOscuro mb-3">
            ¿Cómo funciona el alquiler?
          </h2>

          <div className="w-16 h-[2px] bg-dorado mx-auto mb-5"></div>

          <p className="text-gray-600 max-w-2xl mx-auto font-marcellus text-base md:text-lg">
            Un proceso simple y transparente, pensado para que no pierdas tiempo.
          </p>
        </header>

        {/* TIMELINE */}
        <div className="relative">

          {/* Línea central desktop */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-6">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center max-w-xs"
                >
                  {/* STEP NUMBER */}
                  <span className="absolute -top-8 text-xs font-urbanist tracking-widest text-gray-400">
                    PASO {index + 1}
                  </span>

                  {/* ICON CIRCLE */}
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
                      group-hover:shadow-md
                      group-hover:bg-[#DCE9FF]
                    "
                  >
                    <Icon className="text-azulOscuro text-xl" />
                  </div>

                  {/* MOBILE LINE */}
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

                  {/* DOT sobre línea desktop */}
                  <div className="hidden lg:block absolute top-10 w-3 h-3 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
