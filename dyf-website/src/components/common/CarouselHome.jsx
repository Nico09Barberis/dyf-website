import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "https://picsum.photos/id/1018/1920/600",
    title: "Bienvenido al Mundo Vaquero",
    subtitle: "Experimenta la aventura desde el primer momento",
    button: "Explorar",
  },
  {
    image: "https://picsum.photos/id/1015/1920/600",
    title: "Descubre Nuevos Horizontes",
    subtitle: "Cada slide una historia diferente",
    button: "Saber más",
  },
  {
    image: "https://picsum.photos/id/1016/1920/600",
    title: "Viajes y Aventuras",
    subtitle: "Deja que las cortinas se abran hacia nuevas experiencias",
    button: "Comenzar",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[600px]">
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Imagen completa de fondo */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay oscuro semitransparente */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Cortinas/puertas con misma imagen */}
            <div className="absolute inset-0 flex">
              {/* Puerta izquierda */}
              <div
                className={`w-1/2 h-full bg-cover bg-center transition-transform duration-[2500ms] ease-in-out relative ${
                  isActive ? "-translate-x-full" : "translate-x-0"
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Sombra interna derecha */}
                <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black/50 to-transparent"></div>
              </div>

              {/* Puerta derecha */}
              <div
                className={`w-1/2 h-full bg-cover bg-center transition-transform duration-[2500ms] ease-in-out relative ${
                  isActive ? "translate-x-full" : "translate-x-0"
                }`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Sombra interna izquierda */}
                <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Contenido */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2 transition-all duration-[2000ms] transform scale-95 md:scale-100">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-4 transition-all duration-[2000ms] transform opacity-0 md:opacity-100">
                {slide.subtitle}
              </p>
              <button className="bg-pink-500 px-5 py-2 rounded hover:bg-pink-600 transition-colors duration-300">
                {slide.button}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
