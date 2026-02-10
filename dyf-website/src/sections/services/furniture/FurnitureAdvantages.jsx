import React from "react";

const Furnitureadvantages = [
  {
    number: "01",
    title: "Stock propio y variado",
    description:
      "Disponemos de un amplio inventario de mobiliario para cubrir eventos pequeños y de gran escala.",
  },
  {
    number: "02",
    title: "Puntualidad garantizada",
    description:
      "Cumplimos estrictamente con los horarios acordados de entrega y retiro.",
  },
  {
    number: "03",
    title: "Diseño moderno y cuidado",
    description:
      "Nuestro mobiliario se renueva constantemente para mantener una estética actual.",
  },
  {
    number: "04",
    title: "Equipo especializado",
    description:
      "Personal capacitado para montaje eficiente y manejo responsable de cada pieza.",
  },
  {
    number: "05",
    title: "Adaptabilidad total",
    description:
      "Nos ajustamos a diferentes espacios, estilos y tipos de eventos.",
  },
  {
    number: "06",
    title: "Atención personalizada",
    description:
      "Acompañamiento profesional desde la cotización hasta el retiro final.",
  },
];

const FurnitureAdvantages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-bold text-gray-900 mb-3">
            ¿Por qué elegirnos?
          </h2>
          <div className="w-20 h-1.5 mx-auto bg-dorado mb-4"></div>
          <p className="text-gray-700 max-w-3xl mx-auto font-marcellus text-md md:text-lg">
            Ventajas que nos diferencian y garantizan un servicio confiable y profesional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {Furnitureadvantages.map((item, index) => (
            <div
              key={index}
              className="
                group bg-gray-50 rounded-2xl p-6
                shadow-sm transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              {/* Number */}
              <div className="text-dorado font-urbanist text-4xl font-bold mb-4 opacity-80">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="font-urbanist font-semibold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed font-marcellus">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FurnitureAdvantages;
