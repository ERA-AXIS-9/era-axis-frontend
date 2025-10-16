import React, { useMemo } from 'react';

const OrganizedContentGrid = ({ activeFilter, searchTerm }) => {
  const contentItems = [
    {
      id: 1,
      title: "Robotics Lab Demo, Accra",
      category: "education",
      image: "/images/manufacturing.png",
      description: "Interactive robotics demonstration for local students",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Solar Kit Build Session", 
      category: "projects",
      image: "/images/software.png",
      description: "Hands-on solar energy kit assembly workshop",
      date: "March 10, 2024"
    },
    {
      id: 3,
      title: "Open Lab: Soldering Basics",
      category: "open-labs",
      image: "/images/workingspace.png", 
      description: "Learn fundamental electronic soldering techniques",
      date: "March 8, 2024"
    },
    {
      id: 4,
      title: "Innovation Day Highlights",
      category: "events",
      image: "/images/manufacturing.png",
      description: "Key moments from our annual innovation showcase",
      date: "March 5, 2024"
    },
    {
      id: 5,
      title: "Rapid Prototyping with 3D Printing",
      category: "manufacturing",
      image: "/images/software.png",
      description: "Fast prototyping using advanced 3D printing technology",
      date: "March 1, 2024"
    },
    {
      id: 6,
      title: "Tech Clinic at Rural School",
      category: "impact", 
      image: "/images/workingspace.png",
      description: "Bringing technology education to underserved communities",
      date: "February 28, 2024"
    },
    {
      id: 7,
      title: "Arduino Workshop for Beginners",
      category: "education",
      image: "/images/manufacturing.png",
      description: "Introduction to microcontrollers and electronics",
      date: "February 25, 2024"
    },
    {
      id: 8,
      title: "Water Quality Sensor Build",
      category: "projects",
      image: "/images/software.png",
      description: "Building IoT sensors for community water testing",
      date: "February 20, 2024"
    },
    {
      id: 9,
      title: "Woodworking & CNC Basics",
      category: "open-labs",
      image: "/images/workingspace.png",
      description: "Learn digital fabrication with wood materials",
      date: "February 18, 2024"
    },
    {
      id: 10,
      title: "Community Tech Fair 2024",
      category: "events",
      image: "/images/manufacturing.png",
      description: "Showcasing local innovations and connecting makers",
      date: "February 15, 2024"
    },
    {
      id: 11,
      title: "PCB Design and Fabrication",
      category: "manufacturing",
      image: "/images/software.png",
      description: "Professional circuit board design and production",
      date: "February 12, 2024"
    },
    {
      id: 12,
      title: "STEM Outreach: Rural Schools",
      category: "impact",
      image: "/images/workingspace.png",
      description: "Bringing hands-on tech education to underserved areas",
      date: "February 10, 2024"
    },
    {
      id: 13,
      title: "Python for Data Science",
      category: "education",
      image: "/images/manufacturing.png",
      description: "Learn data analysis and visualization with Python",
      date: "February 5, 2024"
    },
    {
      id: 14,
      title: "Smart Agriculture System",
      category: "projects",
      image: "/images/software.png",
      description: "IoT-based monitoring for local farmers",
      date: "February 1, 2024"
    },
    {
      id: 15,
      title: "Electronics Repair Clinic",
      category: "open-labs",
      image: "/images/workingspace.png",
      description: "Community repair sessions for electronic devices",
      date: "January 28, 2024"
    }
  ];

  // Filter content based on active filter and search
  const filteredContent = useMemo(() => {
    let filtered = contentItems;

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
  }, [activeFilter, searchTerm]);

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
                className="group cursor-pointer animate-fadeIn relative overflow-hidden rounded-lg"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
