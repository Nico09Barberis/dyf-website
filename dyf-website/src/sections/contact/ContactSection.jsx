import ContactForm from "../../components/common/ContactForm";

import { MdOutlinePhoneIphone, MdOutlineEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full py-0 md:py-16 px-0 md:px-8">
      <div className="w-full md:max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Columna izquierda */}
        <div className="flex flex-col w-full bg-[#121212] justify-start space-y-6 p-4 md:p-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 uppercase">
            Info de contacto
          </h2>

          <div className="flex items-center space-x-4">
            <MdOutlineEmail className="w-10 h-10 p-2 bg-gray-700 rounded-full text-dorado mt-1" />
            <div>
              <h3 className="font-semibold text-dorado uppercase">Correo electrónico</h3>
              <p className="text-gray-100">contacto@tusitio.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MdOutlinePhoneIphone className="w-10 h-10 p-2 bg-gray-700 rounded-full text-dorado mt-1" />
            <div>
              <h3 className="font-semibold text-dorado uppercase">Teléfono</h3>
              <p className="text-gray-100">+54 9 11 1234-5678</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkedAlt className="w-10 h-10 p-2 bg-gray-700 rounded-full text-dorado mt-1" />
            <div>
              <h3 className="font-semibold text-dorado uppercase">Ubicación</h3>
              <p className="text-gray-100">Cordoba, Argentina</p>
            </div>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
