import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedStory = () => {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Story Card */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
          
          {/* Featured Image */}
          <div className="relative aspect-video bg-gray-100">
            <img
              src="/images/workingspace.png"
              alt="Innovation Day 2024 - STEM Kids in Action"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Story Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-[#39366F] text-white px-4 py-2 rounded-full text-sm font-medium">
                Featured Story
              </span>
            </div>
          </div>

          {/* Story Content */}
          <div className="p-6 sm:p-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 group-hover:text-[#39366F] transition-colors">
              Innovation Day 2024 - STEM Kids in Action
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Witness the incredible journey of young innovators as they bring their ideas to life. 
              From prototype development to community testing, see how student creativity transforms into real-world solutions.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              View Full Story
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedStory;
