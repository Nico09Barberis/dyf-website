import React from "react";
import { FiMessageSquare } from "react-icons/fi";

const testimonials = [
  {
    name: "María González",
    company: "Estancia Candonga",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "El servicio fue impecable desde el primer contacto. Todo estuvo perfectamente organizado y la ambientación superó nuestras expectativas."
  },
  {
    name: "Carlos Rodríguez",
    company: "Restaurant La Passion",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "La calidad de la vajilla y el mobiliario marcó una gran diferencia en nuestro evento. Muy profesionales y puntuales."
  },
  {
    name: "Laura Fernández",
    company: "Municipalidad de Córdoba",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Un equipo confiable y comprometido. Supieron adaptarse a nuestras necesidades y resolver todo con rapidez."
  }
];

const ClientTestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">

      {/* Top split section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Clientes satisfechos"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-bold text-gray-900 mb-3">
              La experiencia de nuestros clientes
            </h2>

            <div className="w-20 h-1.5 bg-dorado mb-4"></div>

            <p className="font-marcellus text-gray-700 text-lg mb-3">
              Cada evento es una oportunidad para construir relaciones duraderas
              basadas en la confianza, la calidad y el compromiso.
            </p>

            <p className="font-marcellus text-gray-600 text-base leading-relaxed">
              Empresas privadas, instituciones públicas y clientes particulares
              confían en nuestro trabajo para desarrollar celebraciones y encuentros
              que requieren organización, estética y cumplimiento profesional.
            </p>
          </div>

        </div>
      </div>

      {/* Testimonials grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-dorado/30 text-3xl">
                <FiMessageSquare />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-urbanist font-semibold text-gray-900 text-sm">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs font-marcellus">
                    {item.company}
                  </p>
                </div>
              </div>

              {/* Testimonial text */}
              <p className="font-marcellus text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default ClientTestimonialsSection;
