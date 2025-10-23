import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "EMPOWERING INNOVATORS. TRANSFORMING COMMUNITIES.",
      description: "An innovation ecosystem advancing technology education, circular manufacturing, and open software to solve real community challenges across Africa.",
      pillar: "Education",
      icon: "🎓",
      backgroundImage: "/images/Homepage/about eraaxis.jpg",
      cta1: { text: "Explore Programs", link: "/programs" },
      cta2: { text: "Enroll Now", link: "/enroll" }
    },
    {
      title: "CIRCULAR MANUFACTURING. SUSTAINABLE FUTURE.",
      description: "Transforming e-waste into opportunity through circular fabrication and upcycling for social good. Building sustainable manufacturing solutions.",
      pillar: "Manufacturing",
      icon: "🏭",
      backgroundImage: "/images/manufacturing.png",
      cta1: { text: "Our Process", link: "/manufacturing" },
      cta2: { text: "Partner With Us", link: "/partner" }
    },
    {
      title: "OPEN SOURCE SOFTWARE. LOCAL INNOVATION.",
      description: "Building open-source tools that empower communities to create their own technological solutions. Driving digital transformation through innovation.",
      pillar: "Software",
      icon: "💻",
      backgroundImage: "/images/software.png",
      cta1: { text: "View Projects", link: "/projects" },
      cta2: { text: "Contribute", link: "/contribute" }
    },
    {
      title: "COMMUNITY MAKERSPACES. COLLABORATIVE LEARNING.",
      description: "Creating accessible spaces where innovators gather to research, experiment, and build together. Fostering collaborative innovation and learning.",
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
      {/* Background Image with modern approach */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          key={currentSlide}
          src={slides[currentSlide].backgroundImage}
          alt={slides[currentSlide].pillar}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
          style={{
            objectPosition: 'center center',
            filter: 'brightness(1.2) contrast(1.1)'
          }}
          loading="lazy"
        />
        {/* Professional overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#39366F]/40 via-[#39366F]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
      </div>

      {/* Content with animations */}
      <div className="relative z-10 w-full h-full flex items-center px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl" key={currentSlide}>
          {/* Main Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-in-up tracking-tight text-white"
            style={{ textShadow: '3px 3px 12px rgba(0,0,0,0.5)' }}
          >
            {slides[currentSlide].title}
          </h1>
          
          {/* Description */}
          <p 
            className="text-lg md:text-xl font-medium text-white mb-10 leading-relaxed max-w-2xl animate-fade-in-up"
            style={{ 
              textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
              animationDelay: '0.1s' 
            }}
          >
            {slides[currentSlide].description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href={slides[currentSlide].cta1.link}
              className="group bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              {slides[currentSlide].cta1.text}
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href={slides[currentSlide].cta2.link}
              className="group bg-transparent border-3 border-white hover:bg-white hover:text-[#39366F] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              {slides[currentSlide].cta2.text}
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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
