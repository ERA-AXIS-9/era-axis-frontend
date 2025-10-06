import React from 'react';

const MissionVision = () => {
  return (
    <section id="mission" className="pt-2 pb-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8">Mission & Vision</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
            <h3 className="text-xl font-bold text-black group-hover:text-[#39366F] mb-4 transition-colors duration-300">Mission</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              To deliver high-quality technology education and innovation platforms for learners of all ages, 
              empowering them to build solutions that address real-world challenges in their communities.
            </p>
          </div>
          
          {/* Vision Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg p-8 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
            <h3 className="text-xl font-bold text-black group-hover:text-[#5B9BD5] mb-4 transition-colors duration-300">Vision</h3>
            <p className="text-base text-gray-700 leading-relaxed">
              To build thriving community-led tech hubs, tools, and open infrastructure that enable communities 
              to design, build, and sustain solutions that improve daily lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
