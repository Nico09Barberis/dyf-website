import { memo } from "react";
import { FiUsers, FiBriefcase, FiCoffee, FiHome } from "react-icons/fi";

const CLIENT_TYPES = [
  {
    title: "Eventos sociales",
    description:
      "Cumpleaños, aniversarios, celebraciones familiares y eventos privados.",
    icon: FiUsers,
  },
  {
    title: "Empresas y clientes privados",
    description:
      "Empresas, estancias, salones y organizaciones que confían en nuestros servicios.",
    icon: FiBriefcase,
  },
  {
    title: "Sector gastronómico y hotelero",
    description:
      "Restaurantes, posadas y espacios turísticos que requieren soluciones profesionales.",
    icon: FiCoffee,
  },
  {
    title: "Organismos públicos",
    description:
      "Instituciones y entidades gubernamentales con altos estándares operativos.",
    icon: FiHome,
  },
];

const ClientCard = memo(function ClientCard({ title, description, icon }) {
  const IconComponent = icon;
  
  return (
    <div
      className="
        group
        bg-[#EDF4FF]
        border border-gray-200
        rounded-xl
        p-6
        text-center
        transition-transform transition-shadow duration-300 ease-out
        hover:shadow-lg hover:-translate-y-1
        will-change-transform
        [contain:paint]
      "
    >
      <div
        className="
          w-14 h-14 mx-auto mb-4 rounded-full
          bg-azulOscuro/10
          flex items-center justify-center
          transition-colors duration-300
          group-hover:bg-azulOscuro/20
        "
      >
        <IconComponent className="text-azulOscuro text-2xl" />
      </div>

      <h3 className="font-urbanist font-semibold text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 font-marcellus text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
});

const ClientsIntroSection = () => {
  return (
    <section
      className="
        py-16 px-6 md:px-12 bg-white
        content-visibility-auto
        contain-intrinsic-size-[800px]
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-xl md:text-4xl font-marcellus uppercase font-bold text-azulOscuro mb-2">
            Clientes que confían en nosotros
          </h2>

          <div className="w-20 h-1.5 mx-auto bg-dorado mb-4" />

          <p className="text-gray-700 max-w-3xl mx-auto font-marcellus text-base md:text-lg">
            Acompañamos eventos sociales, empresas y organismos públicos con
            soluciones profesionales, flexibles y orientadas a la excelencia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLIENT_TYPES.map((item) => (
            <ClientCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ClientsIntroSection);
