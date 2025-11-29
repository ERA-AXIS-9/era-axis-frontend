import React from 'react';
import { ChevronRight } from 'lucide-react';

const ReadyToBegin = () => {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Container - White Card */}
        <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#39366F]/20 overflow-hidden">
          {/* Gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left Side - Text Content */}
            <div className="text-left flex-1">
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                Ready to Begin?
              </h2>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-gray-600">
                Join thousands of learners transforming their futures through accessible STEM education.
              </p>
            </div>

            {/* Right Side - CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="#program-options"
                className="bg-[#39366F] hover:bg-[#2a2850] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Enroll in a Program
              </a>
              
              <a
                href="/partner"
                className="border-2 border-gray-300 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] hover:bg-gray-50 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-sm inline-flex items-center justify-center gap-2 whitespace-nowrap"
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

export default ReadyToBegin;
