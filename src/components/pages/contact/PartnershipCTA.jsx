import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PartnershipCTA = () => {
  const navigate = useNavigate();

  const handleRequestService = () => {
    navigate('/services/education');
  };

  const handlePartnerWithUs = () => {
    navigate('/partner/apply');
  };

  return (
    <section className="pt-2 pb-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Looking to partner with us?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleRequestService}
              className="bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Explore Education Programs
            </button>
            <button 
              onClick={handlePartnerWithUs}
              className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white shadow-sm hover:shadow-md"
            >
              Partner With Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnershipCTA;
