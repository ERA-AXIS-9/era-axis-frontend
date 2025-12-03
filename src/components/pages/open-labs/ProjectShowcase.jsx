import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'AgrizPlanter',
    category: 'Agriculture',
    description: 'An automated rice planting device designed to eliminate the stress of manual transplanting, increase planting speed and accuracy, and improve farmers\' efficiency and productivity.',
    status: 'In Progress',
    image: '/images/agrizplanter/agrizplanter.jpg',
    link: '/projects/agrizplanter'
  },
  {
    title: 'EcoWatch',
    category: 'Environment',
    description: 'A real-time air quality monitoring system that tracks pollution levels across multiple locations and provides actionable insights for communities.',
    status: 'Active',
    image: '/images/Homepage/ECOWatch1.png',
    link: '/projects/ecowatch'
  },
  {
    title: 'RecyBin',
    category: 'Sustainability',
    description: 'Smart waste segregation bins that help communities reduce landfill waste and improve recycling practices through data-driven insights.',
    status: 'Active',
    image: '/images/Homepage/PXL_20240913_102510357.MP.jpg',
    link: '/services/open-labs/projects'
  }
];

const ProjectShowcase = () => (
  <section className="py-12 sm:py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Project Showcase
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
          >
            {/* Project Image */}
            <div className="h-48 bg-gray-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#39366F] bg-[#39366F]/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-700' 
                    : project.status === 'Active'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-base font-semibold text-black mb-2">
                {project.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <Link 
                to={project.link}
                className="text-sm text-[#39366F] hover:text-[#2a2850] font-medium transition-colors duration-200 inline-flex items-center gap-1"
              >
                Learn More
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <a
          href="/services/open-labs/projects"
          className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          See More
          <ChevronRight size={18} />
        </a>
      </div>
    </div>
  </section>
);

export default ProjectShowcase;
