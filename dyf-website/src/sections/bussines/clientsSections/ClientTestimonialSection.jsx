import { memo } from "react";
import SliderCards from "../../../components/common/SliderCards";
import commentImg from "/images/varias/coment.jpg";

const ClientTestimonialsSection = () => {
  return (
    <section className="w-full py-20 bg-white">

      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div className="w-full max-w-full h-56 sm:h-64 md:h-80 rounded-xl overflow-hidden">
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

      {/* Slider */}
        <SliderCards />

    </section>
  );
};

export default memo(ClientTestimonialsSection);