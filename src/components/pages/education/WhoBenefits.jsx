import React from 'react';

const beneficiaries = [
  {
    title: 'Students',
    description: 'After-school, weekend clubs, and competitions to spark curiosity.'
  },
  {
    title: 'Out-of-school youth',
    description: 'Skill training and job-ready pathways for returning to education.'
  },
  {
    title: 'Illiterate learners',
    description: 'Hands-on, visual instruction without heavy text reliance.'
  },
  {
    title: 'Communities',
    description: 'Neighborhood labs creating solutions to local challenges.'
  }
];

const WhoBenefits = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Who Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficiaries.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#39366F] hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#39366F] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoBenefits;
