import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const ImpactHero = () => {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Real People.{' '}
              <span className="text-[#39366F]">
                Real Solutions.
              </span>{' '}
              Real Change.
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
              Discover the transformative power of technology education through the eyes of our learners, 
              partners, and communities across Ghana and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                <Play size={18} />
                Watch Impact Stories
                <ChevronRight size={18} />
              </button>
              
              <button className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 bg-white flex items-center justify-center gap-2">
                View Full Report
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

          {/* Right Visual */}
          <div>
            
            {/* Clean Feature Card */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
              
              {/* Featured Story Preview */}
              <div>
                <div className="relative rounded-xl h-64 mb-6 overflow-hidden group cursor-pointer">
                  {/* Manufacturing Image */}
                  <img 
                    src="/images/manufacturing.png" 
                    alt="Kwame working in manufacturing lab"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300"></div>
                  
                  {/* Play Button and Text */}
                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div>
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                        <Play className="text-white ml-1" size={24} />
                      </div>
                      <p className="text-sm font-medium">Featured Success Story</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">
                  "From Dropout to Tech Entrepreneur"
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  How Kwame transformed his life through ERA AXIS programs and now employs 15 people in his community.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ImpactHero;
