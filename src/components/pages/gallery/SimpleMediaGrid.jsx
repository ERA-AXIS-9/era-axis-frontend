import React from 'react';
import { Play, Eye } from 'lucide-react';

const SimpleMediaGrid = () => {
  const mediaItems = [
    {
      id: 1,
      title: "AgriSplanter Field Testing",
      type: "video",
      image: "/images/manufacturing.png",
      duration: "4:32",
      views: "1.2K",
      category: "Agriculture"
    },
    {
      id: 2,
      title: "EcoWatch Community Workshop",
      type: "image",
      image: "/images/software.png",
      views: "856",
      category: "Environment"
    },
    {
      id: 3,
      title: "RecySim Smart Implementation",
      type: "video",
      image: "/images/workingspace.png",
      duration: "6:15",
      views: "2.1K",
      category: "Sustainability"
    },
    {
      id: 4,
      title: "Health Wearables Prototype",
      type: "image",
      image: "/images/manufacturing.png",
      views: "672",
      category: "Healthcare"
    },
    {
      id: 5,
      title: "Student Innovation Showcase",
      type: "video",
      image: "/images/software.png",
      duration: "8:45",
      views: "3.4K",
      category: "Community"
    },
    {
      id: 6,
      title: "Carbon Credit Platform Demo",
      type: "image",
      image: "/images/workingspace.png",
      views: "945",
      category: "FinTech"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            More Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover additional moments from our innovation journey and community impact initiatives.
          </p>
        </div>

        {/* Simple Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              
              {/* Media Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                
                {/* Media Image */}
                <div className="relative aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay for Videos */}
                  {item.type === 'video' && (
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                    </div>
                  )}

                  {/* Duration Badge */}
                  {item.duration && (
                    <div className="absolute bottom-3 right-3">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                        {item.duration}
                      </span>
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#39366F]/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Eye size={14} />
                    {item.views} views
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300">
            View More Stories
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default SimpleMediaGrid;
