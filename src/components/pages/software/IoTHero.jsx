import React from 'react';
import Breadcrumb from '../../Breadcrumb';

const IoTHero = () => {
  const breadcrumbItems = [
    { label: 'Services', link: '/services/software' },
    { label: 'Software', link: '/services/software' },
    { label: 'Projects', link: '/projects' },
    { label: 'IoT & Data Platforms' }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={breadcrumbItems} homePath="/services/software" />

        {/* Title and Description */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Connecting Devices. Powering Decisions.
          </h1>
          
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            Build scalable IoT dashboards and data platforms that turn sensor data into actionable insights.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            Explore a Demo
          </button>
          <button className="border-2 border-gray-300 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 font-medium rounded-lg transition-all duration-200">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default IoTHero;
