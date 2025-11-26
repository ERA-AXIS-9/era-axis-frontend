import React from 'react';
import { ChevronRight } from 'lucide-react';

const OpenLabsCTA = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Container */}
        <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Have an idea you want to turn into a working prototype?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Innovation starts here. Contact us today.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Get in Touch
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenLabsCTA;
