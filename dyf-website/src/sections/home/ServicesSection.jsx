import { FaArrowRight } from "react-icons/fa";
import CustomButton from "../../components/ui/CustomButton";
import FlexCard from "../../components/ui/FlexCard";

const services = [
  {
    id: 1,
    title: "Desarrollo Web",
    description:
      "Creamos sitios web modernos, optimizados y adaptables a cualquier dispositivo, enfocados en la xp de user.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    link: "/servicios/desarrollo-web", // ✅ agrega un link específico
  },
  {
    id: 2,
    title: "Soluciones Móviles",
    description:
      "Diseñamos y desarrollamos aplicaciones móviles nativas e híbridas para potenciar tu presencia en el mundo digital.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    link: "/servicios/soluciones-moviles",
  },
  {
    id: 3,
    title: "Automatización y Sistemas",
    description:
      "Implementamos sistemas personalizados y automatizamos procesos para mejorar la eficiencia operativa de tu empresa.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    link: "/servicios/automatizacion",
  },
];

const ServicesSection = () => {
  return (
    <section className="w-full my-12 p-2 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Nuestros Servicios</h2>
        <div className="w-20 h-1 bg-blue-500 rounded mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Ofrecemos soluciones tecnológicas diseñadas para impulsar el
          crecimiento y la transformación digital de tu empresa.
        </p>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-visible"
            >
              {/* Imagen */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 text-left flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* ✅ Botón con redirección */}
                <div className="text-end">
                  <CustomButton to={service.link} label="Ver más" icon={FaArrowRight} />
                </div>
              </div>
            </div>
          ))}

        </div>
      <FlexCard />
      </div>
    </section>
  );
};

export default ServicesSection;
