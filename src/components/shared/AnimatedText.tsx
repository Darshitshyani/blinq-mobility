import React from 'react';
import { motion } from 'motion/react';
import { useScrollAnimation, ScrollAnimationOptions } from '@/hooks/useScrollAnimation';

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animationOptions?: ScrollAnimationOptions;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  splitBy?: 'words' | 'lines' | 'chars' | 'none';
  staggerDelay?: number;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  animationOptions = {},
  as: Component = 'div',
  splitBy = 'none',
  staggerDelay = 0.05,
  className = '',
  ...props
}) => {
  const { ref, isInView, animationStyle } = useScrollAnimation({
    direction: 'up',
    distance: 30,
    duration: 600,
    ...animationOptions,
  });

  const defaultAnimationOptions: ScrollAnimationOptions = {
    direction: 'up',
    distance: 30,
    duration: 600,
    delay: 0,
  };

  const options = { ...defaultAnimationOptions, ...animationOptions };

  // Split text for character/word animations
  const splitText = (text: string, type: 'words' | 'lines' | 'chars') => {
    if (type === 'chars') {
      return text.split('').map((char, index) => ({
        char,
        index,
        delay: index * staggerDelay,
      }));
    } else if (type === 'words') {
      return text.split(' ').map((word, index) => ({
        word,
        index,
        delay: index * staggerDelay,
      }));
    } else if (type === 'lines') {
      return text.split('\n').map((line, index) => ({
        line,
        index,
        delay: index * staggerDelay,
      }));
    }
    return [{ text, index: 0, delay: 0 }];
  };

  const renderAnimatedContent = () => {
    if (splitBy === 'none' || typeof children !== 'string') {
      return (
        <motion.div
          ref={ref as any}
          initial={{
            opacity: 0,
            y: options.distance,
          }}
          animate={isInView ? {
            opacity: 1,
            y: 0,
          } : {
            opacity: 0,
            y: options.distance,
          }}
          transition={{
            duration: options.duration / 1000,
            delay: options.delay / 1000,
            ease: options.easing || 'easeOut',
          }}
          className={className}
          {...props}
        >
          {children}
        </motion.div>
      );
    }

    const textContent = String(children);
    const splitContent = splitText(textContent, splitBy);

    if (splitBy === 'chars') {
      return (
        <motion.div
          ref={ref as any}
          className={className}
          {...props}
        >
          {splitContent.map(({ char, index, delay }) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: options.distance,
              }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
              } : {
                opacity: 0,
                y: options.distance,
              }}
              transition={{
                duration: options.duration / 1000,
                delay: (options.delay / 1000) + delay,
                ease: options.easing || 'easeOut',
              }}
              style={{ display: 'inline-block' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      );
    }

    if (splitBy === 'words') {
      return (
        <motion.div
          ref={ref as any}
          className={className}
          {...props}
        >
          {splitContent.map(({ word, index, delay }) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: options.distance,
              }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
              } : {
                opacity: 0,
                y: options.distance,
              }}
              transition={{
                duration: options.duration / 1000,
                delay: (options.delay / 1000) + delay,
                ease: options.easing || 'easeOut',
              }}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      );
    }

    return (
      <motion.div
        ref={ref as any}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  };

  return renderAnimatedContent();
};

export default AnimatedText;
