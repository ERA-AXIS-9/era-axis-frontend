import React from 'react';
import { Quote } from 'lucide-react';

const stories = [
  {
    name: 'Kwame',
    age: 18,
    story: 'ERA AXIS made me believe I could build something, even without formal education.',
    achievement: 'Built a solar-powered lamp from e-waste',
    image: '/images/student-placeholder.jpg'
  },
  {
    name: 'Aisha',
    age: 22,
    story: 'I used to see waste. Now I see opportunity.',
    achievement: 'Created recycling bins for her community',
    image: '/images/student-placeholder.jpg'
  },
  {
    name: 'Joseph',
    age: 19,
    story: 'After training, I was invited to join the Manufacturing team. Now I\'m paid to build and fix devices for clients.',
    achievement: 'Now works in ERA AXIS Manufacturing division',
    image: '/images/student-placeholder.jpg'
  }
];

const StudentStories = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Student Success Stories
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((student, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote size={32} className="text-[#39366F]/20" />
              </div>

              {/* Story */}
              <p className="text-gray-700 text-base leading-relaxed mb-4 italic">
                "{student.story}"
              </p>

              {/* Achievement Badge */}
              <div className="mb-4 p-3 bg-[#39366F]/5 rounded-lg border border-[#39366F]/10">
                <p className="text-sm text-[#39366F] font-medium">
                  {student.achievement}
                </p>
              </div>

              {/* Student Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg">
                  {student.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-black">{student.name}</p>
                  <p className="text-sm text-gray-500">{student.age} years old</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStories;
