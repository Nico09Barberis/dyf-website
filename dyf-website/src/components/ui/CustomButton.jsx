import { Link } from "react-router-dom";
import { CgAbstract } from "react-icons/cg";

const CustomButton = ({
  to = "/",
  label = "",
  icon: Icon = CgAbstract,
  variant = "light", // "light" o "dark"
}) => {
  const isDark = variant === "dark";

  return (
    <div className="inline-block">
      <Link
        to={to}
        className={`
          relative inline-flex items-center gap-2 px-6 py-3 uppercase text-sm font-semibold tracking-wider overflow-hidden transition-all duration-500 group
          ${isDark ? "text-white" : "text-black"}
        `}
      >
        {/* Texto */}
        <span
          className={`relative z-10 transition-colors duration-500 
            group-hover:text-white
          `}
        >
          {label}
        </span>

        {/* Ícono */}
        {Icon && (
          <Icon
            className={`w-5 h-5 relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white`}
          />
        )}

        {/* Línea inferior animada */}
        <span
          className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#001F3F] transition-all duration-500 group-hover:w-full z-0"
        ></span>

        {/* Fondo azul al hacer hover */}
        <span
          className="absolute left-0 bottom-0 h-0 w-full bg-[#001F3F] z-0 transition-all duration-500 group-hover:h-full"
        ></span>
      </Link>
    </div>
  );
};

export default CustomButton;
