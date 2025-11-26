import React from 'react';

const DonatePartnership = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Left Content */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Support ERA AXIS
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                When you donate to ERA AXIS, you don't just give — you create innovators, solutions, and a healthier planet.
              </p>
              <p className="text-sm text-gray-500">
                Ready to make an impact? Choose your preferred way to contribute.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
              <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Donate Now
              </button>
              <button className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                Give E-Waste
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonatePartnership;
