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
    <section className="py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-urbanist font-bold text-gray-900 mb-3">
            Preguntas frecuentes
          </h3>
          <p className="text-gray-600 font-marcellus">
            Respondemos algunas de las dudas más comunes antes de contratar
            nuestros servicios.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50 transition"
                >
                  <span className="font-urbanist font-medium text-gray-900">
                    {item.question}
                  </span>
                  <FiChevronDown
                    className={`text-gray-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-gray-600 font-marcellus leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MiniFAQSection;
