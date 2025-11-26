import React from 'react';

const CaseStudyHighlight = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Case Study Highlight
          </h2>
        </div>

        {/* Case Study Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left - Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/images/workingspace.png"
              alt="School Management App"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          {/* Right - Content */}
          <div>
            <h3 className="text-xl font-bold text-black mb-4">
              School Management App
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Designed a fully integrated school management system with a custom student info dashboard, grading tools, and parent communication features. The platform has streamlined operations for over 50 schools.
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center text-[#39366F] hover:text-[#2a2850] font-semibold transition-colors duration-200"
            >
              View Case Study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHighlight;
