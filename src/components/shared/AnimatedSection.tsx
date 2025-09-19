import React from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation, ScrollAnimationOptions } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  animationOptions?: ScrollAnimationOptions;
  staggerChildren?: boolean;
  staggerDelay?: number;
  as?: 'section' | 'div' | 'article' | 'header' | 'footer';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animationOptions = {},
  staggerChildren = false,
  staggerDelay = 0.1,
  as: Component = 'section',
  className = '',
  ...props
}) => {
  const { ref, isInView } = useScrollAnimation({
    direction: 'fade',
    duration: 800,
    ...animationOptions,
  });

  const defaultAnimationOptions: ScrollAnimationOptions = {
    direction: 'fade',
    duration: 800,
    delay: 0,
  };

  const options = { ...defaultAnimationOptions, ...animationOptions };

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: options.duration / 1000,
        delay: options.delay / 1000,
        ease: options.easing || 'easeOut',
        staggerChildren: staggerChildren ? staggerDelay : 0,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref as any}
      as={Component}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {staggerChildren ? (
        React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            className="w-full"
          >
            {child}
          </motion.div>
        ))
      ) : (
        children
      )}
    </motion.div>
  );
};

export default AnimatedSection;
