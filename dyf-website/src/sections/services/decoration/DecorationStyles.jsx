import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const styles = [
  {
    title: "Bodas",
    description:
      "Ambientaciones elegantes y personalizadas para celebrar momentos únicos.",
    image:
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Eventos corporativos",
    description:
      "Espacios profesionales alineados con la identidad de tu marca.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Eventos sociales",
    description:
      "Celebraciones privadas con ambientaciones que marcan la diferencia.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Temáticas",
    description: "Conceptos creativos adaptados a la idea de tu evento.",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Cumpleaños",
    description:
      "Ambientaciones divertidas y personalizadas para celebrar a lo grande.",
    image:
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1400&q=80",
  },
];

const DecorationStylesCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((c) => (c === 0 ? styles.length - 1 : c - 1));

  const nextSlide = () =>
    setCurrent((c) => (c === styles.length - 1 ? 0 : c + 1));

  return (
    <section
      id="estilos"
      className="w-full overflow-x-hidden py-16 md:py-24 bg-white"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-xl md:text-4xl font-semibold font-marcellus uppercase text-gray-900 mb-2">
            Estilos de ambientación
          </h2>
          <div className="w-20 h-1.5 bg-dorado mx-auto mb-4" />
          <p className="max-w-3xl mx-auto text-gray-600 font-marcellus text-base md:text-lg">
            Cada evento es único. Creamos ambientaciones pensadas para reflejar
            tu estilo y transformar el espacio.
          </p>
        </div>

        {/* Carousel */}
        <div className="w-full">
          {/* Carousel viewport */}
          <div className="relative w-full overflow-hidden rounded-2xl">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {styles.map((item, index) => (
                <div key={index} className="w-full min-w-full flex-shrink-0">
                  <div
                    className="
              relative
              w-full
              aspect-[5/3]
              sm:aspect-[21/9]
              rounded-2xl
              overflow-hidden
              bg-cover
              bg-center
            "
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/55" />

                    {/* Content */}
                    <div className="relative z-10 h-full w-full flex items-center justify-center px-4 sm:px-8">
                      <div className="text-center max-w-xl">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-urbanist text-white mb-4">
                          {item.title}
                        </h3>

                        <p className="text-white/90 font-marcellus text-sm sm:text-base md:text-lg mb-6">
                          {item.description}
                        </p>

                        <a
                          href="/contacto"
                          className="
                    inline-block
                    px-6 py-3
                    bg-white
                    text-gray-900
                    font-urbanist
                    font-semibold
                    rounded-xl
                    hover:bg-gray-100
                    transition
                  "
                        >
                          Solicitar asesoramiento
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls BELOW carousel */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="
        bg-gray-100
        hover:bg-gray-200
        rounded-full
        p-3
        shadow
        transition
      "
              aria-label="Anterior"
            >
              <FiChevronLeft className="text-2xl text-gray-900" />
            </button>

            <button
              onClick={nextSlide}
              className="
        bg-gray-100
        hover:bg-gray-200
        rounded-full
        p-3
        shadow
        transition
      "
              aria-label="Siguiente"
            >
              <FiChevronRight className="text-2xl text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecorationStylesCarousel;
