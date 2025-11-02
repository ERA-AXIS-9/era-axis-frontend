import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

const testimonials = [
  {
    quote: "After training, I was invited to join the Manufacturing team. Now I'm paid to build and fix devices for clients.",
    author: "Joseph",
    role: "Manufacturing Technician, ERA AXIS Graduate",
    avatar: "J"
  },
  {
    quote: "ERA AXIS delivered on time and on budget. Their innovative use of recycled materials saved us thousands.",
    author: "Jane Mensah",
    role: "Operations Manager, GreenTech Ltd",
    avatar: "J"
  },
  {
    quote: "The custom fabrication service helped us prototype our product 60% faster than traditional methods.",
    author: "Kwame Asante",
    role: "Product Designer, TechStart Ghana",
    avatar: "K"
  },
  {
    quote: "Their sustainable production approach reduced our manufacturing costs while improving quality.",
    author: "Ama Osei",
    role: "CEO, EcoElectronics",
    avatar: "A"
  }
];

const metrics = [
  {
    icon: TrendingUp,
    value: '50+',
    label: 'Solutions built',
    color: '#39366F'
  },
  {
    icon: Users,
    value: '30+',
    label: 'Clients served',
    color: '#5B9BD5'
  },
  {
    icon: Award,
    value: 'Tons',
    label: 'E-waste repurposed',
    color: '#2a2850'
  }
];

const TestimonialsImpact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Get visible testimonials (show 3 at a time on desktop, 2 on tablet, 1 on mobile)
  const getVisibleTestimonials = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) {
        // Desktop: show 3 cards
        return [
          testimonials[currentIndex],
          testimonials[(currentIndex + 1) % testimonials.length],
          testimonials[(currentIndex + 2) % testimonials.length]
        ];
      } else if (window.innerWidth >= 768) {
        // Tablet: show 2 cards
        return [
          testimonials[currentIndex],
          testimonials[(currentIndex + 1) % testimonials.length]
        ];
      }
    }
    // Mobile: show 1 card
    return [testimonials[currentIndex]];
  };

  const visibleTestimonials = getVisibleTestimonials();
  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Testimonials
          </h2>
        </div>

        {/* Impact Metrics Section Removed - Moved to separate component */}
        
        {/* Testimonials Carousel */}
        <div className="relative mb-8">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * 33.333}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden flex-shrink-0 w-full lg:w-1/3 md:w-1/2"
                >
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#39366F]/5 to-[#5B9BD5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Quote mark decoration */}
                  <div className="absolute top-4 right-4 text-6xl text-[#39366F]/10 font-serif leading-none">"</div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Quote */}
                    <blockquote className="text-base font-medium text-gray-800 leading-relaxed mb-8 relative">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex items-center space-x-4">
                      {/* Avatar with Letter */}
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {testimonial.avatar}
                        </div>
                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-full bg-[#39366F] opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                      </div>
                      
                      {/* Name and Role */}
                      <div className="flex-1">
                        <div className="text-base font-bold text-black group-hover:text-[#39366F] transition-colors duration-300">
                          {testimonial.author}
                        </div>
                        <div className="text-sm font-semibold text-gray-600 tracking-wide">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39366F] to-[#5B9BD5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsImpact;
