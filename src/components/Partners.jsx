import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'UNICEF', logo: 'UNICEF' },
    { name: 'Bloomberg', logo: 'Bloomberg' },
    { name: 'UNDP', logo: 'UNDP' },
    { name: 'MIT', logo: 'MIT' },
    { name: 'Google.org', logo: 'Google.org' },
    { name: 'Local Gov', logo: 'Local Gov' }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-9 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-6">Partners</h2>
        
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
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 h-24 flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#39366F]/5 to-[#5B9BD5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Logo content */}
                  <span className="relative z-10 text-gray-800 font-bold text-lg group-hover:text-[#39366F] transition-all duration-300 group-hover:scale-110">
                    {partner.logo}
                  </span>
                  
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
            transform: translateX(-50%);
          }
        }
        
        .animate-slide-left {
          animation: slide-left 20s linear infinite;
        }
        
        .animate-slide-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partners;
