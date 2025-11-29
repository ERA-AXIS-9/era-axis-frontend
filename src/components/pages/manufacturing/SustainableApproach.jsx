import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const features = [
  {
    title: 'Eco-Friendly Materials',
    description: 'We transform e-waste and recycled materials into innovative solutions, reducing environmental impact.',
    color: '#39366F'
  },
  {
    title: 'Circular Economy',
    description: 'Our manufacturing process follows circular economy principles, extending product lifecycles and minimizing waste.',
    color: '#5B9BD5'
  },
  {
    title: 'Cost Reduction',
    description: 'Sustainable production methods significantly reduce manufacturing costs while maintaining high quality standards.',
    color: '#2a2850'
  },
  {
    title: 'Environmental Impact',
    description: 'Every project we undertake contributes to a cleaner planet and more sustainable future for communities.',
    color: '#4a8bc2'
  }
];

const SustainableApproach = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="mb-12"
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Sustainable Production
          </h2>
        </motion.div>

        {/* Features Grid */}
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
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/30 group"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <div className="mt-12 text-left">
          <a
            href="/impact"
            className="inline-flex items-center gap-2 text-[#39366F] hover:text-[#2a2850] font-semibold transition-colors group"
          >
            Learn About Our Impact
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SustainableApproach;
