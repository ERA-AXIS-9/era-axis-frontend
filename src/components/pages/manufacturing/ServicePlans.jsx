import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

const plans = [
  {
    title: 'One-time Service',
    description: 'Pay per repair or maintenance visit.',
    features: [
      'No commitment',
      'Flexible scheduling',
      'Pay as you go'
    ],
    cta: 'Book Now',
    color: '#39366F'
  },
  {
    title: 'Monthly',
    description: 'Regular check-ups and priority support.',
    features: [
      'Monthly inspections',
      'Priority response',
      'Discounted rates'
    ],
    cta: 'Learn More',
    color: '#5B9BD5',
    popular: true
  },
  {
    title: 'Organization Package',
    description: 'Comprehensive coverage for businesses and institutions.',
    features: [
      'Dedicated technician',
      '24/7 emergency support',
      'Custom SLA agreements'
    ],
    cta: 'Contact Sales',
    color: '#2a2850'
  }
];

const ServicePlans = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Service Plans
          </h2>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                plan.popular ? 'border-[#39366F] shadow-md' : 'border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#39366F] text-white rounded-full text-xs font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-2">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="/contact"
                className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                {plan.cta}
                <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
