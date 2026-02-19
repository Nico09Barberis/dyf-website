import { memo } from "react";
import { FiMessageSquare } from "react-icons/fi";
import commentImg from "/images/varias/coment.jpg";

const TESTIMONIALS = [
  {
    name: "María González",
    company: "Estancia Candonga",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "El servicio fue impecable desde el primer contacto. Todo estuvo perfectamente organizado y la ambientación superó nuestras expectativas.",
  },
  {
    name: "Carlos Rodríguez",
    company: "Restaurant La Passion",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "La calidad de la vajilla y el mobiliario marcó una gran diferencia en nuestro evento. Muy profesionales y puntuales.",
  },
  {
    name: "Laura Fernández",
    company: "Municipalidad de Córdoba",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Un equipo confiable y comprometido. Supieron adaptarse a nuestras necesidades y resolver todo con rapidez.",
  },
];

const TestimonialCard = memo(function TestimonialCard({
  name,
  company,
  image,
  text,
}) {
  return (
    <div
      className="
        group
        bg-[#F2F4F7]
        border border-gray-200
        rounded-b-xl
        p-6
        shadow-sm
        relative
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-lg
        will-change-transform
        [contain:paint]
      "
    >
      {/* Golden bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-dorado scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

      {/* Quote icon */}
      <div className="absolute top-4 right-4 text-dorado/70 text-3xl transition-all duration-300 group-hover:text-dorado group-hover:scale-110">
        <FiMessageSquare />
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div>
          <p className="font-urbanist font-semibold text-gray-900 text-sm">
            {name}
          </p>
          <p className="text-gray-500 text-xs font-marcellus">
            {company}
          </p>
        </div>
      </div>

      {/* Text */}
      <p className="font-marcellus text-gray-700 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
});

const ClientTestimonialsSection = () => {
  return (
    <section
      className="
        py-20 bg-white
        content-visibility-auto
        contain-intrinsic-size-[1000px]
      "
    >
      {/* Top split */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="w-full h-72 md:h-80 rounded-xl overflow-hidden">
            <img
              src={commentImg}
              alt="Clientes satisfechos"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="bg-gray-50 p-12">
            <p className="text-md text-gray-400 font-urbanist uppercase font-bold tracking-widest mb-4">
              reseñas
            </p>

            <h2 className="text-2xl md:text-3xl font-urbanist uppercase font-bold text-gray-600 mb-3">
              La experiencia de nuestros clientes
            </h2>

            <div className="w-20 h-1.5 bg-dorado mb-4" />

            <p className="font-marcellus text-gray-600 text-lg">
              Cada evento es una oportunidad para construir relaciones duraderas
              basadas en la confianza, la calidad y el compromiso.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <TestimonialCard
              key={item.name}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ClientTestimonialsSection);
