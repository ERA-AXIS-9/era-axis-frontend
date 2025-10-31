import React from 'react';
import { ChevronRight, BookOpen, Users, Briefcase } from 'lucide-react';

const learningApproaches = [
  {
    title: 'Project-Based Learning',
    details: ['Each module ends with a working prototype', 'Real solutions to real problems', 'Hands-on experience']
  },
  {
    title: 'Learning by Doing',
    details: ['No expensive STEM kits', 'Recycled and low-cost materials', 'Practical skills development']
  },
  {
    title: 'Innovation in Local Languages',
    details: ['Breaking literacy barriers', 'Accessible to all learners', 'Community-focused approach']
  }
];

const ProgramsEnrollment = () => {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          How We Teach
        </h2>

        {/* Learning Approaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {learningApproaches.map((approach, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-lg p-6 hover:border-[#39366F]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-[#39366F] transition-colors duration-300">
                  {approach.title}
                </h3>

                {/* Details List */}
                <ul className="space-y-1.5">
                  {approach.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsEnrollment;
