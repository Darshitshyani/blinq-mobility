import { useEffect, useState } from 'react';
import { Hotspot } from './InteractiveVideo';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRouter } from 'next/router';

interface HotspotPopupProps {
  hotspot: Hotspot;
  position: { x: number; y: number };
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const HotspotPopup = ({
  hotspot,
  position,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: HotspotPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openDirection, setOpenDirection] = useState<'right' | 'top'>('right');
  const router = useRouter();

  useEffect(() => {
    // Decide whether to open to the right or top based on available space
    const popupWidth = 200; // approximate width of popup
    const screenWidth = window.innerWidth;

    if (position.x + popupWidth + 20 > screenWidth) {
      setOpenDirection('top');
    } else {
      setOpenDirection('right');
    }

    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, [position.x]);

  return (
    <div
      className={`popup absolute z-[50000] p-1 md:p-4 rounded-lg md:rounded-xl flex justify-center items-center w-fit border border-white/20 shadow-xl 
      bg-muted backdrop-xl backdrop-saturate-150 transition-all duration-300
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{
        left: openDirection === 'right' ? position.x + 20 : position.x + 10 ,
        top: openDirection === 'top' ? position.y - 5 : position.y + 10 ,
        transform:
          openDirection === 'right'
            ? 'translateY(-50%)'
            : 'translateX(-50%) translateY(-100%)',
        WebkitBackdropFilter: 'blur(8px) saturate(150%)',
        backdropFilter: 'blur(8px) saturate(150%)',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p
        className="text-foreground text-xs md:text-lg cursor-pointer z-[1000] flex items-center hover:text-electric-blue transition-colors"
        onClick={() => {
          router.push(hotspot.links);
        }}
      >
        {hotspot.title}
      <KeyboardArrowRightIcon />
      </p>
    </div>
  );
};
