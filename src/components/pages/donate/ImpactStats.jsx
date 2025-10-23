import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Recycle, Globe } from 'lucide-react';

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
      icon: Award,
      number: 50,
      suffix: '+',
      label: 'Certified tech hubs',
      color: '#5B9BD5'
    },
    {
      icon: Recycle,
      number: 8,
      suffix: ' Tons',
      label: 'E-waste upcycled',
      color: '#2a2850'
    },
    {
      icon: Globe,
      number: 12,
      suffix: '',
      label: 'Global in impact',
      color: '#4a8bc2'
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
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
            Impact So Far
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-[#39366F] transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                    <IconComponent 
                      size={24}
                      style={{ color: stat.color }}
                    />
                  </div>
                </div>

                {/* Number */}
                <div className="mb-2">
                  <span 
                    className="text-3xl sm:text-4xl font-extrabold"
                    style={{ color: stat.color }}
                  >
                    {isVisible ? (animatedNumbers[index] || 0) : 0}
                  </span>
                  <span 
                    className="text-2xl sm:text-3xl font-bold ml-1"
                    style={{ color: stat.color }}
                  >
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-sm sm:text-base font-semibold text-gray-700">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
