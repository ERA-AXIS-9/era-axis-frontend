import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DonateHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-[#39366F] to-[#2a2850]">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-3/5 lg:w-1/2 opacity-100">
        <img 
          src="/images/Donation/donation.png" 
          alt="ERA AXIS Donation Programs"
          className="w-full h-full object-cover"
        />
        {/* Very light overlay for mobile visibility, minimal gradient for desktop */}
        <div className="absolute inset-0 bg-black/20 sm:bg-gradient-to-l sm:from-transparent sm:via-white/5 sm:to-white/15"></div>
      </div>

      {/* Very minimal dark overlay on mobile for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/10 to-black/15 sm:bg-none"></div>

      {/* Content - Left Aligned */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="max-w-lg sm:max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          
          {/* Main Heading - Left Aligned */}
          <motion.h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            Your Gift Creates Innovators. Your E-Waste Heals the Planet.
          </motion.h1>

          {/* Subtitle - Left Aligned */}
          <motion.p 
            className="text-xs sm:text-sm lg:text-base text-white mb-6 sm:mb-8 leading-relaxed drop-shadow-md max-w-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            Every contribution empowers learners and fuels sustainable innovation across Africa.
          </motion.p>

          {/* CTA Buttons - Left Aligned */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <button 
              onClick={() => navigate('/donate/ewaste')}
              className="bg-white hover:bg-gray-100 text-[#39366F] px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-200 w-full sm:w-auto text-center"
            >
              Give E-Waste
            </button>
            
            <button 
              onClick={() => navigate('/donate/monthly-supporter')}
              className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-200 w-full sm:w-auto text-center"
            >
              Become a Monthly Supporter
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DonateHero;
