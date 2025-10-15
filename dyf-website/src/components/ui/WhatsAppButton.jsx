import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "5493492582838"; // tu número
  const message = "Hola! Quiero más información."; // mensaje opcional precargado
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 group flex items-center">
      {/* Tooltip a la izquierda */}
      <span className="mr-3 bg-green-600 text-white font-semibold text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Contactanos!
      </span>

      {/* Botón */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-full shadow-lg flex items-center justify-center text-4xl transition-transform duration-200 hover:scale-110"
        aria-label="Chatear por WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;