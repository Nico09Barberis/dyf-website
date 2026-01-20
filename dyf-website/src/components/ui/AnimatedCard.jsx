
const AnimatedCard = ({ title, heading, text }) => {
  return (
    <div className="relative w-[300px] h-[300px] overflow-hidden shadow-xl rounded-md group isolate">

      {/* Front */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0 bg-gray-100">
        <p className="text-[32px] font-marcellus font-bold uppercase bg-gradient-to-br from-[#A7C7E7] to-[#5B9BD5] bg-clip-text text-transparent">
          {title}
        </p>
      </div>

      {/* Back */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-2 bg-gradient-to-br from-[#CFE5F5] to-[#8FBCE8] text-white p-5
                      opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h3 className="text-[28px] font-marcellus text-azulOscuro font-bold uppercase">{heading}</h3>
        <p className="leading-relaxed font-marcellus text-azulOscuro">{text}</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
