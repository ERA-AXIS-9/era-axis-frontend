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
    <section className="py-12 bg-gradient-to-r from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
            Impact Metrics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Our commitment to transforming education and building sustainable solutions across Africa.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#39366F]/20 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${metric.color}15, ${metric.color}5)` }}
                ></div>
                
                {/* Content */}
                <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
                  <div 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gray-50 group-hover:bg-gray-100 flex-shrink-0"
                  >
                    <IconComponent 
                      size={20} 
                      className="sm:w-6 sm:h-6"
                      style={{ color: metric.color }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline space-x-1">
                      <span 
                        className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight"
                        style={{ color: metric.color }}
                      >
                        {metric.value}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm md:text-base font-semibold text-black mt-0.5 sm:mt-1 leading-tight">
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
