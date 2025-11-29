# Scroll Animations - Quick Reference

## 🎯 Quick Start

### Import
```javascript
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
```

### Basic Usage
```javascript
const animation = useScrollAnimation({ type: 'slideUp' });

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

---

## 📦 Animation Types

| Type | Effect | Use Case |
|------|--------|----------|
| `fadeIn` | Opacity only | Subtle text reveals |
| `slideUp` | Fade + upward | Headings, sections |
| `slideLeft` | Fade + leftward | Left-aligned content |
| `slideRight` | Fade + rightward | Right-aligned content |
| `scaleIn` | Fade + scale | Cards, buttons |

---

## ⚙️ Configuration

```javascript
useScrollAnimation({
  type: 'slideUp',        // Animation type
  delay: 0.1,             // Seconds (0-1)
  duration: 0.6,          // Seconds (0.3-1)
  threshold: 0.2          // Viewport % (0-1)
})
```

---

## 🔄 Staggered Animation (Multiple Items)

```javascript
<motion.div 
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    visible: { transition: { staggerChildren: 0.1 } }
  }}
>
  {items.map((item, i) => (
    <motion.div 
      key={i}
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

## 📊 Recommended Values

### Delays
- **First element:** `0s`
- **Subsequent elements:** `0.1-0.15s` between each
- **Max total delay:** `0.5s`

### Durations
- **Text/Headings:** `0.5-0.6s`
- **Cards/Images:** `0.6-0.8s`
- **Complex animations:** `0.8-1s`

### Thresholds
- **Aggressive:** `0` (triggers immediately)
- **Balanced:** `0.2` (20% visible) ← **Recommended**
- **Conservative:** `0.5` (50% visible)

---

## 🎬 Common Patterns

### Pattern 1: Title + Content
```javascript
const title = useScrollAnimation({ type: 'slideUp', delay: 0 });
const content = useScrollAnimation({ type: 'slideUp', delay: 0.1 });

<motion.h2 ref={title.ref} {...title}>{title}</motion.h2>
<motion.p ref={content.ref} {...content}>{content}</motion.p>
```

### Pattern 2: Grid of Cards
```javascript
<motion.div initial="hidden" whileInView="visible" 
  variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
  {cards.map(card => (
    <motion.div key={card.id}
      variants={{ hidden: { opacity: 0, y: 20 }, 
                  visible: { opacity: 1, y: 0 } }}>
      {card}
    </motion.div>
  ))}
</motion.div>
```

### Pattern 3: Image + Text
```javascript
const text = useScrollAnimation({ type: 'slideUp', delay: 0 });
const image = useScrollAnimation({ type: 'slideRight', delay: 0.2 });

<motion.p ref={text.ref} {...text}>{text}</motion.p>
<motion.img ref={image.ref} {...image} />
```

---

## ✅ Checklist

- [ ] Import `motion` and `useScrollAnimation`
- [ ] Create animation hook with desired type
- [ ] Wrap element with `motion.div` (or appropriate tag)
- [ ] Attach `ref`, `initial`, `animate`, `variants`, `transition`
- [ ] Test on mobile (375px, 768px, 1024px)
- [ ] Verify animations don't cause layout shift
- [ ] Check performance (60 FPS target)

---

## 🚀 Performance Tips

1. **Use `once: true`** - Prevents re-animation on scroll
2. **Limit stagger items** - Max 6-8 items per stagger group
3. **Keep durations short** - 0.5-0.8s is optimal
4. **Test on mobile** - Performance varies by device
5. **Monitor FPS** - Use Chrome DevTools Performance tab

---

## 🔗 Components Using Animations

- ✅ `About.jsx` - Title, content, image
- ✅ `ImpactStats.jsx` - Title, stat cards
- ✅ `Pillars.jsx` - Title, pillar cards
- ✅ `Projects.jsx` - Title, project cards

---

## 📚 Resources

- **Framer Motion Docs:** https://www.framer.com/motion/
- **useInView Hook:** https://www.framer.com/motion/use-in-view/
- **Animation Variants:** https://www.framer.com/motion/animation/

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Animation not triggering | Check viewport threshold, verify ref attachment |
| Too fast/slow | Adjust `duration` and `delay` values |
| Layout shift | Ensure elements have defined dimensions |
| Performance issues | Reduce stagger items, simplify animations |
| Mobile lag | Test on actual device, reduce animation complexity |

---

## 💡 Pro Tips

1. **Stagger delay = 0.1s** is the sweet spot for most animations
2. **Use `slideUp` for headings** - Most natural feel
3. **Use `slideRight` for images** - Complements text animations
4. **Test with DevTools throttling** - Simulate slower devices
5. **Keep animations under 1 second** - Faster feels more responsive
