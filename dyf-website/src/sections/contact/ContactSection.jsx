import ContactForm from "../../components/common/ContactForm";

import { MdOutlinePhoneIphone, MdOutlineEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">Ponte en contacto</h2>

          <div className="flex items-start space-x-4">
            <MdOutlineEmail className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">Correo electrónico</h3>
              <p className="text-gray-600">contacto@tusitio.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MdOutlinePhoneIphone className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">Teléfono</h3>
              <p className="text-gray-600">+54 9 11 1234-5678</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaMapMarkedAlt className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">Horario de atención</h3>
              <p className="text-gray-600">Lunes a Viernes, 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
