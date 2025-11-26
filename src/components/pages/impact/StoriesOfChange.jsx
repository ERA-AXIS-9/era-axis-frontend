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
            <div key={index} className="bg-white group cursor-pointer" onClick={() => setSelectedVideo(story.videoUrl)}>
              
              {/* Video Thumbnail */}
              <div className="relative rounded-lg h-40 sm:h-48 mb-4 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <img 
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Play className="text-[#39366F] ml-1" size={24} />
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

                <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors">
                  {story.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Watch More Stories Button */}
        <div className="text-left">
          <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2">
            <Play size={16} />
            Watch More Stories
          </button>
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
