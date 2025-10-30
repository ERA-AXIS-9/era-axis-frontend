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
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            What Students Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote size={32} className="text-[#39366F]/20" />
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#39366F] text-[#39366F]" />
                ))}
              </div>

              {/* Student Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.program}</p>
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
