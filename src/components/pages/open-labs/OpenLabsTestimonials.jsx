import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Open Labs is the heartbeat of innovation here. It's where diverse ideas collide to create sustainable, scalable prototypes.",
    author: "Silas Asare",
    role: "Executive (Open Labs)",
    avatar: "S",
    image: "/images/Testimonies/Testimonials2.png"
  },
  {
    quote: "Access to these facilities changes everything. It allows us to test, fail fast, and refine our ideas until they work.",
    author: "Asante Ruth",
    role: "Staff (Open Labs)",
    avatar: "A",
    image: "/images/Testimonies/Tedtimoniaals8.png"
  }
];

const OpenLabsTestimonials = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="mb-8"
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Testimonials
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
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
                  {/* Avatar - Image or Letter */}
                  <div className="relative">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {testimonial.avatar}
                      </div>
                    )}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OpenLabsTestimonials;
