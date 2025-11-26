import React from 'react';
import { Upload, Share2, Heart } from 'lucide-react';

const GalleryCTA = () => {
  return (
    <section className="py-16 bg-[#39366F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Join Our Innovation Story
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
            Have project documentation to share? Become part of our growing media library 
            and inspire the next generation of student innovators.
          </p>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Upload Media */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Submit Your Media</h3>
              <p className="text-white/80 text-sm">Share your project photos, videos, and documentation</p>
            </div>

            {/* Share Stories */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Share Impact Stories</h3>
              <p className="text-white/80 text-sm">Tell us how these projects affected your community</p>
            </div>

            {/* Get Featured */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-colors duration-300">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Get Featured</h3>
              <p className="text-white/80 text-sm">Outstanding contributions may be featured on our homepage</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl">
              Submit Media
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-8 py-4 rounded-xl font-bold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default GalleryCTA;
