import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Consult',
    description: 'Share your needs. We listen, assess, and advise.',
    color: '#39366F'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team creates blueprints tailored to your specs.',
    color: '#5B9BD5'
  },
  {
    number: '03',
    title: 'Build',
    description: 'Fabricate using e-waste, local materials, and precision tools.',
    color: '#39366F'
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Test, refine, and hand over ready-to-use solutions.',
    color: '#5B9BD5'
  }
];

const HowItWorks = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="mb-6"
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            How It Works
          </h2>
        </motion.div>

        {/* Steps Roadmap */}
        <motion.div 
          className="relative"
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
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#39366F] via-[#5B9BD5] to-[#39366F] mx-20" style={{ zIndex: 0 }}></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => {
              return (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle with connecting line */}
                  <div className="relative mb-4">
                    {/* Connecting Line for Mobile/Tablet - Vertical */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})` }}></div>
                    )}
                    
                    {/* Circle Container */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg relative border-2"
                      style={{ 
                        backgroundColor: (index === 1 || index === 3) ? 'white' : step.color,
                        borderColor: step.color,
                        zIndex: 10 
                      }}
                    >
                      <span 
                        className="font-bold text-lg"
                        style={{ 
                          color: (index === 1 || index === 3) ? step.color : 'white' 
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
