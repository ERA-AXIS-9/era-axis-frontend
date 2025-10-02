import React from 'react';

const FeaturedProjects = () => {
  const projects = [
    {
      name: 'AgriZplanter',
      description: 'Smart agriculture solutions for small-scale farmers.'
    },
    {
      name: 'EcoWatch',
      description: 'Environmental monitoring for sustainable communities.'
    },
    {
      name: 'RecyBin',
      description: 'AI-powered waste sorting and recycling system.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <button className="text-[#39366F] font-medium hover:text-[#2a2850]">
            See All Projects
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="bg-gray-200 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="text-[#39366F] font-medium hover:text-[#2a2850] text-sm">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;