import React, { useState, useEffect, useRef } from 'react';
import { Users, Recycle, Lightbulb, Globe } from 'lucide-react';

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({});
  const sectionRef = useRef();

  const stats = [
    {
      icon: Users,
      number: 1500,
      suffix: '+',
      label: 'Learners trained',
      color: '#39366F'
    },
    {
      icon: Recycle,
      number: 0,
      suffix: '',
      label: 'E-waste transformed',
      color: '#5B9BD5',
      placeholder: '—'
    },
    {
      icon: Lightbulb,
      number: 50,
      suffix: '+',
      label: 'Community solutions',
      color: '#2a2850'
    },
    {
      icon: Globe,
      number: 0,
      suffix: '',
      label: 'Global recognition',
      color: '#4a8bc2',
      placeholder: '—'
    }
  ];

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startCountingAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Animated number counting
  const startCountingAnimation = () => {
    stats.forEach((stat, index) => {
      if (stat.number > 0) {
        let start = 0;
        const end = stat.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setAnimatedNumbers(prev => ({
            ...prev,
            [index]: Math.floor(start)
          }));
        }, 16);
      }
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-gradient-to-r from-gray-100 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white p-4 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)` }}
                ></div>
                
                {/* Content */}
                <div className="flex items-center space-x-3 relative z-10">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 bg-gray-50 group-hover:bg-gray-100"
                  >
                    <IconComponent 
                      size={24} 
                      style={{ color: stat.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline space-x-1">
                      <span 
                        className="text-3xl font-extrabold leading-tight"
                        style={{ color: stat.color }}
                      >
                        {stat.placeholder ? stat.placeholder : (isVisible ? (animatedNumbers[index] || 0) : 0)}
                      </span>
                      {!stat.placeholder && (
                        <span 
                          className="text-xl font-bold"
                          style={{ color: stat.color }}
                        >
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-black mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
