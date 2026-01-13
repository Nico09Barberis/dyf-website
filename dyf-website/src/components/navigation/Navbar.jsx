import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import navLogo from "../../assets/images/logo.png";

import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const menuRef = useRef();
  const [openDropdown, setOpenDropdown] = useState(null);

  // Cierre al hacer clic fuera del menú
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Detectar scroll para encoger navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsShrunk(true);
      else setIsShrunk(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-urbanist uppercase text-sm font-semibold shadow-md
        ${isShrunk ? "bg-azulOscuro py-2" : "bg-transparent py-4"}
      `}
    >
      {/* Main Navbar */}
      <div className="relative max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Left Section: Phone + Hamburger (mobile) */}
        <div className="flex items-center space-x-4 z-10">
          {/* Phone Number (hidden on mobile) */}
          <a
            href="tel:+34123456789"
            className="hidden md:flex items-center text-beige font-medium transition-colors duration-300"
          >
            <MdOutlinePhoneIphone className="w-5 h-5 mr-2 transition-colors duration-300 text-beige" />
            +34 123 456 789
          </a>

          {/* Hamburger (only mobile) */}
          <button
            className={`md:hidden transition-colors duration-300 ${
              isShrunk
                ? "text-gray-700 hover:text-gray-900"
                : "text-white hover:text-gray-200"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {/* Center: Logo */}
        <Link
          to="/"
          className={`flex-1 flex justify-center items-center transition-all duration-300 ${
            isShrunk
              ? "w-36 h-36 md:w-40 md:h-40" // tamaño reducido cuando se hace scroll
              : "w-40 h-40 md:w-44 md:h-44" // tamaño original
          }`}
        >
          <img
            src={navLogo}
            alt="Mi Empresa Logo"
            className="h-full w-auto object-contain transition-all duration-300"
          />
        </Link>
        {/* Right Section: Icons */}
        <div className="hidden md:flex items-center space-x-4 z-10">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/dyfcelebraciones"
            target="_blank"
            rel="noopener noreferrer"
            className="text-beige hover:text-white transition-colors"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/TU_PERFIL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-beige hover:text-white transition-colors"
          >
            <FaFacebook className="w-6 h-6" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/5493492582838"
            target="_blank"
            rel="noopener noreferrer"
            className="text-beige hover:text-white transition-colors"
          >
            <FaWhatsapp className="w-7 h-7" />
          </a>
        </div>
        <div className="w-6 h-6 md:hidden" />{" "}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Side Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full w-64 bg-azulOscuro shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 space-y-4 mt-16">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-200 hover:text-gray-300 hover:bg-[#002856] uppercase rounded-md py-1 px-2"
            >
              Home
            </Link>

            {/* Empresa / Nosotros con submenú */}
            <div>
              <button
                onClick={() => toggleDropdown("empresa")}
                className="w-full text-left text-gray-200 hover:text-gray-300 hover:bg-[#002856] uppercase rounded-md py-1 px-2 flex justify-between items-center"
              >
                Empresa
                <span className="ml-2">
                  {openDropdown === "empresa" ? (
                    <IoIosArrowUp size={14} />
                  ) : (
                    <IoIosArrowDown size={14} />
                  )}
                </span>
              </button>

              {openDropdown === "empresa" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/empresa/nosotros"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-200 hover:text-gray-300 hover:bg-[#002856] py-1 px-2 rounded-lg"
                  >
                    Nosotros
                  </Link>
                  <Link
                    to="/empresa/clientes"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-200 hover:text-gray-300 hover:bg-[#002856] py-1 px-2 rounded-lg"
                  >
                    Clientes
                  </Link>
                </div>
              )}
            </div>

            {/* Servicios con submenú */}
            <div>
              <button
                onClick={() => toggleDropdown("servicios")}
                className="w-full text-left text-gray-200 hover:text-gray-300 hover:bg-[#002856] uppercase rounded-md py-1 px-2 flex justify-between items-center"
              >
                Servicios
                <span className="ml-2">
                  {openDropdown === "servicios" ? (
                    <IoIosArrowUp size={14} />
                  ) : (
                    <IoIosArrowDown size={14} />
                  )}
                </span>
              </button>

              {openDropdown === "servicios" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/servicios/alquiler-vajilla"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-200 hover:text-gray-300 hover:bg-[#002856] py-1 px-2 rounded-lg"
                  >
                    Alquiler de vajilla
                  </Link>
                  <Link
                    to="/servicios/alquiler-mobiliario"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-200 hover:text-gray-300 hover:bg-[#002856] py-1 px-2 rounded-lg"
                  >
                    Alquiler de mobiliario
                  </Link>
                  <Link
                    to="/servicios/decoracion-ambientacion"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-200 hover:text-gray-300 hover:bg-[#002856] py-1 px-2 rounded-lg"
                  >
                    Decoración y ambientación de eventos
                  </Link>
                  <Link
                    to="/servicios/organizacion-integral"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-200 hover:text-gray-300 hover:bg-[#002856] py-1 px-2 rounded-lg"
                  >
                    Organizacion integral de eventos
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/galeria"
              onClick={() => setIsOpen(false)}
              className="block text-gray-200 hover:text-gray-300 hover:bg-[#002856] rounded-md py-1 px-2"
            >
              Galeria
            </Link>

            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="block text-gray-200 hover:text-gray-300 hover:bg-[#002856] rounded-md py-1 px-2"
            >
              Contacto
            </Link>

            {/* Social Icons in Mobile Menu */}

            <div className="flex justify-start mt-6 gap-4 ml-2 border-t pt-4 border-gray-400">
              <a
                href="https://www.instagram.com/dyfcelebraciones"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-gray-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://wa.me/5493492582838?text=Hola%2C+me+gustar%C3%ADa+recibir+m%C3%A1s+informaci%C3%B3n+sobre+sus+servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="text-beige hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`hidden md:flex justify-center text-sm space-x-8 pt-2 transition-colors duration-300`}
      >
        {[
          { to: "/", label: "Home" },
          {
            to: "/empresa",
            label: "empresa",
            submenu: [
              { to: "/empresa/nosotros", label: "Nosotros" },
              { to: "/empresa/clientes", label: "Clientes" },
            ],
          },
          {
            to: "/servicios",
            label: "servicios",
            submenu: [
              { to: "/servicios/alquiler-vajilla", label: "Alquiler de vajilla" },
              { to: "/servicios/alquiler-mobiliario", label: "Alquiler de mobiliario" },
              { to: "/servicios/ambientacion-decoracion", label: "Ambientación y decoración de eventos" },
              { to: "/servicios/organizacion-integral", label: "Organizacion integral de eventos" },
            ],
          },
          { to: "/galeria", label: "galeria" },
          { to: "/contacto", label: "contacto" },
        ].map((item) => (
          <div key={item.to} className="relative group">
            {/* Si tiene submenu, usamos un span en vez de Link */}
            {item.submenu ? (
              <span className="relative uppercase text-gray-200 hover:text-gray-300 pb-1 border-b-2 border-transparent hover:border-beige transition-all duration-200">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="relative uppercase text-gray-200 hover:text-gray-300 pb-1 border-b-2 border-transparent hover:border-beige transition-all duration-200"
              >
                {item.label}
              </Link>
            )}

            {/* Submenu */}
            {item.submenu && (
              <div
                className={`absolute left-0 top-full mt-1 hidden group-hover:block shadow-lg w-48 z-10 transition-colors duration-300
            ${isShrunk ? "bg-white" : "bg-black/70"}`}
              >
                {item.submenu.map((sub) => (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    className={`block px-4 py-2 transition-colors duration-150
                ${
                  isShrunk
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white hover:text-dorado hover:bg-black/50"
                }`}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
