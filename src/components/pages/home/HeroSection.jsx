import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Empowering Innovators.\nTransforming Communities.",
      description: "An innovation ecosystem advancing technology education, circular manufacturing, and open software to solve real community challenges.",
      pillar: "Education",
      icon: "🎓",
      backgroundImage: "/images/workingspace.png", // Using workingspace as placeholder for Education
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

  const stats = [
    { number: '1,500+', label: 'Learners trained' },
    { number: '—', label: 'E-waste transformed' },
    { number: '50+', label: 'Community solutions' },
    { number: '—', label: 'Global recognition' }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative text-white py-16 min-h-[500px] overflow-hidden">
      {/* Background Image with transition */}
      <div 
        key={currentSlide}
        className="absolute inset-0 bg-cover bg-center animate-fade-in-smooth"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
          backgroundColor: '#39366F' // Fallback color if image doesn't load
        }}
      >
        {/* Sophisticated Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/70 via-[#2a2850]/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content with animations */}
      <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 h-full flex items-center">
        <div className="max-w-3xl" key={currentSlide}>
          {/* Headline with text shadow for readability */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5 animate-fade-in-up"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
          >
            {slides[currentSlide].title.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < slides[currentSlide].title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          {/* Description with better contrast */}
          <p 
            className="text-base md:text-lg text-gray-100 mb-8 leading-relaxed max-w-2xl animate-fade-in-up"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.4)', animationDelay: '0.1s' }}
          >
            {slides[currentSlide].description}
          </p>

          {/* CTAs with enhanced styling */}
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href={slides[currentSlide].cta1.link}
              className="group bg-[#39366F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2a2850] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              {slides[currentSlide].cta1.text}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href={slides[currentSlide].cta2.link}
              className="group bg-white/20 backdrop-blur-sm border-2 border-[#39366F] text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#39366F] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              {slides[currentSlide].cta2.text}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Slideshow Dots - Enhanced styling */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center gap-3">
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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
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
        @keyframes fade-in-smooth {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in-smooth {
          animation: fade-in-smooth 1.2s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;