import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const categories = ['All', 'Education', 'Household', 'Organization', 'IoT'];

const projects = [
  {
    title: 'BagaBoard',
    description: 'Developed a fire-resistant, eco-friendly electrical extension board casing made from sugarcane bagasse to replace unsafe plastic alternatives.',
    category: 'Household',
    image: '/images/Manufacturing/bagaboard.png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Automated School Alarm System',
    description: 'Designed a programmable bell and notification system that automates school time management and eliminates manual bell ringing.',
    category: 'Education',
    image: '/images/Manufacturing/Automated School Alarm System .png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Audio Amplifier',
    description: 'Built a high-fidelity audio amplification system delivering clear, powerful sound output for classroom, auditorium, and public-use applications.',
    category: 'Education',
    image: '/images/Manufacturing/Audio Amplifier .png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Home Automation with 8 Functions',
    description: 'Developed a smart home control system enabling users to remotely manage lighting, security, appliances, and environmental functions from a single interface.',
    category: 'IoT',
    image: '/images/Manufacturing/Home Automation with 8 Functions .png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Automated Water Pump System with SMS Integration',
    description: 'Engineered a smart pumping solution that automatically controls water levels and sends real-time status alerts and notifications via SMS.',
    category: 'IoT',
    image: '/images/Manufacturing/Automated Water Pump System with SMS Integration.png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Student Hands-On Project',
    description: 'Implemented practical engineering workshops that equip students with real-world technical skills through project-based learning and device fabrication.',
    category: 'Education',
    image: '/images/Manufacturing/Student Hands-On Project.png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'SafeDrive',
    description: 'Built a smart driver monitoring system that uses real-time sensor data to detect impairment and enhance road safety through instant alerts and data-driven insights.',
    category: 'IoT',
    image: '/images/Manufacturing/SafeDrive.png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Wooden Extension Board',
    description: 'Designed and fabricated custom wooden extension boards featuring integrated surge protectors and aesthetically pleasing finishes for consumer and professional use.',
    category: 'Household',
    image: '/images/Manufacturing/Wooden Extension Board .png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Smart Dustbin',
    description: 'Developed a smart dustbin prototype that uses ultrasonic sensors to measure fill level and wirelessly communicate status, optimising waste collection routes and efficiency.',
    category: 'IoT',
    image: '/images/Manufacturing/Smart Dustbin .png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'Fingerprint Gate',
    description: 'Developed and implemented a biometric access control system using a fingerprint scanner integrated into a motorised gate mechanism for enhanced security and automated entry.',
    category: 'Organization',
    image: '/images/Manufacturing/Fingerprint Gate .png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'PureGuide',
    description: 'Developed a smart, wall-mounted sterilisation device utilising UV-C light to safely and automatically sanitise mobile phones.',
    category: 'Household',
    image: '/images/Manufacturing/PureGuide .png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'CoopTech',
    description: 'Designed an automated climate control system utilising sensors, ventilation fans, and misters to precisely regulate temperature, humidity, and air quality for optimal poultry health and productivity.',
    category: 'Organization',
    image: '/images/Manufacturing/CoopTech.png',
    link: '/services/manufacturing/projects'
  },
  {
    title: 'EcoWatch',
    description: 'Developed a portable monitoring device utilising specialised sensors to accurately measure carbon emissions released into the atmosphere, automatically recording and storing the environmental data for analysis.',
    category: 'IoT',
    image: '/images/Manufacturing/EcoWatch.png',
    link: '/services/manufacturing/projects'
  }
];

const ProjectsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const titleAnimation = useScrollAnimation({ type: 'slideUp', delay: 0 });

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Section */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
          ref={titleAnimation.ref}
          initial={titleAnimation.initial}
          animate={titleAnimation.animate}
          variants={titleAnimation.variants}
          transition={titleAnimation.transition}
        >
          <h2 className="text-xl font-bold text-black">Filter by Category</h2>
          
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#39366F] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
            <button className="px-4 py-2 rounded-lg font-medium text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all">
              Reset
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Info */}
              <div className="p-5">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#39366F]/10 text-[#39366F] rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600">
            Showing <span className="font-semibold text-black">{filteredProjects.length}</span> of{' '}
            <span className="font-semibold text-black">{projects.length}</span> projects
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
