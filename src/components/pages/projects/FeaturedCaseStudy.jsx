import React from 'react';

const FeaturedCaseStudy = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Featured Case Study
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
          
          {/* Left - Image */}
          <div className="h-80 bg-gray-100">
            <img 
              src="/images/workingspace.png"
              alt="Case Study"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Right - Content */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              Citywide Energy Insights
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-sm font-semibold text-gray-700 min-w-[80px]">Challenge:</span>
                <span className="text-sm text-gray-600">Tracking energy consumption across multiple buildings.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sm font-semibold text-gray-700 min-w-[80px]">Solution:</span>
                <span className="text-sm text-gray-600">IoT dashboard with real-time monitoring and analytics.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sm font-semibold text-gray-700 min-w-[80px]">Impact:</span>
                <span className="text-sm text-gray-600">30% reduction in energy waste within 6 months.</span>
              </div>
            </div>
            
            <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              Read Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
