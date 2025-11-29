import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Recycle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const WaysToSupport = () => {
  const navigate = useNavigate();
  
  const supportOptions = [
    {
      icon: DollarSign,
      title: 'Donate Funds',
      description: 'Fuel programs, scholarships, and rapid prototyping kits.',
      buttonText: 'Continue',
      secondButton: 'Learn More',
      color: '#39366F'
    },
    {
      icon: Recycle,
      title: 'Donate E-Waste',
      description: 'Give laptops, boards, and components a second life in labs.',
      buttonText: 'Continue',
      secondButton: 'What We Accept',
      color: '#5B9BD5'
    },
    {
      icon: Heart,
      title: 'Monthly Supporter',
      description: 'Join a circle of recurring givers powering long-term impact.',
      buttonText: 'Continue',
      secondButton: 'Benefits',
      color: '#2a2850'
    }
  ];

  return (
    <section className="py-12 bg-white">
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
            Ways to Support
          </h2>
        </motion.div>

        {/* Support Option Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
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
          {supportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }} 
                className="group relative bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${option.color}20, ${option.color}10)` }}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                    {option.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 leading-snug">
                    {option.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a 
                      href={
                        option.title === 'Donate Funds' ? '/donate/payment' :
                        option.title === 'Donate E-Waste' ? '/donate/ewaste' :
                        option.title === 'Monthly Supporter' ? '/donate/monthly-supporter' :
                        '#'
                      }
                      className="flex-1 bg-[#39366F] hover:bg-[#2a2850] text-white px-3 py-2 rounded-lg font-semibold text-sm transition-colors duration-200 text-center"
                    >
                      {option.buttonText}
                    </a>
                    
                    <a 
                      href={
                        option.title === 'Donate Funds' ? '/donate' :
                        option.title === 'Donate E-Waste' ? '/donate/ewaste' :
                        option.title === 'Monthly Supporter' ? '/donate/monthly-supporter' :
                        '#'
                      }
                      className="flex-1 border border-gray-300 hover:border-[#39366F] text-gray-700 hover:text-[#39366F] px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200 text-center"
                    >
                      {option.secondButton}
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WaysToSupport;
