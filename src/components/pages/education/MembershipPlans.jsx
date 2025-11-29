import React from 'react';
import { Check, Star, ChevronRight } from 'lucide-react';

const plans = [
  {
    title: 'Student',
    price: 'GHS 15',
    period: '/month',
    features: [
      'Continuous access to workshop tools and digital resources',
      'Priority use of Open Lab equipment for projects',
      'Support for ongoing prototypes (simulation, CAD, hardware)',
      'Reduced fees for special trainings and competitions',
      'Maintenance of shared machines and tools'
    ],
    color: '#39366F',
    popular: true
  },
  {
    title: 'Startup/Individual',
    price: 'GHS 25',
    period: '/month',
    features: [
      'Everything in Student, plus:',
      'Extended hours access to Open Labs',
      'Expert mentorship and guidance',
      'Priority booking for equipment',
      'Access to innovation challenges and hackathons'
    ],
    color: '#5B9BD5',
    popular: false
  },
  {
    title: 'Organization/Team',
    price: 'GHS 65',
    period: '/month',
    features: [
      'Everything in Startup, plus:',
      'Full 24/7 access to facilities',
      'Dedicated support and custom workshops',
      'Team collaboration spaces',
      'Certificate pathways for members'
    ],
    color: '#2a2850',
    popular: false
  }
];

const EducationMembershipPlans = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Membership Plans
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that fits your innovation journey
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border overflow-hidden ${
                plan.popular ? 'border-[#39366F]' : 'border-gray-100 hover:border-[#39366F]/20'
              }`}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
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
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors duration-300">
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
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                      <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="/services/education/learning-mode"
                  className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationMembershipPlans;
