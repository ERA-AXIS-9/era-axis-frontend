import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EWasteConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Success Icon */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              Thank You for Donating Your E-Waste
            </h1>
            <p className="text-sm text-gray-600">
              You've turned old devices into tools for learning and innovation.
            </p>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            
            {/* Left Column - Confirmation Details */}
            <div className="flex-1">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                
                {/* Success Message */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-green-700">Your donation has been successfully scheduled.</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Our team will contact you within 24 hours to arrange pickup/drop-off.
                  </p>
                </div>

                {/* Donation Summary */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Donation Summary
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Items Donated</label>
                      <input
                        type="text"
                        value="Laptops x1, Phone x2"
                        readOnly
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Method</label>
                      <input
                        type="text"
                        value="Pickup Requested"
                        readOnly
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Date</label>
                      <input
                        type="text"
                        value="Mon, 22 Sep • 10:00 AM"
                        readOnly
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Donor</label>
                      <input
                        type="text"
                        value="Jane Doe • jane@acme.org • ACME Foundation"
                        readOnly
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Next Steps
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#39366F] mt-1">•</span>
                      <span>We will email or call you with confirmation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#39366F] mt-1">•</span>
                      <span>If pickup was requested, our logistics team will arrive at the scheduled time.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#39366F] mt-1">•</span>
                      <span>If drop-off, please bring items to 123 Innovation Way, Accra, Ghana.</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-500 mb-4">
                    Learn how your donation creates impact.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
                    Track My Donation
                  </button>
                  <button 
                    onClick={() => navigate('/donate/ewaste')}
                    className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                  >
                    Donate Again
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Support & Info */}
            <div className="flex-1 max-w-xs">
              <div className="space-y-4">
                {/* Need Support */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                  <h4 className="text-sm font-semibold text-black mb-3">Need Support?</h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Need help? Contact our support team at info@era-axis.com or call +233 000 000 000.
                  </p>
                  <p className="text-xs text-gray-600">
                    Visit FAQ
                  </p>
                </div>

                {/* What Happens to Devices */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                  <h4 className="text-sm font-semibold text-black mb-3">What happens to your devices?</h4>
                  <p className="text-xs text-gray-600">
                    We transform your donated equipment for hands-on STEM education. Devices are refurbished by our certified partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EWasteConfirmation;
