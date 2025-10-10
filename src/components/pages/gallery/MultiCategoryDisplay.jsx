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
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[#39366F] transition-all duration-300 hover:shadow-lg">
                      
                      {/* Image */}
                      <div className="aspect-video relative">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
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
