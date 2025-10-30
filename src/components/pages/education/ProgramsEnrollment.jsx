import React from 'react';
import { ChevronRight, BookOpen, Users, Briefcase } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Junior STEM Basics',
    description: 'Introduction to innovation for young learners.',
    duration: '3 months',
    color: '#39366F'
  },
  {
    icon: Users,
    title: 'Makers: Hardware & Repair',
    description: 'Hands-on training in electronics and fabrication.',
    duration: '6 months',
    color: '#5B9BD5'
  },
  {
    icon: Briefcase,
    title: 'Online Software Foundations',
    description: 'Learn coding, app development, and digital tools.',
    duration: '4 months',
    color: '#2a2850'
  }
];

const ProgramsEnrollment = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Programs & Enrollment
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${program.color}15`, border: `2px solid ${program.color}30` }}
                  >
                    <IconComponent size={28} style={{ color: program.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>

                {/* Duration Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  Duration: {program.duration}
                </div>
              </div>
            );
          })}
        </div>

        {/* Enrollment CTA */}
        <div className="flex justify-start">
          <a
            href="/services/education/enroll"
            className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Enroll Now
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsEnrollment;
