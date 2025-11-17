import React from 'react';

const NewsCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#39366F] to-[#5B9BD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Stay Connected with ERA AXIS
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Get the latest updates on our innovations, impact stories, and opportunities to join our mission of transforming communities through technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/newsletter"
            className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Subscribe to Newsletter
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-[#39366F] px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsCTA;
