import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const Testimonials = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
  
  const testimonials = [
    {
      quote: "ERA AXIS moved me from theory to practice. I'm not just learning STEM concepts; I'm building real tools for my community.",
      author: "Asiedu",
      role: "Student",
      type: "student",
      avatar: "A",
      image: "/images/Testimonies/Testimonials.png"
    },
    {
      quote: "I joined to learn, and now I'm creating. The environment at ERA pushes you to turn raw materials into functional products.",
      author: "Botsyo Enyonam Kelly",
      role: "Student",
      type: "student",
      image: "/images/Testimonies/testimonials1.png"
    },
    {
      quote: "Open Labs is the heartbeat of innovation here. It's where diverse ideas collide to create sustainable, scalable prototypes.",
      author: "Silas Asare",
      role: "Executive (Open Labs)",
      type: "executive",
      image: "/images/Testimonies/Testimonials2.png"
    },
    {
      quote: "I applied the electronics module to build a low-cost soil moisture sensor. Now, vegetable farmers in my community use it to reduce water waste.",
      author: "Yeddu Joel Nii Gyeshie",
      role: "Smart Farming / AgriTech",
      type: "project",
      image: "/images/Testimonies/Testimonials3.png"
    }
  ];

  return (
    <section className="py-9 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-6"
        >
          Testimonials
        </motion.h2>
        
        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to right, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 30%, transparent 100%)'}}></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{background: 'linear-gradient(to left, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 30%, transparent 100%)'}}></div>
          
          {/* Auto-scrolling Carousel */}
          <div className="flex animate-scroll-x">
            {/* First Set of Cards */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`first-${index}`} 
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
              >
                <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
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
                      {/* Avatar - Image only */}
                      <div className="relative">
                        <img 
                          src={testimonial.image || `https://via.placeholder.com/48?text=${testimonial.avatar}`}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
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
              </div>
            ))}
            
            {/* Duplicate Set for Seamless Loop */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`second-${index}`} 
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3"
              >
                <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
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
                      {/* Avatar - Image only */}
                      <div className="relative">
                        <img 
                          src={testimonial.image || `https://via.placeholder.com/48?text=${testimonial.avatar}`}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
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
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-x {
          animation: scroll-x 24s linear infinite;
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
            animation: scroll-x-mobile 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
