import React from 'react';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '../../Breadcrumb';

const SoftwareHero = () => {
  const breadcrumbItems = [
    { label: 'Services', link: '/services/software' },
    { label: 'Software' }
  ];

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
                Digital Solutions for 
                <br />
                <span className="text-[#39366F]">Work, Home, and Innovation.</span>
              </h1>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-base w-full sm:w-auto">
                  Explore Our Software
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/software.png" 
                  alt="Digital Solutions" 
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

export default SoftwareHero;
