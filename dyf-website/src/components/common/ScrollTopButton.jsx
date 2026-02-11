import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`
        fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50
        w-11 h-11 flex items-center justify-center
        rounded-full
        bg-white/40 backdrop-blur-md
        text-azulOscuro
        shadow-md
        transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-1
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <FaArrowUp className="h-4 w-4" />
    </button>
  );
}
