import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

const SocialLinks = () => {
  const icons = [
    {
      id: "instagram",
      icon: FaInstagram,
      color: "hover:bg-gray-800",
      link: "https://www.instagram.com/tu_usuario", // reemplaza con tu Instagram
    },
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      color: "hover:bg-gray-800",
      link: "https://wa.me/5491123456789", // reemplaza con tu WhatsApp
    },
    {
      id: "facebook",
      icon: FaFacebookF,
      color: "hover:bg-gray-800",
      link: "https://www.facebook.com/tu_usuario", // reemplaza con tu Facebook
    },
  ];

  return (
    <div className="flex gap-1 mt-2">
      {icons.map((item) => {
        const Icon = item.icon; // asignamos el componente SVG a una variable
        return (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center cursor-pointer text-white transition-all duration-300 ease-in-out hover:-translate-y-2 ${item.color}`}
          >
            <Icon size={26} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
