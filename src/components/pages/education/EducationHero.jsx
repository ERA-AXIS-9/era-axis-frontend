import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const EducationHero = () => {
  const navigate = useNavigate();

  const handleQuickEnroll = () => {
    navigate('/services/education/program-details?program=junior-stem');
  };

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden bg-[#39366F]">
      {/* Background Image - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-1/2 lg:w-2/5 opacity-100">
        <img 
          src="/images/workingspace.png" 
          alt="ERA AXIS Education"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for mobile visibility, gradient for desktop */}
        <div className="absolute inset-0 bg-black/50 sm:bg-gradient-to-l sm:from-transparent sm:via-white/20 sm:to-white/40"></div>
      </div>

      {/* Additional dark overlay on mobile for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40 sm:bg-none"></div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0">
        <div className="max-w-2xl bg-[#39366F]/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-6 sm:p-0 rounded-xl sm:rounded-none">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            STEM for All. Innovation Without Barriers.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 leading-relaxed drop-shadow-md">
            Transform your future with inclusive, hands-on tech education
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="#program-options"
              className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-base sm:text-lg shadow-lg"
            >
              Explore All Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;
