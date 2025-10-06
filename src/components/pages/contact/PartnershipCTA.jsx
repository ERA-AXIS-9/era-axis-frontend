import React from 'react';
import { ArrowRight } from 'lucide-react';

const PartnershipCTA = () => {
  return (
    <section className="pt-4 pb-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Looking to partner with us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're always excited to collaborate with like-minded organizations and individuals 
            who share our vision for community-driven innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          
          <a
            href="/partnership"
            className="bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group text-center"
          >
            <h3 className="text-xl font-bold mb-3">Request Service</h3>
            <p className="text-white/90 mb-4 text-sm">
              Explore our services and request customized solutions for your organization.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium">
              Learn More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          <a
            href="/partnership"
            className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center"
          >
            <h3 className="text-xl font-bold mb-3">Partner With Us</h3>
            <p className="text-gray-600 group-hover:text-white/90 mb-4 text-sm">
              Join our network of partners and collaborate on innovative projects.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium">
              Start Partnership
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default PartnershipCTA;
