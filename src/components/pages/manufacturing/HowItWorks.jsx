import React from 'react';
import { Phone, FileText, Hammer, Package } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Consult',
    description: 'Share your needs. We listen, assess, and advise.',
    color: '#39366F'
  },
  {
    icon: FileText,
    number: '02',
    title: 'Design',
    description: 'Our team creates blueprints tailored to your specs.',
    color: '#5B9BD5'
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Build',
    description: 'Fabricate using e-waste, local materials, and precision tools.',
    color: '#2a2850'
  },
  {
    icon: Package,
    number: '04',
    title: 'Deliver',
    description: 'Test, refine, and hand over ready-to-use solutions.',
    color: '#4a8bc2'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-8 sm:py-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3">
            How It Works
          </h2>
        </div>

        {/* Steps Roadmap */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#39366F] via-[#5B9BD5] to-[#2a2850] mx-20" style={{ zIndex: 0 }}></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Icon Circle with connecting line */}
                  <div className="relative mb-4">
                    {/* Connecting Line for Mobile/Tablet - Vertical */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b" style={{ background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})` }}></div>
                    )}
                    
                    {/* Icon Container */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg relative"
                      style={{ backgroundColor: step.color, zIndex: 10 }}
                    >
                      <IconComponent size={26} className="text-white" />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border-2 flex items-center justify-center font-bold text-xs shadow-md" style={{ borderColor: step.color, color: step.color }}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
