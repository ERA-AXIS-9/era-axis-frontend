import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowLeft, Zap, Code, Cpu, Wrench, Smartphone, Server, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const programData = {
  'junior-stem-basic': {
    title: 'Junior STEM Basic',
    description: 'Perfect for beginners. Learn fundamental STEM concepts through hands-on projects and interactive workshops.',
    image: '/images/Educationpage/junior%20sterm%20basic.png',
    price: 400,
    duration: '8 weeks',
    level: 'Beginner',
    projects: [
      {
        title: 'LED Light Show',
        description: 'Build an interactive LED circuit that responds to sensors and creates light patterns.',
        skills: ['Arduino', 'LEDs', 'Sensors', 'Breadboard'],
        icon: <Zap className="w-6 h-6 text-blue-500" />
      },
      {
        title: 'Simple Robot',
        description: 'Create a basic robot that can move and respond to obstacles.',
        skills: ['Arduino', 'Motors', 'Sensors', '3D Printing'],
        icon: <Cpu className="w-6 h-6 text-green-500" />
      },
      {
        title: 'Smart Device Project',
        description: 'Build a smart device that combines electronics, coding, and design.',
        skills: ['Arduino', 'Coding', '3D Design', 'Assembly'],
        icon: <Wrench className="w-6 h-6 text-purple-500" />
      }
    ],
    curriculum: [
      'Introduction to Electronics',
      'Basic Circuit Design',
      'Programming Fundamentals',
      'Sensor Integration',
      'Basic Robotics',
      'Project Development'
    ],
    requirements: [
      'No prior experience required',
      'Laptop with Arduino IDE installed',
      'Basic understanding of math',
      'Curiosity and enthusiasm to learn'
    ]
  },
  // Add other program details here
};

const ProgramDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const programId = searchParams.get('program');
  const program = programData[programId];

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <p className="text-gray-600 mb-6">The program you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/services/education" 
            className="inline-flex items-center px-6 py-3 bg-[#39366F] text-white rounded-lg hover:bg-[#2a2850] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Programs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <div 
        className="relative h-96 bg-cover bg-center bg-fixed" 
        style={{
          backgroundImage: `url(${program.image})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <Link 
                to="/services/education" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Programs
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{program.title}</h1>
              <p className="text-xl text-white/90 mb-6">{program.description}</p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {program.duration}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  {program.level}
                </span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  GHS {program.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Program</h2>
              <p className="text-gray-700 leading-relaxed">
                Our {program.title} program is designed to introduce students to the exciting world of STEM through hands-on projects and interactive learning. 
                You'll gain practical skills in electronics, programming, and problem-solving while working on real-world projects that make learning fun and engaging.
              </p>
            </section>

            {/* Real-World Projects Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Projects</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {program.projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-blue-50 mr-4">
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, i) => (
                          <span key={i} className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <ul className="divide-y divide-gray-200">
                  {program.curriculum.map((item, index) => (
                    <li key={index} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                          <span className="text-blue-600 font-medium text-sm">{index + 1}</span>
                        </div>
                        <p className="text-gray-800">{item}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Details</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">DURATION</h4>
                  <p className="text-gray-900">{program.duration}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">SKILL LEVEL</h4>
                  <p className="text-gray-900">{program.level}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">REQUIREMENTS</h4>
                  <ul className="space-y-2">
                    {program.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-3xl font-bold text-gray-900 mb-4">GHS {program.price}</p>
                  <button className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Enroll Now
                  </button>
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Secure payment. Cancel anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
