import React from 'react';
import { Building2, GraduationCap, Globe, Users } from 'lucide-react';

const PartnershipTypes = () => {
  const partnershipTypes = [
    {
      icon: Building2,
      title: 'Corporate Partners',
      description: 'Companies investing in STEM education and innovation programs.',
      benefits: ['Brand visibility', 'CSR impact', 'Talent pipeline', 'Innovation access']
    },
    {
      icon: GraduationCap,
      title: 'Educational Institutions',
      description: 'Schools and universities expanding STEM learning opportunities.',
      benefits: ['Curriculum enhancement', 'Student engagement', 'Teacher training', 'Resource sharing']
    },
    {
      icon: Globe,
      title: 'International Organizations',
      description: 'Global entities supporting sustainable development goals.',
      benefits: ['Impact scaling', 'Knowledge exchange', 'Best practices', 'Global reach']
    },
    {
      icon: Users,
      title: 'Community Partners',
      description: 'Local organizations fostering grassroots innovation.',
      benefits: ['Community impact', 'Local expertise', 'Cultural relevance', 'Sustainable growth']
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Partnership Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl">
            We collaborate with diverse partners to maximize our impact across Africa's innovation ecosystem.
          </p>
        </div>

        {/* Partnership Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#39366F] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[#39366F]" />
                  </div>
                  <h3 className="text-sm font-semibold text-black">{type.title}</h3>
                </div>
                
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  {type.description}
                </p>
                
                <div className="space-y-1">
                  {type.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#39366F] rounded-full"></div>
                      <span className="text-xs text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnershipTypes;
