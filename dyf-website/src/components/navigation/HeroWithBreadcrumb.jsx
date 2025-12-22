import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Breadcrumb({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav
      className="mt-4 flex items-center bg-black/30 px-4 py-2 text-sm text-white/80 md:mt-0 md:text-base"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-2 md:space-x-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href ?? item.label} className="flex items-center">
              {!isLast ? (
                <>
                  <Link
                    to={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                  <FaChevronRight className="ml-2 h-3 w-3" />
                </>
              ) : (
                <span
                  className="font-semibold text-white"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function HeroWithBreadcrumb({
  title,
  breadcrumbItems = [],
  imageUrl,
}) {
  return (
    <section className="relative h-[320px] w-full md:h-[400px]">
      {/* Background image */}
      <img
        src={imageUrl}
        alt={title}
        className="h-full w-full object-cover"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex h-full flex-col items-start justify-center px-6 md:flex-row md:items-center md:justify-between md:px-20">
        <h1 className="max-w-md text-left text-3xl font-bold text-white md:text-5xl">
          {title}
        </h1>

        <Breadcrumb items={breadcrumbItems} />
      </div>
    </section>
  );
}
