import React from 'react';

interface FeatureIconProps {
  type: 'chassis' | 'design' | 'cabin' | 'composite' | 'maneuver' | 'ai' | 'braking' | 'platform';
  className?: string;
}

const FeatureIcon: React.FC<FeatureIconProps> = ({ type, className = "" }) => {
  const iconMap = {
    platform: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Platform base */}
        <rect x="10" y="40" width="60" height="8" rx="4" fill="hsl(var(--electric-blue))" />
        {/* Modular sections */}
        <rect x="15" y="25" width="12" height="18" rx="2" fill="hsl(var(--electric-cyan))" className="opacity-80" />
        <rect x="34" y="20" width="12" height="23" rx="2" fill="hsl(var(--electric-cyan))" className="opacity-80" />
        <rect x="53" y="25" width="12" height="18" rx="2" fill="hsl(var(--electric-cyan))" className="opacity-80" />
        {/* Connection points */}
        {[20, 40, 60].map((x, i) => (
          <circle key={i} cx={x} cy="44" r="2" fill="hsl(var(--electric-green))" className="animate-glow-pulse" />
        ))}
      </svg>
    ),
    chassis: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Wireframe structure */}
        <g fill="none" stroke="hsl(var(--electric-blue))" strokeWidth="2">
          <rect x="20" y="20" width="40" height="25" rx="3" />
          <line x1="30" y1="20" x2="30" y2="45" />
          <line x1="50" y1="20" x2="50" y2="45" />
          <line x1="20" y1="30" x2="60" y2="30" />
        </g>
        {/* Stress points */}
        <circle cx="30" cy="30" r="3" fill="hsl(var(--electric-cyan))" className="animate-glow-pulse" />
        <circle cx="50" cy="30" r="3" fill="hsl(var(--electric-cyan))" className="animate-glow-pulse" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Aerodynamic car silhouette */}
        <path
          d="M15 35 Q20 25 35 25 L50 25 Q65 25 70 35 L70 40 Q65 45 50 45 L35 45 Q20 45 15 40 Z"
          fill="url(#designGradient)"
          className="drop-shadow-lg"
        />
        {/* Wind flow lines */}
        {[28, 32, 36].map((y, i) => (
          <path
            key={i}
            d={`M5 ${y} Q40 ${y-2} 75 ${y}`}
            fill="none"
            stroke="hsl(var(--electric-cyan))"
            strokeWidth="1"
            className="opacity-60 animate-slide-in-right"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
        <defs>
          <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--electric-blue))" />
            <stop offset="100%" stopColor="hsl(var(--electric-cyan))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    cabin: (
     <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
  {/* Gradient definitions */}
  <defs>
    <linearGradient id="cabinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="hsl(var(--card))" />
      <stop offset="100%" stopColor="hsl(var(--electric-blue))" stopOpacity="0.3" />
    </linearGradient>
    
    <linearGradient id="seatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="hsl(var(--electric-cyan))" />
      <stop offset="100%" stopColor="hsl(var(--electric-blue))" />
    </linearGradient>
    
    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="hsl(var(--electric-green))" stopOpacity="0" />
      <stop offset="50%" stopColor="hsl(var(--electric-green))" stopOpacity="0.8" />
      <stop offset="100%" stopColor="hsl(var(--electric-green))" stopOpacity="0" />
    </linearGradient>
    
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
      <feMerge> 
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <polygon points="0,0 6,3 0,6" fill="hsl(var(--electric-green))" />
    </marker>
  </defs>

  {/* Background glow effect */}
  <rect x="15" y="20" width="50" height="25" rx="10" fill="url(#glowGradient)" opacity="0.3" filter="url(#glow)" />
  
  {/* Main cabin with 3D effect */}
  <g filter="url(#glow)">
    {/* Cabin shadow */}
    <rect x="22" y="27" width="36" height="18" rx="8" fill="hsl(var(--muted))" opacity="0.3" />
    
    {/* Cabin body */}
    <rect x="20" y="25" width="40" height="20" rx="8" fill="url(#cabinGradient)" stroke="hsl(var(--electric-blue))" strokeWidth="2" />
    
    {/* Cabin highlights */}
    <rect x="21" y="26" width="38" height="2" rx="1" fill="hsl(var(--electric-blue))" opacity="0.6" />
    <rect x="21" y="28" width="36" height="1" fill="hsl(var(--electric-blue))" opacity="0.3" />
  </g>

  {/* Window */}
  <rect x="25" y="27" width="30" height="8" rx="3" fill="hsl(var(--electric-blue))" opacity="0.2" />
  <rect x="26" y="28" width="28" height="6" rx="2" fill="hsl(var(--electric-blue))" opacity="0.1" />

  {/* Seats with 3D effect */}
  <g>
    {/* Seat shadows */}
    <rect x="26" y="31" width="8" height="6" rx="2" fill="hsl(var(--muted))" opacity="0.4" />
    <rect x="36" y="31" width="8" height="6" rx="2" fill="hsl(var(--muted))" opacity="0.4" />
    <rect x="26" y="39" width="8" height="6" rx="2" fill="hsl(var(--muted))" opacity="0.4" />
    <rect x="36" y="39" width="8" height="6" rx="2" fill="hsl(var(--muted))" opacity="0.4" />
    
    {/* Main seats */}
    <rect x="25" y="30" width="8" height="6" rx="2" fill="url(#seatGradient)" stroke="hsl(var(--electric-blue))" strokeWidth="0.5" />
    <rect x="35" y="30" width="8" height="6" rx="2" fill="url(#seatGradient)" stroke="hsl(var(--electric-blue))" strokeWidth="0.5" />
    <rect x="25" y="38" width="8" height="6" rx="2" fill="url(#seatGradient)" stroke="hsl(var(--electric-blue))" strokeWidth="0.5" />
    <rect x="35" y="38" width="8" height="6" rx="2" fill="url(#seatGradient)" stroke="hsl(var(--electric-blue))" strokeWidth="0.5" />
    
    {/* Seat highlights */}
    <rect x="25.5" y="30.5" width="7" height="1" rx="0.5" fill="hsl(var(--electric-cyan))" opacity="0.8" />
    <rect x="35.5" y="30.5" width="7" height="1" rx="0.5" fill="hsl(var(--electric-cyan))" opacity="0.8" />
    <rect x="25.5" y="38.5" width="7" height="1" rx="0.5" fill="hsl(var(--electric-cyan))" opacity="0.8" />
    <rect x="35.5" y="38.5" width="7" height="1" rx="0.5" fill="hsl(var(--electric-cyan))" opacity="0.8" />
  </g>

  {/* Spaciousness indicators with animation */}
  <g className="animate-pulse" style={{animationDuration: '2s'}}>
    {/* Vertical space indicator */}
    <line x1="48" y1="28" x2="48" y2="42" stroke="hsl(var(--electric-green))" strokeWidth="1.5" strokeDasharray="2,2" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
    
    {/* Horizontal space indicator */}
    <line x1="50" y1="32" x2="57" y2="32" stroke="hsl(var(--electric-green))" strokeWidth="1.5" strokeDasharray="2,2" markerEnd="url(#arrow)" />
    
    {/* Additional diagonal indicator */}
    <line x1="52" y1="30" x2="58" y2="36" stroke="hsl(var(--electric-green))" strokeWidth="1" strokeDasharray="1,1" opacity="0.7" markerEnd="url(#arrow)" />
  </g>

  {/* Decorative elements */}
  <circle cx="55" cy="35" r="1.5" fill="hsl(var(--electric-green))" opacity="0.6" />
  <circle cx="58" cy="38" r="1" fill="hsl(var(--electric-green))" opacity="0.4" />
  
  {/* Corner accents */}
  <circle cx="22" cy="27" r="1" fill="hsl(var(--electric-blue))" opacity="0.5" />
  <circle cx="58" cy="27" r="1" fill="hsl(var(--electric-blue))" opacity="0.5" />
  <circle cx="22" cy="43" r="1" fill="hsl(var(--electric-blue))" opacity="0.5" />
  <circle cx="58" cy="43" r="1" fill="hsl(var(--electric-blue))" opacity="0.5" />
</svg>
    ),
    composite: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Material layers */}
        <g>
          <rect x="20" y="25" width="40" height="3" fill="hsl(var(--electric-blue))" />
          <rect x="20" y="30" width="40" height="3" fill="hsl(var(--electric-cyan))" className="opacity-80" />
          <rect x="20" y="35" width="40" height="3" fill="hsl(var(--electric-green))" className="opacity-60" />
        </g>
        {/* Fiber texture lines */}
        {Array.from({length: 8}, (_, i) => (
          <line
            key={i}
            x1={22 + i * 4.5}
            y1="23"
            x2={24 + i * 4.5}
            y2="40"
            stroke="hsl(var(--electric-cyan))"
            strokeWidth="0.5"
            className="opacity-40"
          />
        ))}
        {/* Strength indicator */}
        <circle cx="65" cy="30" r="8" fill="none" stroke="hsl(var(--electric-green))" strokeWidth="2" className="animate-glow-pulse" />
        <text x="65" y="33" textAnchor="middle" className="text-xs fill-electric-green font-bold">+</text>
      </svg>
    ),
    maneuver: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Car in narrow space */}
        <rect x="15" y="15" width="4" height="30" fill="hsl(var(--muted))" />
        <rect x="61" y="15" width="4" height="30" fill="hsl(var(--muted))" />
        {/* Car */}
        <ellipse cx="40" cy="30" rx="15" ry="6" fill="hsl(var(--electric-blue))" className="animate-car-drive" />
        {/* Maneuver path */}
        <path
          d="M25 30 Q32 25 40 30 Q48 35 55 30"
          fill="none"
          stroke="hsl(var(--electric-cyan))"
          strokeWidth="2"
          strokeDasharray="3,2"
          className="animate-glow-pulse"
        />
      </svg>
    ),
    ai: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Brain/processor */}
        <circle cx="40" cy="30" r="15" fill="hsl(var(--card))" stroke="hsl(var(--electric-blue))" strokeWidth="2" />
        {/* Neural network nodes */}
        {[[30, 25], [50, 25], [30, 35], [50, 35], [40, 20], [40, 40]].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2"
            fill="hsl(var(--electric-cyan))"
            className="animate-glow-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
        {/* Connections */}
        <g stroke="hsl(var(--electric-cyan))" strokeWidth="1" className="opacity-60">
          <line x1="30" y1="25" x2="50" y2="35" />
          <line x1="50" y1="25" x2="30" y2="35" />
          <line x1="40" y1="20" x2="40" y2="40" />
        </g>
        {/* Alert indicators */}
        <circle cx="60" cy="15" r="3" fill="hsl(var(--warning))" className="animate-glow-pulse" />
        <circle cx="65" cy="25" r="3" fill="hsl(var(--electric-green))" className="animate-glow-pulse" />
      </svg>
    ),
    braking: (
      <svg viewBox="0 0 80 60" className={`w-full h-full ${className}`}>
        {/* Brake disc */}
        <circle cx="35" cy="30" r="12" fill="hsl(var(--muted))" stroke="hsl(var(--electric-blue))" strokeWidth="2" />
        <circle cx="35" cy="30" r="8" fill="none" stroke="hsl(var(--electric-cyan))" strokeWidth="1" />
        {/* Brake pad */}
        <rect x="50" y="25" width="8" height="10" rx="2" fill="hsl(var(--electric-green))" />
        {/* Energy recovery arrows */}
        <g stroke="hsl(var(--electric-green))" strokeWidth="2" fill="none" markerEnd="url(#energyArrow)">
          <path d="M55 35 Q65 35 70 25" />
          <path d="M58 32 Q68 32 72 22" />
        </g>
        <defs>
          <marker id="energyArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <polygon points="0,0 6,3 0,6" fill="hsl(var(--electric-green))" />
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