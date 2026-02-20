import { memo } from "react";
import { Link } from "react-router-dom";

const SERVICES = [
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
    image: "/images/galery/furniture/furniture-7.webp",
    path: "/servicios/alquiler-mobiliario",
  },
  {
    title: "Ambientación y decoración",
    description:
      "Diseño y montaje de espacios únicos, personalizados según la temática, el estilo y la identidad de cada celebración.",
    image: "/images/galery/fullEvents/fullEvent-1.webp",
    path: "/servicios/ambientacion-decoracion",
  },
  {
    title: "Organización integral",
    description:
      "Planificación, coordinación y ejecución completa de eventos para que disfrutes sin preocupaciones y con resultados profesionales.",
    image: "/images/home/servHome2.webp",
    path: "/servicios/organizacion-integral",
  },
];

const ServiceItem = memo(function ServiceItem({
  title,
  description,
  image,
  path,
  reversed,
}) {
  return (
    <div
      className={`
        group
        flex flex-col md:flex-row
        ${reversed ? "md:flex-row-reverse" : ""}
        items-center gap-10
        transition-transform duration-500
        hover:-translate-y-1
        will-change-transform
        [contain:paint]
      `}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-lg shadow-sm">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="
              w-full
              h-[320px]
              object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-marcellus uppercase font-bold text-gray-900 mb-4">
          {title}
        </h3>

        <p className="text-md md:text-lg text-gray-700 mb-6 font-marcellus leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to={path}
            className="
              inline-flex items-center justify-center
              px-8 py-3
              bg-[#4F7CD9] text-white
              font-urbanist font-semibold
              rounded-full
              shadow-md
              transition-all duration-300
              hover:bg-[#3F6ECC] hover:-translate-y-0.5 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-[#4F7CD9] focus:ring-offset-2
            "
          >
            Ver más
          </Link>

          <a
            href="https://wa.me/543512324008"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-8 py-3
              border border-[#4F7CD9] text-[#4F7CD9]
              font-urbanist font-semibold
              rounded-full
              transition-all duration-300
              hover:bg-[#4F7CD9] hover:text-white hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-[#4F7CD9] focus:ring-offset-2
            "
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
});

const ServicesZigZagSection = () => {
  return (
    <section
      className="
        max-w-6xl mx-auto py-20
        content-visibility-auto
        contain-intrinsic-size-[1400px]
      "
    >
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {SERVICES.map((service, index) => (
          <ServiceItem
            key={service.path}
            {...service}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(ServicesZigZagSection);
