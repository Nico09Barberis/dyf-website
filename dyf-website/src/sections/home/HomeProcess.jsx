import { memo } from "react";

const cards = [
  {
    id: 1,
    title: "Contacto inicial",
    image: "/images/home/process/process1.webp",
    description: "Analizamos tu evento, fechas, necesidades y expectativas.",
  },
  {
    id: 2,
    title: "Diseño y propuesta",
    image: "/images/home/process/process2.webp",
    description: "Definimos concepto, proveedores y presupuesto personalizado.",
  },
  {
    id: 3,
    title: "Coordinación y montaje",
    image: "/images/home/process/process3.webp",
    description: "Coordinamos cada detalle y ejecutamos el montaje completo.",
  },
  {
    id: 4,
    title: "Evento en marcha",
    image: "/images/home/process/process4.webp",
    description:
      "Supervisamos todo el desarrollo para que disfrutes sin preocupaciones.",
  },
];

const BG_IMAGE = "/images/home/process/bg-flashcards.webp";

const ProcessCard = memo(function ProcessCard({ title, image, description }) {
  return (
    <div className="group w-64 aspect-[4/5] [perspective:1000px] content-visibility-auto">
      <div className="relative w-full h-full font-urbanist transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] will-change-transform">
        
        {/* Frente */}
        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-2 drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>

        {/* Reverso */}
        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            src={BG_IMAGE}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
            <p className="text-white text-center text-xl md:text-2xl font-bold leading-relaxed drop-shadow-lg">
              {description}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
});


function HomeProcess() {
  return (
    <section className="flex flex-col items-center justify-center py-16 my-12">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-xl md:text-4xl font-marcellus uppercase font-bold text-azulOscuro mb-2">
          Organización integral de tu evento
        </h2>

        <div className="bg-dorado h-2 w-20 mx-auto mb-4" />

        <p className="text-md md:text-lg text-gray-800 font-marcellus">
          Nos encargamos de todo el proceso, desde la idea inicial hasta la
          coordinación completa del día del evento.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {cards.map((card) => (
          <ProcessCard
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>

      {/* CTA secundario */}
      <div className="mt-14">
        <a
          href="/servicios/organizacion-integral"
          className="
            inline-flex items-center gap-2
            px-8 py-3
            font-urbanist uppercase text-sm tracking-wide
            text-white bg-azulOscuro
            rounded-full
            transition-all duration-300
            hover:bg-blue-900 hover:scale-105
            shadow-lg shadow-blue-900/30
          "
        >
          saber mas
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
}

export default memo(HomeProcess);
