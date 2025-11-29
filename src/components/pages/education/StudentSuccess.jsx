import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const StudentSuccess = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
  const subtitleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0.1 });
  const testimonials = [
    {
      quote: "I built my first circuit with recycled parts and it actually worked! Now I help fix electronics in my community.",
      author: "Ama",
      role: "Junior STEM Basics Graduate",
      type: "student",
      avatar: "A"
    },
    {
      quote: "The mentors are patient and the tools are amazing. I'm now repairing devices in my community and earning income.",
      author: "Kofi",
      role: "Maker: Hardware & Repair Graduate",
      type: "student",
      avatar: "K"
    },
    {
      quote: "I never thought I could code, but now I'm building apps to solve real problems in my neighborhood.",
      author: "Fatima",
      role: "Coder: Software Foundations Graduate",
      type: "student",
      avatar: "F"
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
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Fade Edges - using opacity instead of color gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 30%, transparent 100%)'}}></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 30%, transparent 100%)'}}></div>
          
          {/* Auto-scrolling Carousel */}
          <div className="flex animate-scroll-x">
            {/* First Set of Cards */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`first-${index}`} 
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3"
              >
                <div className="group relative bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#39366F]/20 overflow-hidden">
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
                      {/* Avatar */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#39366F] flex items-center justify-center text-white font-bold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                        {testimonial.avatar}
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
                </div>
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`second-${index}`} 
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3"
              >
                <div className="group relative bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-[#39366F]/20 overflow-hidden">
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
                      {/* Avatar */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#39366F] flex items-center justify-center text-white font-bold text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                        {testimonial.avatar}
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Animation */}
      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-x {
          animation: scroll-x 20s linear infinite;
        }
        
        .animate-scroll-x:hover {
          animation-play-state: paused;
        }
        
        /* On mobile, show one card at a time */
        @media (max-width: 768px) {
          @keyframes scroll-x-mobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .animate-scroll-x {
            animation: scroll-x-mobile 15s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default StudentSuccess;
