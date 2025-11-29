import React from 'react';
import { motion } from 'framer-motion';

const DonorStories = () => {
  const stories = [
    {
      name: 'Student Name',
      title: 'Cohort 2024',
      quote: '"Placeholder for student story about career transformation through ERA AXIS."'
    },
    {
      name: 'Partner Org',
      title: 'Program Lead',
      quote: '"Placeholder for partner quote about community impact and collaboration."'
    },
    {
      name: 'Mentor Name',
      title: 'Open Labs Mentor',
      quote: '"Placeholder for mentor feedback on open labs and projects."'
    },
    {
      name: 'Alumni Name',
      title: 'Innovation Fellow',
      quote: '"Placeholder for alumni story about building solutions with donated resources."'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Stories Your Gift Makes Possible
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }} 
              className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#39366F] hover:shadow-md transition-all duration-200"
            >
              {/* Quote Mark */}
              <div className="mb-2">
                <svg className="w-6 h-6 text-[#39366F] opacity-20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v8h8v-8h-4c0-2.2 1.8-4 4-4V8z"/>
                </svg>
              </div>

              {/* Quote Text */}
              <p className="text-sm text-gray-700 leading-snug mb-3">
                {story.quote}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 font-bold text-sm">
                    {story.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-black text-sm">
                    {story.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {story.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DonorStories;
