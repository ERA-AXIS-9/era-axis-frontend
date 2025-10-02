import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ERA AXIS transformed my career with their hands-on tech education. The skills I learned helped me land my dream job in software development.",
      author: "Alex Johnson",
      role: "Alumni, Software Developer",
      avatar: "👨‍💻"
    },
    {
      quote: "Partnering with ERA AXIS has been instrumental in bringing our community projects to life. Their innovative approach to problem-solving is unmatched.",
      author: "Maria Garcia",
      role: "Community Partner",
      avatar: "👩‍💼"
    },
    {
      quote: "As a mentor, I've seen firsthand how ERA AXIS empowers students to become changemakers. Their curriculum bridges the gap between education and real-world impact.",
      author: "Dr. James Wilson",
      role: "Mentor & Educator",
      avatar: "👨‍🏫"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What People Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <blockquote className="text-gray-600 italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-medium text-gray-900">{testimonial.author}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
