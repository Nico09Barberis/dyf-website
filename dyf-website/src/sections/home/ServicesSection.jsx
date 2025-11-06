import FlexCard from "../../components/ui/FlexCard";

const ServicesSection = () => {
  return (
    <section className="w-full my-20 p-2 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-italiana uppercase font-bold mb-2">Nuestros Servicios</h2>
        <div className="w-20 h-2 bg-dorado mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-xl font-lora font-semibold">
          Ofrecemos soluciones tecnológicas diseñadas para impulsar el
          crecimiento y la transformación digital de tu empresa.
        </p>
        <FlexCard />
      </div>
    </section>
  );
};

export default ServicesSection;
