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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black tracking-tight mb-6">Impact</h2>
        
        {/* Stats Grid with Donate Button */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
          
          {/* Donate Button Card */}
          <div className="group relative bg-gradient-to-br from-[#39366F] to-[#2a2850] p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center">
            <a 
              href="/donate"
              className="text-white font-bold text-base hover:scale-105 transition-transform duration-300"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
