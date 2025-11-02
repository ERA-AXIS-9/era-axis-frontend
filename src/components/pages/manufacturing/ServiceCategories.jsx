import React from 'react';
import { School, Building, Users, Beaker, Wrench, Recycle } from 'lucide-react';

const categories = [
  {
    icon: Beaker,
    title: 'For Schools',
    description: 'Lab equipment, teaching tools, and STEM kits.',
    color: '#39366F'
  },
  {
    icon: Wrench,
    title: 'For Companies',
    description: 'Specialized machinery, office tools, and custom devices.',
    color: '#5B9BD5'
  },
  {
    icon: Recycle,
    title: 'For Communities',
    description: 'Public infrastructure, recycling systems, and local solutions.',
    color: '#2a2850'
  }
];

const ServiceCategories = () => {
  return (
    <section id="service-categories" className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Service Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((category, index) => {
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:border-[#39366F]/40 group"
              >
                {/* Title */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#39366F] transition-colors">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed">
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
