import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Recycling Bins',
    description: 'IoT-enabled waste sorting for communities.',
    image: '/images/project-placeholder.jpg',
    link: '/projects'
  },
  {
    title: 'School Lab Equipment',
    description: 'Custom-built science tools from e-waste.',
    image: '/images/project-placeholder.jpg',
    link: '/projects'
  },
  {
    title: 'Household Kits',
    description: 'Energy-saving devices for homes.',
    image: '/images/project-placeholder.jpg',
    link: '/projects'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
              Featured Projects
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
            <a
              key={index}
              href={project.link}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">Project Image</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
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

export default FeaturedProjects;
