import { memo } from "react";

const AnimatedCard = ({ title, heading, text }) => {
  return (
    <div
      className="
        relative
        w-[300px]
        aspect-square
        overflow-hidden
        rounded-md
        shadow-xl
        group
        isolate
        will-change-transform
        [contain:paint]
      "
    >
      {/* Front */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          bg-gray-100
          transition-opacity duration-500 ease-out
          group-hover:opacity-0
          will-change-opacity
        "
      >
        <p className="text-[32px] font-marcellus font-bold uppercase bg-gradient-to-br from-[#A7C7E7] to-[#5B9BD5] bg-clip-text text-transparent">
          {title}
        </p>
      </div>

      {/* Back */}
      <div
        className="
          absolute inset-0
          flex flex-col items-center justify-center text-center gap-2
          p-5
          bg-gradient-to-br from-[#CFE5F5] to-[#8FBCE8]
          opacity-0
          transition-opacity duration-500 ease-out
          group-hover:opacity-100
          will-change-opacity
        "
      >
        <h3 className="text-[28px] font-marcellus font-bold uppercase text-azulOscuro">
          {heading}
        </h3>

        <p className="leading-relaxed font-marcellus text-azulOscuro">
          {text}
        </p>
      </div>
    </div>
  );
};

export default memo(AnimatedCard);
