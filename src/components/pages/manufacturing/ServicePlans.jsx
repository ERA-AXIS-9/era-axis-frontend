import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const plans = [
  {
    title: 'One-time Service',
    price: '50',
    currency: 'GHS',
    period: 'per visit',
    description: 'Pay per repair or maintenance visit.',
    features: [
      'No commitment',
      'Flexible scheduling',
      'Pay as you go'
    ],
    cta: 'Book Now',
    color: '#39366F',
    current: false
  },
  {
    title: 'Monthly',
    price: '200',
    currency: 'GHS',
    period: 'per month',
    description: 'Regular check-ups and priority support.',
    features: [
      'Monthly inspections',
      'Priority response',
      'Discounted rates'
    ],
    cta: 'Learn More',
    color: '#5B9BD5',
    popular: true,
    current: false
  },
  {
    title: 'Organization Package',
    price: 'Custom',
    currency: '',
    period: 'pricing',
    description: 'Comprehensive coverage for businesses and institutions.',
    features: [
      'Dedicated technician',
      '24/7 emergency support',
      'Custom SLA agreements'
    ],
    cta: 'Contact Sales',
    color: '#2a2850',
    current: false
  }
];

const ServicePlans = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section className="py-10 bg-gradient-to-b from-[#39366F] to-[#2a2850]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8"
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Service Plans
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl p-8 transition-all duration-500 cursor-pointer group ${
                plan.popular 
                  ? 'bg-gradient-to-br from-[#5B9BD5]/20 to-[#39366F]/20 ring-2 ring-[#5B9BD5] shadow-2xl transform scale-105 hover:scale-110 backdrop-blur-sm' 
                  : 'bg-gradient-to-br from-white/5 to-white/10 hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-[#5B9BD5]/50 backdrop-blur-sm'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-[#5B9BD5] text-white rounded-full text-xs font-bold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#5B9BD5] transition-colors duration-300">
                  {plan.title}
                </h3>
                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    {plan.currency && (
                      <span className="text-lg font-semibold text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{plan.currency}</span>
                    )}
                    <span className="text-4xl font-bold text-white group-hover:text-[#5B9BD5] transition-colors duration-300">{plan.price}</span>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">/ {plan.period}</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {plan.description}
                </p>
              </div>

              {/* Current Plan Badge */}
              {plan.current && (
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 rounded text-xs font-medium">
                    Your current plan
                  </span>
                </div>
              )}

              {/* Features */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 group/feature">
                    <div className="mt-0.5">
                      <Check size={16} className="text-[#5B9BD5] group-hover:scale-110 transition-transform duration-300" strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={`/services/manufacturing/subscribe-plan?plan=${plan.title.toLowerCase().replace(/\s+/g, '')}`}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 ${
                  plan.popular
                    ? 'bg-[#5B9BD5] text-white hover:bg-[#39366F] shadow-lg hover:shadow-2xl'
                    : 'bg-white/10 text-white hover:bg-[#5B9BD5] shadow-md hover:shadow-xl border border-white/20'
                }`}
              >
                {plan.cta}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Have an existing plan? <a href="/contact" className="text-[#5B9BD5] hover:underline">Contact support</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePlans;
