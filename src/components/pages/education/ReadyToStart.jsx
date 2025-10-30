import React from 'react';
import { ChevronRight } from 'lucide-react';

const ReadyToStart = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Container */}
        <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your future with accessible STEM education. Join us today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services/education/enroll"
              className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Enroll Now
              <ChevronRight size={18} />
            </a>
            
            <a
              href="/partner"
              className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
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

export default ReadyToStart;
