import React from 'react';

const AboutTheLabs = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
            About the Labs
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content - Text */}
          <div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              ERA AXIS Open Labs are community-driven R&D hubs where learners, startups, companies, and individuals access tools to prototype, test, and refine ideas.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              3D printers, electronics benches, machining tools, cloud-connected workstations, and expert mentorship are all available to help you create solutions for real problems—no matter your background or skill level.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Innovation belongs to everyone – our labs ensure any idea can become reality.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gradient-to-br from-gray-100 to-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Lab Space Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheLabs;
