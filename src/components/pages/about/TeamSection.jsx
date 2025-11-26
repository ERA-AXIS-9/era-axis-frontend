import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Michael Afedi",
      role: "CEO & Founder",
      description: "Visionary leader with 10+ years in tech innovation and community development, driving ERA AXIS's mission forward.",
      image: "/images/workingspace.png"
    },
    {
      name: "Michael Afedi",
      role: "CTO",
      description: "Technology expert specializing in sustainable solutions and software architecture for community impact.",
      image: "/images/software.png"
    },
    {
      name: "Michael Afedi",
      role: "Head of Education",
      description: "Educational innovator focused on accessible learning and skill development for all ages.",
      image: "/images/manufacturing.png"
    },
    {
      name: "Michael Afedi",
      role: "Operations Director",
      description: "Operations specialist ensuring efficient program delivery and community engagement across all pillars.",
      image: "/images/workingspace.png"
    },
    {
      name: "Michael Afedi",
      role: "Head of Manufacturing",
      description: "Manufacturing expert leading circular economy and sustainable production initiatives.",
      image: "/images/manufacturing.png"
    },
    {
      name: "Michael Afedi",
      role: "Community Manager",
      description: "Community engagement specialist fostering partnerships and local connections throughout West Africa.",
      image: "/images/software.png"
    },
    {
      name: "Michael Afedi",
      role: "Research Lead",
      description: "Research coordinator driving innovation and evidence-based program development for maximum impact.",
      image: "/images/workingspace.png"
    },
    {
      name: "Michael Afedi",
      role: "Strategic Advisors",
      description: "Strategic advisors providing guidance on organizational growth, sustainability, and regional expansion.",
      image: "/images/manufacturing.png"
    }
  ];

  return (
    <section id="team" className="pt-4 pb-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8">Our Team</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <div className="text-center">
                <div className="w-full h-28 mb-3 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-black group-hover:text-[#39366F] mb-1 transition-colors duration-300">{member.name}</h3>
                <p className="text-[#5B9BD5] font-medium mb-2 text-sm">{member.role}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
