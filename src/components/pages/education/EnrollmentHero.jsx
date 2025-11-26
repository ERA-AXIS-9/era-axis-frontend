import React from 'react';
import { ChevronRight } from 'lucide-react';

const EnrollmentHero = () => {
  return (
    <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            Choose Your Path. Enroll in STEM Programs.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
            Accessible, hands-on learning designed for every stage, every skill level.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="#program-options"
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              Explore Programs
              <ChevronRight size={18} />
            </a>
            
            <a 
              href="/partner"
              className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              Partner With Us
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentHero;
