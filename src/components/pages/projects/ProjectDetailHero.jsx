import React from 'react';

const ProjectDetailHero = ({ project }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Content */}
          <div>
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
              {project.title}
            </h1>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm mb-8">
              <div>
                <span className="text-gray-500">Status:</span>
                <span className="ml-2 font-semibold text-gray-700">{project.status}</span>
              </div>
              <div>
                <span className="text-gray-500">Category:</span>
                <span className="ml-2 font-semibold text-gray-700">{project.category}</span>
              </div>
              <div>
                <span className="text-gray-500">Year:</span>
                <span className="ml-2 font-semibold text-gray-700">{project.year}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
                View Live Demo
              </button>
              <button className="border-2 border-gray-300 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 font-medium rounded-lg transition-all duration-200">
                Download PDF
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-80">
            <img 
              src={project.image || "/images/workingspace.png"}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
