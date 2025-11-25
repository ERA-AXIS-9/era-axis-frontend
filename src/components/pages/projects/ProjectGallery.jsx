import React from 'react';

const ProjectGallery = () => {
  const galleryItems = [
    { image: '/images/ecowatch-gallery/ecowatch8.png', alt: 'EcoWatch sensor casing' },
    { image: '/images/Homepage/for ecowatch.jpeg', alt: 'EcoWatch monitoring system' },
    { image: '/images/ecowatch-gallery/ecowatch6.png', alt: 'EcoWatch deployment in the field' }
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

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="/projects/ecowatch/gallery"
            className="inline-block bg-[#39366F] text-white font-bold text-lg px-8 py-3 rounded-lg hover:bg-[#2a2850] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
          >
            See All Photos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
