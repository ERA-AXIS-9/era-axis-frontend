import React from 'react';

const MultiCategoryDisplay = () => {
  const categoryContent = [
    {
      category: "Open Labs",
      items: [
        {
          id: 1,
          title: "Laser Cutting Basics",
          image: "/images/manufacturing.png",
          description: "Learn fundamental laser cutting techniques and safety"
        }
      ]
    },
    {
      category: "Education",
      items: [
        {
          id: 2,
          title: "STEM Class in Session",
          image: "/images/software.png",
          description: "Interactive STEM learning for young innovators"
        }
      ]
    },
    {
      category: "Events",
      items: [
        {
          id: 3,
          title: "Community Innovation Day",
          image: "/images/workingspace.png",
          description: "Annual showcase of community-driven projects"
        }
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Multi-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryContent.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              
              {/* Category Content */}
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div 
                    key={item.id} 
                    className="group cursor-pointer relative rounded-xl overflow-hidden"
                  >
                    {/* Image with Overlay */}
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Category Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-[#39366F] px-3 py-1 rounded-full text-xs font-semibold">
                          {section.category}
                        </span>
                      </div>
                      
                      {/* Title Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white font-bold text-lg leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default MultiCategoryDisplay;
