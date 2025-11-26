import React from 'react';
import { ChevronRight } from 'lucide-react';

const FacilitiesCTA = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* First CTA */}
        <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Choose a membership plan that works for you.
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Flexible plans for students, startups, and organizations.
          </p>
          <a
            href="/services/open-labs"
            className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
          >
            View Membership Plans
            <ChevronRight size={18} />
          </a>
        </div>

        {/* Second CTA */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            Interested in bringing your team to the lab?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer group sessions and custom workshops.
          </p>
          <a
            href="/contact"
            className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
          >
            Contact Us
            <ChevronRight size={18} />
          </a>
        </div>

        {/* Third CTA */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            Want to see the space first?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Schedule a tour and meet our team.
          </p>
          <a
            href="/services/open-labs/book-session"
            className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
          >
            Book a Tour
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesCTA;
