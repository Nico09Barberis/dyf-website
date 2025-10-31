import React from "react";
import bgImage from "../../assets/images/bg-flashcards.jpeg";

const cards = [
  {
    id: 1,
    title: "Contacto inicial",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop&q=80",
    description: "Contanos tu idea, fechas y estilo del evento.",
  },
  {
    id: 2,
    title: "Diseño y propuesta",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&auto=format&fit=crop&q=80",
    description: "Creamos un moodboard y presupuesto a medida.",
  },
  {
    id: 3,
    title: "Coordinación y montaje",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=80",
    description: "Gestionamos proveedores y el montaje completo.",
  },
  {
    id: 4,
    title: "Disfrutá tu evento",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&auto=format&fit=crop&q=80",
    description: "Supervisamos todo para que vos solo disfrutes.",
  },
];

const ProcessSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 my-12">
      {/* Título y subtítulo */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-italiana uppercase font-bold tracking-wide text-gray-800 mb-2">
          Nuestro Proceso de Trabajo
        </h2>
        <div className="bg-dorado h-2 w-20 mx-auto mb-4"></div>
        <p className="text-xl text-gray-600 font-lora font-semibold mt-2">
          Te acompañamos paso a paso para crear un evento inolvidable.
        </p>
      </div>

      {/* Flashcards */}
      <div className="flex flex-wrap justify-center items-center gap-8 p-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group [perspective:1000px] w-64 h-80 transition-transform"
          >
            <div className="relative w-full h-full font-italiana uppercase transition-transform duration-700 [transform-style:preserve-3d] will-change-transform group-hover:[transform:rotateY(180deg)]">
              
              {/* Frente */}
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-semibold text-center px-2 drop-shadow-md">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Reverso */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                  <p className="text-white text-center text-2xl font-bold leading-relaxed drop-shadow-lg">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
