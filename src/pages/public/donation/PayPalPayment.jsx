import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DonationSuccessModal from '../../../components/modals/DonationSuccessModal';

const PayPalPayment = () => {
  const navigate = useNavigate();
  const [showDonationSuccessModal, setShowDonationSuccessModal] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              Complete Your Donation with PayPal
            </h1>
            <p className="text-sm text-gray-600">
              Fast, secure, and trusted payments worldwide.
            </p>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            
            {/* Left Column - PayPal Form */}
            <div className="flex-1">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300 max-w-2xl">
                
                {/* Donation Summary */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Donation Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Donation Type</label>
                      <input
                        type="text"
                        value="Monthly"
                        readOnly
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Amount</label>
                      <input
                        type="text"
                        value="GHS 125.00"
                        readOnly
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Frequency</label>
                      <input
                        type="text"
                        value="Monthly"
                        readOnly
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Email</label>
                      <input
                        type="email"
                        placeholder="donor@example.com"
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Pay with PayPal */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Pay with PayPal
                  </h3>
                  
                  {/* PayPal Button */}
                  <div className="mb-4">
                    <button 
                      onClick={() => setShowDonationSuccessModal(true)}
                      className="w-full bg-black hover:bg-gray-800 text-white px-6 py-4 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                      Continue with PayPal
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-4">
                    You'll be redirected to PayPal to complete your donation.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200">
                    Back to Donation Options
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200">
                    Use a different payment method
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Impact Message */}
            <div className="flex-1 max-w-xs">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "Every donation through PayPal directly supports our learners and labs."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Success Modal */}
      <DonationSuccessModal 
        isOpen={showDonationSuccessModal} 
        onClose={() => setShowDonationSuccessModal(false)} 
      />
    </div>
  );
};

export default PayPalPayment;
