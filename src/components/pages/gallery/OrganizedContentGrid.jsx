import React, { useMemo, useState, useEffect } from 'react';

const OrganizedContentGrid = ({ activeFilter, searchTerm }) => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images list - dynamically loaded
  const galleryImageNames = [
    "p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p10.jpeg", "p11.jpeg", "p12.jpeg", "p13.jpeg",
    "p14.jpeg", "p15.jpeg", "p16.jpeg", "p17.jpeg", "p18.jpeg", "p19.jpeg", "p23.jpeg", "p24.jpg",
    "p25.jpg", "p26.jpg", "p27.jpeg", "p28.jpeg", "p29.jpeg", "p30.jpeg", "p31.jpeg", "p32.jpeg",
    "p33.jpeg", "p34.jpeg", "p35.jpg", "p36.jpg", "p37.jpg", "p38.jpg", "p39.jpg", "p40.jpg",
    "p41.jpg", "p42.jpg", "p43.jpg", "p44.jpg", "p45.jpeg", "p46.jpeg", "p47.jpeg", "p48.jpeg",
    "p49.jpeg", "p50.jpeg", "p51.jpeg", "p52.jpeg", "p53.jpeg", "p54.jpeg", "p55.jpeg", "p56.jpeg",
    "17.jpeg", "p.jpg"
  ];

  useEffect(() => {
    // Create content items from gallery images
    const items = galleryImageNames.map((imageName, index) => ({
      id: index + 1,
      title: `Gallery Photo ${index + 1}`,
      category: "gallery",
      image: `/images/gallery/${imageName}`,
      description: "Community event and workshop moments",
      date: "July 10, 2025"
    }));
    setGalleryImages(items);
  }, []);

  // Filter content based on active filter and search
  const filteredContent = useMemo(() => {
    let filtered = galleryImages;

    // Apply category filter
    if (activeFilter && activeFilter !== 'all') {
      filtered = filtered.filter(item => item.category === activeFilter);
    }

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [activeFilter, searchTerm, galleryImages]);

  return (
    <>
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
            Explore Our Gallery
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Discover moments from workshops, projects, and community events.
          </p>
        </div>
        
        {filteredContent.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search or filter selection.</p>
          </div>
        ) : (
          /* Photo Gallery Grid - Image Focused */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredContent.map((item, index) => (
              <div 
                key={item.id} 
                className="group cursor-pointer animate-fadeIn relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay with Title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-xs mt-1">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
      </div>
    </section>

    {/* Lightbox Modal */}
    {selectedImage && (
      <div 
        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
        onClick={() => setSelectedImage(null)}
      >
        <div 
          className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors text-2xl font-bold"
          >
            ✕
          </button>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Image Info */}
          <div className="bg-black/50 text-white p-4 mt-4 rounded-lg">
            <h3 className="text-lg font-semibold">{selectedImage.title}</h3>
            <p className="text-sm text-gray-300 mt-1">{selectedImage.date}</p>
          </div>
        </div>
      </div>
    )}
    
    {/* Animation Styles */}
    <style jsx>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.5s ease-out forwards;
        opacity: 0;
      }
    `}</style>
    </>
  );
};

export default OrganizedContentGrid;
