import React from 'react';

const AwardsRecognition = () => {
  const awards = [
    {
      title: "Innovation Excellence Award",
      organization: "West Africa Tech Summit",
      year: "2024",
      description: "Recognized for outstanding innovation in community-driven technology education."
    },
    {
      title: "Sustainability Champion",
      organization: "Green Tech Initiative",
      year: "2024",
      description: "Awarded for exceptional work in e-waste transformation and circular economy practices."
    },
    {
      title: "Community Impact Award",
      organization: "African Development Foundation",
      year: "2023",
      description: "Honored for significant positive impact on local communities through technology access."
    },
    {
      title: "Educational Innovation Prize",
      organization: "UNESCO Africa",
      year: "2023",
      description: "Recognized for innovative approaches to STEM education and skill development."
    },
    {
      title: "Social Enterprise Recognition",
      organization: "Impact Hub Accra",
      year: "2022",
      description: "Acknowledged for creating sustainable solutions that address real-world challenges."
    }
  ];

  return (
    <section id="awards" className="pt-4 pb-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8">Awards & Recognition</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {awards.map((award, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md p-4 transition-all duration-300 hover:-translate-y-1 group cursor-pointer h-24 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-sm font-bold text-black group-hover:text-[#39366F] mb-1 transition-colors duration-300">{award.title}</h3>
                <p className="text-xs text-[#5B9BD5] font-medium">{award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;
