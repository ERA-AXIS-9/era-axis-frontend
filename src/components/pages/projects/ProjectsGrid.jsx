import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'SafeDrive',
      category: 'Transportation',
      description: 'An intelligent road safety innovation that detects driver fatigue, alcohol influence, and risky driving behaviors. It provides real-time alerts to prevent accidents, protect lives, and promote safer transportation systems across Africa.',
      status: 'Active',
      image: '/images/safedrive/safedrive.jpg',
      link: '/projects/safedrive'
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
      title: 'EcoWatch',
      category: 'Environment',
      description: 'A real-time air quality monitoring system that tracks pollution levels across multiple locations and provides actionable insights for communities.',
      status: 'Active',
      image: '/images/Homepage/ECOWatch1.png',
      link: '/projects/ecowatch'
    },
    {
      title: 'AgrizPlanter',
      category: 'Agriculture',
      description: 'An automated rice planting device designed to eliminate the stress of manual transplanting, increase planting speed and accuracy, and improve farmers\' efficiency and productivity.',
      status: 'In Progress',
      image: '/images/agrizplanter/agrizplanter.jpg',
      link: '/projects/agrizplanter'
    },
    {
      title: 'ERA Technologies',
      category: 'Business Solutions',
      description: 'Digital tools for African businesses and startups. Streamline operations with ERA KPI, ERA Attendance, and ERA Bulk Email & SMS.',
      status: 'Active',
      image: '/images/era-technologies/era-kpi2.jpg',
      link: '/projects/era-technologies'
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
