import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'Custom Software Development',
      category: 'Software',
      description: 'Tailored software solutions designed to meet your specific needs and challenges.',
      status: 'Active',
      image: '/images/Homepage/PXL_20250913_140827397.MP.jpg',
      link: '/services/software/custom'
    },
    {
      title: 'IoT & Data Platforms',
      category: 'Software',
      description: 'Connecting devices and powering decisions with scalable IoT dashboards.',
      status: 'Active',
      image: '/images/Homepage/PXL_20240913_102510357.MP.jpg',
      link: '/services/software/iot'
    },
    {
      title: 'Household Solutions',
      category: 'Software',
      description: 'Smart software for every home - budgeting, management, and family coordination.',
      status: 'Active',
      image: '/images/Homepage/WhatsApp Image 2025-07-10 at 5.30.30 PM.jpeg',
      link: '/services/software/household'
    },
    {
      title: 'EcoWatch – Air Quality Monitoring',
      category: 'Environment',
      description: 'Real-time air quality monitoring system tracking pollution levels across multiple locations.',
      status: 'Active',
      image: '/images/Homepage/ECOWATCH.png',
      link: '/projects/ecowatch'
    },
    {
      title: 'Smart Farm IoT',
      category: 'Agriculture',
      description: 'IoT sensors for monitoring soil moisture and optimizing irrigation.',
      status: 'In Progress',
      image: '/images/Homepage/agriz planter.png',
      link: '#'
    },
    {
      title: 'EduConnect Platform',
      category: 'Education',
      description: 'Digital learning platform connecting students with mentors and resources.',
      status: 'Completed',
      image: '/images/Homepage/PXL_20250612_144423482.MP.jpg',
      link: '#'
    }
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                  className="text-sm text-[#39366F] hover:text-[#2a2850] font-medium transition-colors duration-200"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
