import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Recycling Bins',
    description: 'IoT-enabled waste sorting for communities.',
    category: 'Community Project',
    image: '/images/manufacturing.png'
  },
  {
    title: 'School Lab Tools',
    description: 'Custom-built science equipment from e-waste.',
    category: 'Education',
    image: '/images/workingspace.png'
  },
  {
    title: 'RecycleBin',
    description: 'Automated waste segregation system.',
    category: 'Innovation',
    image: '/images/software.png'
  }
];

const FeaturedFabricationProjects = () => {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
              Featured Fabrication Projects
            </h2>
          </div>
          <a
            href="/services/manufacturing/projects"
            className="hidden sm:inline-flex items-center gap-2 text-[#39366F] hover:text-[#2a2850] font-semibold transition-colors group"
          >
            View All Projects
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-5">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#39366F]/10 text-[#39366F] rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="sm:hidden flex justify-center">
          <a
            href="/services/manufacturing/projects"
            className="inline-flex items-center gap-2 bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFabricationProjects;
