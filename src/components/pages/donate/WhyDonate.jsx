import React from 'react';
import { motion } from 'framer-motion';

const WhyDonate = () => {
  const reasons = [
    {
      title: 'Empower Learners',
      description: 'STEM access for youth and learners',
      color: '#39366F'
    },
    {
      title: 'Support Sustainability',
      description: 'E-waste into training tools',
      color: '#5B9BD5'
    },
    {
      title: 'Protect the Planet',
      description: 'Reducing toxic waste dumps',
      color: '#2a2850'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Why Donate?
          </h2>
        </motion.div>

        {/* Reason Cards - Impact Stats Style */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }} 
              className="group relative bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[120px] flex items-center"
            >
              {/* Gradient background on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${reason.color}20, ${reason.color}10)` }}
              ></div>

              {/* Content - Centered Layout */}
              <div className="text-center relative z-10 w-full">
                <h3 className="text-base font-bold text-black mb-1 leading-tight">
                  {reason.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-snug">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDonate;
