import React from 'react';
import { Users, Lightbulb, Award } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: '1,200+',
    label: 'Learners trained',
    color: '#39366F'
  },
  {
    icon: Lightbulb,
    value: '85',
    label: 'Community solutions',
    color: '#5B9BD5'
  },
  {
    icon: Award,
    value: '12',
    label: 'Awards & recognition',
    color: '#2a2850'
  }
];

const ImpactMetrics = () => {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Impact Metrics
        </h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${metric.color}20, ${metric.color}10)` }}
                ></div>
                
                {/* Content - Horizontal Layout */}
                <div className="flex items-center space-x-3 relative z-10">
                  {/* Icon */}
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 bg-gray-50 group-hover:bg-gray-100 flex-shrink-0"
                  >
                    <IconComponent 
                      size={24}
                      style={{ color: metric.color }}
                    />
                  </div>
                  
                  {/* Number and Label */}
                  <div className="flex-1 min-w-0">
                    <div 
                      className="text-2xl sm:text-3xl font-extrabold leading-tight"
                      style={{ color: metric.color }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 mt-0.5 leading-tight">
                      {metric.label}
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

export default ImpactMetrics;
