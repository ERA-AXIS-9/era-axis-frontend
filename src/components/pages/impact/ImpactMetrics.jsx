import React from 'react';
import { Users, Recycle, Lightbulb, Globe } from 'lucide-react';

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: Users,
      number: "1,500+",
      label: "Learners trained",
      iconColor: "text-gray-600"
    },
    {
      icon: Lightbulb,
      number: "10 tons",
      label: "E-waste transformed",
      iconColor: "text-green-500"
    },
    {
      icon: Recycle,
      number: "50+",
      label: "Community solutions",
      iconColor: "text-red-500"
    },
    {
      icon: Globe,
      number: "4",
      label: "Global recognition",
      iconColor: "text-yellow-500"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Impact Metrics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">
                
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <Icon className={`${metric.iconColor}`} size={24} />
                  </div>

                  {/* Content */}
                  <div>
                    {/* Number */}
                    <div className="text-3xl sm:text-4xl font-extrabold text-black mb-1 group-hover:text-[#39366F] transition-colors">
                      {metric.number}
                    </div>

                    {/* Label */}
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">
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
