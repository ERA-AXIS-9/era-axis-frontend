import React from 'react';
import { Clock, Users, BookOpen, Shield } from 'lucide-react';

const accessInfo = [
  {
    icon: Clock,
    title: 'Lab Hours',
    details: [
      'Mon-Fri: 8 AM - 6 PM',
      'Sat: 9 AM - 2 PM',
      'Sun: Closed'
    ],
    color: '#39366F'
  },
  {
    icon: Users,
    title: 'Membership Required',
    details: [
      'Student: $5/month',
      'Startup: $25/month',
      'Organization: $65/month'
    ],
    color: '#5B9BD5'
  },
  {
    icon: BookOpen,
    title: 'Training Available',
    details: [
      'Equipment orientation',
      'Safety certification',
      'Skill workshops'
    ],
    color: '#2a2850'
  },
  {
    icon: Shield,
    title: 'Safety First',
    details: [
      'PPE provided',
      'Supervised sessions',
      'Emergency protocols'
    ],
    color: '#4a8bc2'
  }
];

const LabAccessTraining = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Lab Access & Training
          </h2>
        </div>

        {/* Access Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${info.color}15`, border: `2px solid ${info.color}30` }}
                  >
                    <IconComponent size={24} style={{ color: info.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors">
                  {info.title}
                </h3>

                {/* Details List */}
                <ul className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                      • {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LabAccessTraining;
