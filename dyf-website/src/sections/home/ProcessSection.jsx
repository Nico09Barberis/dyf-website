import React, { useEffect, useState } from "react";
import { FaRegHandshake, FaPenNib, FaTruck, FaRegSmile } from "react-icons/fa";

const steps = [
  {
    title: "Contacto inicial",
    description: "Contanos tu idea, fechas y estilo del evento.",
    icon: <FaRegHandshake className="w-6 h-6 text-dorado" />,
  },
  {
    title: "Diseño y propuesta",
    description: "Creamos un moodboard y presupuesto a medida.",
    icon: <FaPenNib className="w-6 h-6 text-dorado" />,
  },
  {
    title: "Coordinación y montaje",
    description: "Gestionamos proveedores y el montaje completo.",
    icon: <FaTruck className="w-6 h-6 text-dorado" />,
  },
  {
    title: "Disfrutá tu evento",
    description: "Supervisamos todo para que vos solo disfrutes.",
    icon: <FaRegSmile className="w-6 h-6 text-dorado" />,
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
      className="max-w-6xl mx-auto px-6 py-20 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-italiana uppercase font-bold mb-2">
        Nuestro proceso de trabajo
      </h2>
      <div className="w-20 h-2 bg-dorado mx-auto mb-4"></div>
      <p className="text-gray-500 mb-12 text-xl font-lora font-semibold">
        Acompañamos cada etapa para que tu evento sea perfecto.
      </p>

      <div className="grid gap-10 md:grid-cols-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`relative bg-white p-6 rounded-2xl shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Icono */}
            <div className="w-14 h-14 flex items-center justify-center bg-dorado/10 text-dorado rounded-full mb-4 mx-auto">
              {step.icon}
            </div>

            {/* Contenido */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
