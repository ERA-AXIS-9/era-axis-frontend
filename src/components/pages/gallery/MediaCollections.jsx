import React from 'react';
import { Calendar, Clock, Eye } from 'lucide-react';

const MediaCollections = () => {
  const collections = [
    {
      id: 1,
      title: "Innovation Week 2024 - STEM Girls in Action",
      subtitle: "Documenting transformational learning experiences",
      itemCount: 24,
      totalViews: "3.2K",
      duration: "March 15-22, 2024",
      coverImage: "/images/manufacturing.png",
      previewImages: [
        "/images/software.png",
        "/images/workingspace.png",
        "/images/manufacturing.png"
      ]
    },
    {
      id: 2,
      title: "Student Spotlight Series",
      subtitle: "Individual journeys and breakthrough moments",
      itemCount: 18,
      totalViews: "2.8K",
      duration: "Ongoing Collection",
      coverImage: "/images/software.png",
      previewImages: [
        "/images/workingspace.png", 
        "/images/manufacturing.png",
        "/images/software.png"
      ]
    },
    {
      id: 3,
      title: "Community Impact Stories", 
      subtitle: "Real-world deployment and adoption",
      itemCount: 32,
      totalViews: "4.1K",
      duration: "February 2024",
      coverImage: "/images/workingspace.png",
      previewImages: [
        "/images/manufacturing.png",
        "/images/software.png",
        "/images/workingspace.png"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Special Collections
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Curated media collections highlighting key moments and milestones in our innovation journey.
          </p>
        </div>

        <div className="space-y-8">
          {collections.map((collection) => (
            <div key={collection.id} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
              
              <div className="flex flex-col lg:flex-row gap-6">
                
                {/* Main Cover Image */}
                <div className="lg:w-1/3">
                  <div className="relative rounded-xl overflow-hidden aspect-video">
                    <img
                      src={collection.coverImage}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Item Count Overlay */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {collection.itemCount} items
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 flex flex-col justify-between">
                  
                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                      {collection.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {collection.subtitle}
                    </p>

                    {/* Preview Images */}
                    <div className="flex gap-2 mb-4">
                      {collection.previewImages.map((image, index) => (
                        <div key={index} className="w-16 h-16 rounded-lg overflow-hidden">
                          <img
                            src={image}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      <div className="w-16 h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-500 text-xs font-medium">+{collection.itemCount - 3}</span>
                      </div>
                    </div>
                  </div>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {collection.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      {collection.totalViews} total views
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {collection.itemCount} media files
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MediaCollections;
