import React, { useState } from 'react';
import { Play, Clock, User, X } from 'lucide-react';

const StoriesOfChange = () => {
  // Helper function to extract YouTube video ID and generate thumbnail URL
  const getYouTubeThumbnail = (embedUrl) => {
    const videoId = embedUrl.split('/embed/')[1];
    // Use hqdefault as it's more reliable than maxresdefault
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const stories = [
    {
      title: "Emmanuel's Impact Story",
      description: "A student's journey of innovation and learning through ERA AXIS programs.",
      duration: "0:57",
      speaker: "Emmanuel",
      videoUrl: "https://www.youtube.com/embed/jn8SxxAIS4k"
    },
    {
      title: "CoopTech - Revolutionizing Poultry Farming with SmartPoultry", 
      description: "CoopTech - Revolutionizing Poultry Farming with SmartPoultry",
      duration: "2:09",
      speaker: "",
      videoUrl: "https://www.youtube.com/embed/PLsJrfDc7tI"
    },
    {
      title: "Pearl's Impact Story",
      description: "A student's journey of innovation and learning through ERA AXIS programs.",
      duration: "0:46",
      speaker: "Pearl",
      videoUrl: "https://www.youtube.com/embed/ieEmJTB8k1U"
    }
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Stories of Change
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white group cursor-pointer" onClick={() => setSelectedVideo(story.videoUrl)}>
              
              {/* Video Thumbnail */}
              <div className="relative rounded-lg h-40 sm:h-48 mb-4 overflow-hidden bg-gray-100 flex items-center justify-center group-hover:opacity-80 transition-opacity">
                <img 
                  src={getYouTubeThumbnail(story.videoUrl)}
                  alt={story.title}
                  onError={(e) => {e.target.src = '/images/Educationpage/education.png'}}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300">
                  <div className="w-16 h-16 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-[#39366F] ml-1" size={28} fill="currentColor" />
                  </div>
                </div>

                {/* Video Duration */}
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
                  <Clock size={12} />
                  {story.duration}
                </div>
              </div>

              {/* Story Content */}
              <div>
                {/* Speaker Info */}
                <div className="flex items-center gap-2 mb-2">
                  <User size={14} className="text-gray-500" />
                  <span className="text-xs text-gray-500 font-medium">{story.speaker}</span>
                </div>

                <h3 className="text-lg font-bold text-black mb-3">
                  {story.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-6xl h-[80vh]">
            <button 
              onClick={() => setSelectedVideo(null)} 
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-black transition-colors z-10 shadow-lg"
            >
              <X size={24} />
            </button>
            <iframe 
              src={selectedVideo}
              title="Impact Story Video"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};

export default StoriesOfChange;
