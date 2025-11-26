import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Founder's Talk on Tech Inclusion",
      description: "Keynote on equitable access to technology.",
      thumbnail: "/images/manufacturing.png",
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Lab Tour in 2 Minutes",
      description: "A quick walkthrough of our open labs.",
      thumbnail: "/images/software.png",
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Building with Communities",
      description: "3 quick stories from the field.",
      thumbnail: "/images/workingspace.png",
      videoUrl: "#"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
            Watch: Talks & Tours
          </h2>
          
          <button className="text-[#39366F] hover:text-[#2a2850] font-medium text-sm transition-colors w-fit">
            View All Videos
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group cursor-pointer relative rounded-xl overflow-hidden"
              onClick={() => console.log('Play video:', video.title)}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-100">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Play Button - Always Visible */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Play className="text-[#39366F] fill-[#39366F]" size={28} />
                  </div>
                </div>

                {/* Title Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-base leading-tight mb-1">
                      {video.title}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {video.description}
                    </p>
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

export default VideoSection;
