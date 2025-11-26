import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RotateCcw, CreditCard, Phone, X } from 'lucide-react';

const PaymentFailedModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleTryAgain = () => {
    onClose();
    // Stay on current page to retry
  };

  const handleChangePaymentMethod = () => {
    onClose();
    navigate('/donate/payment');
  };

  const handleContactSupport = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-black">Payment Failed</h2>
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
            We couldn't process your donation.
          </p>

          {/* What Happened */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-black mb-3">
              What happened
            </h3>
            
            {/* Error Message */}
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-4">
              <p className="text-sm font-medium">
                Unfortunately, your payment could not be completed. This may be due to:
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-black mb-3">
              Next steps
            </h3>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <button 
                onClick={handleTryAgain}
                className="flex items-center justify-center gap-2 bg-[#39366F] hover:bg-[#2a2850] text-white px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <RotateCcw className="w-4 h-4" />
                Try Again
              </button>
              <button 
                onClick={handleChangePaymentMethod}
                className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
              >
                <CreditCard className="w-4 h-4" />
                Choose Another Payment Method
              </button>
              <button 
                onClick={handleContactSupport}
                className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Contact Support
              </button>
            </div>
            
            <p className="text-xs text-gray-500">
              If the problem continues, please reach out to us at support@era-axis.com or call +233 xxx xxx xxx.
            </p>
          </div>

          {/* Help & Encouragement */}
          <div className="space-y-4">
            {/* Encouragement Message */}
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                "Every donation makes a difference. Thank you for trying again."
              </p>
            </div>

            {/* Need Help */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-black mb-2">Need Help?</h4>
              <p className="text-xs text-gray-600 mb-2">
                Payment issues can occur due to network problems, card restrictions, or insufficient funds. We have multiple payment methods available to ensure your donation goes through.
              </p>
              <p className="text-xs text-gray-600">
                If using Mobile Money or PayPal, ensure your app approves the transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailedModal;
