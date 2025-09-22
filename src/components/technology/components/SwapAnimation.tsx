import { useEffect, useState } from "react";

const SwapAnimation = () => {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!timer) {
            timer = setInterval(() => {
              setStep((prev) => (prev + 1) % 4);
            }, 2000);
          }
        } else {
          setIsVisible(false);
          if (timer) {
            clearInterval(timer);
            timer = null;
          }
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("swap-animation");
    if (element) observer.observe(element);

    return () => {
      if (timer) clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="swap-animation" className="relative w-64 h-40 mx-auto">
      <svg
        viewBox="0 0 160 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Station */}
        <rect x="20" y="70" width="120" height="8" rx="2" fill="hsl(var(--muted))" />
        <rect x="30" y="60" width="8" height="20" fill="hsl(var(--muted))" />
        <rect x="122" y="60" width="8" height="20" fill="hsl(var(--muted))" />

        {/* Car */}
        <g
          style={{
            transform: `translateX(${step === 0 ? 0 : step === 1 ? 4 : step === 2 ? 4 : 8}px)`,
            transition: "transform 1s ease",
          }}
        >
          <ellipse
            cx="80"
            cy="55"
            rx="25"
            ry="8"
            fill="hsl(var(--card))"
            stroke="hsl(var(--electric-blue))"
            strokeWidth="1.5"
          />
          <circle cx="65" cy="62" r="5" fill="hsl(var(--muted))" />
          <circle cx="95" cy="62" r="5" fill="hsl(var(--muted))" />
        </g>

        {/* Old battery */}
        <rect
          x="70"
          y={step === 1 ? 48 : step === 2 ? 35 : 48}
          width="20"
          height="6"
          rx="2"
          fill={step < 2 ? "hsl(var(--destructive))" : "transparent"}
          style={{
            transition: "all 1s ease",
            opacity: step === 2 ? 0 : 1,
          }}
        />

        {/* New battery */}
        <rect
          x="70"
          y={step === 2 ? 35 : step === 3 ? 48 : 20}
          width="20"
          height="6"
          rx="2"
          fill="hsl(var(--electric-green))"
          style={{
            transition: "all 1s ease",
            opacity: step >= 2 ? 1 : 0,
          }}
        />

        {/* Arms */}
        <line
          x1="50"
          y1={step === 1 || step === 2 ? 45 : 60}
          x2="70"
          y2={step === 1 || step === 2 ? 48 : 51}
          stroke="hsl(var(--electric-cyan))"
          strokeWidth="2"
          style={{ transition: "all 0.5s ease" }}
        />
        <line
          x1="110"
          y1={step === 1 || step === 2 ? 45 : 60}
          x2="90"
          y2={step === 1 || step === 2 ? 48 : 51}
          stroke="hsl(var(--electric-cyan))"
          strokeWidth="2"
          style={{ transition: "all 0.5s ease" }}
        />

        {/* Energy particles */}
        {isVisible &&
          (step === 1 || step === 2) &&
          [...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx={60 + i * 8}
              cy="40"
              r="1"
              fill="hsl(var(--electric-cyan))"
              className="animate-glow-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}

        {/* Status indicator */}
        <circle
          cx="140"
          cy="20"
          r="4"
          fill={
            step === 0
              ? "hsl(var(--electric-blue))"
              : step === 3
              ? "hsl(var(--electric-green))"
              : "hsl(var(--warning))"
          }
          className="animate-glow-pulse"
        />

        {/* Status text */}
        <text
          x="80"
          y="90"
          textAnchor="middle"
          className="text-[10px] fill-electric-cyan font-medium"
        >
          {step === 0
            ? "Drive In"
            : step === 1
            ? "Aligning..."
            : step === 2
            ? "Swapping..."
            : "Complete!"}
        </text>
      </svg>
    </div>
  );
};

export default SwapAnimation;
