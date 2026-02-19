import { useRef, useState, useCallback, useEffect } from "react";
import {
  FaTruck,
  FaShieldAlt,
  FaHandsHelping,
  FaBoxOpen,
  FaSoap,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const includes = [
  {
    title: "Lavado e higienización",
    description:
      "Vajilla entregada completamente limpia y sanitizada con estándares profesionales.",
    icon: FaSoap,
  },
  {
    title: "Reposición por roturas",
    description:
      "Cobertura ante roturas accidentales durante el evento, sin costos ocultos.",
    icon: FaShieldAlt,
  },
  {
    title: "Entrega y retiro",
    description:
      "Coordinamos logística en el horario que mejor se adapte a tu evento.",
    icon: FaTruck,
  },
  {
    title: "Embalaje seguro",
    description:
      "Protección profesional para evitar daños en el traslado.",
    icon: FaBoxOpen,
  },
  {
    title: "Asesoramiento personalizado",
    description:
      "Te ayudamos a calcular cantidades y elegir el tipo de vajilla ideal.",
    icon: FaHandsHelping,
  },
];

export default function ServiceIncludesSection() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------------- SCROLL CONTROL ---------------- */

  const scrollToIndex = useCallback((index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.children[0].clientWidth + 24; // gap-6
    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  }, []);

  const scroll = useCallback(
    (direction) => {
      const newIndex =
        direction === "left"
          ? Math.max(activeIndex - 1, 0)
          : Math.min(activeIndex + 1, includes.length - 1);

      scrollToIndex(newIndex);
    },
    [activeIndex, scrollToIndex]
  );

  /* ---------------- DETECT ACTIVE CARD ---------------- */

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const cardWidth = slider.children[0].clientWidth + 24;
      const index = Math.round(slider.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });

    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full py-12 md:py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <header className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-marcellus uppercase font-semibold text-gray-900 mb-3">
            ¿Qué incluye nuestro servicio?
          </h2>

          <div className="w-20 h-1.5 bg-dorado mx-auto mb-5"></div>

          <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg font-marcellus">
            Diseñado para que tu evento sea simple, seguro y sin preocupaciones.
          </p>
        </header>

        <div className="relative">

          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-blue-200 shadow-sm hover:bg-blue-50 transition z-10"
          >
            <FaChevronLeft className="text-[#5F8AE6]" />
          </button>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-blue-200 shadow-sm hover:bg-blue-50 transition z-10"
          >
            <FaChevronRight className="text-[#5F8AE6]" />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              pb-6 scrollbar-hide
            "
          >
            {includes.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === activeIndex;

              return (
                <article
                  key={index}
                  className={`
                    snap-center
                    min-w-[280px] sm:min-w-[340px] md:min-w-[360px]
                    rounded-2xl p-6
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#EDF4FF] shadow-md scale-[1.02]"
                        : "bg-[#F7F9FF] opacity-80"
                    }
                  `}
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-blue-600/10">
                    <Icon className="text-azulOscuro text-xl" />
                  </div>

                  <h3 className="font-marcellus text-lg font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="font-marcellus text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          {/* DOT INDICATORS */}
          <div className="flex justify-center gap-2 mt-6">
            {includes.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    index === activeIndex
                      ? "w-6 bg-[#5F8AE6]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }
                `}
              />
            ))}
          </div>

          {/* MOBILE HINT */}
          <p className="text-center text-sm text-gray-400 mt-4 md:hidden">
            Deslizá para ver más →
          </p>

        </div>
      </div>
    </section>
  );
}
