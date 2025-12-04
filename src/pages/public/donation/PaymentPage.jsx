import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentFailedModal from '../../../components/modals/PaymentFailedModal';
import DonationSuccessModal from '../../../components/modals/DonationSuccessModal';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('Credit/Debit Card');
  const [makeAnonymous, setMakeAnonymous] = useState(false);
  const [showPaymentFailedModal, setShowPaymentFailedModal] = useState(false);
  const [showDonationSuccessModal, setShowDonationSuccessModal] = useState(false);

  const paymentMethods = ['Credit/Debit Card', 'PayPal', 'Mobile Money'];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              Complete Your Monthly Gift
            </h1>
            <p className="text-sm text-gray-600">
              Secure checkout. It takes less than a minute.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-semibold">1</div>
                <span className="font-medium">Payment Details</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-xs font-semibold">2</div>
                <span className="text-gray-600">Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-xs font-semibold">3</div>
                <span className="text-gray-600">Donor Dashboard Redirect</span>
              </div>
            </div>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            
            {/* Left Column - Payment Form */}
            <div className="flex-1">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300 max-w-2xl">
                
                {/* Donor Information */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Donor Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Donor Name</label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="example@era-axis.com"
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Payment Method
                  </h3>
                  <div className="flex gap-2">
                    {paymentMethods.map((method) => (
                      <button
                        key={method}
                        onClick={() => {
                          if (method === 'PayPal') {
                            navigate('/donate/paypal');
                          } else if (method === 'Mobile Money') {
                            navigate('/donate/mobile-money');
                          } else {
                            setPaymentMethod(method);
                          }
                        }}
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                          paymentMethod === method
                            ? 'border-[#39366F] bg-[#39366F] text-white'
                            : 'border-gray-200 text-gray-700 hover:border-[#39366F] hover:bg-gray-50'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Card Details */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Card / Account Details
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Card Number</label>
                        <input
                          type="text"
                          placeholder="4242 1234 5678 1234"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Name on Card / Account Holder</label>
                        <input
                          type="text"
                          placeholder="As printed"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Expiry / Valid Thru</label>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">CVV / Security Code</label>
                        <input
                          type="text"
                          placeholder="CVC"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Billing Address (optional)
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Address Line 1</label>
                        <input
                          type="text"
                          placeholder="Street address"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Address Line 2</label>
                        <input
                          type="text"
                          placeholder="Apt, suite, etc. (optional)"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">City</label>
                        <input
                          type="text"
                          placeholder="City"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">State/Region</label>
                        <input
                          type="text"
                          placeholder="State or Region"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Zip Code</label>
                        <input
                          type="text"
                          placeholder="Zip / Postal code"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Country</label>
                        <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200">
                          <option>Select country</option>
                          <option>Ghana</option>
                          <option>Nigeria</option>
                          <option>Kenya</option>
                          <option>South Africa</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Anonymous Option */}
                <div className="mb-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={makeAnonymous}
                      onChange={(e) => setMakeAnonymous(e.target.checked)}
                      className="w-4 h-4 text-[#39366F] border-gray-300 rounded focus:ring-[#39366F]"
                    />
                    <span className="text-sm text-gray-700">Make my gift anonymous</span>
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => setShowDonationSuccessModal(true)}
                    className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    Confirm Monthly Donation
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200">
                    Back
                  </button>
                  <button 
                    onClick={() => setShowPaymentFailedModal(true)}
                    className="border-2 border-red-200 text-red-600 hover:border-red-500 hover:text-red-700 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                  >
                    Test Payment Failed
                  </button>
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  By confirming, you authorize a recurring monthly charge. You can modify or cancel anytime.
                </p>
              </div>
            </div>

            {/* Right Column - Donation Summary */}
            <div className="flex-1 max-w-xs">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                <h3 className="text-sm font-semibold text-black mb-4">
                  Donation Summary
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Frequency:</span>
                    <span className="font-medium">Monthly</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-medium">GHS 125</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">First Charge Date:</span>
                    <span className="font-medium">15 Aug 2025</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Processing Fee:</span>
                    <span className="font-medium">GHS 0.00</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Total:</span>
                    <span>GHS 125.00</span>
                  </div>
                </div>

                {/* Impact Quote */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 italic">
                    "Every month, you unlock innovation opportunities for someone new."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Failed Modal */}
      <PaymentFailedModal 
        isOpen={showPaymentFailedModal} 
        onClose={() => setShowPaymentFailedModal(false)} 
      />

      {/* Donation Success Modal */}
      <DonationSuccessModal 
        isOpen={showDonationSuccessModal} 
        onClose={() => setShowDonationSuccessModal(false)} 
      />
    </div>
  );
};

export default PaymentPage;