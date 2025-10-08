import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "AgriSplanter",
      description: "Precision micro-planter prototype improving smallholder yields.",
      image: "/images/manufacturing.png",
      status: "Active",
      category: "Agriculture"
    },
    {
      title: "EcoWatch System",
      description: "Low-cost environmental sensing and alert platform.",
      image: "/images/software.png", 
      status: "Active",
      category: "Environment"
    },
    {
      title: "RecySim Smart",
      description: "IoT-enabled smart bin for waste sorting and analytics.",
      image: "/images/workingspace.png",
      status: "Active", 
      category: "Sustainability"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-[#39366F] transition-all duration-300 group cursor-pointer">
              
              {/* Project Image */}
              <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Status Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#39366F] text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div>
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-3">
                  {project.description}
                </p>
                
                <button className="flex items-center gap-1 text-[#39366F] hover:text-[#2a2850] font-medium text-sm transition-colors group/btn">
                  Learn More
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
