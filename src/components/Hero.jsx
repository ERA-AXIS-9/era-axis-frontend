import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Empowering Innovators.\nTransforming Communities.",
      description: "An innovation ecosystem advancing technology education, circular manufacturing, and open software to solve real community challenges.",
      pillar: "Education",
      icon: "🎓",
      backgroundImage: "/images/workingspace.png",
      cta1: { text: "Explore Programs", link: "/programs" },
      cta2: { text: "Enroll Now", link: "/enroll" }
    },
    {
      title: "Circular Manufacturing.\nSustainable Future.",
      description: "Transforming e-waste into opportunity through circular fabrication and upcycling for social good.",
      pillar: "Manufacturing",
      icon: "🏭",
      backgroundImage: "/images/manufacturing.png",
      cta1: { text: "Our Process", link: "/manufacturing" },
      cta2: { text: "Partner With Us", link: "/partner" }
    },
    {
      title: "Open Source Software.\nLocal Innovation.",
      description: "Building open-source tools that empower communities to create their own technological solutions.",
      pillar: "Software",
      icon: "💻",
      backgroundImage: "/images/software.png",
      cta1: { text: "View Projects", link: "/projects" },
      cta2: { text: "Contribute", link: "/contribute" }
    },
    {
      title: "Community Makerspaces.\nCollaborative Learning.",
      description: "Creating accessible spaces where innovators gather to research, experiment, and build together.",
      pillar: "Open Labs",
      icon: "🔬",
      backgroundImage: "/images/workingspace.png",
      cta1: { text: "Visit Labs", link: "/labs" },
      cta2: { text: "Book a Space", link: "/book" }
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full text-white overflow-hidden" style={{ height: 'calc(100vh - 88px)' }}>
      {/* Background Image with transition */}
      <div 
        key={currentSlide}
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
          backgroundColor: '#39366F'
        }}
      >
        {/* Brand Color Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/70 via-[#2a2850]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content with animations */}
      <div className="relative z-10 w-full h-full flex items-center px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl" key={currentSlide}>
          {/* Main Headline */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 animate-fade-in-up"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
          >
            {slides[currentSlide].title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {index === 0 && line.includes('Innovation') ? (
                  <>
                    {line.split(' ').map((word, wordIndex) => 
                      word === 'Innovation.' ? (
                        <span key={wordIndex} className="text-[#5B9BD5]">{word}</span>
                      ) : (
                        <span key={wordIndex}>{word} </span>
                      )
                    )}
                  </>
                ) : (
                  line
                )}
                {index < slides[currentSlide].title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          
          {/* Description */}
          <p 
            className="text-base md:text-lg text-gray-100 mb-8 leading-relaxed max-w-2xl animate-fade-in-up"
            style={{ 
              textShadow: '1px 1px 4px rgba(0,0,0,0.4)',
              animationDelay: '0.1s' 
            }}
          >
            {slides[currentSlide].description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-row gap-3 md:gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href={slides[currentSlide].cta1.link}
              className="group bg-[#39366F] hover:bg-[#2a2850] text-white px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base flex-1 md:flex-none"
            >
              {slides[currentSlide].cta1.text}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href={slides[currentSlide].cta2.link}
              className="group bg-white/20 backdrop-blur-sm border-2 border-[#39366F] hover:bg-white hover:text-[#39366F] text-white px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-1 md:gap-2 text-sm md:text-base flex-1 md:flex-none"
            >
              {slides[currentSlide].cta2.text}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Slideshow Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex justify-center items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-500 hover:scale-110 ${
              index === currentSlide
                ? 'bg-white w-12 h-3 shadow-lg'
                : 'bg-white/50 w-3 h-3 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
