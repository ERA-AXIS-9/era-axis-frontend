import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Request',
    description: 'Submit a service request online or by phone.',
    color: '#39366F'
  },
  {
    number: '02',
    title: 'Assess',
    description: 'We diagnose the issue and provide a quote.',
    color: '#5B9BD5'
  },
  {
    number: '03',
    title: 'Fix',
    description: 'Our technicians repair or replace as needed.',
    color: '#2a2850'
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'Test, verify, and return fully functional equipment.',
    color: '#4a8bc2'
  }
];

const MaintenanceWorkflow = () => {
  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            Workflow
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg" style={{ backgroundColor: step.color, color: 'white' }}>
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-black mb-2 mt-3 group-hover:text-[#39366F] transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaintenanceWorkflow;
