import FlexCard from "../../components/ui/FlexCard";

const ServicesSection = () => {
  return (
    <section className="w-full my-20 p-2 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-urbanist uppercase font-bold mb-2 text-azulOscuro">
          Creamos experiencias inolvidables
        </h2>
        <div className="w-20 h-2 bg-dorado mx-auto mb-4"></div>
        <p className="text-gray-800 max-w-3xl mx-auto mb-8 text-md md:text-lg font-marcellus">
          Cada evento es único. Nos encargamos de cada detalle para que vos solo
          disfrutes tu celebración.
        </p>
        <FlexCard />
      </div>
    </section>
  );
};

export default ServicesSection;
