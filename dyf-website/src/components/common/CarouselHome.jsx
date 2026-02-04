import { useEffect, useState, memo } from "react";

const SLIDES = [
  {
    image: "/images/home/slide1.webp",
    title: "Momentos que se Viven, Detalles que se Recuerdan",
    subtitle:
      "Transformamos tus ideas en eventos únicos y perfectamente organizados",
  },
  {
    image: "/images/home/slide2.webp",
    title: "Tu Evento, Nuestra Pasión",
    subtitle:
      "Decoración, coordinación y equipamiento pensados para cada ocasión",
  },
  {
    image: "/images/home/slide3.webp",
    title: "Vajilla y Ambientación Profesional",
    subtitle:
      "Calidad, estilo y elegancia para realzar cada celebración",
  },
  {
    image: "/images/home/slide4.webp",
    title: "Confianza y Experiencia",
    subtitle:
      "Acompañamos eventos sociales y corporativos con compromiso y excelencia",
  },
];
const CarouselSlide = memo(function CarouselSlide({ slide, isActive }) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
        isActive ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    >
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        <h2 className="mb-3 text-3xl font-bold drop-shadow-lg md:text-5xl">
          {slide.title}
        </h2>
        <p className="text-lg opacity-90 md:text-xl">{slide.subtitle}</p>
      </div>
    </div>
  );
});

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = SLIDES.length;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 7000);

    return () => clearInterval(id);
  }, [totalSlides]);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {SLIDES.map((slide, index) => (
        <CarouselSlide
          key={slide.image}
          slide={slide}
          isActive={index === current}
        />
      ))}
    </div>
  );
};

export default Carousel;
