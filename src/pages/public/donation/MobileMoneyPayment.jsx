import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DonationSuccessModal from '../../../components/modals/DonationSuccessModal';

const MobileMoneyPayment = () => {
  const navigate = useNavigate();
  const [selectedNetwork, setSelectedNetwork] = useState('MTN Mobile Money');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [saveNumber, setSaveNumber] = useState(false);
  const [showDonationSuccessModal, setShowDonationSuccessModal] = useState(false);

  const mobileNetworks = [
    { id: 'mtn', name: 'MTN Mobile Money', logo: '📱' },
    { id: 'vodafone', name: 'Vodafone Cash', logo: '📱' },
    { id: 'airtel', name: 'AirtelTigo Money', logo: '📱' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              Complete Your Donation with Mobile Money
            </h1>
            <p className="text-sm text-gray-600">
              Secure and convenient payment through your preferred network.
            </p>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            
            {/* Left Column - Mobile Money Form */}
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
                        value="Monthly Supporter"
                        readOnly
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Amount</label>
                      <input
                        type="text"
                        value="$25.00"
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

                {/* Payment Details */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Payment Details
                  </h3>
                  
                  {/* Mobile Network Selection */}
                  <div className="mb-4">
                    <label className="block text-xs text-gray-600 mb-2">Select Mobile Network</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {mobileNetworks.map((network) => (
                        <button
                          key={network.id}
                          onClick={() => setSelectedNetwork(network.name)}
                          className={`flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                            selectedNetwork === network.name
                              ? 'border-[#39366F] bg-[#39366F] text-white'
                              : 'border-gray-200 text-gray-700 hover:border-[#39366F] hover:bg-gray-50'
                          }`}
                        >
                          <span>{network.logo}</span>
                          <span className="text-xs">{network.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="mb-4">
                    <label className="block text-xs text-gray-600 mb-1">Phone Mobile Number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 024 xxx xxx"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                    />
                  </div>

                  {/* Confirm Number */}
                  <div className="mb-4">
                    <label className="block text-xs text-gray-600 mb-1">Confirm Number</label>
                    <input
                      type="tel"
                      placeholder="Re-enter your mobile number"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                    />
                  </div>

                  {/* Save Number Option */}
                  <div className="mb-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={saveNumber}
                        onChange={(e) => setSaveNumber(e.target.checked)}
                        className="w-4 h-4 text-[#39366F] border-gray-300 rounded focus:ring-[#39366F]"
                      />
                      <span className="text-sm text-gray-700">Save this number for future donations</span>
                    </label>
                  </div>

                  {/* Send Payment Button */}
                  <div className="mb-4">
                    <button 
                      onClick={() => setShowDonationSuccessModal(true)}
                      className="w-full bg-black hover:bg-gray-800 text-white px-6 py-4 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                      Send Payment Request
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-4">
                    You'll receive a prompt on your phone to authorize the payment. Please confirm within 60 seconds to complete your donation.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200">
                    Back to Donation Options
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200">
                    Use another payment method
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Help & Impact */}
            <div className="flex-1 max-w-xs">
              <div className="space-y-4">
                {/* Impact Message */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      "Your donation fuels local innovation using local resources."
                    </p>
                  </div>
                </div>

                {/* Need Help */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                  <h4 className="text-sm font-semibold text-black mb-3">Need Help?</h4>
                  <p className="text-xs text-gray-600 mb-3">
                    We'll send a secure prompt to your wallet app or USSD. If you don't receive it, call *170# (mobile) and try again.
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

export default MobileMoneyPayment;
