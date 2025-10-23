import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonateHero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-12 sm:pt-16 pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          
          {/* Main Heading - Left Aligned */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            Your Gift Creates Innovators. Your E-Waste Heals the Planet.
          </h1>

          {/* Subtitle - Left Aligned */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl">
            Every contribution empowers learners and fuels sustainable innovation across Africa.
          </p>

          {/* CTA Buttons - Left Aligned */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button 
              onClick={() => navigate('/donate/ewaste')}
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-200 w-full sm:w-auto text-center"
            >
              Give E-Waste
            </button>
            
            <button 
              onClick={() => navigate('/donate/monthly-supporter')}
              className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-200 w-full sm:w-auto text-center"
            >
              Become a Monthly Supporter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateHero;
