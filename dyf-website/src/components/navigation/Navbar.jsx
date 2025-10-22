import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/images/logo.png";
import logoLight from "../../assets/images/logo-blanco.png";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

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
      className={`fixed w-full z-50 transition-all duration-300 shadow-md
        ${isShrunk ? "bg-white py-2" : "bg-transparent py-4"}
      `}
    >
      {/* Main Navbar */}
      <div className="relative max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Left Section: Phone + Hamburger (mobile) */}
        <div className="flex items-center space-x-4 z-10">
          {/* Phone Number (hidden on mobile) */}
          <a
            href="tel:+34123456789"
            className={`hidden md:flex items-center font-medium transition-colors duration-300 ${
              isShrunk
                ? "text-gray-700 hover:text-gray-900"
                : "text-white hover:text-gray-200"
            }`}
          >
            <svg
              className={`w-5 h-5 mr-2 transition-colors duration-300 ${
                isShrunk ? "text-gray-500" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.5 4.5a1 1 0 01-.272 1.016l-2.12 2.12a16 16 0 006.36 6.36l2.12-2.12a1 1 0 011.016-.272l4.5 1.5A1 1 0 0121 19.72V23a2 2 0 01-2 2h-1C9.163 25 3 18.837 3 11V5z"
              />
            </svg>
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
            isShrunk ? "h-12 md:h-14" : "h-14 md:h-16"
          }`}
        >
          <img
            src={isShrunk ? logoDark : logoLight} // Cambia según scroll
            alt="Mi Empresa Logo"
            className="h-full w-auto object-contain transition-all duration-300"
          />
        </Link>

        {/* Right Section: Icons */}
        <div className="hidden md:flex items-center space-x-4 z-10">
          <button
            className={`transition-colors duration-200 ${
              isShrunk
                ? "text-gray-700 hover:text-gray-900"
                : "text-white hover:text-gray-200"
            }`}
          >
            <FaInstagram className="w-6 h-6" />
          </button>

          <button
            className={`transition-colors duration-200 ${
              isShrunk
                ? "text-gray-700 hover:text-gray-900"
                : "text-white hover:text-gray-200"
            }`}
          >
            <FaFacebook className="w-6 h-6" />
          </button>

          <button
            className={`transition-colors duration-200 ${
              isShrunk
                ? "text-gray-700 hover:text-gray-900"
                : "text-white hover:text-gray-200"
            }`}
          >
            <FaWhatsapp className="w-6 h-6" />
          </button>
        </div>
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
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 space-y-4 mt-16">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-500 hover:text-gray-700 hover:bg-[#E0F7FA] font-ancois-one uppercase rounded-xl py-1 px-2 text-lg"
            >
              Home
            </Link>

            {/* Empresa / Nosotros con submenú */}
            <div>
              <button
                onClick={() => toggleDropdown("empresa")}
                className="w-full text-left text-gray-500 hover:text-gray-700 hover:bg-[#E0F7FA] font-ancois-one uppercase rounded-xl py-1 px-2 text-lg flex justify-between items-center"
              >
                Empresa
                <span>{openDropdown === "empresa" ? "−" : "+"}</span>
              </button>

              {openDropdown === "empresa" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/empresa/nosotros"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-600 hover:text-gray-800 py-1 px-2 rounded-lg"
                  >
                    Nosotros
                  </Link>
                  <Link
                    to="/empresa/clientes"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-600 hover:text-gray-800 py-1 px-2 rounded-lg"
                  >
                    Historia
                  </Link>
                </div>
              )}
            </div>

            {/* Servicios con submenú */}
            <div>
              <button
                onClick={() => toggleDropdown("servicios")}
                className="w-full text-left text-gray-500 hover:text-gray-700 hover:bg-[#E0F7FA] font-ancois-one uppercase rounded-xl py-1 px-2 text-lg flex justify-between items-center"
              >
                Servicios
                <span>{openDropdown === "servicios" ? "−" : "+"}</span>
              </button>

              {openDropdown === "servicios" && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/servicios/diseno"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-600 hover:text-gray-800 py-1 px-2 rounded-lg"
                  >
                    Diseño
                  </Link>
                  <Link
                    to="/servicios/construccion"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-600 hover:text-gray-800 py-1 px-2 rounded-lg"
                  >
                    Construcción
                  </Link>
                  <Link
                    to="/servicios/mantenimiento"
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-600 hover:text-gray-800 py-1 px-2 rounded-lg"
                  >
                    Mantenimiento
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/galeria"
              onClick={() => setIsOpen(false)}
              className="block text-gray-500 hover:text-gray-700 hover:bg-[#E0F7FA] font-ancois-one uppercase rounded-xl py-1 px-2 text-lg"
            >
              Galeria
            </Link>

            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="block text-gray-500 hover:text-gray-700 hover:bg-[#E0F7FA] font-ancois-one uppercase rounded-xl py-1 px-2 text-lg"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`hidden md:flex justify-center font-bebas tracking-wide text-lg space-x-8 pt-2 transition-colors duration-300`}
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
              { to: "/servicios/diseno", label: "Diseño" },
              { to: "/servicios/construccion", label: "Construcción" },
              { to: "/servicios/mantenimiento", label: "Mantenimiento" },
            ],
          },
          { to: "/galeria", label: "galeria" },
          { to: "/contacto", label: "contacto" },
        ].map((item) => (
          <div key={item.to} className="relative group">
            {/* Si tiene submenu, usamos un span en vez de Link */}
            {item.submenu ? (
              <span
                className={`relative uppercase pb-1 border-b-2 border-transparent cursor-default transition-all duration-200
            ${
              isShrunk
                ? "text-gray-700 hover:text-gray-900"
                : "text-white hover:text-gray-200"
            }`}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className={`relative uppercase pb-1 border-b-2 border-transparent transition-all duration-200
          ${
            isShrunk
              ? "text-gray-700 hover:text-gray-900 hover:border-gray-900"
              : "text-white hover:text-gray-200 hover:border-white"
          }`}
              >
                {item.label}
              </Link>
            )}

            {/* Submenu */}
            {item.submenu && (
              <div
                className={`absolute left-0 top-full mt-1 hidden group-hover:block shadow-lg rounded-md py-2 w-48 z-10 transition-colors duration-300
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
                    : "text-white hover:text-gray-200 hover:bg-black/50"
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
