import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'UNICEF', logo: 'UNICEF' },
    { name: 'Bloomberg', logo: 'Bloomberg' },
    { name: 'UNDP', logo: 'UNDP' },
    { name: 'MIT', logo: 'MIT' },
    { name: 'Google.org', logo: 'Google.org' },
    { name: 'Local Gov', logo: 'Local Gov' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Partners</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg flex items-center justify-center h-24 border border-gray-200 hover:border-[#39366F] hover:shadow-sm transition-all"
            >
              <span className="text-gray-700 font-medium">{partner.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;