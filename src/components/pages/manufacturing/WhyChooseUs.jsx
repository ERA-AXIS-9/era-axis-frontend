import React from 'react';
import { Recycle, DollarSign, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Recycle,
    title: 'Affordable',
    description: 'E-waste reuse keeps costs low.',
    color: '#39366F'
  },
  {
    icon: DollarSign,
    title: 'Reliable',
    description: 'Proven track record of quality work.',
    color: '#5B9BD5'
  },
  {
    icon: Users,
    title: 'Scalable',
    description: 'From single devices to full systems.',
    color: '#2a2850'
  },
  {
    icon: Zap,
    title: 'Fast turnaround',
    description: 'Quick delivery without compromising quality.',
    color: '#4a8bc2'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Why Choose ERA AXIS
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${benefit.color}15`, border: `2px solid ${benefit.color}30` }}
                  >
                    <IconComponent size={28} style={{ color: benefit.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
