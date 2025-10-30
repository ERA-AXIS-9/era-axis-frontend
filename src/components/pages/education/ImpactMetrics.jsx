import React from 'react';
import { Users, Award, Lightbulb } from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: '1,500+',
    label: 'Learners trained',
    color: '#39366F'
  },
  {
    icon: Award,
    value: '85',
    label: 'Completion rate',
    color: '#5B9BD5'
  },
  {
    icon: Lightbulb,
    value: '52',
    label: 'Community solutions built',
    color: '#2a2850'
  }
];

const ImpactMetrics = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Impact Metrics
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${metric.color}15`, border: `2px solid ${metric.color}30` }}
                  >
                    <IconComponent size={32} style={{ color: metric.color }} />
                  </div>
                </div>

                {/* Value */}
                <div className="text-4xl sm:text-5xl font-bold mb-2 group-hover:text-[#39366F] transition-colors" style={{ color: metric.color }}>
                  {metric.value}
                </div>

                {/* Label */}
                <p className="text-gray-600 font-medium">
                  {metric.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
