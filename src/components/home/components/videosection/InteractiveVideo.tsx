import { useState, useRef } from 'react';
import { HotspotPopup } from './HotspotPopup';

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  links: string;
}

const DEFAULT_HOTSPOTS: Hotspot[] = [
  {
    id: 'Home',
    x: 35,
    y: 15,
    title: 'Home',
    links:"/",
  },
  {
    id: 'Technology',
    x: 52,
    y: 30,
    title: 'Technology',
    links: "/technology",
  },
  {
    id: 'Feets',
    x: 50,
    y: 60,
    title: 'Feets',
    links: "/feets",
  },
  {
    id: 'aboutus',
    x: 58,
    y: 34,
    title: 'About Us',
    links: "/about-us",
  },
  {
    id: 'Blogs',
    x: 80,
    y: 20,
    title: 'Blogs',
    links: "/blogs",
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
      <div className="video-container relative bg-card h-[65vh] md:h-screen overflow-hidden shadow-2xl">
       <video
  ref={videoRef}
  className="w-full h-full object-cover"
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
  className="block rounded-full border-white  bg-white/10 backdrop-blur-md backdrop-saturate-150 shadow-lg animate-border-blink w-[15px] md:w-[20px] h-[15px] md:h-[20px]"
  
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