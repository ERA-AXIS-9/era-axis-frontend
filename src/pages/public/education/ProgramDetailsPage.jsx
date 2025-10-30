import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Clock, Users, Award, BookOpen, CheckCircle, ChevronRight, Star } from 'lucide-react';
import EducationNavbar from '../../../components/EducationNavbar';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const programsData = {
  'junior-stem': {
    title: 'Junior STEM Basics',
    subtitle: 'Foundation in Science, Technology, Engineering & Math',
    duration: '3 months',
    price: 150,
    level: 'Beginner',
    students: '500+ enrolled',
    rating: 4.8,
    description: 'An introductory program designed for young learners to explore the exciting world of STEM through hands-on projects and interactive learning.',
    overview: [
      'Perfect for students aged 10-15 with little to no prior experience',
      'Learn fundamental concepts in science, technology, engineering, and mathematics',
      'Build real projects and experiments',
      'Develop critical thinking and problem-solving skills',
      'Get certified upon completion'
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
        name: 'Ama Osei',
        role: 'Parent',
        text: 'My daughter loved this program! She went from being scared of science to building her own projects.',
        rating: 5
      },
      {
        name: 'Kwame Asante',
        role: 'Student',
        text: 'I learned so much and made new friends. The projects were really fun!',
        rating: 5
      }
    ]
  },
  'maker-hardware': {
    title: 'Maker: Hardware & Repair',
    subtitle: 'Master Electronics, Fabrication & Repair Skills',
    duration: '6 months',
    price: 450,
    level: 'Intermediate',
    students: '300+ enrolled',
    rating: 4.9,
    description: 'Comprehensive training in electronics, hardware repair, and fabrication. Learn to build, fix, and innovate with hands-on lab access.',
    overview: [
      'Designed for ages 16+ with basic technical interest',
      'Hands-on training with real equipment and tools',
      'Learn electronics, soldering, and repair techniques',
      'Access to ERA AXIS Open Labs and equipment',
      'Build a portfolio of projects',
      'Industry-recognized certification'
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
        name: 'Emmanuel Mensah',
        role: 'Graduate',
        text: 'I now run my own phone repair shop thanks to this program. The skills are invaluable!',
        rating: 5
      },
      {
        name: 'Sarah Johnson',
        role: 'Current Student',
        text: 'The hands-on lab access is amazing. I\'m learning so much every week!',
        rating: 5
      }
    ]
  },
  'coder-software': {
    title: 'Coder: Software Foundations',
    subtitle: 'Build Apps, Websites & Digital Solutions',
    duration: '4 months',
    price: 300,
    level: 'Beginner to Intermediate',
    students: '400+ enrolled',
    rating: 4.7,
    description: 'Learn to code from scratch and build real-world applications. Master web development, app creation, and software fundamentals.',
    overview: [
      'Perfect for ages 14+ with no coding experience',
      'Learn popular programming languages',
      'Build real websites and applications',
      'Work on real-world projects',
      'Portfolio development included',
      'Job-ready skills certification'
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
        name: 'Kofi Mensah',
        role: 'Graduate',
        text: 'I built my first website in week 3! Now I\'m freelancing and making money from coding.',
        rating: 5
      },
      {
        name: 'Abena Osei',
        role: 'Current Student',
        text: 'The instructors are patient and explain everything clearly. I love this program!',
        rating: 5
      }
    ]
  }
};

const ProgramDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const programId = searchParams.get('program') || 'junior-stem';
  const program = programsData[programId] || programsData['junior-stem'];

  return (
    <div className="min-h-screen bg-gray-50">
      <EducationNavbar />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-gradient-to-br from-[#39366F] to-[#2a2850] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {program.title}
              </h1>
              <p className="text-xl text-white/90 mb-6">
                {program.subtitle}
              </p>
              <p className="text-lg text-white/80 mb-6">
                {program.description}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock size={20} />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Award size={20} />
                  <span>{program.level}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Users size={20} />
                  <span>{program.students}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Star size={20} className="fill-yellow-400 text-yellow-400" />
                  <span>{program.rating}/5</span>
                </div>
              </div>

              <button
                onClick={() => navigate(`/services/education/learning-mode?program=${programId}`)}
                className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Enroll in This Program
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Price Card */}
            <div className="bg-white text-black rounded-xl p-6 shadow-xl">
              <div className="text-center mb-4">
                <p className="text-gray-600 text-sm mb-2">Program Fee (Online)</p>
                <p className="text-4xl font-bold text-[#39366F]">${program.price}</p>
                <p className="text-sm text-gray-500 mt-1">One-time payment</p>
              </div>
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Full course access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Certificate included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span>Lifetime materials access</span>
                </div>
              </div>
              <button
                onClick={() => navigate(`/services/education/learning-mode?program=${programId}`)}
                className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Enroll Now
              </button>
              <p className="text-xs text-center text-gray-500 mt-3">
                Physical classroom: Free registration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">Program Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.overview.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">Learning Outcomes</h2>
          <p className="text-gray-600 mb-6">By the end of this program, you will be able to:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <Award size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 font-medium">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">Student Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#39366F] to-[#5B9BD5] rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-[#39366F] to-[#2a2850] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join {program.students.split('+')[0]}+ students already enrolled in this program
          </p>
          <button
            onClick={() => navigate(`/services/education/learning-mode?program=${programId}`)}
            className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2"
          >
            Enroll in {program.title}
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetailsPage;
