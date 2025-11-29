import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const FeaturedProjects = () => {
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });
  const featuredProjects = [
    {
      title: 'BagaBoard',
      description: 'Developed a fire-resistant, eco-friendly electrical extension board casing made from sugarcane bagasse to replace unsafe plastic alternatives.',
      image: '/images/Manufacturing/bagaboard.png',
      link: '/services/manufacturing/projects',
      featured: true
    },
    {
      title: 'Automated School Alarm System',
      description: 'Designed a programmable bell and notification system that automates school time management and eliminates manual bell ringing.',
      image: '/images/Manufacturing/Automated School Alarm System .png',
      link: '/services/manufacturing/projects',
      featured: false
    },
    {
      title: 'Audio Amplifier',
      description: 'Built a high-fidelity audio amplification system delivering clear, powerful sound output for classroom, auditorium, and public-use applications.',
      image: '/images/Manufacturing/Audio Amplifier .png',
      link: '/services/manufacturing/projects',
      featured: false
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="flex justify-between items-end mb-8"
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Highlighting some of our most impactful manufacturing work across different sectors.
            </p>
          </div>
          <a
            href="/services/projectShowcase"
            className="hidden sm:inline-flex items-center gap-2 text-[#39366F] hover:text-[#2a2850] font-semibold transition-colors group"
          >
            View All Projects
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
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
          {featuredProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2 py-1 text-xs bg-[#39366F] text-white rounded-full font-semibold">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="sm:hidden flex justify-center">
          <a
            href="/services/projectShowcase"
            className="inline-flex items-center gap-2 bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
