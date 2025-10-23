import React from 'react';

const ProjectOverview = ({ overview }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left - Overview Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Overview
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              {overview.description}
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              {overview.details}
            </p>
          </div>

          {/* Right - Key Info Cards */}
          <div className="space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {overview.techStack?.map((tech, index) => (
                  <span key={index} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Timeline</h3>
              <p className="text-sm text-gray-600">{overview.timeline}</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Team Size</h3>
              <p className="text-sm text-gray-600">{overview.teamSize}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
