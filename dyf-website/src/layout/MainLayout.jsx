import { Link } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";

import logo from "../assets/images/logo-blanco.png";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { MdOutlineWork } from "react-icons/md";


function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>

      <footer className="bg-[#121212] text-white pt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna izquierda: Logo/Icono */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/">
              <img
                src={logo}
                alt="Mi Empresa Logo"
                className="h-34 w-40 object-contain"
              />
            </Link>{" "}
          </div>

          {/* Columna central: Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-3 text-lg">Navegación</h3>
            <a
              href="/"
              className="text-gray-300 hover:text-white mb-1 transition-colors duration-300"
            >
              Inicio
            </a>
            <a
              href="/productos"
              className="text-gray-300 hover:text-white mb-1 transition-colors duration-300"
            >
              Productos
            </a>
            <a
              href="/como-comprar"
              className="text-gray-300 hover:text-white mb-1 transition-colors duration-300"
            >
              como comprar
            </a>
          </div>

          {/* Columna derecha: Contacto / Redes */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold mb-3 text-lg">Contacto</h3>
            <p className="flex items-center gap-2 text-gray-300 mb-2">
              <MdEmail
                className="text-gray-300 text-lg"
                aria-label="Correo electrónico"
              />
              <a
                href="mailto:alfajores500millas@gmail.com"
                className="hover:underline"
              >
                alfajores500millas@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2 text-gray-300 mb-2">
              <FaSquarePhone
                className="text-gray-300 text-lg"
                aria-label="Teléfono"
              />
              +54 3492 582838
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5OjN13wZ91Tu4Kz7onGUFzcYkvsOibqi3HEQvoqu3ml7Vaw/viewform?usp=header" // reemplazá TU_FORM_ID con el ID real de tu form
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 mb-4 hover:underline transition-colors"
            >
              <MdOutlineWork
                className="text-gray-300 text-lg"
                aria-label="Trabaja con nosotros"
              />
              Trabaja con nosotros
            </a>
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/tucuenta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-indigo-700 hover:bg-indigo-600 hover:text-white transition-shadow shadow-md hover:shadow-xl"
              >
                <FaFacebookF />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/500millas__/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-pink-600 hover:bg-pink-600 hover:text-white transition-shadow shadow-md hover:shadow-xl"
              >
                <FaInstagram />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5493492582838"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-500 hover:bg-green-500 hover:text-white transition-shadow shadow-md hover:shadow-xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="bg-black mt-10 py-4 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Mi Empresa - Todos los derechos
          reservados
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;