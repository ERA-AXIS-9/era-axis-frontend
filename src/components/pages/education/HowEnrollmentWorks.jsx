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
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            How Enrollment Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${step.color}15`, border: `2px solid ${step.color}30` }}
                  >
                    <IconComponent size={28} style={{ color: step.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors">
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

export default HowEnrollmentWorks;
