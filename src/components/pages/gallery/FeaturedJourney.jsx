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
            {journeyItems.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 w-64 sm:w-80 group cursor-pointer"
              >
                <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[#39366F] transition-all duration-300 hover:shadow-lg">
                  <div className="aspect-video relative">
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {item.caption && (
                    <div className="p-4 text-center">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-[#39366F] transition-colors">
                        {item.caption}
                      </p>
                    </div>
                  )}
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
