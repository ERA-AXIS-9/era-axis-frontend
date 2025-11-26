import React from 'react';
import { User, Users, Building2, GraduationCap } from 'lucide-react';

const userTypes = [
  {
    icon: User,
    title: 'Individuals',
    description: 'Build personal or household solutions.',
    color: '#39366F'
  },
  {
    icon: Building2,
    title: 'Startups & Companies',
    description: 'Design, test, and launch new products.',
    color: '#5B9BD5'
  },
  {
    icon: Users,
    title: 'Communities',
    description: 'Co-create local solutions with experts.',
    color: '#2a2850'
  },
  {
    icon: GraduationCap,
    title: 'Schools & Groups',
    description: 'Hands-on STEM for all learners.',
    color: '#4a8bc2'
  }
];

const WhoCanUse = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Who Can Use the Labs
          </h2>
        </div>

        {/* User Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {userTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group text-center"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${type.color}15`, border: `2px solid ${type.color}30` }}
                  >
                    <IconComponent size={28} style={{ color: type.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {type.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoCanUse;
