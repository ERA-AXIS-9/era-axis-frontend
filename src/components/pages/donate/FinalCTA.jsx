import React from 'react';
import { ChevronRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl p-8 sm:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
          
          {/* Content - Vertical Layout */}
          <div className="flex flex-col gap-8">
            
            {/* Heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                When you donate to ERA AXIS, you create innovators, solutions, and a healthier planet.
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
