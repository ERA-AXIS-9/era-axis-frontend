import React from 'react';
import { GraduationCap, ChevronRight } from 'lucide-react';

const EducationHero = () => {
  return (
    <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          
          {/* Badge */}
          <div className="flex items-center mb-4">
            <span className="inline-flex items-center px-4 py-2 text-sm bg-[#39366F]/10 text-[#39366F] rounded-full font-semibold shadow-sm">
              <GraduationCap size={18} className="mr-2" /> Education
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight">
            STEM for All. Innovation Without Barriers.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl">
            We believe every person—in school, out of school, literate or illiterate—has the right to become an innovator.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="/services/education/enroll"
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              Enroll Now
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

export default EducationHero;
