import { useEffect, useRef, useState } from "react";

const Counter = ({ from = 0, to = 250, duration = 2000 }) => {
  const [count, setCount] = useState(from);
  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  // Observer: inicia el conteo al entrar en viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          animateCount();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const value = Math.floor(from + (to - from) * progress);
      setCount(value);

      // efecto sutil de escala (sin estado)
      if (elementRef.current) {
        elementRef.current.style.transform = "scale(1.15)";
        requestAnimationFrame(() => {
          if (elementRef.current) {
            elementRef.current.style.transform = "scale(1)";
          }
        });
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <div
      ref={elementRef}
      className="text-6xl md:text-7xl font-extrabold font-audiowide text-center text-azulOscuro transition-transform duration-150 ease-out"
    >
      {count.toLocaleString()}+
    </div>
  );
};

export default Counter;
