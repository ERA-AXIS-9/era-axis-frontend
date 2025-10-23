import React from 'react';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'School Management App',
      description: 'Streamline school operations with our comprehensive management solution.',
      category: 'Education',
      image: 'Image placeholder'
    },
    {
      title: 'Inventory Desk App',
      description: 'Efficient inventory tracking and management for businesses of all sizes.',
      category: 'Business',
      image: 'Image placeholder'
    },
    {
      title: 'IoT Dashboard',
      description: 'Monitor and control your IoT devices with our intuitive dashboard.',
      category: 'Technology',
      image: 'Image placeholder'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Featured Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
            >
              {/* Image Placeholder */}
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <span className="text-gray-400 text-sm">{project.image}</span>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-[#39366F] font-medium mb-2">
                  {project.category}
                </div>
                
                <h3 className="text-lg font-semibold text-black mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <a 
                  href="#" 
                  className="text-sm text-[#39366F] hover:text-[#2a2850] font-medium transition-colors duration-200"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
