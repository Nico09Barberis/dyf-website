import React, { useEffect, useState } from "react";
import { FaRegHandshake, FaPenNib, FaTruck, FaRegSmile } from "react-icons/fa";

const steps = [
  {
    title: "Contacto inicial",
    description: "Contanos tu idea, fechas y estilo del evento.",
    icon: <FaRegHandshake className="w-6 h-6" />,
  },
  {
    title: "Diseño y propuesta",
    description: "Creamos un moodboard y presupuesto a medida.",
    icon: <FaPenNib className="w-6 h-6" />,
  },
  {
    title: "Coordinación y montaje",
    description: "Gestionamos proveedores y el montaje completo.",
    icon: <FaTruck className="w-6 h-6" />,
  },
  {
    title: "Disfrutá tu evento",
    description: "Supervisamos todo para que vos solo disfrutes.",
    icon: <FaRegSmile className="w-6 h-6" />,
  },
];

export default function ProcessSteps() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("process-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="process-section"
      className="max-w-6xl mx-auto px-6 py-20 text-center overflow-hidden"
    >
      <h2 className="text-3xl font-bold mb-2">Nuestro proceso de trabajo</h2>
      <div className="w-20 h-1 bg-blue-500 rounded mx-auto mb-4"></div>
      <p className="text-gray-500 mb-12">
        Acompañamos cada etapa para que tu evento sea perfecto.
      </p>

      <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-14 md:gap-8">
        {/* Línea horizontal (alineada con iconos) */}
        <div className="hidden md:block absolute left-0 right-0 top-[2.25rem] h-[2px] bg-gray-200" />
        {/* Línea vertical (solo móvil) */}
        <div className="absolute md:hidden left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />

        {steps.map((step, i) => (
          <div
            key={i}
            className={`relative z-10 flex flex-col items-center text-center md:flex-1 transition-all duration-700 ease-out
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Icono */}
            <div
              className="flex items-center justify-center w-14 h-14 bg-white border border-gray-200 rounded-full shadow-sm mb-4 
              transition-transform duration-300 hover:scale-110 hover:shadow-md relative"
            >
              {step.icon}
            </div>

            {/* Contenido */}
            <h3 className="text-lg font-medium">{step.title}</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-[260px] leading-relaxed">
              {step.description}
            </p>

            {/* Línea vertical entre ítems (solo mobile) */}
            {i !== steps.length - 1 && (
              <div className="md:hidden absolute top-full left-1/2 w-[2px] h-10 bg-gray-200 -translate-x-1/2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
