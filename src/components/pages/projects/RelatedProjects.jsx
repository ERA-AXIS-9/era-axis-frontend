import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProjects = ({ projects }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            You may also like...
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-100">
                <img 
                  src={project.image || '/images/software.png'}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
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

export default RelatedProjects;
