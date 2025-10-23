import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, ExternalLink, ArrowLeft, Facebook, Twitter, Linkedin, X } from 'lucide-react';

const DonationSuccessModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleReturnHome = () => {
    onClose();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-black">Thank You for Your Support!</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">
            Your gift is creating innovators and transforming communities.
          </p>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* Left Column - Confirmation Details */}
            <div className="flex-1">
              
              {/* Confirmation */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-black mb-3">
                  Confirmation
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Your donation has been received successfully. You'll receive an email receipt shortly.
                </p>
                <p className="text-sm text-gray-700">
                  As a supporter, you'll also get monthly updates on the impact of your contribution.
                </p>
              </div>

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
                    <label className="block text-xs text-gray-600 mb-1">Transaction ID</label>
                    <input
                      type="text"
                      value="TXN2345"
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
                      value="15 Aug 2025"
                      readOnly
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Email</label>
                    <input
                      type="email"
                      value="donor@example.com"
                      readOnly
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>
                </div>
              </div>

              {/* Impact Stats */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-black mb-3">
                  "Because of you, more learners gain access to innovation opportunities."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-[#39366F]">2</div>
                    <div className="text-xs text-gray-600">kits funded this month</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-[#39366F]">1</div>
                    <div className="text-xs text-gray-600">learner reached weekly</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <button className="flex items-center justify-center gap-2 bg-[#39366F] hover:bg-[#2a2850] text-white px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  Share Your Support
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  Explore Impact Stories
                </button>
                <button 
                  onClick={handleReturnHome}
                  className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Return to Home
                </button>
              </div>

              {/* Social Share */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#39366F] transition-colors">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </button>
                <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#39366F] transition-colors">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </button>
                <button className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#39366F] transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Right Column - Impact & Help */}
            <div className="flex-1 max-w-xs">
              <div className="space-y-4">
                {/* Impact Quote */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-black mb-3">Impact Quote</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    "Every month, you unlock innovation opportunities for someone new."
                  </p>
                </div>

                {/* Need Help */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-black mb-3">Need Help?</h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Questions about your donation?
                  </p>
                  <p className="text-xs text-gray-600">
                    Contact support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationSuccessModal;
