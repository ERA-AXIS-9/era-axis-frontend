import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const OurDifference = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  const differences = [
    {
      title: "Inclusive STEM Education",
      description: "We provide accessible, high-quality STEM education that empowers learners from all backgrounds and communities."
    },
    {
      title: "Affordable via E-waste Transformation",
      description: "We reduce costs and environmental impact by transforming e-waste into educational resources and tools."
    },
    {
      title: "Service Aim for Real Impact",
      description: "Our programs are designed to create tangible, lasting change that addresses genuine community challenges."
    },
    {
      title: "Four Integrated Pillars",
      description: "Education, manufacturing, software development, and open labs work together as one comprehensive ecosystem."
    }
  ];

  return (
    <section id="difference" className="pt-4 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8"
        >
          Our Difference
        </motion.h2>
        
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
          {differences.map((item, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <h3 className="text-lg font-bold text-black group-hover:text-[#39366F] mb-3 transition-colors duration-300">{item.title}</h3>
              <p className="text-base text-gray-700 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurDifference;
