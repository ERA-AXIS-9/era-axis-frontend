import React from 'react';

const PartnershipBenefits = () => {
  const benefits = [
    {
      title: 'Contribute to education & innovation',
      description: 'Support learning programs, labs, and talent development.'
    },
    {
      title: 'Support sustainable manufacturing',
      description: 'Advance local production, circularity, and green jobs.'
    },
    {
      title: 'Collaborate in open labs & research',
      description: 'Pilot projects and publish open results with our teams.'
    },
    {
      title: 'Gain recognition as a social impact leader',
      description: 'Feature in events, reports, and global showcases.'
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              Partnership Benefits
            </h2>
            <p className="text-sm text-gray-600">
              Specific advantages for mission-aligned partners.
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-500 font-medium">Tailored Programs</span>
          </div>
        </div>

        {/* Benefits Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          
          {/* Top Left */}
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-[#39366F] rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-sm font-semibold text-black mb-2">
                Contribute to education & innovation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Support learning programs, labs, and talent development.
              </p>
            </div>
          </div>

          {/* Top Right */}
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-[#39366F] rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-sm font-semibold text-black mb-2">
                Support sustainable manufacturing
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Advance local production, circularity, and green jobs.
              </p>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-[#39366F] rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-sm font-semibold text-black mb-2">
                Collaborate in open labs & research
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pilot projects and publish open results with our teams.
              </p>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-[#39366F] rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-sm font-semibold text-black mb-2">
                Gain recognition as a social impact leader
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Feature in events, reports, and global showcases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBenefits;
