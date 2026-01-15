import React from "react";
import { FiBriefcase, FiHome } from "react-icons/fi";

const clientsByCategory = [
  {
    title: "Empresas y clientes privados",
    icon: FiBriefcase,
    clients: [
      "Estancia Candonga",
      "Estancia Los Tilos",
      "Restaurant La Passion",
      "Restaurant Monjas, Fuegos y Vinos",
      "Restaurant Úrsula",
      "Parrilla Los Álamos",
      "Posada Los Jazmines",
      "Restaurant Gurupa",
      "Restaurant Eva",
      "Panicafé",
      "Mármol Siglo XVII",
    ],
  },
  {
    title: "Organismos públicos",
    icon: FiHome,
    clients: ["Municipalidad de Córdoba", "APROSS"],
  },
];

const ClientsCatSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-bold text-gray-900 mb-2">
            Nuestros clientes por categoría
          </h2>
          <div className="w-20 h-1.5 mx-auto bg-dorado mb-4"></div>
          <p className="text-gray-700 max-w-3xl mx-auto font-marcellus text-md md:text-lg">
            A lo largo de nuestra trayectoria hemos trabajado con una amplia
            variedad de clientes, desde empresas privadas hasta organismos
            públicos, brindando soluciones adaptadas a cada contexto y
            necesidad. A continuación, presentamos una clasificación de algunos
            de los clientes con los que hemos tenido el privilegio de colaborar.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {clientsByCategory.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-4"
              >
                {/* Left panel */}
                <div className="bg-gray-100 p-6 flex flex-col justify-center items-start md:items-center text-left md:text-center">
                  <h3 className="text-xl md:text-2xl font-urbanist uppercase font-bold text-gray-900 leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Right panel */}
                <div className="md:col-span-3 p-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6">
                    {category.clients.map((client, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 font-marcellus text-sm leading-relaxed"
                      >
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsCatSection;
