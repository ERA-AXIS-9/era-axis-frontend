import React from 'react';
import { AlertCircle, Target, TrendingUp } from 'lucide-react';

const ProjectChallenges = ({ challenges }) => {
  const icons = {
    challenge: AlertCircle,
    solution: Target,
    results: TrendingUp
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            From Challenge to Results
          </h2>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((item, index) => {
            const IconComponent = icons[item.type] || AlertCircle;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#39366F]/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-5 h-5 text-[#39366F]" />
                </div>
                
                <h3 className="text-base font-semibold text-black mb-2 capitalize">
                  {item.type}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectChallenges;
