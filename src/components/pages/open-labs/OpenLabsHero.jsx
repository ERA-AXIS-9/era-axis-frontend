import React from 'react';
import { FlaskConical, ChevronRight } from 'lucide-react';

const OpenLabsHero = () => {
  return (
    <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Container with Border Radius */}
        <div className="p-4 sm:p-6 sm:bg-white sm:rounded-xl sm:border sm:border-gray-200 sm:shadow-sm md:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="max-w-xl">
                            
              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
                Shared Innovation 
                <br />
                <span className="text-[#39366F]">Spaces for All</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Community-driven R&D hubs where anyone can prototype, test, and build real solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="#facilities"
                  className="bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-base w-full sm:w-auto"
                >
                  Explore Labs
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="/services/open-labs/book-session"
                  className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-base w-full sm:w-auto"
                >
                  Book a Visit
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/workingspace.png" 
                  alt="Open Labs Innovation Space" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenLabsHero;
