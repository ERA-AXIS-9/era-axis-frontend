import React from 'react';

const HouseholdShowcase = () => {
  const apps = [
    {
      title: 'Pricing Wizard',
      description: 'Learn more',
      image: '/images/software.png'
    },
    {
      title: 'Safety Mate',
      description: 'Learn more',
      image: '/images/workingspace.png'
    },
    {
      title: 'Family Calendar',
      description: 'Learn more',
      image: '/images/manufacturing.png'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Showcase
          </h2>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
            >
              {/* App Screenshot */}
              <div className="h-48 bg-gray-100">
                <img 
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-black mb-2">
                  {app.title}
                </h3>
                
                <a 
                  href="#" 
                  className="text-sm text-[#39366F] hover:text-[#2a2850] font-medium transition-colors duration-200"
                >
                  {app.description} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseholdShowcase;
