import React from 'react';
import { ChevronRight } from 'lucide-react';

const EducationHero = () => {
  return (
    <section className="pt-8 pb-6 sm:pt-12 sm:pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div>
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-gray-900">STEM for </span>
              <span className="text-[#39366F]">All</span>
              <span className="text-gray-900">.</span>
              <br />
              <span className="text-gray-900">Innovation </span>
              <span className="text-[#39366F]">Without Barriers</span>
              <span className="text-gray-900">.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              We believe every person—in school, out of school, literate or illiterate—has the right to become an innovator.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/services/education/enroll"
                className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Enroll Now
                <ChevronRight size={20} />
              </a>
              
              <a 
                href="/partner"
                className="border-2 border-gray-300 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Partner With Us
                <ChevronRight size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/workingspace.png" 
                alt="ERA AXIS learners in action"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Optional: Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#39366F]/5 rounded-2xl -z-10 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;
