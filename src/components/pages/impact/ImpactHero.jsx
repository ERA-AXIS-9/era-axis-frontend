import React, { useState } from 'react';
import { ChevronRight, Play, X } from 'lucide-react';
import { motion } from 'framer-motion';

const ImpactHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative pt-20 sm:pt-28 lg:pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#39366F]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#39366F]/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          
          {/* Left Content */}
          <motion.div 
            className="text-left space-y-8"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Main Heading */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39366F] to-[#5a5789]">Communities</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              Witness real stories of innovation, education, and sustainable solutions creating lasting change across West Africa through ERA AXIS programs.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 pt-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <p className="text-3xl font-bold text-[#39366F]">10K+</p>
                <p className="text-sm text-gray-600 mt-1">Lives Impacted</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#39366F]">50+</p>
                <p className="text-sm text-gray-600 mt-1">Communities Reached</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <button className="bg-gradient-to-r from-[#39366F] to-[#5a5789] hover:shadow-lg text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 group">
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Watch Stories
              </button>
              
              <button className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F]/5 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                View Report
                <ChevronRight size={20} />
              </button>
            </motion.div>

          </motion.div>

          {/* Right Visual - Video */}
          <motion.div 
            className="relative lg:col-span-1"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Video Container with premium styling */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsPlaying(true)}>
              
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#39366F] to-[#5a5789] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10"></div>
              
              {/* Video Thumbnail */}
              <div className="relative bg-black rounded-2xl overflow-hidden aspect-video">
                <img 
                  src="/images/Educationpage/education.png"
                  alt="ERA AXIS Impact Video"
                  className="w-full h-full object-cover"
                />
                
                {/* Centered Play Button Overlay */}
                <motion.div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
                  <motion.div className="w-20 h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-[#39366F] ml-1" size={32} fill="currentColor" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Accent corner */}
              <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-tl from-[#39366F]/20 to-transparent rounded-tl-3xl pointer-events-none"></div>
            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-6xl h-[80vh]">
            <button 
              onClick={() => setIsPlaying(false)} 
              className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-black transition-colors z-10 shadow-lg"
            >
              <X size={24} />
            </button>
            <iframe 
              src="https://drive.google.com/file/d/1Rbc_L8zSC1dI-6k2tCaDF7Uubyl_PBOc/preview"
              title="ERA AXIS Impact Video"
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

export default ImpactHero;
