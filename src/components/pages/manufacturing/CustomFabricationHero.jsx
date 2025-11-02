import React from 'react';
import { Hammer, ChevronRight } from 'lucide-react';

const CustomFabricationHero = () => {
  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-[#39366F] to-[#2a2850]">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 lg:w-2/5 opacity-100">
        <img 
          src="/images/manufacturing.png" 
          alt="ERA AXIS Custom Fabrication Workshop"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for mobile visibility, gradient for desktop */}
        <div className="absolute inset-0 bg-black/50 sm:bg-gradient-to-l sm:from-transparent sm:via-white/10 sm:to-white/20"></div>
      </div>

      {/* Additional dark overlay on mobile for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 sm:bg-none"></div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Tailored Solutions for Schools, Companies & Communities
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed drop-shadow-md max-w-2xl">
            Build devices and equipment designed specifically for your needs using sustainable materials and innovative engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="/contact"
              className="bg-white hover:bg-gray-100 text-[#39366F] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              Request Custom Build
              <ChevronRight size={18} />
            </a>
            
            <a 
              href="#service-categories"
              className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              View Services
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomFabricationHero;
