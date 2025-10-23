import React from 'react';

const CurrentPartners = () => {
  const partners = [
    {
      category: 'Corporate Partners',
      partners: [
        { name: 'TechCorp Ghana', logo: '🏢', description: 'Supporting innovation labs' },
        { name: 'Future Industries', logo: '🏭', description: 'Equipment and mentorship' },
        { name: 'Digital Solutions Ltd', logo: '💻', description: 'Software development training' }
      ]
    },
    {
      category: 'Educational Partners',
      partners: [
        { name: 'University of Ghana', logo: '🎓', description: 'Research collaboration' },
        { name: 'KNUST', logo: '🔬', description: 'Engineering programs' },
        { name: 'Ghana Education Service', logo: '📚', description: 'Curriculum integration' }
      ]
    },
    {
      category: 'International Partners',
      partners: [
        { name: 'UNESCO', logo: '🌍', description: 'Global education initiatives' },
        { name: 'World Bank', logo: '🏦', description: 'Development funding' },
        { name: 'UNICEF', logo: '🤝', description: 'Youth empowerment' }
      ]
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to work with organizations that share our vision of empowering African innovation.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="space-y-8">
          {partners.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              
              {/* Category Title */}
              <h3 className="text-lg font-semibold text-black mb-4">
                {category.category}
              </h3>
              
              {/* Partners in Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.partners.map((partner, partnerIndex) => (
                  <div 
                    key={partnerIndex}
                    className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">{partner.logo}</div>
                      <div>
                        <h4 className="text-sm font-semibold text-black">
                          {partner.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-black mb-2">
              Join Our Partner Network
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Ready to make a lasting impact on African innovation? Let's explore partnership opportunities.
            </p>
            <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentPartners;
