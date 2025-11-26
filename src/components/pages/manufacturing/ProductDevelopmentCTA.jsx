import React from 'react';
import { ChevronRight } from 'lucide-react';

const ProductDevelopmentCTA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#39366F] to-[#2a2850]">
      
        {/* CTA Container - Full Width */}
        <div className="w-full py-12 sm:py-16 lg:py-20 text-center">
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Prototype?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto px-4">
            Let's turn your innovative idea into a durable, market-ready product using sustainable materials and expert engineering.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="/services/manufacturing/projects?category=Product Development"
              className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              View Product Projects
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
    </section>
  );
};

export default ProductDevelopmentCTA;
