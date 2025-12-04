import React from 'react';
import { Clock } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Founder's Talk on Tech Inclusion",
      description: "Keynote on equitable access to technology.",
      duration: "15:30",
      thumbnail: "/images/Educationpage/education.png"
    },
    {
      id: 2,
      title: "Lab Tour in 2 Minutes",
      description: "A quick walkthrough of our open labs.",
      duration: "2:00",
      thumbnail: "/images/Educationpage/education.png"
    },
    {
      id: 3,
      title: "Building with Communities",
      description: "3 quick stories from the field.",
      duration: "5:45",
      thumbnail: "/images/Educationpage/education.png"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Watch: Talks & Tours
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white group">
              
              {/* Video Thumbnail */}
              <div className="relative rounded-lg h-40 sm:h-48 mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-40"
                />
                
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-lg font-bold">Coming Soon</div>
                  </div>
                </div>

                {/* Video Duration */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <Clock size={12} />
                  {video.duration}
                </div>
              </div>

              {/* Video Content */}
              <div>
                <h3 className="text-lg font-bold text-black mb-3">
                  {video.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-left">
          <p className="text-gray-600 font-medium">Videos coming soon...</p>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
