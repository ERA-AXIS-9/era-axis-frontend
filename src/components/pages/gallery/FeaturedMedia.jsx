import React from 'react';
import { Play, Calendar, Eye } from 'lucide-react';

const FeaturedMedia = () => {
  const featuredItems = [
    {
      id: 1,
      title: "AgriSplanter Field Demo",
      description: "Live demonstration of precision micro-planting in rural communities.",
      image: "/images/manufacturing.png",
      type: "video",
      duration: "5:42",
      views: "2.3K",
      date: "March 2024",
      category: "Agriculture"
    },
    {
      id: 2,
      title: "EcoWatch Installation Process",
      description: "Step-by-step deployment of air quality sensors across 5 wards.",
      image: "/images/software.png",
      type: "video",
      duration: "8:15",
      views: "1.8K", 
      date: "February 2024",
      category: "Environment"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Featured Media
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Highlighting our most impactful project documentation and community stories.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              
              {/* Media Container */}
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={28} />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                      {item.duration}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#39366F] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={14} />
                    {item.views} views
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

export default FeaturedMedia;
