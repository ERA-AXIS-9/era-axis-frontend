import React from 'react';
import { Check } from 'lucide-react';

const WhyContactUs = () => {
  const reasons = [
    {
      title: 'Flexibility: commission a organization',
      description: 'We work with schools, NGOs, and businesses of all sizes.'
    },
    {
      title: 'Proven projects with measurable impact',
      description: 'Real solutions that have transformed communities and operations.'
    },
    {
      title: 'Local & global innovation expertise',
      description: 'Combining local insights with world-class technology.'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Why Contact Us
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6"
            >
              <div className="w-8 h-8 bg-[#39366F]/10 rounded-full flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-[#39366F]" />
              </div>
              
              <h3 className="text-base font-semibold text-black mb-2">
                {reason.title}
              </h3>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyContactUs;
