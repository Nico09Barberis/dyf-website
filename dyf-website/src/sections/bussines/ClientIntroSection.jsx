import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/ui/CustomButton";
import { GoMoveToEnd } from "react-icons/go";

const ClientIntroSection = () => {
  const clientesImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      alt: "Boda al aire libre con luces cálidas",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      alt: "Evento corporativo elegante",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      alt: "Cumpleaños con decoración colorida",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      alt: "Evento en salón moderno",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
      alt: "Boda elegante con flores blancas",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
      alt: "Evento empresarial nocturno",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
      alt: "Evento empresarial nocturno",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=800&q=80",
      alt: "Evento empresarial nocturno",
    },
  ];

  return (
    <section className="bg-gray-50 py-8 px-4 md:px-8 lg:px-16 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-urbanist font-semibold uppercase text-gray-900 tracking-wide mb-2">
          Ellos confiaron en nosotros
        </h2>
        <div className="bg-dorado h-2 w-20 mx-auto mb-2"></div>
        <p className="text-gray-800 text-md md:text-lg font-marcellus mb-12">
          Más de 200 eventos organizados con amor, dedicación y profesionalismo.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {clientesImages.map((img) => (
            <div
              key={img.id}
              className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CustomButton to="/galeria" label="ir a galeria" icon={GoMoveToEnd} />
        </div>
      </div>
    </section>
  );
};

export default ClientIntroSection;
