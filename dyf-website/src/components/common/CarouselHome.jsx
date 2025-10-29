import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "https://picsum.photos/1920/600?random=1011", // ejemplo genérico
    title: "Creamos Momentos Inolvidables",
    subtitle: "Desde la primera idea hasta el último detalle, hacemos que cada evento sea único",
  },
  {
    image: "https://picsum.photos/1920/600?random=1022",
    title: "Celebraciones a tu Medida",
    subtitle: "Diseñamos y coordinamos cada evento para que refleje tu estilo y personalidad",
  },
  {
    image: "https://picsum.photos/1920/600?random=1033",
    title: "Eventos Corporativos y Sociales",
    subtitle: "Nos ocupamos de todo para que vos solo disfrutes de la experiencia",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  // Cambio automático cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[600px]">
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Imagen de fondo */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover transition-transform duration-1000 scale-105"
            />

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Contenido */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6 opacity-90">{slide.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
