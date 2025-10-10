import React from 'react';

const WhyItMatters = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
              Why It Matters
            </h2>
            
            <h3 className="text-xl font-bold text-black mb-4">
              Hands-on, purpose-driven innovation.
            </h3>
            
            <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
              We combine engineering education with real community needs. Learners prototype 
              what help solve materials, and measure solutions that improve livelihoods.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md">
                Support Our Mission
              </button>
              
              <button className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white">
                Partner With Us
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div>
            <div className="relative rounded-2xl h-80 overflow-hidden shadow-lg">
              <img 
                src="/images/workingspace.png"
                alt="Learners working on hands-on projects in ERA AXIS workspace"
                className="w-full h-full object-cover"
              />
              {/* Optional overlay for text readability */}
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyItMatters;
