import React from 'react';
import { Grid3x3 } from 'lucide-react';

const WhyHouseholdSolutions = () => {
  const reasons = [
    'Affordable',
    'Easy to Use',
    'Built with Local Needs in Mind'
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left - Title and Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
              Why ERA AXIS Household Solutions?
            </h2>
            <p className="text-sm text-gray-500">
              Designed to be practical, inclusive, and future-proof for families.
            </p>
          </div>

          {/* Right - Simple List */}
          <div className="space-y-3">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="flex items-center gap-3"
              >
                <Grid3x3 className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-base text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHouseholdSolutions;
