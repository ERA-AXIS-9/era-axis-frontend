import React from 'react';
import { MessageSquare } from 'lucide-react';

const FaqSupport = () => {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Still Have Questions */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-black mb-4">Still Have Questions?</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Need Personal Assistance?</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Contact our team for anything not covered here. We're here to help with personalized support.
                </p>
              </div>
              <button className="bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex-shrink-0">
                Contact Support
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqSupport;
