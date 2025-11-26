import React from 'react';

const GalleryCTA = () => (
  <section className="py-12 bg-gray-50">
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between hover:shadow-md transition-all duration-300">
        <h2 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-0">
          Have an idea? Let's build it together.
        </h2>
        <a
          href="#submit-project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 flex-shrink-0"
        >
          Submit a Project Idea
        </a>
      </div>
    </div>
  </section>
);

export default GalleryCTA;
