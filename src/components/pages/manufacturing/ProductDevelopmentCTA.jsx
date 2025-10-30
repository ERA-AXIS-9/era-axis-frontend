import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductDevelopmentCTA = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Container */}
        <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl p-8 sm:p-12 shadow-xl">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                50+ solutions delivered using sustainable methods.
              </h2>
            </div>

            {/* Right CTA */}
            <div className="flex-shrink-0">
              <a
                href="/impact"
                className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Explore & Sustainability
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentCTA;
