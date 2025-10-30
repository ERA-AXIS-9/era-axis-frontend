import React from 'react';
import { Factory, ChevronRight } from 'lucide-react';

const ManufacturingHero = () => {
  return (
    <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          
          {/* Badge */}
          <div className="flex items-center mb-4">
            <span className="inline-flex items-center px-4 py-2 text-sm bg-[#5B9BD5]/10 text-[#5B9BD5] rounded-full font-semibold shadow-sm">
              <Factory size={18} className="mr-2" /> Manufacturing
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            Engineering Innovation. Powering Communities.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl">
            From building to maintaining what matters. Full-service hardware solutions for companies, households, and communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="#core-services"
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              Explore Services
              <ChevronRight size={18} />
            </a>
            
            <a 
              href="/contact"
              className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              Get a Quote
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingHero;
