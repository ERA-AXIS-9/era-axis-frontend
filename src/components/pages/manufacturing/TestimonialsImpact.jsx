import React from 'react';
import { Quote, TrendingUp, Users, Award } from 'lucide-react';

const testimonial = {
  quote: "ERA AXIS delivered on time and on budget. Their innovative use of recycled materials saved us thousands.",
  author: "Jane Mensah",
  role: "Operations Manager, GreenTech Ltd"
};

const metrics = [
  {
    icon: TrendingUp,
    value: '50+',
    label: 'Projects completed',
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
    value: '95%',
    label: 'Client satisfaction',
    color: '#2a2850'
  }
];

const TestimonialsImpact = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Testimonials & Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Testimonial Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            {/* Quote Icon */}
            <div className="mb-4">
              <Quote size={40} className="text-[#39366F]/20" />
            </div>

            {/* Quote Text */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
              "{testimonial.quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-black">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-3 gap-6">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${metric.color}15`, border: `2px solid ${metric.color}30` }}
                      >
                        <IconComponent size={24} style={{ color: metric.color }} />
                      </div>
                    </div>

                    {/* Value */}
                    <div className="text-3xl font-bold mb-1" style={{ color: metric.color }}>
                      {metric.value}
                    </div>

                    {/* Label */}
                    <p className="text-xs text-gray-600 leading-tight">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsImpact;
