import { Link } from "react-router-dom";
import {
  MdEmail,
  MdOutlineWork
} from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaSquarePhone
} from "react-icons/fa6";
import logo from "../../assets/images/logo-blanco.png"; // Ajustá la ruta según dónde esté tu logo

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white pt-12">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Columna izquierda: Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <img
              src={logo}
              alt="Mi Empresa Logo"
              className="h-34 w-40 object-contain"
            />
          </Link>
        </div>

        {/* Columna central: Navegación */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-3 text-lg">Navegación</h3>
          <Link
            to="/"
            className="text-gray-300 hover:text-white mb-1 transition-colors duration-300"
          >
            Inicio
          </Link>
          <Link
            to="/productos"
            className="text-gray-300 hover:text-white mb-1 transition-colors duration-300"
          >
            Productos
          </Link>
          <Link
            to="/como-comprar"
            className="text-gray-300 hover:text-white mb-1 transition-colors duration-300 capitalize"
          >
            Como comprar
          </Link>
        </div>

        {/* Columna derecha: Contacto */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-3 text-lg">Contacto</h3>

          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <MdEmail className="text-gray-300 text-lg" aria-label="Correo electrónico" />
            <a
              href="mailto:alfajores500millas@gmail.com"
              className="hover:underline"
            >
              alfajores500millas@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-2 text-gray-300 mb-2">
            <FaSquarePhone className="text-gray-300 text-lg" aria-label="Teléfono" />
            +54 3492 582838
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf5OjN13wZ91Tu4Kz7onGUFzcYkvsOibqi3HEQvoqu3ml7Vaw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 mb-4 hover:underline transition-colors"
          >
            <MdOutlineWork className="text-gray-300 text-lg" aria-label="Trabaja con nosotros" />
            Trabaja con nosotros
          </a>

          {/* Redes sociales */}
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
        © {new Date().getFullYear()} Mi Empresa — Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
