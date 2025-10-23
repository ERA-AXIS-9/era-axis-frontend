import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Affordable & Practical',
      description: 'Open-source, lean codebase, and maintainable stacks that fit budgets.'
    },
    {
      title: 'Built With Local Context',
      description: 'Developed with communities to reflect real-world needs.'
    },
    {
      title: 'Scalable for Communities & Enterprises',
      description: 'From pilots to production, designed to grow with you.'
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Why Choose ERA AXIS
          </h2>
        </div>

        {/* Reasons Grid - Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
            >
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

export default WhyChooseUs;
