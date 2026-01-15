import { memo } from "react";

const cards = [
  {
    id: 1,
    title: "Contacto inicial",
    image: "/images/home/process/process1.webp",
    description: "Contanos tu idea, fechas y estilo del evento.",
  },
  {
    id: 2,
    title: "Diseño y propuesta",
    image: "/images/home/process/process2.webp",
    description: "Creamos un moodboard y presupuesto a medida.",
  },
  {
    id: 3,
    title: "Coordinación y montaje",
    image: "/images/home/process/process3.webp",
    description: "Gestionamos proveedores y el montaje completo.",
  },
  {
    id: 4,
    title: "Disfrutá tu evento",
    image: "/images/home/process/process4.webp",
    description: "Supervisamos todo para que vos solo disfrutes.",
  },
];

const BG_IMAGE = "/images/home/process/bg-flashcards.jpeg";

const ProcessCard = memo(function ProcessCard({ title, image, description }) {
  return (
    <div className="group [perspective:1000px] w-64 aspect-[4/5]">
      <div className="relative w-full h-full font-italiana uppercase transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Frente */}
        <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h3 className="text-white text-2xl font-semibold text-center px-2 drop-shadow-md">
              {title}
            </h3>
          </div>
        </div>

        {/* Reverso */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cover bg-center"
          style={{ backgroundImage: `url(${BG_IMAGE})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
            <p className="text-white text-center text-xl font-bold leading-relaxed drop-shadow-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

function ProcessSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16 my-12">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-bold tracking-wide text-gray-900 mb-2">
          Nuestro Proceso de Trabajo
        </h2>
        <div className="bg-dorado h-2 w-20 mx-auto mb-4" />
        <p className="text-md md:text-lg text-gray-800 font-marcellus">
          Te acompañamos paso a paso para crear un evento inolvidable.
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
    </section>
  );
}

export default memo(ProcessSection);
