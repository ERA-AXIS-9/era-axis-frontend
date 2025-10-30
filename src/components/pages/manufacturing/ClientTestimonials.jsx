import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ERA AXIS fixed our lab equipment in record time. Their team is professional and efficient.",
    author: "Dr. Kwame Asante",
    role: "Science Department Head",
    rating: 5
  },
  {
    quote: "Their monthly maintenance plan has saved us from costly downtime. Highly recommended!",
    author: "Sarah Johnson",
    role: "IT Manager, TechCorp",
    rating: 5
  },
  {
    quote: "Quick turnaround, fair pricing, and they actually care about getting it right.",
    author: "Emmanuel Mensah",
    role: "Small Business Owner",
    rating: 5
  }
];

const ClientTestimonials = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            What Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-black">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
