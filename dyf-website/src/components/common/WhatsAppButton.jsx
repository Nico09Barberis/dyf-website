const WhatsAppButton = () => {
  const phoneNumber = "5493512324008";
  const message = "Hola! Quiero más información.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 group flex items-center">

      {/* Tooltip */}
      <span className="mr-3 bg-black text-white font-semibold text-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        ¡Contactanos!
      </span>

      {/* Botón */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center transition-transform duration-200 hover:scale-110"
        aria-label="Chatear por WhatsApp"
      >
        <img
          src="/images/varias/whatsapp-logo.png" 
          alt="WhatsApp"
          className="w-12 h-12 md:w-14 md:h-14 object-contain"
          loading="lazy"
        />
      </a>

    </div>
  );
};

export default WhatsAppButton;