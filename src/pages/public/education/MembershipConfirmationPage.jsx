import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CheckCircle, Mail, Phone, MapPin, Home, AlertCircle, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const MembershipConfirmationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const enrollmentData = location.state?.enrollmentData || {};
  const paymentData = location.state?.paymentData || {};

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const handleContinue = () => {
    navigate('/services/education');
  };

  const handleDownloadReceipt = () => {
    // In a real app, this would generate and download a PDF receipt
    alert('Receipt download functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Success Section */}
      <section className="pt-12 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#F0F4FF] rounded-full flex items-center justify-center">
                <CheckCircle size={40} className="text-[#2A2D7C]" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#2A2D7C] mb-3">
              Membership Activated Successfully!
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              Welcome to ERA AXIS! Your membership is now active.
            </p>
            <p className="text-gray-500 text-sm">
              Confirmation details have been sent to your email
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Enrollment Details */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Membership Details Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#2A2D7C] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  Membership Details
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">Membership Type</span>
                    <span className="font-semibold text-gray-900">ERA AXIS Membership Dues</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">Billing Cycle</span>
                    <span className="font-semibold text-gray-900">Monthly</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-gray-600">Monthly Fee</span>
                    <span className="font-semibold text-[#2A2D7C] text-lg">GHS 15.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Member Information Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#2A2D7C] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  Member Information
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Home size={18} className="text-[#2A2D7C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Full Name</p>
                      <p className="font-semibold text-gray-900">{enrollmentData.fullName || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail size={18} className="text-[#2A2D7C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Email Address</p>
                      <p className="font-semibold text-gray-900">{enrollmentData.email || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Phone size={18} className="text-[#2A2D7C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Phone Number</p>
                      <p className="font-semibold text-gray-900">{enrollmentData.phone || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin size={18} className="text-[#2A2D7C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600">Location</p>
                      <p className="font-semibold text-gray-900">
                        {enrollmentData.city && enrollmentData.country 
                          ? `${enrollmentData.city}, ${enrollmentData.country}` 
                          : 'N/A'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps Card */}
              <div className="bg-[#F0F4FF] border border-[#2A2D7C]/20 rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-[#2A2D7C] mb-6 flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#2A2D7C] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  What's Next?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#2A2D7C] text-white text-sm font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A2D7C] mb-1">Check Your Email</p>
                      <p className="text-sm text-[#2A2D7C]">We've sent your membership details and login credentials to your email</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#2A2D7C] text-white text-sm font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A2D7C] mb-1">Access Your Dashboard</p>
                      <p className="text-sm text-[#2A2D7C]">Log in to your account to view your membership benefits and schedule</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#2A2D7C] text-white text-sm font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2A2D7C] mb-1">Start Using the Lab</p>
                      <p className="text-sm text-[#2A2D7C]">Visit us at our facility to get your membership card and access the lab</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Info */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex gap-4">
                <AlertCircle size={24} className="text-yellow-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-yellow-900 mb-2">Important Information</p>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Your membership is active immediately</li>
                    <li>• You can cancel anytime with no lock-in period</li>
                    <li>• Billing occurs on the same date each month</li>
                    <li>• Contact us if you have any questions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Summary & Actions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sticky top-6">
                <h2 className="text-lg font-bold text-black mb-6">Confirmation Summary</h2>
                
                {/* Confirmation Number */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600 mb-1">Confirmation Number</p>
                  <p className="font-mono font-bold text-[#2A2D7C] text-lg break-all">
                    MEM-{Date.now().toString().slice(-8)}
                  </p>
                </div>

                {/* Membership Benefits */}
                <div className="mb-6 p-4 bg-[#F0F4FF] border border-[#2A2D7C]/20 rounded-lg">
                  <p className="text-sm font-semibold text-[#2A2D7C] mb-3">Your Benefits:</p>
                  <ul className="space-y-2 text-xs text-[#2A2D7C]">
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✓</span> 24/7 lab access
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✓</span> Expert mentorship
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✓</span> Tools & equipment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-lg">✓</span> Community projects
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleDownloadReceipt}
                    className="w-full border-2 border-[#2A2D7C] text-[#2A2D7C] hover:bg-[#F0F4FF] px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Download Receipt
                  </button>
                  <button
                    onClick={handleContinue}
                    className="w-full bg-[#2A2D7C] hover:bg-[#1a1d4d] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Back to Education
                    <ArrowRight size={18} />
                  </button>
                </div>

                {/* Support */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-3">Need help?</p>
                  <button
                    onClick={() => navigate('/services/education/contact')}
                    className="w-full text-[#2A2D7C] hover:text-[#1a1d4d] font-semibold text-sm transition-colors"
                  >
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipConfirmationPage;
