import React from 'react';
import { Shield, Zap, Heart } from 'lucide-react';

const CustomWhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Scalable & Secure',
      description: 'Built with best practices to grow with your organization.'
    },
    {
      icon: Zap,
      title: 'Open-Friendly Interface',
      description: 'Intuitive designs that anyone can use without extensive training.'
    },
    {
      icon: Heart,
      title: 'Tailored for Local & Global Impact',
      description: 'Solutions designed for African contexts with global standards.'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Why Choose Us
          </h2>
        </div>

        {/* Reasons Grid - Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-[#39366F]" />
                  </div>
                  
                  <div>
                    <h3 className="text-base font-semibold text-black mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
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

export default CustomWhyChooseUs;
