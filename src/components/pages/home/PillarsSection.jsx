import React from 'react';

const PillarsSection = () => {
  const pillars = [
    {
      title: 'Education',
      description: 'Bootcamps, certifications, and workshops for all ages.',
      icon: '🎓'
    },
    {
      title: 'Manufacturing',
      description: 'Circular fabrication and e-waste upcycling for social good.',
      icon: '🏭'
    },
    {
      title: 'Software',
      description: 'Open-source tools that power local innovation.',
      icon: '💻'
    },
    {
      title: 'Open Labs',
      description: 'Community makerspaces and research hubs.',
      icon: '🔬'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Pillars</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#39366F] bg-opacity-10 text-[#39366F] flex items-center justify-center text-2xl mb-4">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{pillar.title}</h3>
              <p className="text-gray-600 mb-4">{pillar.description}</p>
              <a 
                href="#" 
                className="text-[#39366F] font-medium hover:text-[#2a2850] inline-flex items-center text-sm"
              >
                Explore
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;