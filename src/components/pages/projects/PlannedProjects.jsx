import React from 'react';
import { Clock, Users } from 'lucide-react';

const PlannedProjects = () => {
  const plannedProjects = [
    {
      title: "Health Wearables",
      description: "Biometric wearables for community health pilots.",
      status: "In Development",
      timeline: "Q2 2025",
      team: "6 students",
      category: "Healthcare",
      image: "/images/manufacturing.png"
    },
    {
      title: "Carbon Credit Platform", 
      description: "Verifiable micro-projects earning local carbon credits.",
      status: "Planning Phase",
      timeline: "Q3 2025", 
      team: "8 students",
      category: "Fintech",
      image: "/images/software.png"
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Planned Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {plannedProjects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-[#39366F] hover:-translate-y-1 transition-all duration-300 group cursor-pointer overflow-hidden">
              
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-[#39366F]/60 transition-all duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'In Development' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-yellow-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-4">
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

      </div>
    </section>
  );
};

export default PlannedProjects;
