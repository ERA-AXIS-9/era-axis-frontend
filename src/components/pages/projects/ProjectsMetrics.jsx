import React from 'react';

const ProjectsMetrics = () => {
  const metrics = [
    {
      number: "36+",
      label: "Projects launched"
    },
    {
      number: "22",
      label: "Communities served"
    },
    {
      number: "58",
      label: "Innovations created"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Impact Metrics
          </h2>
        </div>

        {/* Professional Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl hover:border-[#39366F] hover:-translate-y-1 transition-all duration-300 group">
              
              {/* Number */}
              <div className="text-5xl font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors duration-300">
                {metric.number}
              </div>

              {/* Label */}
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>

              {/* Bottom accent line */}
              <div className="w-16 h-1 bg-gray-200 mx-auto mt-4 rounded-full group-hover:bg-[#39366F] transition-colors duration-300"></div>

            </div>
          ))}
        </div>

        {/* Description and Call to Action */}
        <div className="border-t border-gray-200 pt-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-black font-medium mb-6">
              Explore our full portfolio or partner on a new challenge.
              <br />
              We collaborate with students, startups, and communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore All Projects
              </button>
              
              <button className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-8 py-3 rounded-xl font-medium transition-all duration-300 bg-white hover:bg-[#39366F]/5">
                Partner With Us
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectsMetrics;
