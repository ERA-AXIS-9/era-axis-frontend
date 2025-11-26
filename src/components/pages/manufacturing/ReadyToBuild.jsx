import React from 'react';
import { ChevronRight } from 'lucide-react';

const ReadyToBuild = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#39366F] to-[#2a2850]">
      
        {/* CTA Container - Full Width */}
        <div className="w-full py-8 text-center">
          
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build With Us?
          </h2>

          {/* Subtext */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto px-4">
            Let's turn your ideas into reality. Get in touch for a free consultation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="/contact"
              className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Request a Quote
              <ChevronRight size={18} />
            </a>
            
            <a
              href="/services/manufacturing/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              View Our Work
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
    </section>
  );
};

export default ReadyToBuild;
