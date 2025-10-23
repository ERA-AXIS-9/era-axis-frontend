import React from 'react';
import { Lightbulb, Shield, BookOpen } from 'lucide-react';

const EverydaySolutions = () => {
  const solutions = [
    {
      icon: Lightbulb,
      title: 'Smart Lighting & Energy Monitors',
      description: 'Control lights, track usage, and cut waste automatically.'
    },
    {
      icon: Shield,
      title: 'Home Safety & Alerts',
      description: 'Stay informed with motion, smoke, and door sensor notifications.'
    },
    {
      icon: BookOpen,
      title: 'Family Learning Apps',
      description: 'Interactive tools for study routines and at-home projects.'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Everyday Solutions
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
              >
                <div className="w-10 h-10 bg-[#39366F]/10 rounded-lg flex items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 text-[#39366F]" />
                </div>
                
                <h3 className="text-base font-semibold text-black mb-2">
                  {solution.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EverydaySolutions;
