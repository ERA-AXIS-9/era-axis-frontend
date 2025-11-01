import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Clock, Users, Award, BookOpen, CheckCircle, ChevronRight, Star, Calendar, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import EducationNavbar from '../../../components/EducationNavbar';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const programsData = {
  'junior-stem': {
    title: 'Junior STEM Basics',
    subtitle: 'STEM for All - Innovation Without Barriers',
    duration: '3 months',
    price: 150,
    level: 'Beginner',
    students: '500+ enrolled',
    rating: 4.8,
    description: 'Inclusive STEM education accessible to everyone - in school, out-of-school, literate or illiterate. Learn through hands-on projects using e-waste and local resources.',
    overview: [
      'Hands-on projects using recycled materials and e-waste',
      'Local language support - breaking literacy barriers',
      'Beginner-friendly for all backgrounds',
      'Project-based learning - every lesson = working solution',
      'Access to ERA AXIS Open Labs and mentorship',
      'Certificate upon completion'
    ],
    curriculum: [
      {
        module: 'Module 1: Introduction to STEM',
        topics: ['What is STEM?', 'Scientific Method', 'Basic Tools & Safety', 'First Experiments']
      },
      {
        module: 'Module 2: Technology Basics',
        topics: ['Introduction to Computers', 'Basic Coding Concepts', 'Digital Literacy', 'Simple Circuits']
      },
      {
        module: 'Module 3: Engineering Fundamentals',
        topics: ['Design Thinking', 'Building Structures', 'Simple Machines', 'Problem Solving']
      },
      {
        module: 'Module 4: Math in Action',
        topics: ['Practical Math', 'Measurements', 'Data Collection', 'Graphs & Charts']
      },
      {
        module: 'Module 5: Final Project',
        topics: ['Project Planning', 'Team Collaboration', 'Building Your Project', 'Presentation']
      }
    ],
    outcomes: [
      'Understand basic STEM concepts and principles',
      'Build simple circuits and mechanical projects',
      'Write basic code and create digital projects',
      'Apply scientific method to solve problems',
      'Work effectively in teams',
      'Present ideas clearly and confidently'
    ],
    prerequisites: [
      'Age 10-15 years old',
      'Basic reading and writing skills',
      'Curiosity and willingness to learn',
      'No prior STEM experience required'
    ],
    instructor: {
      name: 'ERA AXIS Education Team',
      bio: 'Our experienced educators combine years of teaching with real-world STEM expertise to create engaging, hands-on learning experiences.',
      credentials: 'Certified STEM Educators'
    },
    testimonials: [
      {
        name: 'Ama',
        role: 'Junior STEM Basics',
        text: 'I built my first circuit with recycled parts and it actually worked!',
        rating: 5
      }
    ]
  },
  'maker-hardware': {
    title: 'Maker: Hardware & Repair',
    subtitle: 'From Building to Maintaining What Matters',
    duration: '6 months',
    price: 450,
    level: 'Intermediate',
    students: '300+ enrolled',
    rating: 4.9,
    description: 'Master electronics, fabrication, and repair skills. Build devices from e-waste, troubleshoot systems, and access professional tools in our Open Labs.',
    overview: [
      'Electronics training - circuits, soldering, and repair',
      'Fabrication skills - 3D printing, laser cutting, prototyping',
      'Lab access included - full access to ERA AXIS Open Labs',
      'E-waste transformation into functional devices',
      'Troubleshooting and maintenance of electronic systems',
      'Build portfolio of real-world projects'
    ],
    curriculum: [
      {
        module: 'Module 1: Electronics Fundamentals',
        topics: ['Circuit Theory', 'Components & Tools', 'Reading Schematics', 'Multimeter Usage']
      },
      {
        module: 'Module 2: Soldering & Assembly',
        topics: ['Soldering Techniques', 'PCB Assembly', 'Quality Control', 'Safety Practices']
      },
      {
        module: 'Module 3: Device Repair',
        topics: ['Troubleshooting Methods', 'Common Repairs', 'Phone & Laptop Repair', 'E-waste Recovery']
      },
      {
        module: 'Module 4: Fabrication Skills',
        topics: ['3D Printing', 'Laser Cutting', 'CNC Basics', 'Material Selection']
      },
      {
        module: 'Module 5: Prototyping',
        topics: ['Design Process', 'Arduino Basics', 'Sensor Integration', 'Building Prototypes']
      },
      {
        module: 'Module 6: Capstone Project',
        topics: ['Project Planning', 'Building Your Device', 'Testing & Iteration', 'Final Presentation']
      }
    ],
    outcomes: [
      'Repair phones, laptops, and electronic devices',
      'Build custom electronics projects',
      'Use fabrication tools (3D printer, laser cutter)',
      'Read and create circuit schematics',
      'Start your own repair business',
      'Work with Arduino and sensors'
    ],
    prerequisites: [
      'Age 16+ years old',
      'Basic understanding of electricity',
      'Interest in hands-on technical work',
      'Commitment to 6-month program'
    ],
    instructor: {
      name: 'Engineering Team',
      bio: 'Professional engineers and technicians with 10+ years of experience in electronics manufacturing and repair.',
      credentials: 'Certified Electronics Technicians'
    },
    testimonials: [
      {
        name: 'Kofi',
        role: 'Maker: Hardware & Repair',
        text: 'The mentors are patient and the tools are amazing. I\'m now repairing devices in my community.',
        rating: 5
      }
    ]
  },
  'coder-software': {
    title: 'Coder: Software Foundations',
    subtitle: 'Digital Solutions for Work, Home, and Innovation',
    duration: '4 months',
    price: 300,
    level: 'Beginner to Intermediate',
    students: '400+ enrolled',
    rating: 4.7,
    description: 'Learn to code from scratch and build practical applications. From mobile apps to smart home systems, create software that solves real problems.',
    overview: [
      'App development - build mobile and web applications',
      'Web design basics - HTML, CSS, JavaScript fundamentals',
      'Real-world projects that solve community problems',
      'IoT and smart home application development',
      'Portfolio of working applications',
      'Practical, affordable, and impactful solutions'
    ],
    curriculum: [
      {
        module: 'Module 1: Programming Basics',
        topics: ['Introduction to Coding', 'Logic & Algorithms', 'Variables & Data Types', 'First Program']
      },
      {
        module: 'Module 2: Web Development',
        topics: ['HTML & CSS', 'Responsive Design', 'JavaScript Basics', 'Building Websites']
      },
      {
        module: 'Module 3: App Development',
        topics: ['Mobile App Concepts', 'User Interface Design', 'App Logic', 'Building Your First App']
      },
      {
        module: 'Module 4: Backend Basics',
        topics: ['Databases', 'APIs', 'Server Concepts', 'Data Management']
      },
      {
        module: 'Module 5: Real Projects',
        topics: ['Project Planning', 'Team Coding', 'Version Control', 'Deployment']
      },
      {
        module: 'Module 6: Portfolio Project',
        topics: ['Choose Your Project', 'Development', 'Testing', 'Launch & Present']
      }
    ],
    outcomes: [
      'Build responsive websites from scratch',
      'Create mobile applications',
      'Understand programming fundamentals',
      'Work with databases and APIs',
      'Use professional development tools',
      'Have a portfolio of projects'
    ],
    prerequisites: [
      'Age 14+ years old',
      'Basic computer skills',
      'Access to a computer',
      'Passion for technology'
    ],
    instructor: {
      name: 'Software Development Team',
      bio: 'Professional developers who have built apps and websites for companies across Africa and beyond.',
      credentials: 'Professional Software Developers'
    },
    testimonials: [
      {
        name: 'Fatima',
        role: 'Coder: Software Foundations',
        text: 'I never thought I could code, but now I\'m building apps to solve real problems.',
        rating: 5
      }
    ]
  }
};

const ProgramDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [expandedModule, setExpandedModule] = useState(null);
  const programId = searchParams.get('program') || 'junior-stem';
  const program = programsData[programId] || programsData['junior-stem'];

  const toggleModule = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EducationNavbar />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-[#39366F] text-white overflow-hidden">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-70">
          <img 
            src="/images/workingspace.png" 
            alt="Learning environment"
            className="w-full h-full object-cover"
          />
          {/* Overlay text on image */}
          <div className="absolute bottom-8 right-8 bg-[#39366F]/70 backdrop-blur-md border border-white/20 px-4 py-2 rounded shadow-lg">
            <p className="text-sm text-white font-semibold">Learn modern technologies and build real projects with hands-on training</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-lg pr-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {program.title}
            </h1>
            <p className="text-base text-white/90 mb-6 leading-relaxed">
              {program.subtitle}. {program.description}
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span className="text-sm">{program.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span className="text-sm">Online & Physical</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={18} />
                <span className="text-sm">Certificate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={18} />
                <span className="text-sm">Expert Support</span>
              </div>
            </div>

            {/* CTA Row with Badge and Button */}
            <div className="flex items-center gap-4">
              {/* Next Cohort Badge - Glassmorphism */}
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded shadow-lg whitespace-nowrap">
                <Calendar size={18} />
                <span className="text-sm font-medium"><strong>Next Cohort:</strong> January 10, 2026</span>
              </span>
              
              <button
                onClick={() => navigate(`/services/education/learning-mode?program=${programId}`)}
                className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3 rounded font-semibold transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap"
              >
                Enroll Now - GHS {program.price}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What You'll Learn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {program.overview.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#39366F] transition-all">
                <CheckCircle size={20} className="text-[#39366F] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.curriculum.map((module, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all">
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen size={20} className="text-[#39366F] flex-shrink-0 mt-0.5" />
                  <h3 className="text-base font-bold text-gray-900">{module.module}</h3>
                </div>
                <ul className="space-y-1.5 ml-8">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-[#39366F]">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Projects */}
      <section 
        className="relative py-20 overflow-hidden bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: 'url(/images/workingspace.png)',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12">Real-World Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {program.outcomes.slice(0, 3).map((outcome, index) => {
              const projectTitles = [
                'E-Commerce Platform',
                'Social Media Dashboard',
                'Task Management System'
              ];
              
              const techStacks = [
                ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
                ['React', 'D3.js', 'Express', 'WebSocket'],
                ['React', 'Redux', 'Node.js', 'MongoDB']
              ];
              
              return (
                <div key={index} className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-sm border border-white/20 hover:shadow-xl transition-all">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{projectTitles[index]}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-700 text-base mb-6 leading-relaxed">{outcome}</p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {techStacks[index].map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-[#39366F] text-white text-xs rounded font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Ready to Begin Your Journey?</h2>
            <button
              onClick={() => navigate(`/services/education/learning-mode?program=${programId}`)}
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetailsPage;
