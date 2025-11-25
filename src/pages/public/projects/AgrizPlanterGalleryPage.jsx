import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import SoftwareNavbar from '../../../components/SoftwareNavbar';
import { motion, AnimatePresence } from 'framer-motion';

const AgrizPlanterGalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/images/agrizplanter/agrizplanter.jpg', alt: 'AgrizPlanter device in action' },
    { src: '/images/agrizplanter/agrizplanter1.jpg', alt: 'AgrizPlanter field deployment' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SoftwareNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <Link 
            to="/projects/agrizplanter"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#39366F] transition-colors"
          >
            <ArrowLeft size={18} />
            Back to AgrizPlanter Project
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-black mt-4">AgrizPlanter Gallery</h1>
          <p className="text-lg text-gray-600 mt-2">A collection of images showcasing the development and deployment of the AgrizPlanter system.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
              layoutId={`card-${image.src}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div 
                className="relative"
                layoutId={`card-${selectedImage.src}`}
              >
                <img 
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                />
              </motion.div>
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AgrizPlanterGalleryPage;
