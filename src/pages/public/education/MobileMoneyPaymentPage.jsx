import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Smartphone, Lock, CheckCircle } from 'lucide-react';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';
import { EDUCATION_PROGRAMS } from '../../../config/educationPrograms';

const MobileMoneyPaymentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('program') || 'junior-stem';
  const program = EDUCATION_PROGRAMS[programId] || EDUCATION_PROGRAMS['junior-stem'];

  const [formData, setFormData] = useState({
    mobileProvider: '',
    phoneNumber: '',
    accountName: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to confirmation page
    navigate('/services/education/confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Lock size={24} className="text-green-600" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-black">
                Secure Payment — Mobile Money
              </h1>
              <p className="text-sm text-gray-500">
                Complete your enrollment with mobile money
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-black mb-6">Pay with Mobile Money</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Mobile Provider */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Mobile Money Provider
                    </label>
                    <select
                      name="mobileProvider"
                      value={formData.mobileProvider}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Choose Provider</option>
                      <option value="mtn">MTN Mobile Money</option>
                      <option value="vodafone">Vodafone Cash</option>
                      <option value="airteltigo">AirtelTigo Money</option>
                    </select>
                  </div>

                  {/* Phone Number */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mobile Money Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Smartphone size={20} className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="024 000 0000"
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Enter the number registered with your mobile money account
                    </p>
                  </div>

                  {/* Account Name */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Account Name
                    </label>
                    <input
                      type="text"
                      name="accountName"
                      value={formData.accountName}
                      onChange={handleInputChange}
                      placeholder="John Mensah"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Name as registered on your mobile money account
                    </p>
                  </div>

                  {/* Info Box */}
                  <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-900 font-semibold mb-1">
                          How it works:
                        </p>
                        <ol className="text-xs text-blue-800 space-y-1 list-decimal list-inside">
                          <li>Enter your mobile money details</li>
                          <li>You'll receive a prompt on your phone</li>
                          <li>Enter your PIN to approve the payment</li>
                          <li>Confirmation will be sent immediately</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Complete Payment
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3.5 rounded-lg font-semibold transition-all duration-300"
                    >
                      Go Back
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sticky top-6">
                <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>
                
                {/* Program Details */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm text-gray-600">Program</span>
                    <span className="text-sm font-semibold text-black text-right">
                      {program.name}
                    </span>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-gray-600">Duration</span>
                    <span className="text-sm text-gray-700">
                      {program.duration}
                    </span>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-base font-semibold text-gray-700">Total Amount</span>
                      <span className="text-2xl font-bold text-[#39366F]">
                        ${program.price}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Security Badges */}
                <div className="space-y-2 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600" />
                    <span>Secure mobile money payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600" />
                    <span>Instant confirmation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-600" />
                    <span>Trusted by thousands</span>
                  </div>
                </div>

                {/* Help Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    Need Help?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Note */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Lock size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-green-900 font-semibold mb-1">
                  Secure Payment
                </p>
                <p className="text-xs text-green-800">
                  Your payment is processed securely through your mobile money provider. We never store your PIN or sensitive information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileMoneyPaymentPage;
