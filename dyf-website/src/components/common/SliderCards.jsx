import { useEffect, useMemo, useRef, memo } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import userPlaceholder from "../../assets/images/google-profile.png";
import MarybelGatti from "../../assets/images/testimonials/marybel.png";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Marybel Alvarez Gatti",
    userName: "@juanperez12",
    comment:
    "Gracias Dani & Fede por acompañarnos en un momento TAN importante. Si buscan acompañamiento en cada detalle, profesionalismo y calidad sin duda llamen a D&F. Los queremos 🫶🏻…"
  },
  {
    id: 2,
    name: "María López",
    userName: "@maria.lopez3",
    comment:
      "Me encantó la atención y la calidad del trabajo. Muy satisfecho con el resultado final.",
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    userName: "@crodriguez10",
    comment:
      "Gran experiencia, equipo muy capacitado y amable. Sin dudas volveré a contratar.",
  },
  {
    id: 4,
    name: "Ana Gómez",
    userName: "@soy_anagomez",
    comment:
      "Superaron mis expectativas, la comunicación fue excelente y el trabajo impecable.",
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
    <div className="flex w-64 flex-shrink-0 cursor-pointer flex-col justify-between overflow-hidden bg-white p-3 text-black transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-72 lg:w-80">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={userPlaceholder}
            alt={data.name}
            className="h-10 w-10 rounded-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col font-sans">
            <span className="text-sm font-semibold text-gray-800">
              {data.name}
            </span>
            <span className="text-xs text-gray-600 opacity-80">
              {data.userName}
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
