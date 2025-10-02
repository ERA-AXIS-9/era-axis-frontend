import React from 'react';

const ImpactStats = () => {
  const stats = [
    {
      icon: '👥',
      number: "100+",
      label: "Trained Youths",
      bg: 'from-[#F0EFFC] to-[#E0DEFA]',
      textColor: 'text-[#39366F]',
      borderColor: 'border-[#D0CFF8]'
    },
    {
      icon: '💻',
      number: "50+",
      label: "Projects Completed",
      bg: 'from-[#F0EFFC] to-[#E0DEFA]',
      textColor: 'text-[#39366F]',
      borderColor: 'border-[#D0CFF8]'
    },
    {
      icon: '🤝',
      number: "25+",
      label: "Partner Organizations",
      bg: 'from-[#F0EFFC] to-[#E0DEFA]',
      textColor: 'text-[#39366F]',
      borderColor: 'border-[#D0CFF8]'
    },
    {
      icon: '📅',
      number: "10+",
      label: "Years of Impact",
      bg: 'from-[#F0EFFC] to-[#E0DEFA]',
      textColor: 'text-[#39366F]',
      borderColor: 'border-[#D0CFF8]'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40h-40z' fill='%2339366f' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Left Aligned */}
        <div className="text-left mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#39366F]">Our Impact in Numbers</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Transforming lives through technology and education
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-white/95 p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden backdrop-blur-sm"
            >
              {/* Brand-colored gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start">
                  <div className={`p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border ${stat.borderColor} mr-4 group-hover:bg-white transition-all duration-300 transform group-hover:scale-110`}>
                    <span className={`text-2xl ${stat.textColor}`}>{stat.icon}</span>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold ${stat.textColor} group-hover:text-[#2a2850] transition-colors`}>
                      {stat.number}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 mt-1 group-hover:text-[#39366F] transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </div>
                
                {/* Brand-colored accent element */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-[#39366F]/5 group-hover:bg-[#39366F]/10 transition-all duration-500 -z-10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
