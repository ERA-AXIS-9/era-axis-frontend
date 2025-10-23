import React from 'react';

const ProjectImpact = ({ metrics }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Impact Highlights
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-[#39366F] mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectImpact;
