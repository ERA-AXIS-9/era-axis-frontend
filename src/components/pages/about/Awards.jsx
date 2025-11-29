import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const Awards = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
  
  const awards = [
    // {
    //   icon: Trophy,
    //   title: "Innovation Excellence Award",
    //   year: "2024",
    //   organization: "Ghana Tech Awards",
    //   description: "Recognized for outstanding contribution to technology innovation in West Africa."
    // },
    {
      icon: Award,
      title: "Sustainability Champion",
      year: "2024",
      organization: "African Development Bank",
      description: "Awarded for leadership in circular economy and sustainable manufacturing practices."
    },
    {
      icon: Star,
      title: "Community Impact Recognition",
      year: "2023",
      organization: "UN Sustainable Development Goals",
      description: "Acknowledged for significant contribution to SDG 4 (Quality Education) and SDG 9 (Innovation)."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
          className="text-3xl font-bold text-black mb-12 text-center"
        >
          Awards & Recognition
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#39366F] to-[#5B9BD5] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{award.title}</h3>
                <p className="text-[#39366F] font-medium mb-1">{award.organization}</p>
                <p className="text-gray-500 text-sm mb-3">{award.year}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{award.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
