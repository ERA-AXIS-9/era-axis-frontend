import React from 'react';
import { Image, Video, FileText, Users } from 'lucide-react';

const MediaStats = () => {
  const stats = [
    {
      icon: Image,
      number: "240+",
      label: "Project Images",
      description: "High-quality documentation photos",
      color: "bg-blue-500"
    },
    {
      icon: Video,
      number: "85",
      label: "Demo Videos",
      description: "Live demonstrations and tutorials",
      color: "bg-red-500"
    },
    {
      icon: FileText,
      number: "120",
      label: "Documents",
      description: "Research papers and reports",
      color: "bg-green-500"
    },
    {
      icon: Users,
      number: "15K+",
      label: "Total Views",
      description: "Community engagement across all media",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Media by the Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our comprehensive documentation captures every aspect of student innovation and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group">
                
                {/* Icon */}
                <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Number */}
                <div className="text-3xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-lg font-semibold text-black mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-sm text-gray-600 leading-relaxed">
                  {stat.description}
                </div>

              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default MediaStats;
