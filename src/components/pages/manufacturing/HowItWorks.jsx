import React from 'react';
import { MessageSquare, Lightbulb, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consult',
    description: 'Share your needs. We listen, assess, and advise.',
    color: '#39366F'
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Design',
    description: 'Our team creates blueprints tailored to your specs.',
    color: '#5B9BD5'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Build',
    description: 'Fabricate using e-waste, local materials, and precision tools.',
    color: '#2a2850'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Deliver',
    description: 'Test, refine, and hand over ready-to-use solutions.',
    color: '#4a8bc2'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg" style={{ backgroundColor: step.color, color: 'white' }}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 mt-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${step.color}15`, border: `2px solid ${step.color}30` }}
                  >
                    <IconComponent size={24} style={{ color: step.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
