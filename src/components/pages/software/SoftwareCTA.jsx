import React from 'react';
import { ChevronRight } from 'lucide-react';

const SoftwareCTA = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl p-8 sm:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to bring your idea to life?
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's build innovative solutions tailored to your needs.
          </p>
          
          <a
            href="/services/software/contact"
            className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
          >
            Request a Demo
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCTA;
