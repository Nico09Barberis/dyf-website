import { useEffect, useRef, useState } from "react";

function LazyImage({ src, alt, className }) {
  const imgRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // carga un poco antes de aparecer
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="w-full h-full">
      {visible ? (
        <img
          src={src}
          alt={alt}
          decoding="async"
          loading="lazy"
          width="600"
          height="400"
          className={className}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}

export default LazyImage;
