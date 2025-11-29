import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Cpu, Terminal, ChevronRight, Zap, Star } from 'lucide-react';

const membershipProgram = {
  icon: Zap,
  title: 'ERA AXIS Membership Dues',
  subtitle: 'Get continuous access to tools, equipment, and mentorship',
  description: 'Access Innovation. Build Skills. Shape the Future. Continuous access to workshop tools, Open Lab equipment, mentorship, and community projects.',
  image: '/images/Educationpage/junior%20sterm%20basic.png',
  price: 15,
  priceType: 'monthly',
  link: '/services/education/membership-enrollment',
  id: 'membership',
  color: '#2A2D7C',
  popular: true
};

const professionalCourses = [
  {
    icon: GraduationCap,
    title: 'Junior STEM Basic',
    description: 'Perfect for beginners. Learn fundamental STEM concepts through hands-on projects and interactive workshops.',
    image: '/images/Educationpage/junior%20sterm%20basic.png',
    price: 150,
    link: '/services/education/program-details?program=junior-stem-basic',
    id: 'junior-stem-basic'
  },
  {
    icon: Cpu,
    title: 'Maker: Hardware & Repair',
    description: 'Master electronics, fabrication, and repair skills. Build devices from e-waste and access professional tools.',
    image: '/images/Educationpage/maker%20hardware%20and%20repair.png',
    price: 400,
    link: '/services/education/program-details?program=maker-hardware',
    id: 'maker-hardware'
  },
  {
    icon: Terminal,
    title: 'Coder: Software Foundations',
    description: 'Learn to code from scratch and build practical applications. From mobile apps to smart home systems.',
    image: '/images/Educationpage/coder%20software%20fundation.png',
    price: 400,
    link: '/services/education/program-details?program=coder-software',
    id: 'coder-software'
  }
];

const ProgramOptions = () => {
  const navigate = useNavigate();

  const handleEnroll = (programId) => {
    navigate(`/services/education/learning-mode?program=${programId}`);
  };

  const MembershipCard = ({ program }) => {
    return (
      <div
        className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border overflow-hidden ${
          program.popular ? 'border-[#2A2D7C]' : 'border-gray-100 hover:border-[#2A2D7C]/20'
        }`}
      >
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A2D7C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10">
          {program.popular && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#2A2D7C] text-white rounded-full text-xs font-semibold">
                <Star size={14} className="fill-white" />
                Most Popular
              </span>
            </div>
          )}

          <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#2A2D7C] transition-colors duration-300">{program.title}</h3>
          <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">{program.subtitle}</p>
          
          <div className="mb-4">
            <span className="text-4xl font-bold" style={{ color: program.color }}>
              GHS {program.price}
            </span>
            <span className="text-gray-500 text-lg">/{program.priceType}</span>
          </div>

          <p className="text-gray-600 text-sm mb-6 group-hover:text-gray-700 transition-colors duration-300">{program.description}</p>

          <a
            href={program.link}
            className="w-full bg-[#2A2D7C] hover:bg-[#1a1d4d] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
          >
            Learn More
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    );
  };

  const ProgramCard = ({ program }) => {
    const IconComponent = program.icon;
    return (
      <div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-[#39366F]/20"
      >
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#39366F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        
        {/* Image */}
        <div className="relative h-40 sm:h-48 overflow-hidden">
          <img 
            src={program.image} 
            alt={program.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 relative z-10">
          {/* Icon and Title */}
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[#39366F]/10 to-[#39366F]/5 group-hover:scale-110 transition-transform duration-300">
              <IconComponent size={20} className="text-[#39366F] flex-shrink-0" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#39366F] transition-colors duration-300">
              {program.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
            {program.description}
          </p>

          {/* Price and Button */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xl sm:text-2xl font-bold text-[#39366F]">
                  GHS {program.price}
                </span>
                {program.priceType === 'monthly' && (
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">per month</p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={program.link}
                className="border border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm"
              >
                Learn More
              </a>
              <button
                onClick={() => handleEnroll(program.id)}
                className="bg-[#39366F] hover:bg-[#2a2850] text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="program-options" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Membership Section */}
        <div className="mb-16">
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Membership
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Get continuous access to tools, equipment, and mentorship
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <MembershipCard program={membershipProgram} />
          </div>
        </div>

        {/* Professional Courses Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our Professional Courses
            </h2>
            <p className="text-base text-gray-600 max-w-2xl">
              Start your tech journey with our specialized programs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {professionalCourses.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOptions;
