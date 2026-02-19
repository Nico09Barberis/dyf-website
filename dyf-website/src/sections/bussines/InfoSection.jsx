import { useEffect, useRef, useState } from "react";

/* =========================
   Animated Block
========================= */

const AnimatedBlock = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(entry.target); // mejor que disconnect()
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px", // aparece un poco antes
      }
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-700 ease-out will-change-transform ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

/* =========================
   DATA
========================= */

const SECTIONS = [
  {
    id: 1,
    image: "/images/varias/info1.webp",
    title: "Asesoramiento personalizado",
    text: `Te acompañamos en cada etapa de tu evento, escuchando tus ideas y transformándolas en una propuesta única.
Nuestro equipo te asesora en la elección de estilos, colores, decoración y vajilla para que cada detalle refleje exactamente lo que imaginás.`,
    reverse: false,
  },
  {
    id: 2,
    image: "/images/varias/info2.webp",
    title: "Experiencia y confianza",
    text: `Contamos con años de experiencia en la organización y ambientación de eventos sociales y corporativos.
Trabajamos con responsabilidad, puntualidad y compromiso para que disfrutes tu evento con total tranquilidad.`,
    reverse: true,
  },
  {
    id: 3,
    image: "/images/galery/fullEvents/fullEvent-1.webp",
    title: "Eventos que se recuerdan",
    text: `Nuestro objetivo es crear experiencias memorables.
Cada celebración es única, por eso cuidamos cada detalle para lograr un resultado elegante, armonioso y especial.`,
    reverse: false,
  },
];

/* =========================
   COMPONENT
========================= */

const InfoSection = () => {
  return (
    <section className="w-full bg-[#A7C7E7] py-6 md:py-14">
      <div className="mx-auto max-w-6xl">
        {SECTIONS.map(({ id, image, title, text, reverse }) => (
          <AnimatedBlock key={id}>
            <div className="mb-20 last:mb-0">
              <div className="grid grid-cols-1 items-center gap-10 px-4 py-4 md:grid-cols-2 md:gap-14 md:px-6">
                
                {/* Imagen */}
                <div
                  className={`order-2 ${
                    reverse ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="h-44 w-full rounded-3xl object-cover shadow-md sm:h-56 md:h-72"
                  />
                </div>

                {/* Texto */}
                <div
                  className={`order-1 flex flex-col justify-center text-center md:text-left ${
                    reverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <h3 className="mb-4 font-urbanist text-2xl font-bold md:text-3xl">
                    {title}
                  </h3>

                  <p className="font-marcellus text-base leading-relaxed text-gray-800 md:text-lg">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedBlock>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;
