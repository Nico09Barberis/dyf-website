import React from "react";

const FullServiceOurApproach = () => {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Layout editorial */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT — Title block */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-marcellus font-bold uppercase text-gray-900 leading-tight">
              Nuestro enfoque
            </h2>

            <div className="w-20 h-1.5 bg-dorado mx-auto md:mx-0" />

            <p className="font-urbanist text-sm uppercase tracking-[0.2em] text-azulOscuro/80">
              Diseño estratégico de experiencias
            </p>
          </div>

          {/* RIGHT — Main statement */}
          <div className="text-center md:text-left">
            <p className="font-marcellus text-lg md:text-2xl text-gray-700 leading-relaxed">
              Creemos que un evento exitoso no se improvisa.
              <span className="block mt-4">
                Se diseña con intención, se planifica con precisión y se ejecuta
                con atención absoluta en cada detalle.
              </span>
            </p>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="font-urbanist text-azulOscuro text-sm md:text-base tracking-[0.25em] uppercase">
            Organización · Estética · Experiencia
          </p>
        </div>

      </div>
    </section>
  );
};

export default FullServiceOurApproach;
