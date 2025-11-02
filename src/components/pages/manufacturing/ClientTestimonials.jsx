import React from 'react';

const testimonials = [
  {
    quote: "ERA AXIS fixed our lab equipment in record time. Their team is professional and efficient.",
    author: "Dr. Kwame Asante",
    role: "Science Department Head",
    avatar: "D"
  },
  {
    quote: "Their monthly maintenance plan has saved us from costly downtime. Highly recommended!",
    author: "Sarah Johnson",
    role: "IT Manager, TechCorp",
    avatar: "S"
  },
  {
    quote: "Quick turnaround, fair pricing, and they actually care about getting it right.",
    author: "Emmanuel Mensah",
    role: "Small Business Owner",
    avatar: "E"
  }
];

const ClientTestimonials = () => {
  return (
    <section className="py-9 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-6">What Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#39366F]/5 to-[#5B9BD5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Quote mark decoration */}
              <div className="absolute top-4 right-4 text-6xl text-[#39366F]/10 font-serif leading-none">"</div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Quote */}
                <blockquote className="text-base font-medium text-gray-800 leading-relaxed mb-8 relative">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  {/* Avatar with Letter */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {testimonial.avatar}
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-[#39366F] opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                  </div>
                  
                  {/* Name and Role */}
                  <div className="flex-1">
                    <div className="text-base font-bold text-black group-hover:text-[#39366F] transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-sm font-semibold text-gray-600 tracking-wide">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39366F] to-[#5B9BD5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
