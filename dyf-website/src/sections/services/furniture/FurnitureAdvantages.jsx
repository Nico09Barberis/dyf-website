import React, { memo } from "react";

const ADVANTAGES = [
  {
    id: "01",
    title: "Stock propio y variado",
    description:
      "Disponemos de un amplio inventario de mobiliario para cubrir eventos pequeños y de gran escala.",
  },
  {
    id: "02",
    title: "Puntualidad garantizada",
    description:
      "Cumplimos estrictamente con los horarios acordados de entrega y retiro.",
  },
  {
    id: "03",
    title: "Diseño moderno y cuidado",
    description:
      "Nuestro mobiliario se renueva constantemente para mantener una estética actual.",
  },
  {
    id: "04",
    title: "Equipo especializado",
    description:
      "Personal capacitado para montaje eficiente y manejo responsable de cada pieza.",
  },
  {
    id: "05",
    title: "Adaptabilidad total",
    description:
      "Nos ajustamos a diferentes espacios, estilos y tipos de eventos.",
  },
  {
    id: "06",
    title: "Atención personalizada",
    description:
      "Acompañamiento profesional desde la cotización hasta el retiro final.",
  },
];

const FurnitureAdvantages = () => {
  return (
    <section className="py-20 md:py-28 bg-white w-full">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <header className="text-center mb-20">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-bold text-gray-900 mb-3">
            ¿Por qué elegirnos?
          </h2>

          <div className="w-20 h-1.5 mx-auto bg-dorado mb-5"></div>

          <p className="text-gray-600 max-w-3xl mx-auto font-marcellus text-md md:text-lg">
            Ventajas que garantizan un servicio confiable, organizado y profesional.
          </p>
        </header>

        {/* Editorial layout */}
        <div className="space-y-16">

          {ADVANTAGES.map((item, index) => (
            <div
              key={item.id}
              className={`
                grid md:grid-cols-2 gap-10 items-center
                ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}
              `}
            >
              {/* Número gigante */}
              <div className="relative flex justify-center md:justify-start">
                <span className="
                  text-[80px] md:text-[110px]
                  font-urbanist font-bold
                  text-dorado/60
                  leading-none
                  select-none
                ">
                  {item.id}
                </span>
              </div>

              {/* Contenido */}
              <div className="max-w-lg">
                <h3 className="font-urbanist text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <div className="w-12 h-[2px] bg-dorado mb-4"></div>

                <p className="font-marcellus text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default memo(FurnitureAdvantages);
