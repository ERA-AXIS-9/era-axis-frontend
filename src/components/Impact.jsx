import React from 'react';
import { Users, Lightbulb, Globe, Recycle } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: 1500,
      suffix: '+',
      label: 'Learners trained',
      color: '#39366F'
    },
    {
      icon: Lightbulb,
      number: 50,
      suffix: '+',
      label: 'Solutions built',
      color: '#5B9BD5'
    },
    {
      icon: Globe,
      number: 0,
      suffix: '',
      label: 'Communities reached',
      color: '#2a2850',
      placeholder: '—'
    },
    {
      icon: Recycle,
      number: 0,
      suffix: '',
      label: 'Tons of e-waste reused',
      color: '#4a8bc2',
      placeholder: '—'
    }
  ];

  return (
    <section className="py-9 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight mb-6">Impact</h2>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          {/* Stats Cards */}
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Content */}
                <div className="text-center">
                  <div 
                    className="text-3xl font-bold mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.placeholder ? stat.placeholder : `${stat.number}${stat.suffix}`}
                  </div>
                  <div className="text-base font-semibold text-black">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Donate Button - Full Width on Mobile */}
        <div className="flex justify-center md:justify-end">
          <a 
            href="/donate"
            className="w-full md:w-auto bg-gradient-to-br from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#39366F] text-white font-bold text-base px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-center"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;
