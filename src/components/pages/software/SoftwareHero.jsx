import React from 'react';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '../../Breadcrumb';

const SoftwareHero = () => {
  const breadcrumbItems = [
    { label: 'Services', link: '/services/software' },
    { label: 'Software' }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-8 leading-tight">
              Digital Solutions for Work, Home, and Innovation.
            </h1>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 w-full sm:w-auto">
                Explore Our Software
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 font-medium rounded-lg transition-all duration-200 hover:shadow-md w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-72 md:h-80 order-1 lg:order-2">
            <img 
              src="/images/software.png"
              alt="Digital Solutions"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareHero;
