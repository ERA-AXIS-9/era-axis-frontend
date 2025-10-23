import React from 'react';

const ContactFAQ = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Have an idea? Let's make it happen.
          </h2>
          
          <p className="text-gray-600 mb-6">
            Ready to start your project? Get in touch today.
          </p>
          
          <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
