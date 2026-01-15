import React from "react";
import {
  FiUsers,
  FiBriefcase,
  FiCoffee,
  FiHome
} from "react-icons/fi";

const clientTypes = [
  {
    title: "Eventos sociales",
    description: "Cumpleaños, aniversarios, celebraciones familiares y eventos privados.",
    icon: FiUsers
  },
  {
    title: "Empresas y clientes privados",
    description: "Empresas, estancias, salones y organizaciones que confían en nuestros servicios.",
    icon: FiBriefcase
  },
  {
    title: "Sector gastronómico y hotelero",
    description: "Restaurantes, posadas y espacios turísticos que requieren soluciones profesionales.",
    icon: FiCoffee
  },
  {
    title: "Organismos públicos",
    description: "Instituciones y entidades gubernamentales con altos estándares operativos.",
    icon: FiHome
  }
];

const ClientsIntroSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-bold text-gray-900 mb-3">
            Clientes que confían en nosotros
          </h2>
          <div className="w-20 h-1.5 mx-auto bg-dorado mb-5"></div>
          <p className="text-gray-700 max-w-3xl mx-auto font-marcellus text-md md:text-lg">
            Acompañamos eventos sociales, empresas y organismos públicos con
            soluciones profesionales, flexibles y orientadas a la excelencia.
          </p>
        </div>

        {/* Client types */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientTypes.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-gray-50 border border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-dorado/10 flex items-center justify-center transition group-hover:bg-dorado/20">
                  <Icon className="text-dorado text-2xl" />
                </div>

                <h3 className="font-urbanist font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 font-marcellus text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClientsIntroSection;
