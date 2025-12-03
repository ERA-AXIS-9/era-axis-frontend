import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const StudentSuccess = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
  const subtitleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0.1 });
  const testimonials = [
    {
      quote: "ERA AXIS moved me from theory to practice. I'm not just learning STEM concepts; I'm building real tools for my community.",
      author: "Asiedu",
      role: "Student",
      type: "student",
      image: "/images/Testimonies/Testimonials.png"
    },
    {
      quote: "We are bridging the gap between classroom theory and industry demands. Seeing our students prototype solutions in weeks is incredible.",
      author: "Amankwah Eugene",
      role: "Education Lead / Staff",
      type: "staff",
      image: "/images/Testimonies/Testimonials4.png"
    },
    {
      quote: "The hands-on training here is unmatched. It's empowering to know I can design and build technology myself.",
      author: "Elsie Afrah Nti",
      role: "Student",
      type: "student",
      image: "/images/Testimonies/Testimonials5.png"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Left Aligned */}
        <motion.div className="mb-12">
          <motion.h2 
            ref={titleAnimation.ref}
            initial={titleAnimation.initial}
            animate={titleAnimation.animate}
            variants={titleAnimation.variants}
            transition={titleAnimation.transition}
            className="text-3xl sm:text-4xl font-bold text-black mb-4"
          >
            Student Success Stories
          </motion.h2>
          <motion.p 
            ref={subtitleAnimation.ref}
            initial={subtitleAnimation.initial}
            animate={subtitleAnimation.animate}
            variants={subtitleAnimation.variants}
            transition={subtitleAnimation.transition}
            className="text-lg text-gray-600 max-w-3xl"
          >
            Hear from our graduates who are transforming their communities with skills learned at ERA AXIS
          </motion.p>
        </motion.div>
        
        {/* Static Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
              transition={{ duration: 0.6 }}
              className="group relative bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#39366F]/20 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Quote mark decoration */}
                <div className="text-3xl sm:text-4xl text-[#39366F]/20 font-serif leading-none mb-3 sm:mb-4">"</div>
                
                {/* Quote */}
                <blockquote className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  {/* Avatar - Image only */}
                  <div className="relative">
                    <img 
                      src={testimonial.image || `https://via.placeholder.com/40?text=${testimonial.avatar}`}
                      alt={testimonial.author}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Name and Role */}
                  <div>
                    <div className="font-bold text-black text-sm sm:text-base group-hover:text-[#39366F] transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default StudentSuccess;
