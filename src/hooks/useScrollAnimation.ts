import { useEffect, useRef, useState } from 'react';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  duration?: number;
  easing?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'rotate';
  distance?: number;
  stagger?: number;
  staggerChildren?: boolean;
}

export interface ScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  isInView: boolean;
  hasAnimated: boolean;
  animationStyle: React.CSSProperties;
}

const defaultOptions: Required<ScrollAnimationOptions> = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  triggerOnce: true,
  delay: 0,
  duration: 600,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  direction: 'fade',
  distance: 50,
  stagger: 100,
  staggerChildren: false,
};

export const useScrollAnimation = (options: ScrollAnimationOptions = {}): ScrollAnimationReturn => {
  const opts = { ...defaultOptions, ...options };
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animationStyle, setAnimationStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          
          if (opts.triggerOnce && !hasAnimated) {
            setHasAnimated(true);
            setTimeout(() => {
              setAnimationStyle(getFinalAnimationStyle(opts));
            }, opts.delay);
          } else if (!opts.triggerOnce) {
            setAnimationStyle(getFinalAnimationStyle(opts));
          }
        } else if (!opts.triggerOnce) {
          setIsInView(false);
          setAnimationStyle(getInitialAnimationStyle(opts));
        }
      },
      {
        threshold: opts.threshold,
        rootMargin: opts.rootMargin,
      }
    );

    observer.observe(ref.current);

    // Set initial animation style
    setAnimationStyle(getInitialAnimationStyle(opts));

    return () => observer.disconnect();
  }, [opts.threshold, opts.rootMargin, opts.triggerOnce, opts.delay, opts.direction, opts.distance, hasAnimated]);

  return {
    ref,
    isInView,
    hasAnimated,
    animationStyle: {
      ...animationStyle,
      transition: `all ${opts.duration}ms ${opts.easing}`,
    },
  };
};

const getInitialAnimationStyle = (opts: Required<ScrollAnimationOptions>): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    opacity: opts.direction === 'fade' ? 0 : 1,
  };

  switch (opts.direction) {
    case 'up':
      return { ...baseStyle, transform: `translateY(${opts.distance}px)` };
    case 'down':
      return { ...baseStyle, transform: `translateY(-${opts.distance}px)` };
    case 'left':
      return { ...baseStyle, transform: `translateX(${opts.distance}px)` };
    case 'right':
      return { ...baseStyle, transform: `translateX(-${opts.distance}px)` };
    case 'scale':
      return { ...baseStyle, transform: `scale(0.8)` };
    case 'rotate':
      return { ...baseStyle, transform: `rotate(5deg) scale(0.9)` };
    default:
      return baseStyle;
  }
};

const getFinalAnimationStyle = (opts: Required<ScrollAnimationOptions>): React.CSSProperties => {
  return {
    opacity: 1,
    transform: 'translate(0, 0) scale(1) rotate(0deg)',
  };
};

// Hook for staggered animations (useful for lists/grids)
export const useStaggeredScrollAnimation = (
  itemCount: number,
  options: ScrollAnimationOptions = {}
): ScrollAnimationReturn[] => {
  const opts = { ...defaultOptions, ...options };
  const [animations, setAnimations] = useState<ScrollAnimationReturn[]>([]);

  useEffect(() => {
    const newAnimations: ScrollAnimationReturn[] = [];
    
    for (let i = 0; i < itemCount; i++) {
      const itemOptions = {
        ...opts,
        delay: opts.delay + (i * opts.stagger),
      };
      
      newAnimations.push({
        ref: { current: null },
        isInView: false,
        hasAnimated: false,
        animationStyle: getInitialAnimationStyle(itemOptions),
      });
    }
    
    setAnimations(newAnimations);
  }, [itemCount, opts]);

  return animations;
};
