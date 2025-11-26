import React from 'react';
import { ArrowRight } from 'lucide-react';

const FeaturedStory = () => {
  return (
    <section className="bg-white">
      <div className="w-full">
        
        {/* Featured Story Card */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
          
          {/* Featured Image */}
          <div className="relative h-screen bg-gray-100">
            <img
              src="/images/gallery/p43.jpg"
              alt="Innovation Day 2024 - STEM Kids in Action"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedStory;
