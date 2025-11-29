import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Configuration options
 * @param {string} options.type - Animation type: 'fadeIn', 'slideUp', 'slideLeft', 'slideRight', 'scaleIn'
 * @param {number} options.delay - Delay in seconds before animation starts
 * @param {number} options.duration - Duration of animation in seconds
 * @param {number} options.threshold - Intersection observer threshold (0-1)
 * @returns {Object} - ref and animation variants
 */
export const useScrollAnimation = (options = {}) => {
  const {
    type = 'fadeIn',
    delay = 0,
    duration = 0.6,
    threshold = 0.2
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    slideLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 }
    },
    slideRight: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  const selectedVariant = variants[type] || variants.fadeIn;

  return {
    ref,
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    variants: selectedVariant,
    transition: { duration, delay }
  };
};
