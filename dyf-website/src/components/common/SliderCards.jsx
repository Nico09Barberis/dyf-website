// src/components/CustomerTestimonials.jsx
import React, { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Juan Pérez",
    comment:
      "Excelente servicio, muy profesional y atento. Recomiendo totalmente esta empresa.",
  },
  {
    name: "María López",
    comment:
      "Me encantó la atención y la calidad del trabajo. Muy satisfecho con el resultado final.",
  },
  {
    name: "Carlos Rodríguez",
    comment:
      "Gran experiencia, equipo muy capacitado y amable. Sin dudas volveré a contratar.",
  },
  {
    name: "Ana Gómez",
    comment:
      "Superaron mis expectativas, la comunicación fue excelente y el trabajo impecable.",
  },
];

const SliderCards = () => {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const speed = 0.5;

  useEffect(() => {
    let animationFrame;

    const move = () => {
      if (!isPaused && sliderRef.current) {
        const totalWidth = sliderRef.current.scrollWidth / 2;
        setOffset((prev) => (prev + speed) % totalWidth);
      }
      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={sliderRef}
        className="flex space-x-6 px-6"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {[...testimonials, ...testimonials].map((slide, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 w-64 md:w-72 lg:w-80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden bg-[#3B73A1] text-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
          >
            <p className="text-sm md:text-base font-light leading-relaxed break-words">
              "{slide.comment}"
            </p>
            <h4 className="mt-4 font-semibold text-right">— {slide.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderCards;
