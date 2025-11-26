import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, RotateCcw, CreditCard, Phone, CheckCircle } from 'lucide-react';

const PaymentFailedPage = () => {
  const navigate = useNavigate();

  const troubleshootingTips = [
    'Double-check your card details.',
    'Make sure you have sufficient funds.',
    'For support, contact the ERA AXIS team.'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Error Section */}
      <section className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Error Icon */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-red-50 to-orange-100 rounded-full flex items-center justify-center shadow-lg">
                <AlertCircle size={56} className="text-red-600" strokeWidth={2.5} />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 w-24 h-24 border-4 border-red-200 rounded-full animate-pulse opacity-30"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-red-50 text-red-700 rounded-full text-sm font-semibold mb-4">
              Payment Failed
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Oops! Your enrollment payment didn't go through.
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Please review your details and try again.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <button
              onClick={() => navigate(-1)}
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              <RotateCcw size={18} />
              Try Payment Again
            </button>
            
            <button
              onClick={() => navigate('/services/education/payment')}
              className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              <CreditCard size={18} />
              Change Payment Method
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Troubleshooting Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl font-bold text-black mb-6">Common Issues & Solutions</h2>
            
            <div className="space-y-4">
              {troubleshootingTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle size={20} className="text-[#39366F]" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>

            {/* Help Box */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">💡 Need help?</span> Our support team is here to assist you. Contact us at{' '}
                <a href="mailto:support@era-axis.com" className="underline hover:text-blue-700">
                  support@era-axis.com
                </a>{' '}
                or call <span className="font-semibold">+233 XXX XXX XXX</span>.
              </p>
            </div>

            {/* Alternative Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-base font-bold text-black mb-4">What would you like to do?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => navigate('/services/education/enroll')}
                  className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-left"
                >
                  <div className="font-semibold text-black mb-1">Review Program Details</div>
                  <div className="text-xs text-gray-500">Go back to enrollment page</div>
                </button>
                
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-left"
                >
                  <div className="font-semibold text-black mb-1">Get Assistance</div>
                  <div className="text-xs text-gray-500">Talk to our support team</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CSS for animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default PaymentFailedPage;
