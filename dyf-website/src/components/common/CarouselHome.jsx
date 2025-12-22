import { useEffect, useState, memo } from "react";

const SLIDES = [
  {
    image: "https://picsum.photos/1920/600?random=1011",
    title: "Creamos Momentos Inolvidables",
    subtitle:
      "Desde la primera idea hasta el último detalle, hacemos que cada evento sea único",
  },
  {
    image: "https://picsum.photos/1920/600?random=1022",
    title: "Celebraciones a tu Medida",
    subtitle:
      "Diseñamos y coordinamos cada evento para que refleje tu estilo y personalidad",
  },
  {
    image: "https://picsum.photos/1920/600?random=1033",
    title: "Eventos Corporativos y Sociales",
    subtitle:
      "Nos ocupamos de todo para que vos solo disfrutes de la experiencia",
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
