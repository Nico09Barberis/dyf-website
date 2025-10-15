import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const menuRef = useRef();

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

  return (
    <nav
      className={`fixed w-full z-50 bg-white shadow-md transition-all duration-300 ${
        isShrunk ? "py-1" : "py-4"
      }`}
    >
      {/* Main Navbar */}
      <div className="relative max-w-6xl mx-auto px-4 flex items-center h-20">
        {/* Left: Hamburger */}
        <div className="flex items-center md:space-x-4 z-10">
          <button
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
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
          className={`absolute left-1/2 transform -translate-x-1/2 flex items-center transition-all duration-300 ${
            isShrunk ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          <img
            src={logo}
            alt="Mi Empresa Logo"
            className="h-full w-auto object-contain"
          />
        </Link>
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

            <Link
              to="/nosotros"
              onClick={() => setIsOpen(false)}
              className="block text-gray-500 hover:text-gray-700 hover:bg-[#E0F7FA] font-ancois-one uppercase rounded-xl py-1 px-2 text-lg"
            >
              Nosotros
            </Link>

            <Link
              to="/servicios"
              onClick={() => setIsOpen(false)}
              className="block text-gray-500 hover:text-gray-700 hover:bg-[#E0F7FA] font-ancois-one uppercase rounded-xl py-1 px-2 text-lg"
            >
              Servicios
            </Link>
            
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

      {/* Submenu debajo */}
      <div className="bg-white hidden md:flex justify-center font-bebas tracking-wide text-xl space-x-8 pt-4">
        {[
          { to: "/", label: "Home" },
          { to: "/nosotros", label: "nosotros" },
          { to: "/servicios", label: "servicios" },
          { to: "/galeria", label: "galeria" },
          { to: "/contacto", label: "contacto" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="relative text-gray-700 uppercase hover:text-gray-900 pb-1
              border-b-2 border-transparent hover:border-gray-900
              transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;