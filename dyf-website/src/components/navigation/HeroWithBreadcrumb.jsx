import React from "react";
import { FaChevronRight } from "react-icons/fa";

export default function HeroWithBreadcrumb({ title, breadcrumbItems, imageUrl }) {
  return (
    <section className="relative w-full h-[320px] md:h-[400px]">
      {/* Imagen de fondo */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col md:flex-row items-start  md:items-center justify-center md:justify-between px-6 md:px-20 h-full">
        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-bold text-white max-w-md text-left">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav
          className="mt-4 md:mt-0 flex bg-black/30 px-4 py-2 text-white/80 text-sm md:text-base items-center"
          aria-label="breadcrumb"
        >
          <ol className="inline-flex items-center space-x-2 md:space-x-3">
            {breadcrumbItems.map((item, i) => {
              const isLast = i === breadcrumbItems.length - 1;
              return (
                <li key={i} className="flex items-center">
                  {!isLast ? (
                    <>
                      <a
                        href={item.href}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                      <FaChevronRight className="ml-2 w-3 h-3" />
                    </>
                  ) : (
                    <span className="text-white font-semibold">{item.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}
