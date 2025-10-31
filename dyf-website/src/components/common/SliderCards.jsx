import React, { useEffect, useRef, useState, useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import userPlaceholder from "../../assets/images/google-profile.png";

const testimonials = [
  { name: "Juan Pérez", userName: "@juanperez12", comment: "Excelente servicio, muy profesional y atento. Recomiendo totalmente esta empresa." },
  { name: "María López", userName: "@maria.lopez3", comment: "Me encantó la atención y la calidad del trabajo. Muy satisfecho con el resultado final." },
  { name: "Carlos Rodríguez", userName: "@crodriguez10", comment: "Gran experiencia, equipo muy capacitado y amable. Sin dudas volveré a contratar." },
  { name: "Ana Gómez", userName: "@soy_anagomez", comment: "Superaron mis expectativas, la comunicación fue excelente y el trabajo impecable." },
];

const SliderCards = ({ speed = 0.5 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const offsetRef = useRef(0); // offset persistente
  const slides = useMemo(() => [...testimonials, ...testimonials], []);

  useEffect(() => {
    let animationFrame;

    const move = () => {
      if (!isPaused && sliderRef.current) {
        const totalWidth = sliderRef.current.scrollWidth / 2;
        offsetRef.current = (offsetRef.current + speed) % totalWidth;
        sliderRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused, speed]);

  return (
    <div
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={sliderRef} className="flex space-x-6 px-6 will-change-transform">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-64 md:w-72 lg:w-80 p-3 flex flex-col justify-between overflow-hidden bg-white text-black transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {/* Fila superior */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={userPlaceholder}
                  alt={slide.name}
                  className="w-10 h-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex flex-col font-sans">
                  <span className="font-semibold text-sm text-gray-800">{slide.name}</span>
                  <span className="text-xs text-gray-600 opacity-80">{slide.userName}</span>
                </div>
              </div>
              <FcGoogle className="text-lg" />
            </div>

            {/* Estrellas */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-dorado opacity-70 text-lg" />
              ))}
            </div>

            {/* Comentario */}
            <p className="text-sm md:text-base text-gray-800 font-sans leading-relaxed break-words">
              "{slide.comment}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderCards;
