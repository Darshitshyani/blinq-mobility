import { useState, useRef, useEffect } from 'react';
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
    id: 'Microfactory',
    x: 30,
    y: 21,
    title: 'Microfactory',
    links:"/technology#vehicles",
  },
  {
    id: 'Fleets',
    x: 56,
    y: 30,
    title: 'Fleets',
    links: "/fleets",
  },
  {
    id: 'Swapping',
    x: 50,
    y: 60,
    title: 'Swapping',
    links: "/technology#swapping",
  },
  {
    id: 'aboutus',
    x: 64,
    y: 19,
    title: 'About Us',
    links: "/about-us",
  },
  {
    id: 'Blogs',
    x: 80,
    y: 35,
    title: 'Blogs',
    links: "/#blog",
  },
  {
    id: 'Vehicles',
    x: 28,
    y: 39,
    title: 'Vehicles',
    links: "/technology#vehicles",
  },
  {
    id: 'Our mission',
    x: 20,
    y: 15,
    title: 'Our mission',
    links: "/#mission",
  },
];

// Mobile-specific positions
const MOBILE_HOTSPOTS: Hotspot[] = [
    {
    id: 'Our mission',
    x: 10,
    y: 20,
    title: 'Our mission',
    links: "/#mission",
  },
  {
    id: 'Microfactory',
    x: 30,
    y:20,
    title: 'Microfactory',
    links:"/technology#vehicles",
  },
  {
    id: 'Technology',
    x: 58, // Changed from 52 to 58 for mobile
    y: 30,
    title: 'Fleets',
    links: "/fleets",
  },
  {
    id: 'Feets',
    x: 50,
    y: 60,
    title: 'Swapping',
    links: "/technology#swapping",
  },
  {
    id: 'aboutus',
    x: 66,
    y: 22,
    title: 'About Us',
    links: "/about-us",
  },
  {
    id: 'Blogs',
    x: 90, // Changed from 80 to 90 for mobile
    y: 25,
    title: 'Blogs',
    links: "/#blog",
  },
  {
    id: 'Vehicles',
    x: 20,
    y: 40,
    title: 'Vehicles',
    links: "/technology#vehicles",
  },
];
export const InteractiveVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<Hotspot | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);

  // Update container dimensions and check mobile view (1024px breakpoint)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // 1024px breakpoint
    };

    const updateContainerSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    checkMobile();
    updateContainerSize();

    const resizeObserver = new ResizeObserver(() => {
      updateContainerSize();
      checkMobile();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener('resize', () => {
      updateContainerSize();
      checkMobile();
    });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', () => {
        updateContainerSize();
        checkMobile();
      });
    };
  }, []);

  // Use different hotspots based on screen size
  const hotspots = isMobile ? MOBILE_HOTSPOTS : DEFAULT_HOTSPOTS;

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
    const containerRect = containerRef.current?.getBoundingClientRect();
    
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
      <div 
        ref={containerRef}
        className="video-container relative bg-card  object-cover h-[50vh] md:h-full overflow-hidden shadow-2xl"
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/doze8mibh/video/upload/v1760350182/NewCity_ua2etg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />

        {/* Static Hotspots - Always Visible */}
        {containerSize.width > 0 && containerSize.height > 0 && hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="hotspot absolute z-[10000] bg-primary-main/80 hover:bg-primary-main/100 hover:scale-110 transition-all duration-300 rounded-full p-1 cursor-pointer"
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            onMouseEnter={(e) => handleHotspotHover(hotspot, e)}
            onMouseLeave={handleHotspotLeave}
            onClick={() => {
              console.log('Hotspot clicked:', hotspot.title);
            }}
          >
            <span
              className="block rounded-full border-white bg-white/10 backdrop-blur-md backdrop-saturate-150 shadow-lg animate-border-blink w-[15px] md:w-[20px] h-[15px] md:h-[20px]"
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