import { useEffect, useState, useRef } from "react";

const Counter = ({ from = 0, to = 2500, duration = 2000 }) => {
  const [count, setCount] = useState(from);
  const [scale, setScale] = useState(1);
  const [startCount, setStartCount] = useState(false); // controla inicio
  const ref = useRef();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true); // empieza el conteo cuando aparece
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 } // 50% visible
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

      // efecto pop
      setScale(1.3);
      setTimeout(() => setScale(1), incrementTime);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [startCount, from, to, duration]);

  return (
    <div
      ref={ref}
      className={`text-6xl font-extrabold font-audiowide text-center bg-clip-text text-transparent
        bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
        transition-transform duration-150 ease-out drop-shadow-[0_0_15px_rgba(139,92,246,0.7)]
      `}
      style={{ transform: `scale(${scale})` }}
    >
      {count.toLocaleString()}+
    </div>
  );
};

export default Counter;
