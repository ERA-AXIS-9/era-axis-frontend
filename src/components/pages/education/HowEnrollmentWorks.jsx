import React from 'react';
import { ClipboardList, CreditCard, GraduationCap } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Choose your program',
    description: 'Pick the learning path that fits your goals and schedule.',
    color: '#39366F'
  },
  {
    icon: CreditCard,
    number: '02',
    title: 'Secure your enrollment',
    description: 'Complete payment and confirm your spot in the cohort.',
    color: '#5B9BD5'
  },
  {
    icon: GraduationCap,
    number: '03',
    title: 'Start learning with mentors & kits',
    description: 'Get your materials, meet your mentors, and begin building.',
    color: '#2a2850'
  }
];

const HowEnrollmentWorks = () => {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          How Enrollment Works
        </h2>

        {/* Steps Grid - Horizontal Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
            >
              {/* Step Number */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700 text-sm flex-shrink-0">
                  {step.number}
                </div>
                
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowEnrollmentWorks;
