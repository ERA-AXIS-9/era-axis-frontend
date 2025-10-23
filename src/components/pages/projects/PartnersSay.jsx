import React from 'react';

const PartnersSay = () => {
  const testimonials = [
    {
      quote: "ERA AXIS turned a pilot idea into a fully deployed solution that's helping 50+ schools.",
      author: "Jane Doe",
      role: "Education Director",
      image: "/images/workingspace.png"
    },
    {
      quote: "Working with ERA AXIS helped us track community health data in real-time—it's been transformative.",
      author: "Dr. Michael Chen",
      role: "Health Program Lead",
      image: "/images/manufacturing.png"
    },
    {
      quote: "The team delivered a dashboard that our farmers can actually use—simple, effective, and impactful.",
      author: "Sarah Johnson",
      role: "AgriTech Coordinator",
      image: "/images/software.png"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            What Our Partners Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <div>
                  <div className="text-base font-bold text-black">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-sm text-gray-800 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSay;
