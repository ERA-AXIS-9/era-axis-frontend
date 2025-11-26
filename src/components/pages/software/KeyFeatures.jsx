import React from 'react';
import { Wifi, Clock, Cloud, BarChart3 } from 'lucide-react';

const KeyFeatures = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Device Integration',
      description: 'Connect sensors, machines, and devices seamlessly.'
    },
    {
      icon: Clock,
      title: 'Real-Time Data Tracking',
      description: 'Monitor live data streams with minimal latency.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Connected Dashboard',
      description: 'Access your data anywhere, anytime, on any device.'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Visualize trends and get predictive insights.'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Key Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
              >
                <div className="w-10 h-10 bg-[#39366F]/10 rounded-lg flex items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 text-[#39366F]" />
                </div>
                
                <h3 className="text-base font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
