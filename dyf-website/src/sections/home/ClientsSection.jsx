// src/components/sections/ClientsSection.jsx
import React from "react";

const clients = [
  {
    id: 1,
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 2,
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 3,
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    id: 4,
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 5,
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
  },
  {
    id: 6,
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
];

const ClientsSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Título */}
        <h2 className="text-xl md:text-4xl font-marcellus font-semibold uppercase mb-2 text-azulOscuro">
          Nuestros Clientes
        </h2>
        <div className="w-20 h-2 bg-dorado mx-auto mb-4"></div>
        {/* Subtítulo */}
        <p className="text-gray-800 max-w-3xl mx-auto mb-12 text-md md:text-lg font-marcellus">
          Hemos trabajado con marcas líderes en distintas industrias, ofreciendo soluciones innovadoras y confiables.
        </p>

        {/* Carousel responsive con flex */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex justify-center items-center w-1/2 sm:w-1/3 md:w-1/4 p-4 transition-transform duration-300 hover:scale-110"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
