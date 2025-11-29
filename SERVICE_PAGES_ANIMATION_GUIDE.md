# Service Pages Scroll Animations - Implementation Guide

## Overview
This guide provides instructions for adding scroll animations to all service pages (Education, Manufacturing, Software, Open Labs) and other key pages.

## ✅ Completed
- ✅ Home Page (8 components)
- ✅ About Page (5 components)
- ✅ EducationHero.jsx

## 📋 Remaining Service Pages

### Education Service Page
**Location:** `src/pages/public/education/index.jsx`

**Components to animate:**
1. `EducationHero.jsx` ✅ DONE
2. `ProgramOptions.jsx` - Already has animations from home page
3. `StudentSuccess.jsx` - Card grid
4. `HowEnrollmentWorks.jsx` - Steps/process
5. `WhoBenefits.jsx` - Benefit cards
6. `ProgramsEnrollment.jsx` - Enrollment cards
7. `ReadyToStart.jsx` - CTA section

### Manufacturing Service Page
**Location:** `src/pages/public/manufacturing/`

**Components to animate:**
- ManufacturingHero.jsx
- ManufacturingServices.jsx
- ManufacturingProcess.jsx
- ManufacturingBenefits.jsx
- ManufacturingCTA.jsx

### Software Service Page
**Location:** `src/pages/public/software/`

**Components to animate:**
- SoftwareHero.jsx
- SoftwareFeatures.jsx
- SoftwareProjects.jsx
- SoftwareBenefits.jsx
- SoftwareCTA.jsx

### Open Labs Service Page
**Location:** `src/pages/public/open-labs/`

**Components to animate:**
- OpenLabsHero.jsx
- OpenLabsFeatures.jsx
- OpenLabsMembership.jsx
- OpenLabsSpaces.jsx
- OpenLabsCTA.jsx

---

## 🎯 Quick Implementation Steps

### For Hero Sections
Use this template:

```javascript
import { motion } from 'framer-motion';

// In your component:
<motion.div 
  className="max-w-3xl"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <motion.h1 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.1 }}
  >
    Your Title
  </motion.h1>
  
  <motion.p 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    Your description
  </motion.p>
  
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    {/* CTA Buttons */}
  </motion.div>
</motion.div>
```

### For Card Grids
Use this template:

```javascript
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const MyComponent = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section>
      <motion.h2 
        ref={titleAnimation.ref}
        initial={titleAnimation.initial}
        animate={titleAnimation.animate}
        variants={titleAnimation.variants}
        transition={titleAnimation.transition}
      >
        Title
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
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
    </section>
  );
};
```

### For Process/Steps Sections
Use this template:

```javascript
<motion.div 
  className="space-y-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }}
>
  {steps.map((step, index) => (
    <motion.div 
      key={index}
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      {step}
    </motion.div>
  ))}
</motion.div>
```

---

## 📊 Animation Timing Guide

### Hero Sections
- Container: `duration: 0.8`
- Title: `delay: 0.1`
- Subtitle: `delay: 0.2`
- CTA: `delay: 0.3`

### Card Grids
- Title: `slideUp, delay: 0`
- Cards: `staggerChildren: 0.1`, `duration: 0.5`

### Process Steps
- Title: `slideUp, delay: 0`
- Steps: `staggerChildren: 0.15`, `duration: 0.5`

### CTA Sections
- Container: `duration: 0.6`
- Title: `delay: 0.1`
- Button: `delay: 0.2`

---

## 🔄 Component Priority Order

### Phase 1 (High Priority)
1. EducationHero.jsx ✅
2. StudentSuccess.jsx
3. HowEnrollmentWorks.jsx
4. WhoBenefits.jsx

### Phase 2 (Medium Priority)
1. ManufacturingHero.jsx
2. ManufacturingServices.jsx
3. SoftwareHero.jsx
4. SoftwareFeatures.jsx

### Phase 3 (Lower Priority)
1. OpenLabsHero.jsx
2. OpenLabsFeatures.jsx
3. All CTA sections
4. Remaining components

---

## ✨ Common Patterns

### Pattern 1: Title + Content
```javascript
const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
const contentAnimation = useScrollAnimation({ type: 'slideUp', delay: 0.1 });

<motion.h2 ref={titleAnimation.ref} {...titleAnimation}>Title</motion.h2>
<motion.div ref={contentAnimation.ref} {...contentAnimation}>Content</motion.div>
```

### Pattern 2: Staggered Cards
```javascript
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
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Pattern 3: Hero Transitions
```javascript
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

---

## 🎯 Key Points

1. **Always import motion and useScrollAnimation**
   ```javascript
   import { motion } from 'framer-motion';
   import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
   ```

2. **Use `once: true` in viewport**
   ```javascript
   viewport={{ once: true, amount: 0.2 }}
   ```

3. **Keep stagger delays consistent**
   - Cards: 0.1s
   - Steps: 0.15s
   - Items: 0.08-0.12s

4. **Test on mobile**
   - Verify smooth animations
   - Check 30-45 FPS minimum

5. **Close all motion components properly**
   - `<motion.div>` must have `</motion.div>`
   - Don't mix with regular `</div>`

---

## 📝 Checklist for Each Component

- [ ] Import motion and useScrollAnimation
- [ ] Create animation hooks
- [ ] Wrap elements with motion components
- [ ] Add proper closing tags
- [ ] Test on desktop (1920px, 1440px)
- [ ] Test on tablet (768px)
- [ ] Test on mobile (375px)
- [ ] Verify 60 FPS performance
- [ ] Check for layout shifts
- [ ] Verify animations trigger correctly

---

## 🚀 Batch Implementation Strategy

To speed up implementation:

1. **Start with hero sections** - They're similar across pages
2. **Then do card grids** - Use the same stagger pattern
3. **Finally do unique sections** - Process steps, features, etc.

Each component should take 5-10 minutes to update once you're familiar with the patterns.

---

## 📞 Support

Refer to these files for examples:
- `ANIMATION_TEMPLATES.md` - 10 copy-paste templates
- `ANIMATIONS_QUICK_REFERENCE.md` - Quick lookup
- Completed components: About, Home pages

---

## 🎬 Next Steps

1. Update remaining Education page components
2. Update Manufacturing service page
3. Update Software service page
4. Update Open Labs service page
5. Test all animations across devices
6. Monitor performance metrics

**Estimated Time:** 2-3 hours for all service pages
