import React from 'react';
import { GraduationCap, Recycle, Heart } from 'lucide-react';

const WhyDonate = () => {
  const reasons = [
    {
      icon: GraduationCap,
      title: 'Empower Learners',
      description: 'STEM access for youth and learners',
      color: '#39366F'
    },
    {
      icon: Recycle,
      title: 'Support Sustainability',
      description: 'E-waste into training tools',
      color: '#5B9BD5'
    },
    {
      icon: Heart,
      title: 'Protect the Planet',
      description: 'Reducing toxic waste dumps',
      color: '#2a2850'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Why Donate?
          </h2>
        </div>

        {/* Reason Cards - Impact Stats Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden min-h-[120px] flex items-center"
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${reason.color}20, ${reason.color}10)` }}
                ></div>

                {/* Content - Horizontal Layout */}
                <div className="flex items-center gap-4 relative z-10 w-full">
                  {/* Icon */}
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 bg-gray-50 group-hover:bg-gray-100 flex-shrink-0"
                  >
                    <IconComponent 
                      size={24}
                      style={{ color: reason.color }}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-black mb-1 leading-tight">
                      {reason.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-snug">
                      {reason.description}
                    </p>
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

export default WhyDonate;
