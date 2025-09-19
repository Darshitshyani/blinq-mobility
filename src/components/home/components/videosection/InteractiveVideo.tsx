import { useState, useRef } from 'react';
import { HotspotPopup } from './HotspotPopup';

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  description: string;
  links: Array<{
    label: string;
    url: string;
    icon?: string;
  }>;
}

const DEFAULT_HOTSPOTS: Hotspot[] = [
  {
    id: 'microfactory',
    x: 35,
    y: 15,
    title: 'Microfactory',
    description: 'Advanced manufacturing solutions for the future',
    links: [
      { label: 'Learn More', url: '#microfactory', icon: '🏭' },
      { label: 'Technology', url: '#tech', icon: '⚙️' },
    ],
  },
  {
    id: 'taxi',
    x: 52,
    y: 30,
    title: 'The Taxi',
    description: 'Autonomous transportation network',
    links: [
      { label: 'Book a Ride', url: '#taxi', icon: '🚕' },
      { label: 'Fleet Info', url: '#fleet', icon: '📊' },
    ],
  },
  {
    id: 'blinq-swap',
    x: 50,
    y: 60,
    title: 'Blinq Swap',
    description: 'Instant asset exchange platform',
    links: [
      { label: 'Start Trading', url: '#swap', icon: '🔄' },
      { label: 'Analytics', url: '#analytics', icon: '📈' },
    ],
  },
  {
    id: 'repot',
    x: 58,
    y: 34,
    title: 'Repot',
    description: 'Sustainable urban gardening solutions',
    links: [
      { label: 'Garden Now', url: '#repot', icon: '🌱' },
      { label: 'Sustainability', url: '#green', icon: '♻️' },
    ],
  },
  {
    id: 'blinq',
    x: 80,
    y: 20,
    title: 'Blinq',
    description: 'Next-generation connectivity platform',
    links: [
      { label: 'Connect', url: '#blinq', icon: '⚡' },
      { label: 'API Docs', url: '#docs', icon: '📚' },
    ],
  },
];

export const InteractiveVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<Hotspot | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const closeTimeoutRef = useRef<number | null>(null);

  const cancelScheduledClose = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimeoutRef.current = window.setTimeout(() => {
      setHoveredHotspot(null);
      closeTimeoutRef.current = null;
    }, 150);
  };

  const handleHotspotHover = (hotspot: Hotspot, event: React.MouseEvent) => {
    cancelScheduledClose();
    const rect = event.currentTarget.getBoundingClientRect();
    const containerRect = event.currentTarget.parentElement?.getBoundingClientRect();
    
    if (containerRect) {
      setPopupPosition({
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top,
      });
    }
    
    setHoveredHotspot(hotspot);
  };

  const handleHotspotLeave = () => {
    scheduleClose();
  };

  return (
    <div className="w-full">
    

      {/* Video Container */}
      <div className="video-container relative bg-card rounded-xl overflow-hidden shadow-2xl">
       <video
  ref={videoRef}
  className="w-full h-auto object-cover"
  src="city.mp4"
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
/>

        {/* Static Hotspots - Always Visible */}
        {DEFAULT_HOTSPOTS.map((hotspot) => (
          <div
            key={hotspot.id}
            className="hotspot absolute z-10 bg-primary-main/80 hover:bg-primary-main/100 hover:scale-110 transition-all duration-300 rounded-full p-1 cursor-pointer"
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
             
            }}
            onMouseEnter={(e) => handleHotspotHover(hotspot, e)}
            onMouseLeave={handleHotspotLeave}
            onClick={() => {
              // Optional: Handle click to show more details or navigate
              console.log('Hotspot clicked:', hotspot.title);
            }}
          >
    <span
  className="block rounded-full border-white bg-blue-500 shadow-lg animate-border-blink"
  style={{
    width: "30px",
    height: "30px",
    display: "inline-block",
  }}
/>
            </div>
       
           
        ))}

        {/* Popup */}
        {hoveredHotspot && (
          <HotspotPopup
            hotspot={hoveredHotspot}
            position={popupPosition}
            onClose={() => setHoveredHotspot(null)}
            onMouseEnter={cancelScheduledClose}
            onMouseLeave={scheduleClose}
          />
        )}
      </div>

      
    </div>
  );
};