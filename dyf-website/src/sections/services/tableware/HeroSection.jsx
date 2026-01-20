const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-white text-azulOscuro overflow-hidden">
      {/* Contenido */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-urbanist font-semibold uppercase tracking-wide">
          Alquiler de Vajilla para Eventos
        </h1>

        <div className="w-20 h-2 bg-dorado mx-auto mb-4"></div>

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
            className="inline-block px-8 py-3 bg-azulOscuro text-white font-semibold rounded-md hover:bg-opacity-90 transition"
          >
            Solicitar presupuesto
          </a>

          <button className="px-8 py-3 border border-azulOscuro text-azulOscuro font-semibold rounded-md hover:bg-azulOscuro hover:text-white transition">
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
