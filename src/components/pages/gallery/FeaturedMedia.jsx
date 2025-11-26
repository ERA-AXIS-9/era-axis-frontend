import React from 'react';
import { Play, Calendar, Eye } from 'lucide-react';

const FeaturedMedia = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Community Impact",
      description: "Real stories from our programs transforming lives across West Africa.",
      image: "/images/gallery/p18.jpeg",
      type: "image"
    },
    {
      id: 2,
      title: "Learning Experience",
      description: "Students engaging in hands-on training and skill development.",
      image: "/images/gallery/p43.jpg",
      type: "image"
    },
    {
      id: 3,
      title: "Innovation in Action",
      description: "Cutting-edge solutions developed through ERA AXIS programs.",
      image: "/images/gallery/p56.jpeg",
      type: "image"
    },
    {
      id: 4,
      title: "Collaboration & Growth",
      description: "Teams working together to create sustainable change.",
      image: "/images/gallery/p61.jpg",
      type: "image"
    },
    {
      id: 5,
      title: "Program Highlights",
      description: "Showcasing the best moments from our initiatives.",
      image: "/images/gallery/p40.jpg",
      type: "image"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 sm:mb-4">
            Featured Media
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
            Highlighting our most impactful project documentation and community stories.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {featuredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col">
              
              {/* Media Container */}
              <div className="relative rounded-lg sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 w-full flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-black mb-1 sm:mb-2 group-hover:text-[#39366F] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedMedia;
