import React from 'react';
import { Factory, ChevronRight, Shield, Award, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const ManufacturingHero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="max-w-none px-0">
        {/* Full-bleed hero container */}
        <div className="relative overflow-hidden">
          <img 
            src="/images/Manufacturing/manufacturing1.png" 
            alt="ERA AXIS Manufacturing Workshop" 
            className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a3a]/60 via-[#39366F]/45 to-[#5B9BD5]/25"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative px-6 md:px-10 lg:px-14 py-12 md:py-16 lg:py-20 min-h-[400px] md:min-h-[480px] lg:min-h-[560px] flex items-center">
            
            {/* Left Content */}
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                From Building to Maintaining
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our manufacturing unit transforms e-waste into sustainable solutions for companies, households, and communities across Africa.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <a 
                  href="#core-services"
                  className="group bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center gap-3 transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Explore Our Services
                  <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
                
                <a 
                  href="/contact"
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center gap-3 transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Get a Quote
                  <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#39366F]/10 via-[#5B9BD5]/5 to-[#39366F]/10 border-t border-b border-[#39366F]/20">
          <div className="px-6 md:px-10 lg:px-14 py-12 md:py-16">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#39366F] mb-2">What Matters.</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#5B9BD5] to-[#39366F] mx-auto"></div>
            </div>
            
            {/* Three Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Safety */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-[#39366F]/20 to-[#5B9BD5]/20 rounded-2xl">
                    <Shield size={40} className="text-[#39366F]" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#39366F] mb-2">Safety</h3>
                <p className="text-gray-700 leading-relaxed">Protecting people with rigorous standards and responsible practices in every process.</p>
              </div>
              
              {/* Quality */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-[#39366F]/20 to-[#5B9BD5]/20 rounded-2xl">
                    <Award size={40} className="text-[#39366F]" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#39366F] mb-2">Quality</h3>
                <p className="text-gray-700 leading-relaxed">Delivering reliable outcomes through excellence and attention to detail in manufacturing.</p>
              </div>
              
              {/* Sustainability */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-[#39366F]/20 to-[#5B9BD5]/20 rounded-2xl">
                    <Leaf size={40} className="text-[#39366F]" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#39366F] mb-2">Sustainability</h3>
                <p className="text-gray-700 leading-relaxed">Advancing circular manufacturing to create positive environmental and social impact.</p>
              </div>
            </div>
            
            {/* Bottom tagline */}
            <div className="text-center mt-12 pt-8 border-t border-[#39366F]/20">
              <p className="text-lg sm:text-xl text-[#39366F] font-semibold">We design, build, and maintain with care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingHero;
