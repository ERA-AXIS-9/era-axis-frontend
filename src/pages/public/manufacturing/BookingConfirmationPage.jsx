import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Mail, Calendar, Phone, ChevronRight } from 'lucide-react';

const BookingConfirmationPage = () => {
  const navigate = useNavigate();

  const bookingDetails = {
    serviceType: 'General Repair & Support',
    preferredDate: 'TBD - We\'ll contact you to schedule',
    referenceNumber: 'TECH-' + Math.random().toString(36).substr(2, 9).toUpperCase()
  };

  const nextSteps = [
    {
      icon: Mail,
      title: 'Check your email',
      description: 'Confirmation and next steps sent to your inbox.',
      color: '#39366F'
    },
    {
      icon: Calendar,
      title: 'We\'ll schedule a visit',
      description: 'Our team will contact you within 24 hours to confirm the date.',
      color: '#5B9BD5'
    },
    {
      icon: Phone,
      title: 'Stay reachable',
      description: 'Keep your phone handy for our confirmation call.',
      color: '#2a2850'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Success Section */}
      <section className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle size={56} className="text-green-600" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 w-24 h-24 border-4 border-green-200 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Success Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-4">
              Booking Confirmed
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Your Technician Booking is Confirmed!
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Thank you for choosing ERA AXIS. We'll get your equipment back up and running.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <button
              onClick={() => navigate('/services/manufacturing')}
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Back to Manufacturing
              <ChevronRight size={18} />
            </button>
            
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
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
            
            {/* Left Column - Booking Details */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-black mb-6">Booking Details</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Service Type</span>
                  <span className="text-sm text-gray-900 font-medium text-right max-w-xs">
                    {bookingDetails.serviceType}
                  </span>
                </div>

                <div className="flex justify-between items-start pb-4 border-b border-gray-200">
                  <span className="text-sm font-semibold text-gray-700">Scheduled Date</span>
                  <span className="text-sm text-gray-600 text-right max-w-xs">
                    {bookingDetails.preferredDate}
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-sm font-semibold text-gray-700">Reference Number</span>
                  <span className="text-sm text-gray-500 font-mono">
                    {bookingDetails.referenceNumber}
                  </span>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-sm text-blue-900">
                  <span className="font-semibold">📧 Confirmation sent!</span> Check your email for booking details and next steps.
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
                      <div className="flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${step.color}15`, border: `2px solid ${step.color}30` }}
                        >
                          <IconComponent size={24} style={{ color: step.color }} />
                        </div>
                      </div>

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

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Need Help?
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingConfirmationPage;
