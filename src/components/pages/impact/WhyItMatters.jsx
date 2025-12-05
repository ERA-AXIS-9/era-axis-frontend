import React from 'react';
import { useNavigate } from 'react-router-dom';

const WhyItMatters = () => {
  const navigate = useNavigate();
  
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
              <button onClick={() => navigate('/donate')} className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md">
                Support Our Mission
              </button>
              
              <button onClick={() => navigate('/partner')} className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white">
                Partner With Us
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-2xl w-full h-96 sm:h-[450px] lg:h-[500px] overflow-hidden shadow-2xl group">
              <img 
                src="/images/gallery/p19.jpeg"
                alt="Learners working on hands-on projects in ERA AXIS workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
              
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyItMatters;
