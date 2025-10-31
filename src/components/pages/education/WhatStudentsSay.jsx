import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ama',
    program: 'Junior STEM Basics',
    quote: 'I built my first circuit with recycled parts and it actually worked!',
    rating: 5,
    avatar: 'A'
  },
  {
    name: 'Kofi',
    program: 'Maker: Hardware & Repair',
    quote: 'The mentors are patient and the tools are amazing. I\'m now repairing devices in my community.',
    rating: 5,
    avatar: 'K'
  },
  {
    name: 'Fatima',
    program: 'Coder: Software Foundations',
    quote: 'I never thought I could code, but now I\'m building apps to solve real problems.',
    rating: 5,
    avatar: 'F'
  }
];

const WhatStudentsSay = () => {
  return (
    <section className="py-6 sm:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          What Students Say
        </h2>

        {/* Testimonials Grid - Horizontal Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300"
            >
              {/* Horizontal Layout */}
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {testimonial.avatar}
                </div>
                
                <div className="flex-1">
                  {/* Quote Text */}
                  <p className="text-gray-900 text-sm font-medium leading-relaxed mb-2">
                    "{testimonial.quote}"
                  </p>

                  {/* Student Info */}
                  <p className="text-xs text-gray-600">
                    {testimonial.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatStudentsSay;
