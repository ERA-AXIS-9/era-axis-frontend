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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="group cursor-pointer"
              onClick={() => console.log('Play video:', video.title)}
            >
              <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[#39366F] transition-all duration-300 hover:shadow-lg">
                
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Play className="text-[#39366F] fill-[#39366F]" size={28} />
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors leading-tight">
                    {video.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {video.description}
                  </p>
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
