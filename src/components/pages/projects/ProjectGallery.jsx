import React from 'react';

const ProjectGallery = () => {
  const galleryItems = [
    { image: '/images/Homepage/for ecowatch.jpeg', alt: 'EcoWatch monitoring system' },
    { image: '/images/Homepage/ECOWATCH.png', alt: 'EcoWatch dashboard' },
    { image: '/images/Homepage/PXL_20250913_133342582.MP.jpg', alt: 'Field deployment' }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden shadow-lg h-64 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
