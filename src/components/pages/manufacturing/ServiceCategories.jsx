import React from 'react';
import { GraduationCap, Building2, Users } from 'lucide-react';

const categories = [
  {
    icon: GraduationCap,
    title: 'For Schools',
    description: 'Lab equipment, teaching tools, and STEM kits.',
    color: '#39366F'
  },
  {
    icon: Building2,
    title: 'For Companies',
    description: 'Specialized machinery, office tools, and custom devices.',
    color: '#5B9BD5'
  },
  {
    icon: Users,
    title: 'For Communities',
    description: 'Public infrastructure, recycling systems, and local solutions.',
    color: '#2a2850'
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Service Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
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

export default ServiceCategories;
