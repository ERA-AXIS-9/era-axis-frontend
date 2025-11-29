import React from 'react';
import { Monitor, Cpu, Code, Computer, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const Pillars = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
  
  const pillars = [
    {
      title: 'Education',
      description: 'Programs, certifications, and workshops for all ages.',
      icon: Monitor,
      color: '#39366F',
      link: '/education'
    },
    {
      title: 'Manufacturing',
      description: 'Circular and e-waste upcycling for social good.',
      icon: Cpu,
      color: '#5B9BD5',
      link: '/manufacturing'
    },
    {
      title: 'Software',
      description: 'Open-source tools that power local innovation.',
      icon: Code,
      color: '#2a2850',
      link: '/software'
    },
    {
      title: 'Open Labs',
      description: 'Community makerspaces and research hubs.',
      icon: Computer,
      color: '#4a8bc2',
      link: '/open-labs'
    }
  ];

  return (
    <section className="py-9 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight"
        >
          Our Pillars
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
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
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="group bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-gray-300 hover:from-gray-50 hover:to-gray-100"
              >
                {/* Icon */}
                <div className="mb-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      backgroundColor: `${pillar.color}10`,
                      border: `1px solid ${pillar.color}20`
                    }}
                  >
                    <IconComponent 
                      size={20} 
                      style={{ color: pillar.color }}
                    />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-black group-hover:text-gray-700 transition-colors duration-300 mb-2">{pillar.title}</h3>
                
                {/* Description */}
                <p className="text-gray-800 text-sm md:text-base font-medium leading-relaxed mb-4">
                  {pillar.description}
                </p>
                
                {/* Explore Button */}
                <a 
                  href={pillar.link}
                  className="group/btn inline-flex items-center gap-1 font-bold text-base transition-all duration-300 hover:gap-2 text-[#39366F] hover:text-[#2a2850]"
                >
                  Explore
                  <ChevronRight 
                    size={14} 
                    className="group-hover/btn:translate-x-0.5 transition-transform duration-300"
                  />
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Pillars;
