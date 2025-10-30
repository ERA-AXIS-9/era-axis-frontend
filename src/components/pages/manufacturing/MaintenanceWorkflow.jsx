import React from 'react';
import { ClipboardList, Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Request',
    description: 'Submit a service request online or by phone.',
    color: '#39366F'
  },
  {
    icon: Search,
    number: '02',
    title: 'Assess',
    description: 'We diagnose the issue and provide a quote.',
    color: '#5B9BD5'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Fix',
    description: 'Our technicians repair or replace as needed.',
    color: '#2a2850'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Deliver',
    description: 'Test, verify, and return fully functional equipment.',
    color: '#4a8bc2'
  }
];

const MaintenanceWorkflow = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Workflow
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg" style={{ backgroundColor: step.color, color: 'white' }}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 mt-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${step.color}15`, border: `2px solid ${step.color}30` }}
                  >
                    <IconComponent size={24} style={{ color: step.color }} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceWorkflow;
