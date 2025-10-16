import React from 'react';

const FeaturedJourney = () => {
  const journeyItems = [
    {
      id: 1,
      image: "/images/manufacturing.png",
      caption: "Initial Concept"
    },
    {
      id: 2,
      image: "/images/software.png",
      caption: "Design Phase"
    },
    {
      id: 3,
      image: "/images/workingspace.png",
      caption: "Prototyping"
    },
    {
      id: 4,
      image: "/images/manufacturing.png",
      caption: "Testing"
    },
    {
      id: 5,
      image: "/images/software.png",
      caption: "Launch Day"
    }
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
            From Idea to Prototype: Water Quality Monitor
          </h2>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-4 min-w-max">
            {journeyItems.map((item, index) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 w-64 sm:w-80 group cursor-pointer relative rounded-xl overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-8 h-8 rounded-full bg-[#39366F] text-white flex items-center justify-center font-bold text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-semibold text-base">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">← Scroll to see more →</p>
        </div>
        
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedJourney;
