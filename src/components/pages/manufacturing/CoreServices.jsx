import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const services = [
  {
    title: 'Product Development',
    description: 'Turn prototypes into real, durable products using sustainable materials.',
    link: '/services/manufacturing/projects',
    color: '#39366F'
  },
  {
    title: 'Maintenance & Repairs',
    description: 'Keep existing systems running efficiently with expert troubleshooting.',
    link: '/services/manufacturing/maintenance',
    color: '#5B9BD5'
  },
  {
    title: 'Custom Fabrication',
    description: 'Build specialized devices and equipment from e-waste and recycled materials.',
    link: '/services/manufacturing/custom-fabrication',
    color: '#2a2850'
  }
];

const CoreServices = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section id="core-services" className="py-8 bg-white">
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
            Core Services
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.link}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/30 group block h-full"
            >
              {/* Title with left accent border */}
              <div className="border-l-4 pl-4 mb-4" style={{ borderColor: service.color }}>
                <h3 className="text-lg font-bold text-black group-hover:text-[#39366F] transition-colors">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center gap-1 text-sm font-semibold text-[#39366F] group-hover:gap-2 transition-all">
                Learn More
                <ChevronRight size={16} />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
