import React from 'react';
import { Image } from 'lucide-react';

const stories = [
  {
    name: 'Kwame',
    age: 18,
    story: '"I built community radios and learned to troubleshoot devices."',
    image: '/images/manufacturing.png'
  },
  {
    name: 'Aisha',
    age: 22,
    story: '"Building a water sensor with my team changed how I see technology."',
    image: '/images/software.png'
  },
  {
    name: 'Joseph',
    age: 19,
    story: '"Learning in my language made coding feel accessible."',
    image: '/images/workingspace.png'
  }
];

const StudentStories = () => {
  return (
    <section className="py-6 sm:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Student Success Stories
        </h2>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((student, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#39366F]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Image */}
                <div className="mb-4 bg-gray-100 rounded-lg h-40 overflow-hidden border border-gray-200 group-hover:border-[#39366F]/20 transition-colors duration-300">
                  <img 
                    src={student.image} 
                    alt={`${student.name}'s story`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Story Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {student.story}
                </p>

                {/* Student Name */}
                <p className="text-xs text-gray-500 font-medium group-hover:text-[#39366F] transition-colors duration-300">
                  — {student.name}, {student.age}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
