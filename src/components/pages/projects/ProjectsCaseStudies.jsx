import React from 'react';
import { Clock, TrendingUp, Users } from 'lucide-react';

const ProjectsCaseStudies = () => {
  const caseStudies = [
    {
      title: "AgriZplanter: From Idea to Field Pilot",
      description: "Student team iterated 3 prototypes, achieving 52% sowing accuracy gains in trials.",
      category: "Agriculture"
    },
    {
      title: "EcoWatch: Community Air Quality",
      description: "Sensors deployed across 5 wards informed traffic policy recommendations.",
      category: "Environment"
    },
    {
      title: "RecyBin Smart: Data to Action",
      description: "Waste sorting insights helped schools reduce landfill by 18% in one term.",
      category: "Sustainability"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Case Studies / Stories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#39366F] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              
              {/* Case Study Title */}
              <h3 className="text-lg font-bold text-black mb-4 group-hover:text-[#39366F] transition-colors leading-tight">
                {study.title}
              </h3>

              {/* Case Study Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {study.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsCaseStudies;
