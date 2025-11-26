import React from 'react';
import { Check, Star, ChevronRight } from 'lucide-react';

const plans = [
  {
    title: 'Student',
    price: 'GHS 100',
    period: '/month',
    features: [
      'Access during school hours',
      'Basic training included',
      'Community support'
    ],
    color: '#39366F',
    popular: false
  },
  {
    title: 'Startup',
    price: 'GHS 400',
    period: '/month',
    features: [
      'Extended hours access',
      'Expert mentorship',
      'Priority booking'
    ],
    color: '#5B9BD5',
    popular: true
  },
  {
    title: 'Organization',
    price: 'GHS 1,300',
    period: '/month',
    features: [
      'Full 24/7 access',
      'Dedicated support',
      'Custom workshops'
    ],
    color: '#2a2850',
    popular: false
  }
];

const MembershipPlans = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Membership Plans
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
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#39366F] text-white rounded-full text-xs font-semibold">
                    <Star size={14} className="fill-white" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-2">
                {plan.title}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold" style={{ color: plan.color }}>
                  {plan.price}
                </span>
                <span className="text-gray-500 text-lg">{plan.period}</span>
              </div>

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
                href="/services/open-labs/membership"
                className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Get Started
                <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
