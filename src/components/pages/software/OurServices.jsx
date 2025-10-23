import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Database, Smartphone } from 'lucide-react';

const OurServices = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific needs and challenges.',
      link: 'Learn more →',
      url: '/services/software/custom'
    },
    {
      icon: Database,
      title: 'UI + UX & Data Platform',
      description: 'Beautiful, intuitive interfaces combined with powerful data management systems.',
      link: 'Learn more →',
      url: '/services/software/iot'
    },
    {
      icon: Smartphone,
      title: 'Household Solutions',
      description: 'Smart home applications that make daily life easier and more efficient.',
      link: 'Learn more →',
      url: '/services/software/household'
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
              >
                <div className="w-10 h-10 bg-[#39366F]/10 rounded-lg flex items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 text-[#39366F]" />
                </div>
                
                <h3 className="text-base font-semibold text-black mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {service.description}
                </p>
                
                <Link 
                  to={service.url}
                  className="text-xs text-[#39366F] hover:text-[#2a2850] font-medium transition-colors duration-200"
                >
                  {service.link}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
