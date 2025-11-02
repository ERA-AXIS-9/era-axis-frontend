import React from 'react';
import { Wrench, Monitor, Shield, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'General & Repair Services',
    description: 'Fix broken devices, replace parts, restore functionality.',
    color: '#39366F'
  },
  {
    icon: Monitor,
    title: 'IT Support/Upkeep',
    description: 'Software updates, network troubleshooting, system optimization.',
    color: '#5B9BD5'
  },
  {
    icon: Shield,
    title: 'Preventive Maintenance',
    description: 'Regular check-ups to avoid breakdowns and extend lifespan.',
    color: '#2a2850'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Fixes',
    description: 'Rapid response for urgent repairs and critical failures.',
    color: '#4a8bc2'
  }
];

const MaintenanceServices = () => {
  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-300 group"
              >
                {/* Icon */}
                <div className="mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.color}15`, border: `2px solid ${service.color}30` }}
                  >
                    <IconComponent size={20} style={{ color: service.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceServices;
