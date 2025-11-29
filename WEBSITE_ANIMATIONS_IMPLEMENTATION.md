# Website-Wide Scroll Animations Implementation

## 📋 Overview

This document outlines the complete scroll animation implementation across the ERA AXIS website using **Framer Motion**. All animations are subtle, performance-optimized, and enhance user experience without being distracting.

---

## ✅ Completed Implementations

### Home Page Components (DONE)
- ✅ **About.jsx** - Title, content, image with staggered animations
- ✅ **ImpactStats.jsx** - Title + staggered stat cards
- ✅ **Pillars.jsx** - Title + staggered pillar cards
- ✅ **Projects.jsx** - Title + staggered project cards
- ✅ **Gallery.jsx** - Title + staggered gallery items with scale animation
- ✅ **Testimonials.jsx** - Title + staggered testimonial cards
- ✅ **Partners.jsx** - Title animation (carousel remains as-is)

### Remaining Components to Update

#### Home Page
- [ ] **Hero.jsx** - Hero section fade-in
- [ ] **NewsInsights.jsx** - News cards animation
- [ ] **Newsletter.jsx** - Newsletter form animation

#### Education Pages
- [ ] **ProgramDetailsPage.jsx** - Hero + content sections
- [ ] **EducationContactPage.jsx** - Form sections
- [ ] **EnrollmentPage.jsx** - Form animations

#### Other Pages
- [ ] **About Page** - Awards, team sections
- [ ] **Contact Page** - Form sections
- [ ] **Gallery Page** - Gallery grid
- [ ] **Blog Page** - Blog cards
- [ ] **Projects Pages** - Project details
- [ ] **Donation Pages** - Donation cards
- [ ] **Manufacturing Pages** - Service cards

---

## 🎯 Animation Strategy by Page Type

### Strategy 1: Hero Sections
```javascript
// Fade in with slight scale
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  Hero Content
</motion.div>
```

### Strategy 2: Content Sections with Title
```javascript
// Title slides up, content follows
const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
const contentAnimation = useScrollAnimation({ type: 'slideUp', delay: 0.1 });

<motion.h2 ref={titleAnimation.ref} {...titleAnimation}>Title</motion.h2>
<motion.div ref={contentAnimation.ref} {...contentAnimation}>Content</motion.div>
```

### Strategy 3: Card Grids
```javascript
// Staggered card reveal
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map(item => (
    <motion.div
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

### Strategy 4: Form Sections
```javascript
// Fade in with slight delay
<motion.form
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
  Form Fields
</motion.form>
```

---

## 📦 Implementation Checklist

### For Each Component:

1. **Import Dependencies**
   ```javascript
   import { motion } from 'framer-motion';
   import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
   ```

2. **Initialize Animations**
   ```javascript
   const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
   const contentAnimation = useScrollAnimation({ type: 'slideUp', delay: 0.1 });
   ```

3. **Wrap Elements**
   ```javascript
   <motion.h2 ref={titleAnimation.ref} {...titleAnimation}>
     Title
   </motion.h2>
   ```

4. **Test on Devices**
   - Desktop (1920px, 1440px)
   - Tablet (768px)
   - Mobile (375px)

5. **Verify Performance**
   - Check 60 FPS in DevTools
   - No layout shifts
   - Smooth animations

---

## 🎨 Animation Timing Reference

### Recommended Delays by Component Type
| Component | First Element | Between Elements | Total Duration |
|-----------|--------------|-----------------|-----------------|
| Title | 0s | - | 0.6s |
| Content | 0.1s | - | 0.6s |
| Cards (3-4) | 0s | 0.1s | 0.5-0.6s each |
| Cards (5+) | 0s | 0.08s | 0.5s each |
| Form Fields | 0s | 0.08s | 0.4s each |
| Images | 0.1s | - | 0.6s |

---

## 📄 Page-by-Page Implementation Guide

### Home Page
**Status:** 70% Complete

**Completed:**
- About, ImpactStats, Pillars, Projects, Gallery, Testimonials, Partners

**Remaining:**
- Hero: Add fade-in + scale animation
- NewsInsights: Add card stagger animation
- Newsletter: Add form fade-in

### Education Pages
**Status:** 0% Complete

**Priority:** High
- ProgramDetailsPage: Hero + sections
- EnrollmentPage: Form animations
- EducationContactPage: Contact form

### About Page
**Status:** 0% Complete

**Components to animate:**
- Hero section
- Mission statement
- Team section
- Awards section

### Contact Page
**Status:** 0% Complete

**Components to animate:**
- Contact form
- Office locations
- Contact info cards

### Gallery Page
**Status:** 0% Complete

**Components to animate:**
- Gallery grid (scale animation)
- Filter buttons
- Image cards

### Blog Page
**Status:** 0% Complete

**Components to animate:**
- Blog cards
- Featured post
- Pagination

### Projects Pages
**Status:** 0% Complete

**Components to animate:**
- Project hero
- Project details
- Related projects
- CTA sections

### Donation Pages
**Status:** 0% Complete

**Components to animate:**
- Donation options
- Donation form
- Success message

---

## 🚀 Quick Implementation Steps

### Step 1: Identify Sections
Look for:
- Section headings (`<h2>`, `<h3>`)
- Content blocks
- Card grids
- Form elements

### Step 2: Choose Animation Type
- **Headings:** `slideUp`
- **Images:** `slideRight` or `slideLeft`
- **Cards:** Staggered `slideUp`
- **Forms:** `fadeIn`

### Step 3: Apply Animation Hook
```javascript
const animation = useScrollAnimation({ 
  type: 'slideUp',
  delay: 0 
});
```

### Step 4: Wrap Element
```javascript
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

### Step 5: Test & Verify
- Scroll through page
- Check mobile responsiveness
- Monitor performance

---

## 🎯 Priority Implementation Order

### Phase 1 (Critical)
1. Home page remaining components (Hero, NewsInsights, Newsletter)
2. Education pages (ProgramDetailsPage, EnrollmentPage)
3. About page

### Phase 2 (Important)
1. Contact page
2. Gallery page
3. Blog page

### Phase 3 (Nice to Have)
1. Projects pages
2. Donation pages
3. Manufacturing pages
4. Open Labs pages

---

## ⚙️ Configuration Guidelines

### For Different Content Types

**Text-Heavy Sections:**
```javascript
{
  type: 'slideUp',
  delay: 0,
  duration: 0.6,
  threshold: 0.3
}
```

**Image-Heavy Sections:**
```javascript
{
  type: 'slideRight',
  delay: 0.1,
  duration: 0.7,
  threshold: 0.2
}
```

**Card Grids:**
```javascript
staggerChildren: 0.1,  // 100ms between cards
duration: 0.5,        // Each card animates in 500ms
threshold: 0.2        // Trigger at 20% visible
```

**Forms:**
```javascript
{
  type: 'fadeIn',
  delay: 0,
  duration: 0.5,
  threshold: 0.3
}
```

---

## 📊 Performance Targets

- **Frame Rate:** 60 FPS (no drops below 50 FPS)
- **Animation Duration:** 0.4-0.8 seconds
- **Stagger Delay:** 0.08-0.15 seconds
- **Total Page Load:** < 3 seconds
- **LCP (Largest Contentful Paint):** < 4 seconds

---

## 🔍 Testing Checklist

For each animated component:

- [ ] Animation triggers when element enters viewport
- [ ] Animation only plays once (using `once: true`)
- [ ] No layout shifts during animation
- [ ] Smooth 60 FPS on desktop
- [ ] Smooth animation on mobile (may drop to 30-45 FPS)
- [ ] Animations don't interfere with user interactions
- [ ] Text remains readable during animation
- [ ] Images load before animation completes

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Animation not triggering | Check viewport threshold, verify ref attachment |
| Janky animation | Reduce stagger items, simplify variants |
| Layout shift | Ensure elements have defined dimensions |
| Mobile lag | Test on actual device, reduce animation complexity |
| Animation too fast | Increase `duration` value |
| Animation too slow | Decrease `duration` value |
| Cards not staggering | Verify `staggerChildren` value is set |

---

## 📚 Resources

- **Framer Motion Docs:** https://www.framer.com/motion/
- **useInView Hook:** https://www.framer.com/motion/use-in-view/
- **Scroll Animations:** https://www.framer.com/motion/scroll-animations/
- **Performance Tips:** https://www.framer.com/motion/performance/

---

## 📝 Notes

- All animations use `once: true` to prevent re-animation on scroll
- Stagger delays are optimized for natural feel (0.1s is sweet spot)
- Animations respect `prefers-reduced-motion` (handled by Framer Motion)
- No animations on Hero sections on initial load (use `initial` instead)
- Mobile animations are simplified for better performance

---

## 🎯 Next Steps

1. Complete home page animations (Hero, NewsInsights, Newsletter)
2. Implement education page animations
3. Add animations to about page
4. Expand to remaining pages
5. Test across all devices
6. Monitor performance metrics
7. Gather user feedback
8. Optimize based on analytics

---

## 📞 Support

For questions or issues with scroll animations:
1. Check the `ANIMATIONS_QUICK_REFERENCE.md` file
2. Review implemented components as examples
3. Test with DevTools Performance tab
4. Refer to Framer Motion documentation
