import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const EducationHero = () => {
  const navigate = useNavigate();

  const handleQuickEnroll = () => {
    navigate('/services/education/program-details?program=junior-stem');
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div className="max-w-none px-0">
        {/* Full-bleed hero container */}
        <div className="relative overflow-hidden">
          <img 
            src="/images/Educationpage/educationmainpage.png" 
            alt="ERA AXIS Education" 
            className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a3a]/60 via-[#39366F]/45 to-[#5B9BD5]/25"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative px-6 md:px-10 lg:px-14 py-12 md:py-16 lg:py-20 min-h-[400px] md:min-h-[480px] lg:min-h-[560px] flex items-center">
            
            {/* Left Content */}
            <div className="max-w-3xl">
              {/* Accent Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-[#5B9BD5] to-[#39366F]"></div>
                <span className="text-sm md:text-base font-bold text-[#5B9BD5] uppercase tracking-widest">Education</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight">
                STEM for All. Innovation Without Barriers.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
                Transform your future with inclusive, hands-on tech education
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <a 
                  href="#program-options"
                  className="group bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center gap-3 transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Explore All Courses
                  <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
                
                <a 
                  href="/services/education"
                  className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center gap-3 transform hover:-translate-y-1 w-full sm:w-auto"
                >
                  Learn More
                  <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;
