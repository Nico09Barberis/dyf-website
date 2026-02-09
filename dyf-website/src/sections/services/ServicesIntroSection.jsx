const ServicesIntroSection = () => {
  return (
    <section className="w-full bg-gray-50">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-6 mt-12 text-center">
        <h1 className="text-3xl md:text-4xl font-marcellus uppercase font-bold text-azulOscuro mb-2">
          Nuestros servicios
        </h1>
 
        <div className="w-20 h-2 bg-dorado mx-auto mb-6"></div>

        <p className="text-md md:text-lg font-marcellus text-gray-600 max-w-3xl mx-auto">
          En DyF Celebraciones ofrecemos soluciones flexibles para la
          realización de eventos. Contamos con servicios de planificación
          personalizada, ambientación profesional, alquiler de vajilla y
          alquiler de mobiliario, los cuales pueden contratarse de forma
          individual o integrarse en una propuesta completa según las
          necesidades de cada celebración. Nos adaptamos a cada evento, cuidando
          cada detalle para lograr experiencias únicas, elegantes y memorables.
        </p>
      </div>
    </section>
  );
};

export default ServicesIntroSection;
