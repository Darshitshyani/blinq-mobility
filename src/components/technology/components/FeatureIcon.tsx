import React from 'react';

interface FeatureIconProps {
  type: 'design' | 'cabin' | 'composite' | 'maneuver' | 'ai' | 'braking' | 'platform';
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ type, className = "" }) => {
  const iconMap = {
    platform: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Skateboard chassis base */}
        <path d="M15 38 L20 35 L60 35 L65 38 L65 42 L15 42 Z" fill="hsl(var(--electric-blue))" />
        {/* Battery pack cells */}
        <rect x="22" y="26" width="7" height="9" rx="1.5" fill="hsl(var(--electric-cyan))" className="opacity-90" />
        <rect x="32" y="26" width="7" height="9" rx="1.5" fill="hsl(var(--electric-cyan))" className="opacity-90" />
        <rect x="42" y="26" width="7" height="9" rx="1.5" fill="hsl(var(--electric-cyan))" className="opacity-90" />
        <rect x="52" y="26" width="7" height="9" rx="1.5" fill="hsl(var(--electric-cyan))" className="opacity-90" />
        {/* Connection lines */}
        <line x1="25" y1="30" x2="55" y2="30" stroke="hsl(var(--electric-green))" strokeWidth="1" className="opacity-60" />
        {/* Wheels */}
        <circle cx="23" cy="43" r="5" fill="hsl(var(--foreground))" opacity="0.2" />
        <circle cx="23" cy="43" r="3" fill="hsl(var(--muted))" />
        <circle cx="57" cy="43" r="5" fill="hsl(var(--foreground))" opacity="0.2" />
        <circle cx="57" cy="43" r="3" fill="hsl(var(--muted))" />
        {/* Low center of gravity line */}
        <line x1="40" y1="24" x2="40" y2="35" stroke="hsl(var(--electric-green))" strokeWidth="1.5" strokeDasharray="3,2" className="animate-glow-pulse" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Sleek car silhouette */}
        <path
          d="M18 36 L22 32 Q28 28 32 28 L40 28 Q45 28 48 25 L52 25 Q56 25 58 28 L62 32 L62 38 L58 38 Q56 40 52 40 L28 40 Q24 40 22 38 L18 38 Z"
          fill="url(#carGradient)"
          className="drop-shadow-lg"
        />
        {/* Windows */}
        <path d="M30 28 L34 30 L46 30 L50 28 Q48 26 44 26 L36 26 Q32 26 30 28 Z" fill="hsl(var(--background))" opacity="0.3" />
        {/* Aerodynamic flow lines */}
        <path d="M12 32 Q20 30 30 31" stroke="hsl(var(--electric-cyan))" strokeWidth="1" fill="none" className="opacity-40 animate-glow-pulse" />
        <path d="M12 35 Q22 33 32 34" stroke="hsl(var(--electric-cyan))" strokeWidth="0.8" fill="none" className="opacity-30 animate-glow-pulse" style={{ animationDelay: '0.2s' }} />
        {/* Accent sparkles */}
        <circle cx="55" cy="23" r="1.5" fill="hsl(var(--electric-green))" className="animate-glow-pulse" />
        <circle cx="62" cy="26" r="1" fill="hsl(var(--electric-cyan))" className="animate-glow-pulse" style={{ animationDelay: '0.4s' }} />
        <circle cx="58" cy="20" r="1" fill="hsl(var(--electric-blue))" className="animate-glow-pulse" style={{ animationDelay: '0.6s' }} />
        <defs>
          <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--electric-blue))" />
            <stop offset="50%" stopColor="hsl(var(--electric-cyan))" />
            <stop offset="100%" stopColor="hsl(var(--electric-blue))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    cabin: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Car cabin top view */}
        <rect x="20" y="18" width="40" height="28" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--electric-blue))" strokeWidth="2" />
        {/* Front seats */}
        <rect x="24" y="22" width="8" height="9" rx="2" fill="hsl(var(--electric-cyan))" />
        <rect x="38" y="22" width="8" height="9" rx="2" fill="hsl(var(--electric-cyan))" />
        {/* Rear seats */}
        <rect x="24" y="33" width="8" height="9" rx="2" fill="hsl(var(--electric-cyan))" opacity="0.9" />
        <rect x="38" y="33" width="8" height="9" rx="2" fill="hsl(var(--electric-cyan))" opacity="0.9" />
        {/* Boot/trunk space */}
        <rect x="50" y="26" width="7" height="12" rx="1.5" fill="hsl(var(--muted))" stroke="hsl(var(--electric-green))" strokeWidth="1.2" />
        {/* Legroom space indicators */}
        <line x1="26" y1="31" x2="30" y2="31" stroke="hsl(var(--electric-green))" strokeWidth="1.5" />
        <line x1="40" y1="31" x2="44" y2="31" stroke="hsl(var(--electric-green))" strokeWidth="1.5" />
        {/* Spacious indicator */}
        <path d="M28 28 L28 36" stroke="hsl(var(--electric-green))" strokeWidth="1" strokeDasharray="2,2" opacity="0.6" />
      </svg>
    ),
    composite: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Car body panel */}
        <path d="M20 25 Q25 22 40 22 Q55 22 60 25 L60 38 Q55 40 40 40 Q25 40 20 38 Z" fill="hsl(var(--card))" stroke="hsl(var(--electric-blue))" strokeWidth="2" />
        {/* Composite layers */}
        <rect x="25" y="26" width="30" height="3" rx="1" fill="hsl(var(--electric-blue))" opacity="0.8" />
        <rect x="25" y="31" width="30" height="3" rx="1" fill="hsl(var(--electric-cyan))" opacity="0.6" />
        <rect x="25" y="36" width="30" height="3" rx="1" fill="hsl(var(--electric-green))" opacity="0.4" />
        {/* Carbon fiber weave pattern */}
        {Array.from({length: 8}, (_, i) => (
          <line
            key={`v${i}`}
            x1={27 + i * 3.5}
            y1="24"
            x2={27 + i * 3.5}
            y2="40"
            stroke="hsl(var(--electric-cyan))"
            strokeWidth="0.6"
            opacity="0.25"
          />
        ))}
        {Array.from({length: 6}, (_, i) => (
          <line
            key={`h${i}`}
            x1="25"
            y1={25 + i * 2.8}
            x2="55"
            y2={25 + i * 2.8}
            stroke="hsl(var(--electric-cyan))"
            strokeWidth="0.6"
            opacity="0.25"
          />
        ))}
        {/* Strength icon */}
        <circle cx="63" cy="28" r="5" fill="none" stroke="hsl(var(--electric-green))" strokeWidth="1.8" className="animate-glow-pulse" />
        <path d="M63 25 L63 31 M60 28 L66 28" stroke="hsl(var(--electric-green))" strokeWidth="1.5" />
        {/* Lightweight feather */}
        <path d="M63 35 Q65 33 67 35 L65 37 Q63 39 61 37 Z" fill="hsl(var(--electric-cyan))" className="animate-glow-pulse" style={{ animationDelay: '0.3s' }} />
      </svg>
    ),
    maneuver: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Narrow street/parking space */}
        <rect x="8" y="15" width="4" height="32" fill="hsl(var(--muted))" opacity="0.6" />
        <rect x="68" y="15" width="4" height="32" fill="hsl(var(--muted))" opacity="0.6" />
        {/* Compact car from top */}
        <ellipse cx="40" cy="30" rx="14" ry="7" fill="hsl(var(--electric-blue))" />
        <rect x="30" y="26" width="20" height="8" rx="4" fill="hsl(var(--electric-blue))" />
        {/* Turning path arc */}
        <path
          d="M20 30 Q25 22 35 24 Q45 26 50 30 Q55 35 50 40"
          fill="none"
          stroke="hsl(var(--electric-cyan))"
          strokeWidth="2"
          strokeDasharray="5,3"
          className="animate-glow-pulse"
        />
        {/* Turning radius circle */}
        <circle cx="40" cy="30" r="20" fill="none" stroke="hsl(var(--electric-green))" strokeWidth="1" strokeDasharray="3,3" opacity="0.5" />
        {/* Steering indicator */}
        <circle cx="40" cy="30" r="3" fill="hsl(var(--electric-green))" className="animate-glow-pulse" />
        {/* Parking arrows */}
        <path d="M15 26 L18 26 L17 24" stroke="hsl(var(--electric-cyan))" strokeWidth="1.2" fill="none" />
        <path d="M65 34 L62 34 L63 36" stroke="hsl(var(--electric-cyan))" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* AI chip/processor */}
        <rect x="30" y="24" width="20" height="14" rx="2" fill="hsl(var(--card))" stroke="hsl(var(--electric-blue))" strokeWidth="2" />
        {/* Circuit board traces */}
        <line x1="33" y1="27" x2="37" y2="27" stroke="hsl(var(--electric-cyan))" strokeWidth="1" />
        <line x1="43" y1="27" x2="47" y2="27" stroke="hsl(var(--electric-cyan))" strokeWidth="1" />
        <line x1="33" y1="31" x2="47" y2="31" stroke="hsl(var(--electric-cyan))" strokeWidth="1.2" />
        <line x1="33" y1="35" x2="37" y2="35" stroke="hsl(var(--electric-cyan))" strokeWidth="1" />
        <line x1="43" y1="35" x2="47" y2="35" stroke="hsl(var(--electric-cyan))" strokeWidth="1" />
        {/* Connecting pins */}
        <rect x="28" y="28" width="2" height="6" fill="hsl(var(--electric-blue))" />
        <rect x="50" y="28" width="2" height="6" fill="hsl(var(--electric-blue))" />
        {/* Driver monitoring eye/camera */}
        <circle cx="18" cy="30" r="6" fill="hsl(var(--electric-blue))" opacity="0.3" />
        <circle cx="18" cy="30" r="4" fill="hsl(var(--electric-blue))" />
        <circle cx="18" cy="30" r="1.5" fill="hsl(var(--background))" className="animate-glow-pulse" />
        {/* Alert indicators */}
        <circle cx="62" cy="24" r="2.5" fill="hsl(var(--warning))" className="animate-glow-pulse" />
        <circle cx="62" cy="31" r="2.5" fill="hsl(var(--electric-green))" className="animate-glow-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="62" cy="38" r="2.5" fill="hsl(var(--electric-cyan))" className="animate-glow-pulse" style={{ animationDelay: '0.6s' }} />
        {/* Data waves */}
        <path d="M35 42 Q40 44 45 42" stroke="hsl(var(--electric-green))" strokeWidth="1" fill="none" opacity="0.6" className="animate-glow-pulse" />
        <path d="M33 44 Q40 46 47 44" stroke="hsl(var(--electric-green))" strokeWidth="0.8" fill="none" opacity="0.4" className="animate-glow-pulse" style={{ animationDelay: '0.2s' }} />
      </svg>
    ),
    braking: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Brake disc rotor */}
        <circle cx="30" cy="30" r="14" fill="hsl(var(--muted))" stroke="hsl(var(--electric-blue))" strokeWidth="2.5" />
        <circle cx="30" cy="30" r="10" fill="none" stroke="hsl(var(--electric-cyan))" strokeWidth="2" />
        <circle cx="30" cy="30" r="4" fill="hsl(var(--card))" stroke="hsl(var(--electric-blue))" strokeWidth="1" />
        {/* Ventilation slots */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const x1 = 30 + 6 * Math.cos((angle * Math.PI) / 180);
          const y1 = 30 + 6 * Math.sin((angle * Math.PI) / 180);
          const x2 = 30 + 10 * Math.cos((angle * Math.PI) / 180);
          const y2 = 30 + 10 * Math.sin((angle * Math.PI) / 180);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(var(--background))" strokeWidth="2" />;
        })}
        {/* Brake caliper */}
        <path d="M48 24 L48 36 Q52 38 56 36 L56 24 Q52 22 48 24 Z" fill="hsl(var(--electric-green))" />
        <rect x="50" y="27" width="4" height="6" rx="1" fill="hsl(var(--card))" opacity="0.6" />
        {/* Energy recovery arrows */}
        <path d="M58 28 Q64 26 68 30" stroke="hsl(var(--electric-green))" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" className="animate-glow-pulse" />
        <path d="M60 32 Q66 30 70 34" stroke="hsl(var(--electric-green))" strokeWidth="1.5" fill="none" markerEnd="url(#arrowhead)" className="animate-glow-pulse" style={{ animationDelay: '0.3s' }} />
        {/* ABS label */}
        <text x="30" y="51" textAnchor="middle" fontSize="7" fontWeight="bold" fill="hsl(var(--electric-blue))">ABS</text>
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <polygon points="0,0 8,4 0,8" fill="hsl(var(--electric-green))" />
          </marker>
        </defs>
      </svg>
    )
  };

  return (
    <div className="w-12 h-8 flex items-center justify-center">
      {iconMap[type]}
    </div>
  );
};

export default FeatureIcon;