import React from 'react';

const Partners = () => {
  const partners = [
    { 
      name: 'UNICEF Startup Labs', 
      logo: '/images/Partners/unicef-startup-labs.png',
      alt: 'UNICEF Startup Labs logo'
    },
    { 
      name: 'MEST Africa', 
      logo: '/images/Partners/mest-africa.png',
      alt: 'MEST Africa logo'
    },
    { 
      name: 'Bloomberg Philanthropies', 
      logo: '/images/Partners/bloomberg.png',
      alt: 'Bloomberg Philanthropies logo'
    },
    { 
      name: 'F6S', 
      logo: '/images/Partners/f6s.png',
      alt: 'F6S logo'
    },
    { 
      name: 'Kosmos Innovation Center', 
      logo: '/images/Partners/kosmos innovation .png',
      alt: 'Kosmos Innovation Center logo'
    },
    { 
      name: 'Adwumawura', 
      logo: '/images/Partners/adwumaura.png',
      alt: 'Adwumawura logo'
    }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-9 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-6">Partners & Recognition</h2>
        
        {/* Slideshow Container */}
        <div className="relative overflow-hidden">
          {/* Sliding Track */}
          <div className="flex animate-slide-left">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 mx-4"
                style={{ minWidth: '200px' }}
              >
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden" style={{ minHeight: 'auto' }}>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#39366F]/5 to-[#5B9BD5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Logo content */}
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <img 
                      src={partner.logo} 
                      alt={partner.alt}
                      className="max-h-20 w-auto object-contain"
                      style={{ maxHeight: '80px' }}
                      onLoad={(e) => {
                        // Hide text when image loads successfully
                        e.target.nextSibling.style.display = 'none';
                      }}
                      onError={(e) => {
                        console.log('Image failed to load:', partner.logo);
                        // Show text when image fails
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    {/* Fallback text - hidden by default */}
                    <span 
                      className="text-gray-800 font-bold text-sm text-center"
                      style={{ display: 'none' }}
                    >
                      {partner.name}
                    </span>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39366F] to-[#5B9BD5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      {/* Custom CSS for animation */}
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-200%);
          }
        }
        
        .animate-slide-left {
          animation: slide-left 15s linear infinite;
        }
        
        .animate-slide-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
