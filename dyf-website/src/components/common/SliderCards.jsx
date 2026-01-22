import { useEffect, useMemo, useRef, memo } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import userPlaceholder from "../../assets/images/google-profile.png";
import test1 from "/images/testimonials/test-1.webp";
import Test2 from "/images/testimonials/test-2.webp";
import Test3 from "/images/testimonials/test-3.webp";
import Test4 from "/images/testimonials/test-4.webp";
import Test5 from "/images/testimonials/test-5.webp";
import Test6 from "/images/testimonials/test-6.webp";


const TESTIMONIALS = [
  {
    id: 1,
    name: "Marybel Alvarez Gatti",
    image: test1,
    comment:
    "Gracias Dani & Fede por acompañarnos en un momento TAN importante. Si buscan acompañamiento en cada detalle, profesionalismo y calidad sin duda llamen a D&F. Los queremos 🫶🏻…"
  },
  {
    id: 2,
    name: "Guillermo Bianchini",
    image: Test2,
    comment:
      "Excelente servicio! Muy prolijos, puntuales, limpios, y sus productos son impecables! Super recomendables!",
  },
  {
    id: 3,
    name: "juan jose chekirdimian",
    image: Test3,
    comment:
      "Me han provisto de sillas y cubre asientos nuevos . Me han traído las sillas a mi domicilio. Hab cumplido con el horario prometido para la entrega. Estoy muy satisfecho.",
  },
  {
    id: 4,
    name: "Liliana Ludueña",
    image: Test4,
    comment:
      "Excelente el Servicio. Acomodaron las entregas y retiró de acuerdo a nuestra conveniencia lo que apreciamos muchísimo. Los tendremos siempre en cuenta para nuestros eventos y con mucho gusto los recomendamos.",
  },
   {
    id: 5,
    name: "Cecilia Casella",
    image: Test5,
    comment:
      "Excelente atención! Trataron de resolver mis inconvenientes de tiempo, así la fiesta salía perfecta. Hermosos los juegos de living.",
  },
   {
    id: 6,
    name: "Rodrigo Ariel Ochoa",
    image: Test6,
    comment:
      "Excelente servicio. Muy puntuales y amables. La vajilla excelente. Buena calidad de sillas y mesas. Y excelente relación precio / calidad. 100% recomendados  para que tu evento sea un éxito!",
  },
];

const Stars = memo(() => (
  <div className="mb-2 flex items-center">
    {[0, 1, 2, 3, 4].map((i) => (
      <FaStar key={i} className="text-lg text-dorado opacity-70" />
    ))}
  </div>
));

const TestimonialCard = memo(function TestimonialCard({ data }) {
  return (
    <div className="flex w-64 flex-shrink-0 cursor-pointer flex-col justify-start overflow-hidden bg-white p-3 text-black transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-72 lg:w-80">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={data.image || userPlaceholder}
            alt={data.name}
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col font-sans">
            <span className="text-sm font-semibold text-gray-800">
              {data.name}
            </span>
          </div>
        </div>
        <FcGoogle className="text-lg" />
      </div>

      <Stars />

      <p className="break-words font-sans text-sm leading-relaxed text-gray-800">
        "{data.comment}"
      </p>
    </div>
  );
});

const SliderCards = ({ speed = 0.5 }) => {
  const sliderRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  const slides = useMemo(
    () => [...TESTIMONIALS, ...TESTIMONIALS],
    []
  );

  useEffect(() => {
    let rafId;

    const animate = () => {
      if (!pausedRef.current && sliderRef.current) {
        const totalWidth = sliderRef.current.scrollWidth / 2;
        offsetRef.current = (offsetRef.current + speed) % totalWidth;
        sliderRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return (
    <div
      className="relative w-full overflow-hidden py-10"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={sliderRef}
        className="flex space-x-6 px-6 will-change-transform"
      >
        {slides.map((slide, index) => (
          <TestimonialCard
            key={`${slide.id}-${index}`}
            data={slide}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderCards;
