import React from 'react';

const equipment = [
  {
    name: '3D Printers',
    category: 'Prototyping Tools',
    description: 'Advanced 3D printing technology for rapid prototyping and custom part fabrication. Perfect for bringing your designs to life with precision and speed.',
    image: '/images/OpenLabs/openlabs1.png'
  },
  {
    name: 'Fully equipped electronics workstations',
    category: 'Electronics Stations',
    description: 'Fully equipped electronics workstation with soldering, testing, and assembly capabilities. Perfect for circuit design, prototyping, and device assembly projects.',
    image: '/images/OpenLabs/openlabs.png'
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
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
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

      </div>
    </section>
  );
};

export default FeaturedEquipment;
