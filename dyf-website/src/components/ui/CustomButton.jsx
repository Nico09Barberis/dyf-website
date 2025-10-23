import { Link } from "react-router-dom";
import { CgAbstract } from "react-icons/cg";

const CustomButton = ({
  to = "/",
  label = "",
  icon: Icon = CgAbstract,
  variant = "light", // 🔹 nuevo prop para tema
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
          className={`relative z-10 transition-colors duration-500 group-hover:text-[#000000] ${
            isDark ? "group-hover:text-[#000000]" : "group-hover:text-[#ffffff]"
          }`}
        >
          {label}
        </span>

        {/* Ícono dinámico */}
        {Icon && (
          <Icon
            className={`w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1 ${
              isDark ? "group-hover:text-[#000000]" : "group-hover:text-[#ffffff]"
            }`}
          />
        )}

        {/* Línea inferior */}
        <span
          className={`absolute left-0 bottom-0 h-[2px] w-0 bg-[#ffc506] transition-all duration-500 group-hover:w-full z-0`}
        ></span>

        {/* Fondo animado */}
        <span
          className={`absolute left-0 bottom-0 h-0 w-full bg-[#ffc506] z-0 transition-all duration-500 group-hover:h-full`}
        ></span>
      </Link>
    </div>
  );
};

export default CustomButton;
