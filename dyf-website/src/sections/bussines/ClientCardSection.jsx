import React from "react";

const testimonios = [
  {
    id: 1,
    nombre: "Mariana & Lucas",
    tipo: "Boda en Palermo",
    mensaje:
      "Nuestro casamiento fue un sueño. El equipo de DYF se encargó de cada detalle con una dedicación increíble.",
    imagen:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    nombre: "Eventos TechCorp",
    tipo: "Fiesta empresarial",
    mensaje:
      "Gracias a DYF logramos un evento impecable. Coordinación perfecta y ambientación espectacular.",
    imagen:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    nombre: "Sofía R.",
    tipo: "Cumpleaños 30 años",
    mensaje:
      "Fue una noche inolvidable. Todo salió perfecto, desde la decoración hasta la música. Los volvería a elegir sin dudar.",
    imagen:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
];

const ClientCardSection = () => {
  return (
    <section className="py-8 px-4 my-12">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl md:text-4xl font-italiana uppercase font-semibold text-gray-800 mb-2">
          Testimonios de experiencias inolvidables
        </h3>
        <div className="bg-dorado h-2 w-20 mx-auto mb-6"></div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <img
                src={testimonio.imagen}
                alt={testimonio.nombre}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <p className="text-gray-600 italic mb-4">
                “{testimonio.mensaje}”
              </p>
              <div>
                <h4 className="font-semibold text-gray-800">
                  {testimonio.nombre}
                </h4>
                <p className="text-sm text-gray-500">{testimonio.tipo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCardSection;
