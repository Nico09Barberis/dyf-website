const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[40vh] md:min-h-[70vh] flex items-center justify-center bg-white text-azulOscuro overflow-hidden">
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-2">
        <h1 className="text-xl md:text-4xl font-marcellus font-semibold uppercase tracking-wide">
          Alquiler de Vajilla para Eventos
        </h1>

        <div className="w-20 h-1.5 bg-dorado mx-auto mb-4"></div>

        <p className="max-w-2xl text-gray-700 font-marcellus text-md md:text-lg">
          Vajilla elegante, higienizada y lista para acompañar tus
          celebraciones. Ideal para bodas, eventos corporativos y ocasiones
          especiales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="https://wa.me/5493512324008?text=Hola%20quiero%20solicitar%20un%20presupuesto%20para%20alquiler%20de%20vajilla."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block items-center justify-center
              px-8 py-3
              bg-dorado text-white
              font-urbanist font-semibold
              rounded-full
              shadow-md 
              transition-all duration-300
              hover:bg-dorado/90 hover:-translate-y-0.5 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-dorado focus:ring-offset-2"
          >
            Solicitar presupuesto
          </a>

          <button className="inline-flex items-center justify-center
              px-8 py-3
              border border-dorado text-dorado
              font-urbanist font-semibold
              rounded-full
              transition-all duration-300
              hover:bg-dorado hover:text-white
              focus:outline-none focus:ring-2 focus:ring-dorado focus:ring-offset-2">
            Ver catálogo
          </button>
        </div>
      </div>

      {/* Decoración opcional */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
