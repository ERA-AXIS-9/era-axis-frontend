import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = ['All', 'Education', 'Household', 'Organization', 'IoT'];

const projects = [
  {
    title: 'STEM/Lab Devices',
    description: 'Custom-built science tools and devices for education.',
    category: 'Education',
    image: '/images/project-placeholder.jpg',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Community Makerspaces',
    description: 'Shared innovation spaces and training hubs.',
    category: 'Organization',
    image: '/images/project-placeholder.jpg',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'IoT Live Monitoring',
    description: 'Real-time sensors for climate and health tracking.',
    category: 'IoT',
    image: '/images/project-placeholder.jpg',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Solar-Powered Devices',
    description: 'Energy-efficient equipment for field use.',
    category: 'Household',
    image: '/images/project-placeholder.jpg',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Assistive Tech Kits',
    description: 'Accessible tools for inclusive classrooms.',
    category: 'Education',
    image: '/images/project-placeholder.jpg',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Safe Water Module',
    description: 'Filtration systems built with local parts.',
    category: 'Household',
    image: '/images/project-placeholder.jpg',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Org Data Dashboard',
    description: 'Centralized tracking for schools and firms.',
    category: 'Organization',
    image: '/images/project-placeholder.jpg',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Smart Recycling',
    description: 'Bins with IoT to measure waste patterns.',
    category: 'IoT',
    image: '/images/project-placeholder.jpg',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Smart Home Kits',
    description: 'IoT integrations for household efficiency.',
    category: 'IoT',
    image: '/images/project-placeholder.jpg',
    link: '/services/manufacturing/projects'
  }
];

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-xl font-bold text-black">Filter by Category</h2>
          
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#39366F] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
            <button className="px-4 py-2 rounded-lg font-medium text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all">
              Reset
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
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
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#39366F]/10 text-[#39366F] rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* View Details Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#39366F] hover:gap-2 transition-all"
                >
                  View Details
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-black">{filteredProjects.length}</span> of{' '}
            <span className="font-semibold text-black">{projects.length}</span> projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
