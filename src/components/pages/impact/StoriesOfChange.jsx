import React, { useState } from 'react';
import { Play, Clock, User, X } from 'lucide-react';

const StoriesOfChange = () => {
  const stories = [
    {
      title: "Out-of-school Youth Innovator",
      description: "From discarded devices to working prototype that helps local clinics charge patients.",
      duration: "3:45",
      speaker: "Kwame Asante",
      thumbnail: "/images/Educationpage/education.png",
      videoUrl: "https://drive.google.com/file/d/1Rbc_L8zSC1dI-6k2tCaDF7Uubyl_PBOc/preview"
    },
    {
      title: "Farmers Dashboard Project", 
      description: "A low-cost dashboard built by learners to track rainfall and yield for smallholders.",
      duration: "4:12",
      speaker: "Ama Osei",
      thumbnail: "/images/Educationpage/education.png",
      videoUrl: "https://drive.google.com/file/d/1Rbc_L8zSC1dI-6k2tCaDF7Uubyl_PBOc/preview"
    },
    {
      title: "E-waste Turned into STEM Kits",
      description: "Old laptops and phones become electronics kits powering practical lessons.",
      duration: "2:58",
      speaker: "Joseph Mensah",
      thumbnail: "/images/Educationpage/education.png",
      videoUrl: "https://drive.google.com/file/d/1Rbc_L8zSC1dI-6k2tCaDF7Uubyl_PBOc/preview"
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
            <div key={index} className="bg-white group">
              
              {/* Video Thumbnail */}
              <div className="relative rounded-lg h-40 sm:h-48 mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
                <img 
                  src={story.thumbnail}
                  alt={story.title}
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

        {/* Coming Soon Message */}
        <div className="text-left">
          <p className="text-gray-600 font-medium">Videos coming soon...</p>
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
