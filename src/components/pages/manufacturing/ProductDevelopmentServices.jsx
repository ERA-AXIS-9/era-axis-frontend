import React from 'react';
import { Lightbulb, Cpu, Package, Settings } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Prototype Development',
    description: 'Transform ideas into working prototypes using sustainable materials and e-waste components.',
    color: '#39366F'
  },
  {
    icon: Cpu,
    title: 'Product Design & Engineering',
    description: 'Complete product design from concept to manufacturing-ready specifications.',
    color: '#5B9BD5'
  },
  {
    icon: Package,
    title: 'Durable Product Manufacturing',
    description: 'Create robust, long-lasting products suitable for real-world deployment.',
    color: '#2a2850'
  },
  {
    icon: Settings,
    title: 'Testing & Refinement',
    description: 'Rigorous testing and optimization to ensure product reliability and performance.',
    color: '#4a8bc2'
  }
];

const ProductDevelopmentServices = () => {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Product Development Services
          </h2>
          <p className="text-gray-600 max-w-3xl">
            Turn prototypes into real, durable products. We transform your innovative ideas into 
            practical, sustainable solutions using local materials and e-waste components.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group"
              >
                {/* Icon */}
                <div className="mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.color}15`, border: `2px solid ${service.color}30` }}
                  >
                    <IconComponent size={20} style={{ color: service.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentServices;
