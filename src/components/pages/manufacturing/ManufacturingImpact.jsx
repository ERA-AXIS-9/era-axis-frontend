import React from 'react';
import { TrendingUp, Users, Award } from 'lucide-react';

const ManufacturingImpact = () => {
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

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-left mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
            Our Manufacturing Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Transforming e-waste into sustainable solutions while building skills and creating opportunities across communities.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white p-3 sm:p-4 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${metric.color}20, ${metric.color}10)` }}
                ></div>
                
                {/* Content */}
                <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
                  <div 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 bg-gray-50 group-hover:bg-gray-100 flex-shrink-0"
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
      </div>
    </section>
  );
};

export default ManufacturingImpact;
