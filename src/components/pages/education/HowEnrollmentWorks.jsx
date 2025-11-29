import React from 'react';
import { ClipboardList, CreditCard, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Choose your program',
    description: 'Pick the learning path that fits your goals and schedule.',
    color: '#39366F'
  },
  {
    icon: CreditCard,
    number: '02',
    title: 'Secure your enrollment',
    description: 'Complete payment and confirm your spot in the cohort.',
    color: '#5B9BD5'
  },
  {
    icon: GraduationCap,
    number: '03',
    title: 'Start learning with mentors & kits',
    description: 'Get your materials, meet your mentors, and begin building.',
    color: '#2a2850'
  }
];

const HowEnrollmentWorks = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.h2 
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          How Enrollment Works
        </motion.h2>

        {/* Steps Grid */}
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
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#39366F] hover:shadow-lg transition-all duration-300"
            >
              {/* Step Number */}
              <div className="w-14 h-14 rounded-full bg-[#39366F] flex items-center justify-center font-bold text-white text-xl mb-4">
                {step.number}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowEnrollmentWorks;
