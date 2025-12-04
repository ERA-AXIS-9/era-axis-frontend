import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'SafeDrive',
      category: 'Transportation',
      description: 'An intelligent road safety innovation that detects driver fatigue, alcohol influence, and risky driving behaviors. It provides real-time alerts to prevent accidents, protect lives, and promote safer transportation systems across Africa.',
      status: 'Active',
      image: '/images/safedrive/safedrive.jpg',
      link: '/projects/safedrive'
    },
    {
      title: 'IoT & Data Platforms',
      category: 'Software',
      description: 'Connecting devices and powering decisions with scalable IoT dashboards.',
      status: 'Active',
      image: '/images/Homepage/PXL_20240913_102510357.MP.jpg',
      link: '/services/software/iot'
    },
    {
      title: 'EcoWatch',
      category: 'Environment',
      description: 'A real-time air quality monitoring system that tracks pollution levels across multiple locations and provides actionable insights for communities.',
      status: 'Active',
      image: '/images/Homepage/ECOWatch1.png',
      link: '/projects/ecowatch'
    },
    {
      title: 'AgrizPlanter',
      category: 'Agriculture',
      description: 'An automated rice planting device designed to eliminate the stress of manual transplanting, increase planting speed and accuracy, and improve farmers\' efficiency and productivity.',
      status: 'In Progress',
      image: '/images/agrizplanter/agrizplanter.jpg',
      link: '/projects/agrizplanter'
    },
    {
      title: 'ERA Technologies',
      category: 'Business Solutions',
      description: 'Digital tools for African businesses and startups. Streamline operations with ERA KPI, ERA Attendance, and ERA Bulk Email & SMS.',
      status: 'Active',
      image: '/images/era-technologies/era-kpi2.jpg',
      link: '/projects/era-technologies'
    },
    {
      title: 'BagaBoard',
      category: 'Manufacturing',
      description: 'Developed a fire-resistant, eco-friendly electrical extension board casing made from sugarcane bagasse to replace unsafe plastic alternatives.',
      status: 'Active',
      image: '/images/Manufacturing/bagaboard.png',
      link: '#'
    },
    {
      title: 'Automated School Alarm System',
      category: 'Manufacturing',
      description: 'Designed a programmable bell and notification system that automates school time management and eliminates manual bell ringing.',
      status: 'Active',
      image: '/images/Manufacturing/Automated School Alarm System .png',
      link: '#'
    },
    {
      title: 'Audio Amplifier',
      category: 'Manufacturing',
      description: 'Built a high-fidelity audio amplification system delivering clear, powerful sound output for classroom, auditorium, and public-use applications.',
      status: 'Active',
      image: '/images/Manufacturing/Audio Amplifier .png',
      link: '#'
    },
    {
      title: 'Home Automation with 8 Functions',
      category: 'IoT',
      description: 'Developed a smart home control system enabling users to remotely manage lighting, security, appliances, and environmental functions from a single interface.',
      status: 'Active',
      image: '/images/Manufacturing/Home Automation with 8 Functions .png',
      link: '#'
    },
    {
      title: 'Automated Water Pump System with SMS Integration',
      category: 'IoT',
      description: 'Engineered a smart pumping solution that automatically controls water levels and sends real-time status alerts and notifications via SMS.',
      status: 'Active',
      image: '/images/Manufacturing/Automated Water Pump System with SMS Integration.png',
      link: '#'
    },
    {
      title: 'Student Hands-On Project',
      category: 'Education',
      description: 'Implemented practical engineering workshops that equip students with real-world technical skills through project-based learning and device fabrication.',
      status: 'Active',
      image: '/images/Manufacturing/Student Hands-On Project.png',
      link: '#'
    },
    {
      title: 'Wooden Extension Board',
      category: 'Manufacturing',
      description: 'Designed and fabricated custom wooden extension boards featuring integrated surge protectors and aesthetically pleasing finishes for consumer and professional use.',
      status: 'Active',
      image: '/images/Manufacturing/Wooden Extension Board .png',
      link: '#'
    },
    {
      title: 'Smart Dustbin',
      category: 'IoT',
      description: 'Developed a smart dustbin prototype that uses ultrasonic sensors to measure fill level and wirelessly communicate status, optimising waste collection routes and efficiency.',
      status: 'Active',
      image: '/images/Manufacturing/Smart Dustbin .png',
      link: '#'
    },
    {
      title: 'Fingerprint Gate',
      category: 'Security',
      description: 'Developed and implemented a biometric access control system using a fingerprint scanner integrated into a motorised gate mechanism for enhanced security and automated entry.',
      status: 'Active',
      image: '/images/Manufacturing/Fingerprint Gate .png',
      link: '#'
    },
    {
      title: 'PureGuide',
      category: 'Healthcare',
      description: 'Developed a smart, wall-mounted sterilisation device utilising UV-C light to safely and automatically sanitise mobile phones.',
      status: 'Active',
      image: '/images/Manufacturing/PureGuide .png',
      link: '#'
    },
    {
      title: 'CoopTech',
      category: 'Agriculture',
      description: 'Designed an automated climate control system utilising sensors, ventilation fans, and misters to precisely regulate temperature, humidity, and air quality for optimal poultry health and productivity.',
      status: 'Active',
      image: '/images/Manufacturing/CoopTech.png',
      link: '#'
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-100">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#39366F] bg-[#39366F]/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700' 
                      : project.status === 'Active'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="text-base font-semibold text-black mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <Link 
                  to={project.link}
                  className="text-sm text-[#39366F] hover:text-[#2a2850] font-medium transition-colors duration-200"
                >
                  View Project →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
