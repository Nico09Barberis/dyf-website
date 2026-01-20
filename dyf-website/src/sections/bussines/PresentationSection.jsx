const PresentationSection = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row my-20 p-2">
      
      {/* Contenedor Izquierdo (imagen en desktop, abajo en mobile) */}
      <div className="w-full md:w-1/2">
        <img
          src="/images/varias/intro1.webp"
          alt="DyF Celebraciones - Nuestro equipo"
          loading="lazy"
          decoding="async"
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Contenedor Derecho (texto primero en mobile) */}
      <div className="w-full md:w-1/2 flex flex-col md:shadow-2xl justify-center px-6 py-10 bg-white">
        <h2 className="text-lg uppercase font-lora font-semibold mb-2 text-gray-500">
          d&f
        </h2>

        <h3 className="text-xl md:text-2xl font-lora font-semibold text-gray-800 mb-1">
          Sobre nosotros
        </h3>

        <div className="w-20 h-1 bg-[#F4D03F] mb-4"></div>

        <p className="text-gray-800 font-marcellus text-base leading-relaxed">
          Somos Dani y Fede, y DyF Celebraciones nació de un sueño que empezó bien
          desde abajo, con el alquiler de vajilla y muchas ganas de salir
          adelante. Con esfuerzo, sacrificio y trabajo constante fuimos
          creciendo, sumando mobiliario, decoración y nuevos servicios, hasta
          llegar a lo que hacemos hoy: crear y acompañar momentos únicos.
          <br />
          <br />
          Cada evento que realizamos lleva un poco de nuestra historia, de todo
          lo aprendido en el camino y de la pasión que ponemos en cada detalle.
          Porque para nosotros esto no es solo un trabajo, es el resultado de
          años de compromiso y crecimiento.
        </p>
      </div>

    </section>
  );
};

export default PresentationSection;
