import React from 'react';

const Hero = () => {
  const stats = [
    { number: '1,500+', label: 'Learners trained' },
    { number: '—', label: 'E-waste transformed' },
    { number: '50+', label: 'Community solutions' },
    { number: '—', label: 'Global recognition' }
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Empowering Innovators.
              <br />
              Transforming Communities.
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              An innovation ecosystem advancing technology education, circular manufacturing, 
              and open software to solve real community challenges.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
                Learn More
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-white bg-opacity-5">
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
