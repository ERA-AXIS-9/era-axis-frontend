import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Mail, Calendar, Users, BookOpen, ChevronRight } from 'lucide-react';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  // Mock enrollment data - in real app, this would come from state/context
  const enrollmentData = {
    program: 'Maker: Hardware & Repair',
    startDate: 'TBD — We\'ll schedule a cohort start date',
    amount: 'GHS 2,250.00',
    transactionId: 'TXN-XXXX-XXXX'
  };

  const nextSteps = [
    {
      icon: Mail,
      title: 'Check your email',
      description: 'We\'ve sent confirmation and next steps to your inbox.',
      color: '#39366F'
    },
    {
      icon: Calendar,
      title: 'Receive a Lab Access',
      description: 'Get your schedule, materials list, and lab access.',
      color: '#5B9BD5'
    },
    {
      icon: Users,
      title: 'Meet your mentors',
      description: 'Connect with instructors and fellow learners.',
      color: '#2a2850'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Success Section */}
      <section className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Success Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle size={56} className="text-green-600" strokeWidth={2.5} />
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 w-24 h-24 border-4 border-green-200 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Success Message */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-4">
              Payment Successful
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Thank you for enrolling in ERA AXIS!
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your enrollment in <span className="font-semibold text-[#39366F]">{enrollmentData.program}</span> has been confirmed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <button
              onClick={() => navigate('/admin')}
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Go to Dashboard / My Account
              <ChevronRight size={18} />
            </button>
            
            <button
              onClick={() => navigate('/services/education')}
              className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Back to Education Programs
            </button>

            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Enrollment Details */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-black mb-6">Enrollment Details</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Program</span>
                  <span className="text-sm text-gray-900 font-medium text-right max-w-xs">
                    {enrollmentData.program}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Start Date</span>
                  <span className="text-sm text-gray-600 text-right max-w-xs">
                    {enrollmentData.startDate}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Amount Paid</span>
                  <span className="text-lg font-bold text-[#39366F]">
                    {enrollmentData.amount}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Transaction ID</span>
                  <span className="text-sm text-gray-500 font-mono">
                    {enrollmentData.transactionId}
                  </span>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">📧 Confirmation email sent!</span> Check your inbox for enrollment details and next steps.
                </p>
              </div>
            </div>

            {/* Right Column - Next Steps */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-black mb-6">Next Steps</h2>
              
              <div className="space-y-6">
                {nextSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${step.color}15`, border: `2px solid ${step.color}30` }}
                        >
                          <IconComponent size={24} style={{ color: step.color }} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-black mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Visit Help Center
                  <ChevronRight size={18} />
                </button>
                
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Email Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CSS for animation */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default ConfirmationPage;