import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Gallery = () => {
  const mediaItems = [
    {
      type: 'image',
      src: '/images/workingspace.png',
      alt: 'ERA AXIS workspace collaboration'
    },
    {
      type: 'image', 
      src: '/images/software.png',
      alt: 'Software development at ERA AXIS'
    },
    {
      type: 'image',
      src: '/images/manufacturing.png', 
      alt: 'Manufacturing and innovation'
    },
    {
      type: 'video',
      thumbnail: '/images/workingspace.png',
      alt: 'ERA AXIS video content'
    },
    {
      type: 'image',
      src: '/images/software.png',
      alt: 'Technology and innovation'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-black tracking-tight">Media Gallery</h2>
          <a 
            href="/gallery"
            className="bg-[#39366F] hover:bg-[#2a2850] text-white px-5 py-2 rounded-md font-semibold inline-flex items-center gap-1 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
          >
            See Gallery
            <ChevronRight size={16} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mediaItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative aspect-square bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#39366F]/5 to-[#5B9BD5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {item.type === 'image' ? (
                <img 
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 relative z-10"
                />
              ) : (
                <>
                  <img 
                    src={item.thumbnail}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Modern Video Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300 z-20">
                    <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Play size={24} className="text-[#39366F] ml-1" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute w-16 h-16 bg-white rounded-full opacity-20 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div>
                  </div>
                </>
              )}
              
              {/* Enhanced hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39366F] to-[#5B9BD5] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              {/* Corner indicator */}
              <div className="absolute top-3 right-3 w-2 h-2 bg-[#39366F] rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
