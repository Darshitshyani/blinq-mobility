import { useState, useCallback, useEffect, useRef } from 'react';
 
import topCoverImage from "@/untils/images/tech/top cover.png";
import sideRealistic2 from "@/untils/images/tech/side realistic 2.png";
import sideRealistic3 from "@/untils/images/tech/side realistic 3.png";
import sideRealistic4 from "@/untils/images/tech/side realistic 4.png";
import rearViewImage from "@/untils/images/tech/REAR.png";
import Image from 'next/image';

const CyclingHeroImage = () => {
  const images = [
    
    sideRealistic4,
    sideRealistic3, 
    sideRealistic2,
    rearViewImage,
    topCoverImage
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const targetIndexRef = useRef(0);
  const animationFrameRef = useRef<number>();

  // Preload all images for smooth transitions
useEffect(() => {
  const loadPromises = images.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = typeof src === "string" ? src : src.src; // Ensure string URL
    });
  });

  Promise.all(loadPromises)
    .then(() => setImagesLoaded(true))
    .catch(console.error);
}, []);

  // Smooth animation to target index
  const animateToTarget = useCallback(() => {
    const current = currentImageIndex;
    const target = targetIndexRef.current;
    
    if (Math.abs(current - target) < 0.1) {
      setCurrentImageIndex(target);
      return;
    }
    
    const diff = target - current;
    const step = diff * 0.15; // Smooth easing
    setCurrentImageIndex(current + step);
    
    animationFrameRef.current = requestAnimationFrame(animateToTarget);
  }, [currentImageIndex]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // Map cursor position to image index with smoother calculation
    const normalizedX = Math.max(0, Math.min(1, x / width));
    const targetIndex = normalizedX * (images.length - 1);
    
    targetIndexRef.current = targetIndex;
    setIsInteracting(true);
    
    // Cancel previous animation and start new one
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animateToTarget();
  }, [images.length, animateToTarget]);

  const handleMouseLeave = useCallback(() => {
    setIsInteracting(false);
    targetIndexRef.current = 0;
    
    // Smooth return to front view
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animateToTarget();
  }, [animateToTarget]);

  // Cleanup animation frame
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const displayIndex = Math.round(currentImageIndex);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-2xl group cursor-grab active:cursor-grabbing">
      {/* Loading state */}
      {!imagesLoaded && (
        <div className="absolute inset-0 bg-card/50 backdrop-blur-sm flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-2 border-electric-blue border-t-transparent rounded-full"></div>
        </div>
      )}
      
      {/* 360° Interactive Image */}
      <div
        className="relative w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Render current and adjacent images for smoother transitions */}
        {images.map((src, index) => (
          <Image 
            key={index}
            src={src} 
            alt={`Blinq Pod View ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover shadow-2xl transition-opacity duration-100 ease-out ${
              index === displayIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `scale(${isInteracting ? '1.02' : '1'})`,
              transition: 'transform 0.3s ease-out, opacity 0.1s ease-out'
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        
        {/* 360° Interaction indicator */}
        <div className={`absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-electric-cyan/5 transition-opacity duration-300 ${
          isInteracting ? 'opacity-100' : 'opacity-0'
        }`} />
        
        {/* 360° Guide */}
        <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-2 text-sm text-foreground">
            <div className="w-2 h-2 bg-electric-blue rounded-full animate-pulse" />
            <span>Move cursor for 360° view</span>
          </div>
        </div>
        
        {/* Angle indicator */}
        <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="text-xs text-muted-foreground">
            Angle: {Math.round((currentImageIndex / (images.length - 1)) * 360)}°
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyclingHeroImage;