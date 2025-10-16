import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedStory = () => {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Story Card */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
          
          {/* Featured Image */}
          <div className="relative aspect-[21/9] bg-gray-100">
            <img
              src="/images/workingspace.png"
              alt="Innovation Day 2024 - STEM Kids in Action"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Story Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-[#39366F] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                Featured Story
              </span>
            </div>

            {/* Minimal Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Innovation Day 2024 - STEM Kids in Action
              </h2>
              
              <button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 border border-white/30 mt-4">
                View Full Story
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedStory;
