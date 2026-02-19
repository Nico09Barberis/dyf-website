import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "¿Puedo contratar solo el alquiler de vajilla o mobiliario?",
    answer:
      "Sí. Todos nuestros servicios pueden contratarse de forma individual o combinarse según las necesidades de tu evento."
  },
  {
    question: "¿Con cuánta anticipación debo realizar la reserva?",
    answer:
      "Recomendamos reservar con al menos una semana de anticipación. Para eventos grandes o en temporada alta, lo ideal es hacerlo con mayor tiempo."
  },
  {
    question: "¿Realizan eventos pequeños o solo grandes celebraciones?",
    answer:
      "Trabajamos tanto con eventos íntimos como con celebraciones de mayor escala, adaptándonos a cada tipo de ocasión."
  },
  {
    question: "¿El servicio incluye entrega y retiro del mobiliario?",
    answer:
      "Sí, coordinamos la entrega y el retiro en el lugar del evento, en los horarios previamente acordados."
  },
  {
    question: "¿En qué zonas brindan servicio?",
    answer:
      "Actualmente brindamos servicio en la ciudad y zonas aledañas. Puedes consultarnos tu ubicación específica para confirmarlo."
  }
];

const MiniFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Intro */}
        <div className="text-center mb-14">
          <div className="w-20 h-1.5 bg-dorado mx-auto mb-5"></div>

          <h3 className="text-lg md:text-2xl font-urbanist font-semibold text-gray-900 mb-4">
            Preguntas frecuentes
          </h3>

          <p className="text-gray-600 font-marcellus max-w-2xl mx-auto leading-relaxed">
            Respondemos algunas de las dudas más comunes antes de contratar
            nuestros servicios para que puedas organizar tu evento con total
            tranquilidad.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                >
                  <span className="font-marcellus font-medium text-gray-900 group-hover:text-black transition">
                    {item.question}
                  </span>

                  <FiChevronDown
                    className={`text-gray-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#C6A86B]" : ""
                    }`}
                    size={20}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 font-marcellus leading-relaxed">
                      {item.answer}
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

export default MiniFAQSection;
