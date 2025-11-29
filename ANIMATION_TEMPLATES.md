# 🎬 Animation Templates - Copy & Paste Ready

Use these templates to quickly add animations to new components. Just copy, paste, and customize!

---

## Template 1: Simple Title Animation

**Use for:** Section headings, page titles

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
        className="text-3xl font-bold"
      >
        Your Title Here
      </motion.h2>
    </section>
  );
};

export default MyComponent;
```

---

## Template 2: Title + Content

**Use for:** Sections with title and description

```javascript
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const MyComponent = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
  const contentAnimation = useScrollAnimation({ type: 'slideUp', delay: 0.1 });

  return (
    <section>
      <motion.h2 
        ref={titleAnimation.ref}
        initial={titleAnimation.initial}
        animate={titleAnimation.animate}
        variants={titleAnimation.variants}
        transition={titleAnimation.transition}
        className="text-3xl font-bold mb-4"
      >
        Your Title
      </motion.h2>

      <motion.p 
        ref={contentAnimation.ref}
        initial={contentAnimation.initial}
        animate={contentAnimation.animate}
        variants={contentAnimation.variants}
        transition={contentAnimation.transition}
        className="text-lg text-gray-600"
      >
        Your content here
      </motion.p>
    </section>
  );
};

export default MyComponent;
```

---

## Template 3: Title + Image

**Use for:** Sections with text and image side-by-side

```javascript
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const MyComponent = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
  const contentAnimation = useScrollAnimation({ type: 'slideUp', delay: 0.1 });
  const imageAnimation = useScrollAnimation({ type: 'slideRight', delay: 0.2 });

  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <motion.h2 
            ref={titleAnimation.ref}
            initial={titleAnimation.initial}
            animate={titleAnimation.animate}
            variants={titleAnimation.variants}
            transition={titleAnimation.transition}
            className="text-3xl font-bold mb-4"
          >
            Your Title
          </motion.h2>

          <motion.p 
            ref={contentAnimation.ref}
            initial={contentAnimation.initial}
            animate={contentAnimation.animate}
            variants={contentAnimation.variants}
            transition={contentAnimation.transition}
            className="text-lg text-gray-600"
          >
            Your content here
          </motion.p>
        </div>

        {/* Image */}
        <motion.div 
          ref={imageAnimation.ref}
          initial={imageAnimation.initial}
          animate={imageAnimation.animate}
          variants={imageAnimation.variants}
          transition={imageAnimation.transition}
        >
          <img src="/path/to/image.jpg" alt="Description" className="w-full rounded-lg" />
        </motion.div>
      </div>
    </section>
  );
};

export default MyComponent;
```

---

## Template 4: Staggered Card Grid

**Use for:** Multiple cards, items, or list elements

```javascript
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const MyComponent = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  const items = [
    { id: 1, title: 'Item 1', description: 'Description 1' },
    { id: 2, title: 'Item 2', description: 'Description 2' },
    { id: 3, title: 'Item 3', description: 'Description 3' },
  ];

  return (
    <section>
      <motion.h2 
        ref={titleAnimation.ref}
        initial={titleAnimation.initial}
        animate={titleAnimation.animate}
        variants={titleAnimation.variants}
        transition={titleAnimation.transition}
        className="text-3xl font-bold mb-8"
      >
        Your Title
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
        {items.map((item) => (
          <motion.div 
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MyComponent;
```

---

## Template 5: Form with Field Animations

**Use for:** Contact forms, enrollment forms, etc.

```javascript
import { motion } from 'framer-motion';

const MyForm = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.form 
      className="space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input 
          type="text" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your name"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input 
          type="email" 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="your@email.com"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea 
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          placeholder="Your message"
        ></textarea>
      </motion.div>

      <motion.button 
        variants={itemVariants}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Submit
      </motion.button>
    </motion.form>
  );
};

export default MyForm;
```

---

## Template 6: Hero Section

**Use for:** Large hero/banner sections

```javascript
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-blue-600 to-purple-600 flex items-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1 
          className="text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Our Site
        </motion.h1>

        <motion.p 
          className="text-xl text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Discover amazing things
        </motion.p>

        <motion.button 
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
```

---

## Template 7: Image Gallery Grid

**Use for:** Photo galleries, portfolio grids

```javascript
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const ImageGallery = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  const images = [
    { id: 1, src: '/image1.jpg', alt: 'Image 1' },
    { id: 2, src: '/image2.jpg', alt: 'Image 2' },
    { id: 3, src: '/image3.jpg', alt: 'Image 3' },
    { id: 4, src: '/image4.jpg', alt: 'Image 4' },
    { id: 5, src: '/image5.jpg', alt: 'Image 5' },
    { id: 6, src: '/image6.jpg', alt: 'Image 6' },
  ];

  return (
    <section>
      <motion.h2 
        ref={titleAnimation.ref}
        initial={titleAnimation.initial}
        animate={titleAnimation.animate}
        variants={titleAnimation.variants}
        transition={titleAnimation.transition}
        className="text-3xl font-bold mb-8"
      >
        Gallery
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
      >
        {images.map((image) => (
          <motion.div 
            key={image.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ImageGallery;
```

---

## Template 8: Testimonials/Reviews

**Use for:** Customer testimonials, reviews, quotes

```javascript
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const Testimonials = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  const testimonials = [
    { id: 1, name: 'John Doe', role: 'CEO', quote: 'Amazing service!' },
    { id: 2, name: 'Jane Smith', role: 'Designer', quote: 'Highly recommended!' },
    { id: 3, name: 'Bob Johnson', role: 'Developer', quote: 'Best experience ever!' },
  ];

  return (
    <section>
      <motion.h2 
        ref={titleAnimation.ref}
        initial={titleAnimation.initial}
        animate={titleAnimation.animate}
        variants={titleAnimation.variants}
        transition={titleAnimation.transition}
        className="text-3xl font-bold mb-8 text-center"
      >
        What People Say
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.12
            }
          }
        }}
      >
        {testimonials.map((testimonial) => (
          <motion.div 
            key={testimonial.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
            <div className="border-t pt-4">
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
```

---

## Template 9: Feature List

**Use for:** Feature lists, benefits, advantages

```javascript
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Check } from 'lucide-react';

const FeatureList = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  const features = [
    'Fast and reliable',
    'Easy to use',
    'Great support',
    'Affordable pricing',
    'Secure and safe',
    'Always updated',
  ];

  return (
    <section>
      <motion.h2 
        ref={titleAnimation.ref}
        initial={titleAnimation.initial}
        animate={titleAnimation.animate}
        variants={titleAnimation.variants}
        transition={titleAnimation.transition}
        className="text-3xl font-bold mb-8"
      >
        Our Features
      </motion.h2>

      <motion.ul 
        className="space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08
            }
          }
        }}
      >
        {features.map((feature, index) => (
          <motion.li 
            key={index}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-lg"
          >
            <Check className="text-green-500 flex-shrink-0" size={24} />
            <span>{feature}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default FeatureList;
```

---

## Template 10: CTA Section

**Use for:** Call-to-action sections

```javascript
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <motion.section 
      className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 rounded-lg text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Ready to Get Started?
      </motion.h2>

      <motion.p 
        className="text-white mb-8 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Join thousands of satisfied customers
      </motion.p>

      <motion.button 
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Start Free Trial
      </motion.button>
    </motion.section>
  );
};

export default CTASection;
```

---

## Quick Customization Guide

### Change Animation Type
Replace `type: 'slideUp'` with:
- `type: 'fadeIn'` - Fade only
- `type: 'slideLeft'` - Slide from left
- `type: 'slideRight'` - Slide from right
- `type: 'scaleIn'` - Scale up

### Change Timing
```javascript
useScrollAnimation({ 
  type: 'slideUp',
  delay: 0,        // Change this (0-1 seconds)
  duration: 0.6,   // Change this (0.3-1 seconds)
  threshold: 0.2   // Change this (0-1)
})
```

### Change Stagger Delay
```javascript
staggerChildren: 0.1  // Change this (0.05-0.2 seconds)
```

### Change Animation Duration
```javascript
transition={{ duration: 0.5 }}  // Change this (0.3-1 seconds)
```

---

## Tips for Best Results

1. **Use consistent delays** - Keep delays between 0.1-0.15s
2. **Keep durations short** - 0.5-0.6s is optimal
3. **Test on mobile** - Animations should be smooth on all devices
4. **Use `once: true`** - Prevents re-animation on scroll
5. **Stagger cards** - Use 0.1s between cards for natural feel
6. **Don't overuse** - Apply animations to key sections only

---

**Happy animating! 🎬**
