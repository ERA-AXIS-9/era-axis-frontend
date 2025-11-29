import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  return (
    <motion.section 
      className="py-12 sm:py-16 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300"
          whileHover={{ shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          
          {/* Content - Vertical Layout */}
          <motion.div 
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            
            {/* Heading */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                When you donate to ERA AXIS, you create innovators, solutions, and a healthier planet.
              </h2>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <a 
                href="/donate"
                className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                Donate Now
                <ChevronRight size={18} />
              </a>
              <a 
                href="/donate/ewaste"
                className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-8 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                Give E-Waste
                <ChevronRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FinalCTA;
