import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectVideos = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  if (!videos || videos.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Development Videos
          </h2>
          <p className="text-gray-600 mt-2 text-lg">Follow our development journey</p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div 
              key={index}
              className="group cursor-pointer"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedVideo(video)}
              >
                <video 
                  src={video.src}
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="bg-white rounded-full p-4 shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Play size={32} className="text-[#39366F] fill-[#39366F]" />
                  </motion.div>
                </div>
              </div>
              
              {/* Video Info */}
              {video.title && (
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-black group-hover:text-[#39366F] transition-colors duration-300">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {video.description}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Container */}
              <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                <video 
                  src={selectedVideo.src}
                  className="w-full h-full"
                  controls
                  autoPlay
                  controlsList="nodownload"
                />
              </div>

              {/* Video Title in Modal */}
              {selectedVideo.title && (
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
                  {selectedVideo.description && (
                    <p className="text-gray-300 mt-2">{selectedVideo.description}</p>
                  )}
                </div>
              )}

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectVideos;
