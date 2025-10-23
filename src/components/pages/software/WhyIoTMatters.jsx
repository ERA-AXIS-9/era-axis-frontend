import React from 'react';
import { Check } from 'lucide-react';

const WhyIoTMatters = () => {
  const reasons = [
    'Scalability',
    'Localized Innovation',
    'Cost-Effective'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left - Title and Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
              Why IoT Matters with ERA AXIS
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We've designed IoT platforms that help organizations make data-driven decisions without needing massive infrastructure or technical expertise on the ground.
            </p>
          </div>

          {/* Right - Simple List */}
          <div className="space-y-3">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4"
              >
                <Check className="w-5 h-5 text-[#39366F] flex-shrink-0" />
                <span className="text-base text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIoTMatters;
