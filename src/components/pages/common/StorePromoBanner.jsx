import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const StorePromoBanner = ({ headline, bodyText, ctaText }) => {
  const storeUrl = 'https://store.eraaxis.com';

  return (
    <section className="py-6 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div 
          className="bg-white border border-gray-200 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 sm:p-6 md:p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 md:gap-8">
            
            {/* Left Content */}
            <div className="flex-1 w-full">
              {/* Icon and Headline */}
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-[#39366F]" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#39366F] leading-tight">
                  {headline}
                </h3>
              </div>

              {/* Body Text */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed ml-8 sm:ml-10">
                {bodyText}
              </p>
            </div>

            {/* Right CTA Button */}
            <div className="flex-shrink-0 w-full md:w-auto mt-4 sm:mt-6 md:mt-0">
              <a
                href={storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full md:w-auto bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-sm sm:text-base md:text-base"
              >
                {ctaText}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorePromoBanner;
