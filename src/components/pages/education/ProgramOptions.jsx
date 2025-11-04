import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Cpu, Terminal, ChevronRight } from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: 'Junior STEM Basics',
    description: 'STEM for All - Innovation Without Barriers. Learn through hands-on projects using e-waste and local resources.',
    image: '/images/Educationpage/junior%20sterm%20basic.png',
    price: 150,
    link: '/services/education/program-details?program=junior-stem',
    id: 'junior-stem'
  },
  {
    icon: Cpu,
    title: 'Maker: Hardware & Repair',
    description: 'Master electronics, fabrication, and repair skills. Build devices from e-waste and access professional tools.',
    image: '/images/Educationpage/maker%20hardware%20and%20repair.png',
    price: 450,
    link: '/services/education/program-details?program=maker-hardware',
    id: 'maker-hardware'
  },
  {
    icon: Terminal,
    title: 'Coder: Software Foundations',
    description: 'Learn to code from scratch and build practical applications. From mobile apps to smart home systems.',
    image: '/images/Educationpage/coder%20software%20fundation.png',
    price: 300,
    link: '/services/education/program-details?program=coder-software',
    id: 'coder-software'
  }
];

const ProgramOptions = () => {
  const navigate = useNavigate();

  const handleEnroll = (programId) => {
    navigate(`/services/education/learning-mode?program=${programId}`);
  };

  return (
    <section id="program-options" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Left Aligned */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Professional Courses
          </h2>
          <p className="text-base text-gray-600 max-w-2xl">
            Start your tech journey with our specialized programs
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
              >
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
                <div className="p-4 sm:p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <IconComponent size={20} className="text-[#39366F] flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {program.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 sm:mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Price and Button */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xl sm:text-2xl font-bold text-[#39366F]">
                        GHS {program.price}
                      </span>
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
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramOptions;
