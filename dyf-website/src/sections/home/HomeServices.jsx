import FlexCard from "../../components/ui/FlexCard";

const HomeServices = () => {
  return (
    <section className="w-full my-20 p-2 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-4xl font-marcellus uppercase font-semibold mb-2 text-azulOscuro">
          Algunos de nuestros servicios
        </h2>
        <div className="w-20 h-1.5 bg-dorado mx-auto mb-4"></div>
        <p className="text-gray-800 max-w-3xl mx-auto mb-8 text-md md:text-lg font-marcellus">
          Vajilla de calidad, ambientación cuidada y mobiliario funcional para
          transformar cada evento en una experiencia memorable.
        </p>
        <FlexCard />
      </div>
    </section>
  );
};

export default HomeServices;
