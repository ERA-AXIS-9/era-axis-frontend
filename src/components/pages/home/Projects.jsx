import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const Projects = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
  
  const projects = [
    {
      name: 'EcoWatch',
      description: 'Real-time air quality monitoring across multiple locations.',
      link: '/projects/ecowatch',
      image: '/images/Homepage/ECOWatch1.png'
    },
    {
      name: 'SafeDrive',
      description: 'Intelligent road safety system detecting driver fatigue and risky behaviors.',
      link: '/projects/safedrive',
      image: '/images/safedrive/safedrive.jpg'
    },
    {
      name: 'ERA Technologies',
      description: 'Digital tools for African businesses and startups. Streamline operations with ERA KPI, ERA Attendance, and ERA Bulk Email & SMS.',
      link: '/projects/era-technologies',
      image: '/images/era-technologies/era-kpi2.jpg'
    }
  ];

  return (
    <section className="py-9 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Only */}
        <motion.div 
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
          className="mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">Featured Projects</h2>
        </motion.div>
        
        {/* Project Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden max-w-sm mx-auto w-full"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                {/* Project Name */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors duration-300">
                  {project.name}
                </h3>
                
                {/* Description */}
                <p className="text-gray-800 leading-relaxed mb-5 text-base font-medium">
                  {project.description}
                </p>
                
                {/* Learn More Link */}
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-1 font-bold text-base text-[#39366F] hover:text-[#2a2850] transition-all duration-300 group/btn hover:gap-2"
                >
                  Learn More
                  <ChevronRight 
                    size={14} 
                    className="group-hover/btn:translate-x-0.5 transition-transform duration-300"
                  />
                </a>
              </div>
              
              {/* Consistent bottom accent */}
              <div className="h-1 bg-[#39366F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* See All Projects Button - At Bottom */}
        <div className="flex justify-end">
          <a 
            href="/projects"
            className="bg-[#39366F] hover:bg-[#2a2850] text-white px-5 py-2 rounded-md font-semibold inline-flex items-center gap-1 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
          >
            See All Projects
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
