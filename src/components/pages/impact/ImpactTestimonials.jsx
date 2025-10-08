import React from 'react';

const ImpactTestimonials = () => {
  const testimonials = [
    {
      quote: "ERA AXIS equips learners to solve real problems in their communities.",
      author: "Innovator, Partner School",
      role: "",
      type: "partner"
    },
    {
      quote: "We saw measurable impact within months of partnering.",
      author: "Program Director, NGO",
      role: "",
      type: "partner"
    },
    {
      quote: "Our civic lab built and deployed two open-source tools with ERA AXIS.",
      author: "Civic Lab Partner",
      role: "",
      type: "partner"
    }
  ];

  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-white to-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
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
                  {/* Modern Avatar with Image */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                      <img 
                        src="/images/workingspace.png"
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full bg-[#39366F] opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                  </div>
                  
                  {/* Name and Role */}
                  <div className="flex-1">
                    <div className="text-base font-bold text-black group-hover:text-[#39366F] transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    {testimonial.role && (
                      <div className="text-sm font-semibold text-gray-600 tracking-wide">
                        {testimonial.role}
                      </div>
                    )}
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

export default ImpactTestimonials;
