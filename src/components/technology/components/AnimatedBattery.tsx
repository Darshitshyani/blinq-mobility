import { useEffect, useState } from "react";

const AnimatedBattery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("battery-animation");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Animate percentage loop (0 -> 100 then reset)
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCharge((prev) => {
          if (prev >= 100) {
            return 0; // instantly reset to 0
          }
          return prev + 1;
        });
      }, 40); // speed control (40ms → ~4s for full charge)
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div id="battery-animation" className="relative w-20 h-12 mx-auto">
      <svg
        viewBox="0 0 100 60"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Battery outline */}
        <rect
          x="10"
          y="15"
          width="70"
          height="30"
          rx="4"
          fill="none"
          stroke="hsl(var(--electric-blue))"
          strokeWidth="2"
        />

        {/* Battery terminal */}
        <rect
          x="80"
          y="25"
          width="8"
          height="10"
          rx="2"
          fill="hsl(var(--electric-blue))"
        />

        {/* Charge level — grows 0 → 60 width */}
        <rect
          x="15"
          y="20"
          width={(charge / 100) * 60}
          height="20"
          rx="2"
          fill="url(#batteryGradient)"
          className="transition-all duration-40 ease-linear"
        />

        {/* Energy particles */}
        {[...Array(8)].map((_, i) => (
          <circle
            key={i}
            cx={25 + i * 7}
            cy={30}
            r="1"
            fill="hsl(var(--electric-cyan))"
            className={`${
              isVisible ? "animate-glow-pulse" : "opacity-0"
            }`}
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        <defs>
          <linearGradient id="batteryGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--electric-green))" />
            <stop offset="50%" stopColor="hsl(var(--electric-cyan))" />
            <stop offset="100%" stopColor="hsl(var(--electric-blue))" />
          </linearGradient>
        </defs>
      </svg>

      {/* Charge percentage */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm font-medium text-electric-cyan">
        {charge}%
      </div>
    </div>
  );
};

export default AnimatedBattery;
