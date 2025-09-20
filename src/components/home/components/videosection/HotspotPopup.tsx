import { useEffect, useState } from 'react';
import { Hotspot } from './InteractiveVideo';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
  className={`popup absolute z-20 p-4 rounded-xl flex justify-center items-center w-fit  border border-white/20 shadow-xl 
    bg-white/10 backdrop-blur-md backdrop-saturate-150
    ${isVisible ? 'popup-enter-active' : 'popup-enter'}`}
  style={{
    left: position.x,
    top: position.y - 5,
    transform: 'translateX(-50%) translateY(-100%)',
   
    WebkitBackdropFilter: 'blur(8px) saturate(150%)', // Safari support
    backdropFilter: 'blur(8px) saturate(150%)',
  }}
  onMouseEnter={onMouseEnter}
  onMouseLeave={onMouseLeave}
>
  <p className='text-foreground text-lg cursor-pointer z-[1000] hover:text-'>{hotspot.title}</p>
  <KeyboardArrowRightIcon />
  
</div>

   
  );
};