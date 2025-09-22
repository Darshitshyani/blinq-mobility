import { useEffect, useState } from "react";

const AnimatedCar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('car-animation');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="car-animation" className="relative w-20 h-12 mx-auto">
      <svg
        viewBox="0 0 120 70"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Road lines */}
        <g className="opacity-30">
          {[...Array(6)].map((_, i) => (
            <rect
              key={i}
              x={i * 20}
              y="60"
              width="10"
              height="2"
              fill="hsl(var(--muted-foreground))"
              className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </g>

        {/* Car body */}
        <g className={`${isVisible ? 'animate-car-drive' : ''}`}>
          {/* Main chassis */}
          <ellipse
            cx="60"
            cy="45"
            rx="35"
            ry="12"
            fill="hsl(var(--card))"
            stroke="hsl(var(--electric-blue))"
            strokeWidth="1.5"
          />
          
          {/* Cabin */}
          <ellipse
            cx="60"
            cy="35"
            rx="25"
            ry="8"
            fill="hsl(var(--electric-blue))"
            className="opacity-80"
          />
          
          {/* Wheels */}
          <circle
            cx="35"
            cy="50"
            r="8"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--electric-cyan))"
            strokeWidth="2"
          />
          <circle
            cx="85"
            cy="50"
            r="8"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--electric-cyan))"
            strokeWidth="2"
          />
          
          {/* Headlight */}
          <circle
            cx="95"
            cy="40"
            r="3"
            fill="hsl(var(--primary))"
            className="shadow-electric"
          />
          
          {/* Energy glow */}
          <ellipse
            cx="60"
            cy="45"
            rx="37"
            ry="14"
            fill="none"
            stroke="hsl(var(--electric-cyan))"
            strokeWidth="0.5"
            className="opacity-50 animate-glow-pulse"
          />
        </g>

        {/* Speed lines */}
        <g className="opacity-60">
          {[...Array(4)].map((_, i) => (
            <line
              key={i}
              x1={20 + i * 5}
              y1={35 + i * 3}
              x2={30 + i * 5}
              y2={35 + i * 3}
              stroke="hsl(var(--electric-cyan))"
              strokeWidth="1"
              className={`${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.5 + i * 0.1}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedCar;