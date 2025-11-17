import React from 'react';

const NewsHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#39366F] to-[#5B9BD5] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            News & Insights
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay updated with ERA AXIS's latest innovations, achievements, and impact stories from across Africa
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsHero;
