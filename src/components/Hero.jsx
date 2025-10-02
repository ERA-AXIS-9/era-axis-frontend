import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full bg-gray-900 text-white flex items-center justify-center overflow-hidden" style={{ height: 'calc(100vh - 88px)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/workingspace.png"
          alt="ERA AXIS Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Empowering <span className="text-blue-400">Innovation</span>.
              <br />
              Transforming Communities.
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl">
              Building open-source tools that empower communities to create their own technological solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold text-center transition-colors duration-300"
              >
                View Projects
              </a>
              <a 
                href="/contribute" 
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold text-center transition-colors duration-300"
              >
                Contribute
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
