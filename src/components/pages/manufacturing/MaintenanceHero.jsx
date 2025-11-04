import React from 'react';
import { Settings, ChevronRight, Wrench } from 'lucide-react';

const MaintenanceHero = () => {
  return (
    <section className="relative pt-8 sm:pt-10 pb-8 sm:pb-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Keeping Innovation Running Smoothly
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl">
              Professional maintenance and repair services to keep your devices, systems, and equipment operating at peak performance.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="/services/manufacturing/book-technician"
                className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
              >
                Book a Service
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-[#39366F]/10 to-[#5B9BD5]/10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/Manufacturing/maintaince.png" 
                alt="Maintenance and Repair Services"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#39366F]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceHero;
