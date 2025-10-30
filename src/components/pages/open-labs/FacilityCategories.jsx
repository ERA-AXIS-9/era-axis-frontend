import React from 'react';
import { Printer, Cpu, Wrench, Monitor } from 'lucide-react';

const categories = [
  {
    icon: Printer,
    title: 'Prototyping Tools',
    description: '3D printers, laser cutters, and more.',
    color: '#39366F'
  },
  {
    icon: Cpu,
    title: 'Electronics Stations',
    description: 'Soldering, testing, and assembly benches.',
    color: '#5B9BD5'
  },
  {
    icon: Wrench,
    title: 'Machining Equipment',
    description: 'Drills, saws, and fabrication tools.',
    color: '#2a2850'
  },
  {
    icon: Monitor,
    title: 'Computing Resources',
    description: 'Workstations, software, and cloud access.',
    color: '#4a8bc2'
  }
];

const FacilityCategories = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Facility Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${category.color}15`, border: `2px solid ${category.color}30` }}
                  >
                    <IconComponent size={28} style={{ color: category.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilityCategories;
