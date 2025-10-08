import React, { useState } from 'react';
import { Play, Image as ImageIcon, FileText, ExternalLink } from 'lucide-react';

const ProjectsGallery = () => {
  const galleryItems = [
    {
      image: "/images/manufacturing.png",
      title: "AgriSplanter Development",
      type: "prototype",
      category: "Agriculture",
      tag: "PROTOTYPE"
    },
    {
      image: "/images/software.png", 
      title: "EcoWatch System Demo",
      type: "demo",
      category: "Environment",
      duration: "3:45",
      tag: "LIVE DEMO"
    },
    {
      image: "/images/workingspace.png",
      title: "RecySim Smart Testing",
      type: "testing", 
      category: "Sustainability",
      tag: "FIELD TEST"
    },
    {
      image: "/images/manufacturing.png",
      title: "Health Wearables Prototype",
      type: "prototype",
      category: "Healthcare",
      tag: "IN PROGRESS"
    },
    {
      image: "/images/software.png",
      title: "Carbon Credit Platform",
      type: "demo",
      category: "Fintech",
      duration: "2:30",
      tag: "SHOWCASE"
    },
    {
      image: "/images/workingspace.png",
      title: "Community Workshop",
      type: "workshop",
      category: "Community",
      tag: "WORKSHOP"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Gallery / Media Showcase
          </h2>
        </div>

        {/* Media Grid - 3x2 layout with compact professional cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-[#39366F] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* Media Image */}
              <div className="relative h-48">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  {/* Professional Status Tag */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${
                      item.tag === 'LIVE DEMO' || item.tag === 'SHOWCASE' ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg' :
                      item.tag === 'PROTOTYPE' || item.tag === 'IN PROGRESS' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' :
                      item.tag === 'FIELD TEST' ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' :
                      'bg-gradient-to-r from-[#39366F] to-[#2a2850] text-white shadow-lg'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                  
                  {/* Video Duration */}
                  {item.duration && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {item.duration}
                      </span>
                    </div>
                  )}
                  
                  {/* Media Title */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white font-medium text-sm leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-white/80 text-xs mt-1">
                      {item.category}
                    </p>
                  </div>
                  
                  {/* Play Button for Demos and Videos */}
                  {(item.type === 'demo' || item.duration) && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <Play className="text-white ml-1" size={22} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button & CTAs */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-2xl mx-auto mb-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our complete project portfolio or learn about our impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 justify-center bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              View Complete Gallery
              <ExternalLink size={16} />
            </button>
            
            <button className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-8 py-3 rounded-xl font-medium transition-all duration-300 bg-white hover:bg-[#39366F]/5">
              See Our Impact
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsGallery;
