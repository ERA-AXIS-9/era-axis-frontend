import React from 'react';

const PartnersSay = () => {
  const testimonials = [
    {
      quote: "I joined to learn, and now I'm creating. The environment at ERA pushes you to turn raw materials into functional products.",
      author: "Botsyo Enyonam Kelly",
      role: "Student",
      image: "/images/Testimonies/testimonials1.png"
    },
    {
      quote: "Open Labs is the heartbeat of innovation here. It's where diverse ideas collide to create sustainable, scalable prototypes.",
      author: "Silas Asare",
      role: "Executive (Open Labs)",
      image: "/images/Testimonies/Testimonials2.png"
    },
    {
      quote: "I applied the electronics module to build a low-cost soil moisture sensor. Now, vegetable farmers in my community use it to reduce water waste.",
      author: "Yeddu Joel Nii Gyeshie",
      role: "Smart Farming / AgriTech",
      image: "/images/Testimonies/Testimonials3.png"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            What People Say
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
