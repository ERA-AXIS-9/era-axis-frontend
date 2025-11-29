import React from 'react';
import { ChevronRight } from 'lucide-react';

const ReadyToStart = () => {
  return (
    <section className="py-6 sm:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Container - Brand Color Card */}
        <div className="group relative bg-[#39366F] rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left Side - Text Content */}
            <div className="text-left flex-1">
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Ready to get started?
              </h2>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-white/90">
                Transform your future with accessible STEM education. Join us today.
              </p>
            </div>

            {/* Right Side - CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="/services/education/learning-mode?program=junior-stem"
                className="bg-white hover:bg-gray-100 text-[#39366F] px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Enroll Now
              </a>
              
              <a
                href="/partner"
                className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-sm inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
