import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Alquiler de vajilla",
    description:
      "Vajilla, cristalería y accesorios para eventos sociales y corporativos, con variedad de estilos y una presentación impecable.",
    image: "/images/galery/tableware/tableware-3.webp",
    path: "/servicios/alquiler-vajilla",
  },
  {
    title: "Alquiler de mobiliario",
    description:
      "Mesas, sillas y mobiliario funcional y estético para todo tipo de eventos, adaptado a cada espacio y necesidad.",
    image: "/images/galery/furniture/furniture-2.webp",
    path: "/servicios/alquiler-mobiliario",
  },
  {
    title: "Ambientación y decoración",
    description:
      "Diseño y montaje de espacios únicos, personalizados según la temática, el estilo y la identidad de cada celebración.",
    image: "/images/galery/eventos/event-4.jpg",
    path: "/servicios/ambientacion-decoracion",
  },
  {
    title: "Organización integral",
    description:
      "Planificación, coordinación y ejecución completa de eventos para que disfrutes sin preocupaciones y con resultados profesionales.",
    image: "/images/galery/eventos/event-1.jpg",
    path: "/servicios/organizacion-integral",
  },
];

const ServicesZigZagSection = () => {
  return (
    <section className="max-w-6xl mx-auto bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              className={`group flex flex-col md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              } items-center gap-10 transition-transform duration-500 hover:-translate-y-1`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-urbanist uppercase font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-md md:text-lg text-gray-700 mb-6 font-marcellus leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to={service.path}
                    className="inline-block px-6 py-3 font-marcellus bg-azulOscuro text-white rounded-md transition-all duration-300 hover:bg-gray-800 hover:scale-[1.03]"
                  >
                    Ver más
                  </Link>

                  <a
                    href="https://wa.me/XXXXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 font-marcellus border border-gray-900 text-gray-900 rounded-md transition-all duration-300 hover:bg-gray-100 hover:scale-[1.03]"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesZigZagSection;
