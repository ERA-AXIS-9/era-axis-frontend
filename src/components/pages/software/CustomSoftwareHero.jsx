import React from 'react';
import Breadcrumb from '../../Breadcrumb';

const CustomSoftwareHero = () => {
  const breadcrumbItems = [
    { label: 'Services', link: '/services/software' },
    { label: 'Software', link: '/services/software' },
    { label: 'Projects', link: '/projects' },
    { label: 'Custom Development' }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={breadcrumbItems} homePath="/services/software" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
              Custom Software That Fits Your Needs
            </h1>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                Start Your Project
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 font-medium rounded-lg transition-all duration-200">
                See Our Portfolio
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <img 
              src="/images/Homepage/WhatsApp Image 2025-07-09 at 11.50.38 AM.jpeg"
              alt="Custom software development workspace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSoftwareHero;
