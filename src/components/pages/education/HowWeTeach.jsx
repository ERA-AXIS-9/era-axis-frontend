import React from 'react';
import { Lightbulb, Wrench, Languages, FlaskConical } from 'lucide-react';

const teachingMethods = [
  {
    icon: Lightbulb,
    title: 'Project-based learning',
    description: 'Each module ends with a working prototype.',
    color: '#39366F'
  },
  {
    icon: Wrench,
    title: 'Tools from e-waste',
    description: 'Learners use recycled and low-cost materials.',
    color: '#5B9BD5'
  },
  {
    icon: Languages,
    title: 'Local language education',
    description: 'Breaking literacy barriers with inclusive teaching.',
    color: '#2a2850'
  },
  {
    icon: FlaskConical,
    title: 'Mentorship & Labs',
    description: 'Build in ERA AXIS Open Labs with expert guidance.',
    color: '#4a8bc2'
  }
];

const HowWeTeach = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            How We Teach
          </h2>
        </div>

        {/* Teaching Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachingMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#39366F]/20 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${method.color}15`, border: `2px solid ${method.color}30` }}
                    >
                      <IconComponent size={24} style={{ color: method.color }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors duration-300">
                    {method.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {method.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeTeach;
