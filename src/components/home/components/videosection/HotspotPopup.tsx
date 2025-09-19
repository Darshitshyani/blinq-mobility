import { useEffect, useState } from 'react';
import { Hotspot } from './InteractiveVideo';

interface HotspotPopupProps {
  hotspot: Hotspot;
  position: { x: number; y: number };
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const HotspotPopup = ({ hotspot, position, onClose, onMouseEnter, onMouseLeave }: HotspotPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);



  return (
    <div
      className={`popup absolute z-20 bg-background p-4 rounded-xl ${isVisible ? 'popup-enter-active' : 'popup-enter'}`}
      style={{
        left: position.x,
        top: position.y - 10,
        transform: 'translateX(-50%) translateY(-100%)',
        minWidth: '280px',
        maxWidth: '320px',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
   

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
       
     <p></p>
      </div>

     

    
      </div>
   
  );
};