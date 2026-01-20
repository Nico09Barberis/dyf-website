import React, { useEffect, useRef, useState } from "react";

const AnimatedBlock = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const InfoSection = () => {
  const sections = [
    {
      id: 1,
      image: "/images/varias/info1.webp",
      title: "Asesoramiento personalizado",
      text: `Te acompañamos en cada etapa de tu evento, escuchando tus ideas y transformándolas en una propuesta única.
      Nuestro equipo te asesora en la elección de estilos, colores, decoración y vajilla para que cada detalle refleje
      exactamente lo que imaginás.`,
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

  return (
    <section className="w-full py-12 bg-[#A7C7E7]">
      <div className="max-w-6xl mx-auto">
        {sections.map(({ id, image, title, text, reverse }) => (
          <AnimatedBlock key={id}>
            <div className="mb-20 last:mb-0">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 py-4 md:px-6 gap-10 md:gap-14">
                {/* Imagen */}
                <div
                  className={`order-2 ${reverse ? "md:order-2" : "md:order-1"} mb-6 md:mb-0`}
                >
                  <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-44 sm:h-56 md:h-72 object-cover rounded-3xl shadow-md"
                  />
                </div>

                {/* Texto */}
                <div
                  className={`order-1 ${reverse ? "md:order-1" : "md:order-2"} flex flex-col justify-center text-center md:text-left mt-2 md:mt-0 px-2 sm:px-4 md:px-0`}
                >
                  <h3 className="text-2xl md:text-3xl font-urbanist uppercase tracking-wide font-semibold mb-4">
                    {title}
                  </h3>

                  <p className="text-gray-800 font-marcellus text-base md:text-lg leading-relaxed">
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
