import React from 'react';
import { ChevronRight, BookOpen, Users, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const learningApproaches = [
  {
    title: 'Project-Based Learning',
    details: ['Each module ends with a working prototype', 'Real solutions to real problems', 'Hands-on experience']
  },
  {
    title: 'Learning by Doing',
    details: ['No expensive STEM kits', 'Recycled and low-cost materials', 'Practical skills development']
  },
  {
    title: 'Innovation in Local Languages',
    details: ['Breaking literacy barriers', 'Accessible to all learners', 'Community-focused approach']
  }
];

const ProgramsEnrollment = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.h2 
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          How We Teach
        </motion.h2>

        {/* Learning Approaches Grid */}
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
          {learningApproaches.map((approach, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="group relative bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#39366F] hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#39366F] transition-colors duration-300">
                  {approach.title}
                </h3>

                {/* Details List */}
                <ul className="space-y-2.5">
                  {approach.details.map((detail, idx) => (
                    <li key={idx} className="text-base text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsEnrollment;
