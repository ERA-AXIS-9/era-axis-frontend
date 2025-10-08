import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VoicesFromLearners = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const voices = [
    {
      name: "Amina",
      role: "Student Innovator",
      quote: "I learned by building, not memorizing. Now I mentor others."
    },
    {
      name: "Ravi",
      role: "Farmer-Student", 
      quote: "The rainfall sensor we built helped my family plan planting cycles."
    },
    {
      name: "Liah",
      role: "Youth Mentor",
      quote: "Refurbished kits made tech accessible for my community workshop."
    }
  ];

  // Auto-play slideshow
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % voices.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, voices.length]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 8 seconds
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % voices.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + voices.length) % voices.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Voices from Learners
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Featured Section */}
          <div className="lg:col-span-1 relative">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-black mb-4">Featured</h3>
              <div className="space-y-4">
                {voices.map((voice, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleSlideChange(index)}
                    className={`flex items-center gap-3 p-3 rounded-lg hover:shadow-sm transition-all duration-300 cursor-pointer group ${
                      activeSlide === index 
                        ? 'bg-[#39366F] text-white shadow-md' 
                        : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      activeSlide === index 
                        ? 'bg-white/20' 
                        : 'bg-gradient-to-br from-[#39366F] to-[#2a2850]'
                    }`}>
                      <span className={`font-bold text-xs ${
                        activeSlide === index ? 'text-white' : 'text-white'
                      }`}>
                        {voice.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className={`text-sm font-semibold transition-colors ${
                        activeSlide === index 
                          ? 'text-white' 
                          : 'text-black group-hover:text-[#39366F]'
                      }`}>
                        {voice.name}
                      </div>
                      <div className={`text-xs ${
                        activeSlide === index ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {voice.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical Dividing Line */}
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden lg:block"></div>
          </div>

          {/* Slideshow Section */}
          <div className="lg:col-span-3 relative">
            <div className="relative overflow-hidden rounded-xl">
              
              {/* Slides Container */}
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {voices.map((voice, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white border border-gray-200 rounded-xl p-8 mx-2 hover:shadow-lg transition-all duration-300 group h-64">
                      
                      {/* Quote */}
                      <div className="mb-6">
                        <div className="text-4xl text-[#39366F]/20 mb-3 font-serif">"</div>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium">
                          {voice.quote}
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4 mt-auto">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#39366F] to-[#2a2850] rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-base">
                            {voice.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-base font-bold text-black group-hover:text-[#39366F] transition-colors">
                            {voice.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {voice.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="text-[#39366F]" size={20} />
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="text-[#39366F]" size={20} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {voices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeSlide === index 
                        ? 'bg-[#39366F] w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VoicesFromLearners;
