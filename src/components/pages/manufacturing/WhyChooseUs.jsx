import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const benefits = [
  {
    title: 'E-Waste Innovation',
    description: 'Transform electronic waste into affordable, high-quality products.',
    color: '#39366F'
  },
  {
    title: 'Cost Effective',
    description: 'Sustainable materials save up to 60% compared to new equipment.',
    color: '#5B9BD5'
  },
  {
    title: 'Expert Team',
    description: 'Skilled technicians trained in circular manufacturing methods.',
    color: '#2a2850'
  },
  {
    title: 'Quick Delivery',
    description: 'Rapid turnaround using local materials and optimized processes.',
    color: '#4a8bc2'
  }
];

const WhyChooseUs = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="mb-8"
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Why Choose ERA AXIS
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/30 group h-full"
            >
              {/* Title with left accent border */}
              <div className="border-l-4 pl-4 mb-4" style={{ borderColor: benefit.color }}>
                <h3 className="text-lg font-bold text-black group-hover:text-[#39366F] transition-colors">
                  {benefit.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
