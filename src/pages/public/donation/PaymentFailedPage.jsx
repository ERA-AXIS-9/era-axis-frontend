import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RotateCcw, CreditCard, Phone } from 'lucide-react';

const PaymentFailedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header with Error Icon */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              Payment Failed
            </h1>
            <p className="text-sm text-gray-600">
              We couldn't process your donation.
            </p>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            
            {/* Left Column - Error Details */}
            <div className="flex-1">
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                
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
                      onClick={() => window.history.back()}
                      className="flex items-center justify-center gap-2 bg-[#39366F] hover:bg-[#2a2850] text-white px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Try Again
                    </button>
                    <button 
                      onClick={() => navigate('/donate/payment')}
                      className="flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
                    >
                      <CreditCard className="w-4 h-4" />
                      Choose Another Payment Method
                    </button>
                    <button 
                      onClick={() => navigate('/contact')}
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
              </div>
            </div>

            {/* Right Column - Help & Encouragement */}
            <div className="flex-1 max-w-xs">
              <div className="space-y-4">
                {/* Encouragement Message */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      "Every donation makes a difference. Thank you for trying again."
                    </p>
                  </div>
                </div>

                {/* Need Help */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                  <h4 className="text-sm font-semibold text-black mb-3">Need Help?</h4>
                  <p className="text-xs text-gray-600 mb-3">
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
      </section>
    </div>
  );
};

export default PaymentFailedPage;
