import React from 'react';
import { ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'AgriPlanner',
      description: 'Smart agriculture solutions for small-scale farmers using IoT sensors and data analytics.',
      link: '/projects/agriplanner',
      image: '/images/workingspace.png'
    },
    {
      name: 'EcoWatch',
      description: 'Environmental monitoring system for sustainable community development and climate tracking.',
      link: '/projects/ecowatch',
      image: '/images/software.png'
    },
    {
      name: 'RecyBin',
      description: 'AI-powered waste sorting and recycling management system for smart cities.',
      link: '/projects/recybin',
      image: '/images/manufacturing.png'
    }
  ];

  return (
    <section className="py-9 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Only */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">Featured Projects</h2>
        </div>
        
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden max-w-sm mx-auto w-full"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                {/* Project Name */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors duration-300">
                  {project.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-800 leading-relaxed mb-5 text-base font-medium">
                  {project.description}
                </p>
                
                {/* Learn More Link */}
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-1 font-bold text-base text-[#39366F] hover:text-[#2a2850] transition-all duration-300 group/btn hover:gap-2"
                >
                  Learn More
                  <ChevronRight 
                    size={14} 
                    className="group-hover/btn:translate-x-0.5 transition-transform duration-300"
                  />
                </a>
              </div>
              
              {/* Consistent bottom accent */}
              <div className="h-1 bg-[#39366F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* See All Projects Button - At Bottom */}
        <div className="flex justify-end">
          <a 
            href="/projects"
            className="bg-[#39366F] hover:bg-[#2a2850] text-white px-5 py-2 rounded-md font-semibold inline-flex items-center gap-1 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
          >
            See All Projects
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
