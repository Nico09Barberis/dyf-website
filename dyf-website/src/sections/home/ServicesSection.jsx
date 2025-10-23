import FlexCard from "../../components/ui/FlexCard";

const ServicesSection = () => {
  return (
    <section className="w-full my-12 p-2 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Nuestros Servicios</h2>
        <div className="w-20 h-1 bg-blue-500 rounded mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Ofrecemos soluciones tecnológicas diseñadas para impulsar el
          crecimiento y la transformación digital de tu empresa.
        </p>
        <FlexCard />
      </div>
    </section>
  );
};

export default ServicesSection;
