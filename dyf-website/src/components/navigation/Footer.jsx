import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/images/logo.png"; // Ajustá la ruta según dónde esté tu logo
import SocialLinks from "../ui/SocialLinks";
import { IoIosArrowForward } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlinePhoneIphone } from "react-icons/md";


const Footer = () => {
  const servicios = [
    { label: "Servicio 1", to: "/" },
    { label: "Servicio 2", to: "/nosotros" },
    { label: "Servicio 3", to: "/galeria" },
  ];

  const empresa = [
    { label: "Inicio", to: "/" },
    { label: "Nosotros", to: "/nosotros" },
    { label: "Galeria", to: "/galeria" },
    { label: "Contacto", to: "/blog" },
  ];

  return (
    <footer className="bg-[#121212] text-white pt-6 font-sans">
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Columna izquierda: Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/">
            <img
              src={logo}
              alt="Mi Empresa Logo"
              className="w-44 h-auto object-contain"
            />
          </Link>
        </div>

        {/* Columna Servicios */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold uppercase mb-3 text-lg">Servicios</h3>
          {servicios.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="flex items-center gap-2 text-gray-300 mb-1 transition-all duration-300 hover:text-white hover:translate-x-2"
            >
              <IoIosArrowForward className="text-yellow-300 group-hover:text-white" />
              {item.label}
            </Link>
          ))}
        </div>

        {/* Columna Empresa */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold uppercase mb-3 text-lg">Empresa</h3>
          {empresa.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="flex items-center gap-2 text-gray-300 mb-1 transition-all duration-300 hover:text-white hover:translate-x-2"
            >
              <IoIosArrowForward className="text-yellow-300 group-hover:text-white" />
              {item.label}
            </Link>
          ))}
        </div>

        {/* Columna Contacto */}
        <div className="flex flex-col items-center md:items-start w-full max-w-full gap-2">
          <h3 className="font-semibold uppercase mb-3 text-lg">Contacto</h3>

          <p className="flex flex-wrap items-center gap-2 text-gray-300 mb-2">
            <GrMapLocation
              className="text-[#D4AF37] text-2xl"
              aria-label="Teléfono"
            />
            Cordoba, Argentina
          </p>

          <p className="flex flex-wrap items-center gap-2 text-gray-300 mb-2">
            <MdEmail
              className="text-[#D4AF37] text-2xl"
              aria-label="Correo electrónico"
            />
            <a
              href="mailto:alfajores500millas@gmail.com"
              className="hover:underline break-words"
            >
              correo@hotmail.com
            </a>
          </p>

          <p className="flex flex-wrap items-center gap-2 text-gray-300 mb-2">
            <MdOutlinePhoneIphone
              className="text-[#D4AF37] text-2xl"
              aria-label="Teléfono"
            />
            +54 3492 582838
          </p>

          {/* Redes sociales */}
          <div className="flex gap-3 flex-wrap">
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="bg-black mt-10 py-4 text-center text-gray-300 text-sm">
        © Copyright {new Date().getFullYear()} DyF Celebraciones | Todos los
        Derechos Reservados | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
