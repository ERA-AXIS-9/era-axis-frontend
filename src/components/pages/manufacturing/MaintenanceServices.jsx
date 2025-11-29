import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const services = [
  {
    title: 'General & Repair Services',
    description: 'Fix broken devices, replace parts, restore functionality.',
    color: '#39366F'
  },
  {
    title: 'IT Support/Upkeep',
    description: 'Software updates, network troubleshooting, system optimization.',
    color: '#5B9BD5'
  },
  {
    title: 'Preventive Maintenance',
    description: 'Regular check-ups to avoid breakdowns and extend lifespan.',
    color: '#2a2850'
  },
  {
    title: 'Emergency Fixes',
    description: 'Rapid response for urgent repairs and critical failures.',
    color: '#4a8bc2'
  }
];

const MaintenanceServices = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section className="py-8 sm:py-10 bg-white">
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
            Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group"
            >
              {/* Title */}
              <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MaintenanceServices;
