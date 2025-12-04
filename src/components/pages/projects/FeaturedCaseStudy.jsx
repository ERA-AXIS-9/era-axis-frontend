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
              src="/images/agrizplanter/agrizplanter.jpg"
              alt="AgrizPlanter Case Study"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Right - Content */}
          <div className="p-8">
            <h3 className="text-2xl font-bold text-black mb-4">
              AgrizPlanter
            </h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-sm font-semibold text-gray-700 min-w-[80px]">Challenge:</span>
                <span className="text-sm text-gray-600">Manual rice transplanting is labor-intensive, time-consuming, and prone to errors, reducing farmer productivity.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sm font-semibold text-gray-700 min-w-[80px]">Solution:</span>
                <span className="text-sm text-gray-600">An automated rice planting device that eliminates manual stress and increases planting speed and accuracy.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sm font-semibold text-gray-700 min-w-[80px]">Impact:</span>
                <span className="text-sm text-gray-600">Significantly improves farmers' efficiency and productivity while reducing physical strain.</span>
              </div>
            </div>
            
            <a href="/projects/agrizplanter" className="inline-block bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
