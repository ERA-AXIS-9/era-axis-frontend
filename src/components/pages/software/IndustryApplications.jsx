import React from 'react';
import { Heart, Building2, Wheat, GraduationCap } from 'lucide-react';

const IndustryApplications = () => {
  const applications = [
    {
      icon: Heart,
      title: 'Health',
      description: 'Patient monitoring and telemedicine solutions.'
    },
    {
      icon: Building2,
      title: 'Climate',
      description: 'Air quality, energy, and environmental tracking.'
    },
    {
      icon: Wheat,
      title: 'Agriculture',
      description: 'Soil sensors, irrigation, and precision farming.'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Smart classrooms and lab equipment monitoring.'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Industry Applications
          </h2>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {applications.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
              >
                <div className="w-10 h-10 bg-[#39366F]/10 rounded-lg flex items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 text-[#39366F]" />
                </div>
                
                <h3 className="text-base font-semibold text-black mb-2">
                  {app.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {app.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustryApplications;
