import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationHero = () => {
  const navigate = useNavigate();

  const handleQuickEnroll = () => {
    navigate('/services/education/program-details?program=junior-stem');
  };

  return (
    <section className="relative isolate overflow-hidden min-h-screen">
      <div className="max-w-none px-0">
        {/* Full-bleed hero container */}
        <div 
          className="relative overflow-hidden min-h-screen"
          style={{
            backgroundImage: 'url(/images/Educationpage/education.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a3a]/60 via-[#39366F]/45 to-[#5B9BD5]/25"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative px-4 sm:px-6 md:px-10 lg:px-14 py-16 sm:py-20 md:py-24 lg:py-32 min-h-[500px] md:min-h-[580px] lg:min-h-[680px] flex items-center">
            
            {/* Left Content */}
            <motion.div 
              className="max-w-3xl pt-8 sm:pt-12 md:pt-16 lg:pt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading */}
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 sm:mb-8 md:mb-10 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                STEM for All. Innovation Without Barriers.
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-white/90 mb-10 sm:mb-12 md:mb-14 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform your future with inclusive, hands-on tech education
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationHero;
