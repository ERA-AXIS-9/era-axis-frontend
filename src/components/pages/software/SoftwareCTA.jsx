import React from 'react';

const SoftwareCTA = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center justify-between hover:shadow-md transition-all duration-300">
          
          <h2 className="text-xl sm:text-2xl font-bold text-black">
            Ready to bring your idea to life?
          </h2>
          
          <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex-shrink-0">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCTA;
