import React from 'react';

const HighlightedProject = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Highlighted Project – Carbon Credit Platform
          </h2>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left - Image Placeholder */}
          <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center border border-gray-200">
            <span className="text-gray-400 text-sm">Project visualization coming soon</span>
          </div>
          
          {/* Right - Content */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">
              Carbon Credit Platform
            </h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-1">Challenge:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tracking carbon credits and environmental impact across multiple projects.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-1">Solution:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Built a comprehensive dashboard for monitoring, verification, and reporting.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-1">Impact:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Enabled transparent tracking of 10,000+ carbon credits across 50+ projects.
                </p>
              </div>
            </div>
            
            <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
              View Full Case Study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightedProject;
