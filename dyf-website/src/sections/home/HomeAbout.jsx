import { memo } from "react";
import { CgMathPlus } from "react-icons/cg";
import CustomButton from "../../components/ui/CustomButton";

const HomeAbout = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row my-20 p-2">

      {/* Contenedor Izquierdo (Imágenes) */}
      <div className="w-full md:w-1/2 flex h-[350px] md:h-[520px] mt-10 md:mt-0">
        
        <div className="w-1/2 flex flex-col gap-3 h-full">
          <img
            src="/images/home/about1.webp"
            alt="Equipo trabajando"
            className="w-full h-1/2 object-cover"
            loading="lazy"
            decoding="async"
          />
          <img
            src="/images/home/about2.webp"
            alt="Reunión de trabajo"
            className="w-full h-1/2 object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="w-1/2 ml-3 h-full">
          <img
            src="/images/home/servHome2.webp"
            alt="Oficina moderna"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Contenedor Derecho */}
      <div className="w-full md:w-1/2 flex flex-col md:shadow-2xl shadow-none justify-center px-6 py-4 md:py-10">
        <h2 className="text-2xl uppercase font-lora font-semibold mb-2">d&f</h2>

        <h3 className="text-3xl font-marcellus font-semibold text-gray-800 mb-1">
          Sobre nosotros
        </h3>

        <div className="w-20 h-1.5 bg-[#F4D03F] mb-4" />

        <p className="text-gray-800 text-md md:text-lg font-marcellus leading-relaxed">
          En d&f creemos que cada evento cuenta una historia y nuestro
          propósito es ayudarte a contar la tuya de la mejor manera...
        </p>

        <div className="w-auto mt-6">
          <CustomButton
            to="/empresa/nosotros"
            label="saber más"
            icon={CgMathPlus}
          />
        </div>
      </div>

    </section>
  );
};

export default memo(HomeAbout);
