import React from 'react';

const equipment = [
  {
    name: 'Bambu Lab X1 Carbon',
    category: 'Prototyping Tools',
    description: 'High-speed 3D printer with multi-color capabilities.',
    image: '/images/equipment-placeholder.jpg'
  },
  {
    name: 'Soldering Workstation',
    category: 'Electronics Stations',
    description: 'Professional-grade soldering and rework station.',
    image: '/images/equipment-placeholder.jpg'
  }
];

const FeaturedEquipment = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Featured Equipment
          </h2>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Equipment Image */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">Equipment Image</span>
                </div>
              </div>

              {/* Equipment Info */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-[#39366F]/10 text-[#39366F] rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-8">
          <a
            href="#equipment-catalog"
            className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEquipment;
