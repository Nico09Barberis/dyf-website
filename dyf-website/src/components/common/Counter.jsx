import { useEffect, useRef, useState, memo } from "react";

const Counter = ({ from = 0, to = 250, duration = 2000 }) => {
  const [count, setCount] = useState(from);
  const elementRef = useRef(null);
  const hasStarted = useRef(false);
  const frameRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const startAnimation = () => {
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const value = Math.floor(from + (to - from) * progress);

        setCount((prev) => (prev !== value ? value : prev));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [from, to, duration]);

  return (
    <div
      ref={elementRef}
      className="text-6xl md:text-7xl font-extrabold font-audiowide text-center text-azulOscuro will-change-transform"
    >
      {count.toLocaleString()}+
    </div>
  );
};

export default memo(Counter);
