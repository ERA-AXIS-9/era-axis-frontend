import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="group relative bg-white border border-gray-100 rounded-2xl p-10 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
          
          {/* Gradient background on hover */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
            style={{ background: 'linear-gradient(135deg, #39366F20, #39366F10)' }}
          ></div>

          {/* Content - Split Layout */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight">
                When you donate to ERA AXIS, you don't just give — you create innovators, solutions, and a healthier planet.
              </h2>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:flex-shrink-0">
              <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3 rounded-lg font-semibold text-base transition-colors duration-200">
                Donate Now
              </button>
              <button 
                onClick={() => window.open('/donate/ewaste', '_blank')}
                className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-8 py-3 rounded-lg font-semibold text-base transition-all duration-200"
              >
                Give E-Waste
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
