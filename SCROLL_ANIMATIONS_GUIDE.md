# Scroll Animations Implementation Guide

## Overview
This guide explains the scroll animation system implemented on the ERA AXIS landing page using **Framer Motion**. The animations provide subtle fade-in and slide-up effects as elements enter the viewport, enhancing user experience without overwhelming the design.

## Architecture

### 1. Custom Hook: `useScrollAnimation`
**Location:** `src/hooks/useScrollAnimation.js`

A reusable React hook that handles scroll-triggered animations using Framer Motion's `useInView` hook.

#### Features:
- **Animation Types:**
  - `fadeIn` - Simple opacity transition
  - `slideUp` - Fade in with upward movement
  - `slideLeft` - Fade in with leftward movement
  - `slideRight` - Fade in with rightward movement
  - `scaleIn` - Fade in with scale transformation

- **Customizable Options:**
  ```javascript
  useScrollAnimation({
    type: 'slideUp',      // Animation type
    delay: 0.1,           // Delay in seconds
    duration: 0.6,        // Animation duration in seconds
    threshold: 0.2        // Viewport visibility threshold (0-1)
  })
  ```

#### Usage Example:
```javascript
const titleAnimation = useScrollAnimation({ 
  type: 'slideUp', 
  delay: 0 
});

return (
  <motion.h2 
    ref={titleAnimation.ref}
    initial={titleAnimation.initial}
    animate={titleAnimation.animate}
    variants={titleAnimation.variants}
    transition={titleAnimation.transition}
  >
    Section Title
  </motion.h2>
);
```

---

## Implemented Components

### 2. About Component
**Location:** `src/components/pages/home/About.jsx`

**Animations Applied:**
- Title: `slideUp` (delay: 0s)
- Content grid: `slideUp` (delay: 0.1s)
- Image: `slideRight` (delay: 0.2s)

**Effect:** Creates a cascading reveal effect as the section enters view.

---

### 3. ImpactStats Component
**Location:** `src/components/pages/home/ImpactStats.jsx`

**Animations Applied:**
- Section title: `slideUp`
- Stat cards: Staggered `slideUp` with 0.1s delay between each card

**Special Features:**
- Uses `whileInView` for viewport-triggered animation
- Staggered children animation for sequential card reveal
- Maintains existing number counting animation

**Effect:** Stats cards appear one after another as the section scrolls into view.

---

### 4. Pillars Component
**Location:** `src/components/pages/home/Pillars.jsx`

**Animations Applied:**
- Title: `slideUp`
- Pillar cards: Staggered animation with 0.1s delay between cards

**Effect:** Pillar cards smoothly slide up and fade in with a staggered timing.

---

### 5. Projects Component
**Location:** `src/components/pages/home/Projects.jsx`

**Animations Applied:**
- Title: `slideUp`
- Project cards: Staggered animation with 0.15s delay between cards

**Effect:** Project cards appear sequentially with a smooth fade-in and slide-up motion.

---

## Animation Patterns

### Pattern 1: Single Element Animation
```javascript
const animation = useScrollAnimation({ type: 'slideUp', delay: 0 });

<motion.div 
  ref={animation.ref}
  initial={animation.initial}
  animate={animation.animate}
  variants={animation.variants}
  transition={animation.transition}
>
  Content
</motion.div>
```

### Pattern 2: Staggered Children Animation
```javascript
<motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1  // 0.1s delay between children
      }
    }
  }}
>
  {items.map((item, index) => (
    <motion.div 
      key={index}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

---

## Configuration Options

### Viewport Threshold
Controls when animation triggers as element enters viewport:
- `0` - Triggers when any part enters
- `0.2` - Triggers when 20% is visible (default)
- `0.5` - Triggers when 50% is visible
- `1` - Triggers when fully visible

### Stagger Delay
Controls timing between sequential animations:
- `0.05s` - Fast, snappy reveal
- `0.1s` - Balanced (recommended)
- `0.15s` - Slower, more dramatic
- `0.2s+` - Very slow reveal

### Animation Duration
Controls how long each animation takes:
- `0.3s` - Quick, snappy
- `0.5-0.6s` - Balanced (recommended)
- `0.8s+` - Slow, smooth

---

## Best Practices

### 1. **Don't Overuse Animations**
- Apply animations only to key sections
- Avoid animating every single element
- Keep animations subtle and purposeful

### 2. **Maintain Performance**
- Use `once: true` in viewport to prevent re-animation
- Limit staggered animations to 4-6 items max
- Test on mobile devices for smooth performance

### 3. **Consistent Timing**
- Use consistent delay values across similar elements
- Stagger delays should be 0.1-0.15s for natural feel
- Total animation duration should be under 1 second

### 4. **Accessibility**
- Animations respect `prefers-reduced-motion` (handled by Framer Motion)
- Don't rely on animations for critical information
- Ensure animations don't interfere with readability

---

## Adding Animations to New Components

### Step 1: Import Dependencies
```javascript
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
```

### Step 2: Initialize Animation Hook
```javascript
const titleAnimation = useScrollAnimation({ 
  type: 'slideUp', 
  delay: 0 
});
```

### Step 3: Wrap Elements with Motion Components
```javascript
<motion.div 
  ref={titleAnimation.ref}
  initial={titleAnimation.initial}
  animate={titleAnimation.animate}
  variants={titleAnimation.variants}
  transition={titleAnimation.transition}
>
  Your Content
</motion.div>
```

### Step 4: Test on Multiple Devices
- Desktop (1920px, 1440px, 1024px)
- Tablet (768px)
- Mobile (375px, 414px)

---

## Troubleshooting

### Animation Not Triggering
- Check if element is within viewport threshold
- Verify `ref` is properly attached to motion component
- Ensure `whileInView` is used for container animations

### Animation Too Fast/Slow
- Adjust `duration` in transition object
- Modify `staggerChildren` value for sequential animations
- Check device performance (may need to reduce complexity)

### Layout Shift Issues
- Ensure animated elements have defined dimensions
- Use `will-change: transform` in CSS if needed
- Test with different content lengths

---

## Performance Metrics

Current implementation targets:
- **First Contentful Paint (FCP):** < 2.5s
- **Largest Contentful Paint (LCP):** < 4s
- **Animation Frame Rate:** 60 FPS on modern devices

---

## Future Enhancements

1. **Scroll Progress Animations**
   - Animate based on scroll percentage
   - Create parallax effects

2. **Intersection Observer Optimization**
   - Lazy load animations for off-screen content
   - Reduce memory footprint

3. **Advanced Stagger Patterns**
   - Wave animations
   - Circular reveal patterns
   - Custom easing functions

4. **Mobile-Specific Animations**
   - Reduced motion for mobile devices
   - Touch-triggered animations
   - Swipe gesture animations

---

## Dependencies

- **Framer Motion:** ^11.2.10
- **React:** ^19.1.1
- **React DOM:** ^19.1.1

No additional libraries required. All animations use Framer Motion's built-in capabilities.

---

## Support & Questions

For questions about implementing scroll animations:
1. Review the implemented components as examples
2. Check Framer Motion documentation: https://www.framer.com/motion/
3. Test animations on target devices before deployment
