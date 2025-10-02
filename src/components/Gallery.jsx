import React from 'react';

const Gallery = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Media Gallery</h2>
          <button className="text-blue-600 font-medium hover:text-blue-800">
            See Gallery
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div 
              key={index} 
              className="aspect-square bg-gray-200 rounded-lg hover:opacity-90 transition-opacity"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
