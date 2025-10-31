import React from 'react';
import { BookOpen, Wrench, Code, ChevronRight, Clock, Users } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Junior STEM Basics',
    duration: '3 months',
    features: [
      'Hands-on projects',
      'Local language support',
      'Beginner-friendly'
    ],
    color: '#39366F',
    link: '/services/education/program-details?program=junior-stem'
  },
  {
    icon: Wrench,
    title: 'Maker: Hardware & Repair',
    duration: '6 months',
    features: [
      'Electronics training',
      'Fabrication skills',
      'Lab access included'
    ],
    color: '#5B9BD5',
    link: '/services/education/program-details?program=maker-hardware'
  },
  {
    icon: Code,
    title: 'Coder: Software Foundations',
    duration: '4 months',
    features: [
      'App development',
      'Web design basics',
      'Real-world projects'
    ],
    color: '#2a2850',
    link: '/services/education/program-details?program=coder-software'
  }
];

const ProgramOptions = () => {
  return (
    <section id="program-options" className="py-6 sm:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Program Options
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/30 flex flex-col overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col flex-grow">
                  {/* Icon & Title */}
                  <div className="mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${program.color}15`, border: `2px solid ${program.color}30` }}
                  >
                    <IconComponent size={28} style={{ color: program.color }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                    {program.title}
                  </h3>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium mb-4">
                    <Clock size={14} />
                    {program.duration}
                  </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#39366F] mt-1.5 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Enroll Button */}
                  <a
                    href={program.link}
                    className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 group/btn"
                  >
                    Enroll Now
                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramOptions;
