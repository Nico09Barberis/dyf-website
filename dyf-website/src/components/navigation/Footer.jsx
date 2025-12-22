import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";

import logo from "../../assets/images/logo.png";
import SocialLinks from "../ui/SocialLinks";

const SERVICIOS = [
  { id: "s1", label: "Servicio 1", to: "/" },
  { id: "s2", label: "Servicio 2", to: "/nosotros" },
  { id: "s3", label: "Servicio 3", to: "/galeria" },
];

const EMPRESA = [
  { id: "e1", label: "Inicio", to: "/" },
  { id: "e2", label: "Nosotros", to: "/nosotros" },
  { id: "e3", label: "Galeria", to: "/galeria" },
  { id: "e4", label: "Contacto", to: "/blog" },
];

const linkBaseStyles =
  "flex items-center gap-2 mb-1 text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-2";

function FooterLinks({ title, links }) {
  return (
    <nav className="flex flex-col items-center gap-2 md:items-start">
      <h3 className="mb-3 text-lg font-semibold uppercase">{title}</h3>
      {links.map((item) => (
        <Link key={item.id} to={item.to} className={linkBaseStyles}>
          <IoIosArrowForward className="text-yellow-300" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

const Footer = () => {
  return (
    <footer className="bg-[#141414] pt-6 font-sans text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-2 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" aria-label="Inicio">
            <img
              src={logo}
              alt="DyF Celebraciones"
              className="h-auto w-44 object-contain"
            />
          </Link>
        </div>

        {/* Servicios */}
        <FooterLinks title="Servicios" links={SERVICIOS} />

        {/* Empresa */}
        <FooterLinks title="Empresa" links={EMPRESA} />

        {/* Contacto */}
        <address className="flex w-full max-w-full flex-col items-center gap-2 not-italic md:items-start">
          <h3 className="mb-3 text-lg font-semibold uppercase">Contacto</h3>

          <p className="flex flex-wrap items-center gap-2 text-gray-300">
            <GrMapLocation className="text-2xl text-[#E7D283]" />
            Córdoba, Argentina
          </p>

          <p className="flex flex-wrap items-center gap-2 text-gray-300">
            <MdEmail className="text-2xl text-[#E7D283]" />
            <a
              href="mailto:correo@hotmail.com"
              className="break-words hover:underline"
            >
              correo@hotmail.com
            </a>
          </p>

          <p className="flex flex-wrap items-center gap-2 text-gray-300">
            <MdOutlinePhoneIphone className="text-2xl text-[#E7D283]" />
            +54 3492 582838
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <SocialLinks />
          </div>
        </address>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 bg-black py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} DyF Celebraciones | Todos los Derechos
        Reservados
      </div>
    </footer>
  );
};

export default Footer;
