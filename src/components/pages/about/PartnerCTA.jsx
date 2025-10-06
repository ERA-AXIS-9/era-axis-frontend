import React from 'react';

const PartnerCTA = () => {
  return (
    <section className="pt-4 pb-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">Partner with ERA AXIS</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Collaborate on programs, pilots, and community impact initiatives.
              </p>
              <p className="text-sm text-gray-500">
                Looking for programs? Explore our Services to see curricula, labs, and platforms.
              </p>
            </div>
            
            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/partner"
                className="bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Partner With Us
              </a>
              <a 
                href="/donate"
                className="border-2 border-[#39366F] text-[#39366F] px-6 py-3 rounded-lg font-semibold hover:bg-[#39366F] hover:text-white transition-all duration-300 text-center"
              >
                Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
