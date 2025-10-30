import React from 'react';
import { GraduationCap, Users, BookOpen, Globe } from 'lucide-react';

const beneficiaries = [
  {
    icon: GraduationCap,
    title: 'Students',
    description: 'Go beyond textbooks into hands-on innovation.',
    color: '#39366F'
  },
  {
    icon: Users,
    title: 'Out-of-school youth',
    description: 'Gain skills for jobs, entrepreneurship, and leadership.',
    color: '#5B9BD5'
  },
  {
    icon: BookOpen,
    title: 'Illiterate learners',
    description: 'Learn through visuals, demonstrations, and local languages.',
    color: '#2a2850'
  },
  {
    icon: Globe,
    title: 'Communities',
    description: 'Collaborate to create solutions together.',
    color: '#4a8bc2'
  }
];

const WhoBenefits = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Who Benefits
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficiaries.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${item.color}15`, border: `2px solid ${item.color}30` }}
                  >
                    <IconComponent size={24} style={{ color: item.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoBenefits;
