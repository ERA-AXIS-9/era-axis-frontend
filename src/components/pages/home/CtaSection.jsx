import React from 'react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-[#39366F] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates, success stories, and opportunities to get involved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#39366F]"
          />
          <button className="bg-white text-[#39366F] hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
        
        <p className="text-sm text-gray-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;