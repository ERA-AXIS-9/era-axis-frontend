import React from 'react';
import { Download, Wifi, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: 'Install',
      description: 'Download the app or set up your device.'
    },
    {
      icon: Wifi,
      title: 'Connect',
      description: 'Pair with Wi-Fi and link your household devices.'
    },
    {
      icon: Zap,
      title: 'Benefit',
      description: 'Save energy, improve safety, and simplify routines.'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-[#39366F]/20"
              >
                <div className="w-10 h-10 bg-[#39366F]/10 rounded-lg flex items-center justify-center mb-3">
                  <IconComponent className="w-5 h-5 text-[#39366F]" />
                </div>
                
                <h3 className="text-base font-semibold text-black mb-2">
                  {step.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
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

export default HowItWorks;
