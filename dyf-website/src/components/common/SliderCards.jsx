import { useEffect, useMemo, useRef } from "react";
import userPlaceholder from "../../assets/images/google-profile.png";
import test1 from "/images/testimonials/test-1.webp";
import test2 from "/images/testimonials/test-2.webp";
import test3 from "/images/testimonials/test-3.webp";
import test4 from "/images/testimonials/test-4.webp";
import test5 from "/images/testimonials/test-5.webp";
import test6 from "/images/testimonials/test-6.webp";

/* =========================
   DATA
========================= */

const TESTIMONIALS = [
  {
    id: 1,
    name: "Marybel Alvarez Gatti",
    image: test1,
    comment:
      "Gracias Dani & Fede por acompañarnos en un momento TAN importante. Si buscan acompañamiento en cada detalle, profesionalismo y calidad sin duda llamen a D&F. Los queremos 🫶🏻…",
  },
  {
    id: 2,
    name: "Guillermo Bianchini",
    image: test2,
    comment:
      "Excelente servicio! Muy prolijos, puntuales, limpios, y sus productos son impecables! Super recomendables!",
  },
  {
    id: 3,
    name: "Juan Jose Chekirdimian",
    image: test3,
    comment:
      "Me han provisto de sillas y cubre asientos nuevos. Cumplieron con el horario prometido para la entrega. Estoy muy satisfecho.",
  },
  {
    id: 4,
    name: "Liliana Ludueña",
    image: test4,
    comment:
      "Excelente servicio. Acomodaron las entregas y retiro según nuestra conveniencia. Los tendremos siempre en cuenta.",
  },
  {
    id: 5,
    name: "Cecilia Casella",
    image: test5,
    comment:
      "Excelente atención. Resolvían inconvenientes de tiempo para que la fiesta salga perfecta. Hermosos los juegos de living.",
  },
  {
    id: 6,
    name: "Rodrigo Ariel Ochoa",
    image: test6,
    comment:
      "Excelente servicio. Muy puntuales y amables. Vajilla excelente. Excelente relación precio/calidad. 100% recomendados.",
  },
];

/* =========================
   ICONS (SVG livianos)
========================= */

const Star = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4 text-dorado opacity-70"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.447a1 1 0 00.95.69h3.623c.969 0 1.371 1.24.588 1.81l-2.932 2.13a1 1 0 00-.364 1.118l1.12 3.447c.3.921-.755 1.688-1.54 1.118l-2.932-2.13a1 1 0 00-1.176 0l-2.932 2.13c-.784.57-1.838-.197-1.539-1.118l1.12-3.447a1 1 0 00-.364-1.118L2.49 8.874c-.783-.57-.38-1.81.588-1.81h3.623a1 1 0 00.95-.69l1.12-3.447z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" className="h-5 w-5">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19-7.3 19-20 0-1.3-.1-2.7-.4-3.5z"
    />
  </svg>
);

/* =========================
   CARD
========================= */

const TestimonialCard = ({ data, index }) => (
  <div className="flex w-64 flex-shrink-0 flex-col bg-white p-3 text-black transition-transform duration-300 hover:scale-105 hover:shadow-2xl md:w-72 lg:w-80">
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img
          src={data.image || userPlaceholder}
          alt={data.name}
          className="h-10 w-10 rounded-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
        />
        <span className="text-sm font-semibold text-gray-800">
          {data.name}
        </span>
      </div>
      <GoogleIcon />
    </div>

    <div className="mb-2 flex">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} />
      ))}
    </div>

    <p className="text-sm leading-relaxed text-gray-800">
      "{data.comment}"
    </p>
  </div>
);

/* =========================
   SLIDER
========================= */

const SliderCards = ({ speed = 0.5 }) => {
  const sliderRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);

  const slides = useMemo(() => [...TESTIMONIALS, ...TESTIMONIALS], []);

  useEffect(() => {
    if (!sliderRef.current) return;

    const totalWidth = sliderRef.current.scrollWidth / 2;
    let rafId;

    const animate = () => {
      if (!pausedRef.current) {
        offsetRef.current += speed;

        if (offsetRef.current >= totalWidth) {
          offsetRef.current = 0;
        }

        sliderRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
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
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderCards;
