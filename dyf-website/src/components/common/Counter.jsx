import { useEffect, useState, useRef } from "react";

const Counter = ({ from = 0, to = 250, duration = 2000 }) => {
  const [count, setCount] = useState(from);
  const [scale, setScale] = useState(1);
  const [startCount, setStartCount] = useState(false);
  const ref = useRef();

  // Detecta cuando el contador entra en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Conteo animado
  useEffect(() => {
    if (!startCount) return;

    let start = from;
    const end = to;
    const incrementTime = 10;
    const steps = duration / incrementTime;
    const stepValue = (end - start) / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));

      // efecto sutil de escala
      setScale(1.15);
      setTimeout(() => setScale(1), incrementTime);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [startCount, from, to, duration]);

  return (
    <div
      ref={ref}
      className="text-6xl font-extrabold font-audiowide text-center text-azulOscuro transition-transform duration-150 ease-out"
      style={{ transform: `scale(${scale})` }}
    >
      {count.toLocaleString()}+
    </div>
  );
};

export default Counter;
