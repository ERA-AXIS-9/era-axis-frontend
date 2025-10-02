import React from 'react';

const AboutPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-last lg:order-first">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About ERA AXIS</h2>
            <p className="text-gray-600 mb-6">
              We build pathways for learners and communities to co-create solutions through education, 
              ethical manufacturing, open-source software, and shared lab spaces.
            </p>
            <a 
              href="#" 
              className="text-[#39366F] font-medium hover:text-[#2a2850] inline-flex items-center"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="bg-gray-200 rounded-xl aspect-video"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;