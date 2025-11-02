import React from 'react';
import { ChevronRight } from 'lucide-react';

const ReadyToStart = () => {
  return (
    <section className="py-6 sm:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Container - White Card */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left Side - Text Content */}
            <div className="text-left flex-1">
              {/* Heading */}
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                Ready to get started?
              </h2>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-gray-600">
                Transform your future with accessible STEM education. Join us today.
              </p>
            </div>

            {/* Right Side - CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="/services/education/learning-mode?program=junior-stem"
                className="bg-[#39366F] hover:bg-[#2a2850] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Enroll Now
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

export default ReadyToStart;
