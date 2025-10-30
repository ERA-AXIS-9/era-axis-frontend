import React from 'react';
import { Lightbulb, Wrench, FlaskConical, Cpu, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Product Development',
    description: 'Turn prototypes into real, durable products.',
    link: '/services/manufacturing/product-development',
    color: '#39366F'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Keep existing systems running efficiently.',
    link: '/services/manufacturing/maintenance',
    color: '#5B9BD5'
  },
  {
    icon: FlaskConical,
    title: 'Prototyping Innovation',
    description: 'Rapid prototyping with e-waste and local materials.',
    link: '/services/manufacturing/prototyping',
    color: '#2a2850'
  },
  {
    icon: Cpu,
    title: 'Hardware Support',
    description: 'Specialized equipment for schools and businesses.',
    link: '/contact',
    color: '#4a8bc2'
  }
];

const CoreServices = () => {
  return (
    <section id="core-services" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Core Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <a
                key={index}
                href={service.link}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group block"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.color}15`, border: `2px solid ${service.color}30` }}
                  >
                    <IconComponent size={24} style={{ color: service.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-1 text-sm font-semibold text-[#39366F] group-hover:gap-2 transition-all">
                  Learn More
                  <ChevronRight size={16} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
