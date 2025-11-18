import React from 'react';
import { Factory, ChevronRight } from 'lucide-react';

const ManufacturingHero = () => {
  return (
    <section className="relative isolate overflow-hidden py-8 sm:py-10 lg:py-12">
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
          <div className="relative px-6 md:px-10 lg:px-14 py-10 md:py-14">
            
            {/* Left Content */}
            <div className="max-w-3xl">
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                From Building to Maintaining
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Our manufacturing unit transforms e-waste into sustainable solutions for companies, households, and communities across Africa.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
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
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#39366F]/5 to-[#5B9BD5]/5">
          <div className="px-6 md:px-10 lg:px-14 py-4">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#39366F]">What Matters.</h2>
          </div>
        </div>
        <div className="px-6 md:px-10 lg:px-14 py-6">
          <p className="text-center text-[#39366F] text-lg sm:text-xl font-semibold">Safety. Quality. Sustainability.</p>
          <p className="mt-2 text-center text-gray-700 max-w-4xl mx-auto">We design, build, and maintain with care—protecting people, delivering reliable outcomes, and advancing circular manufacturing.</p>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingHero;
