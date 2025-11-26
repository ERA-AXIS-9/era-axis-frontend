import React from 'react';

const ContactHero = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <span>🏠 Get in Touch</span>
        </div>

        {/* Title and Description */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
            Let's Build Your Solution Together
          </h1>
          
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Whether you need custom software, IoT integration, or a household app—we're here to help. Share your vision, and let's collaborate to bring it to life.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            Request a Quote
          </button>
          <button className="border-2 border-gray-300 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 font-medium rounded-lg transition-all duration-200">
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
