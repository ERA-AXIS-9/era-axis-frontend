import React from 'react';

const Impact = () => {
  const metrics = [
    { number: '1,500+', label: 'Learners trained' },
    { number: '50+', label: 'Solutions built' },
    { number: '—', label: 'Communities reached' },
    { number: '—', label: 'Tons of e-waste reused' }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="p-6 bg-white bg-opacity-10 rounded-xl">
              <div className="text-3xl font-bold mb-2">{metric.number}</div>
              <div className="text-blue-100">{metric.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Donate to Support Our Mission
          </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;
