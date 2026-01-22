import { Link } from "react-router-dom";
import { CgAbstract } from "react-icons/cg";

const CustomButton = ({
  to = "/",
  label = "",
  icon: Icon = CgAbstract,
  variant = "light", // "light" | "dark"
}) => {
  const isDark = variant === "dark";

  const bgColor = isDark ? "bg-[#001F3F]" : "bg-dorado";
  const textColor = isDark ? "text-white" : "text-black";
  const lineColor = isDark ? "bg-[#001F3F]" : "bg-dorado";

  return (
    <div className="inline-block">
      <Link
        to={to}
        className={`
          relative inline-flex items-center gap-2 px-6 py-3 uppercase text-sm font-semibold tracking-wider overflow-hidden
          transition-all duration-500 group
          ${textColor}
        `}
      >
        {/* Texto */}
        <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
          {label}
        </span>

        {/* Ícono */}
        {Icon && (
          <Icon className="w-5 h-5 relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white" />
        )}

        {/* Línea inferior animada */}
        <span
          className={`absolute left-0 bottom-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full z-0 ${lineColor}`}
        />

        {/* Fondo animado */}
        <span
          className={`absolute left-0 bottom-0 h-0 w-full z-0 transition-all duration-500 group-hover:h-full ${bgColor}`}
        />
      </Link>
    </div>
  );
};

export default CustomButton;
