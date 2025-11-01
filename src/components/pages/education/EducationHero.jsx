import React from 'react';

const EducationHero = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden bg-[#39366F]">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40">
        <img 
          src="/images/workingspace.png" 
          alt="ERA AXIS Education"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            STEM for All. Innovation Without Barriers.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
            Transform your future with inclusive, hands-on tech education
          </p>

          {/* CTA Button */}
          <a 
            href="#program-options"
            className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 text-lg cursor-pointer"
          >
            Explore Our Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;
