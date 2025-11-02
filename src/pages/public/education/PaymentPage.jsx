import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CreditCard, Shield, Lock, CheckCircle } from 'lucide-react';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';
import { EDUCATION_PROGRAMS } from '../../../config/educationPrograms';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('program') || 'junior-stem';
  const program = EDUCATION_PROGRAMS[programId] || EDUCATION_PROGRAMS['junior-stem'];

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    mobileProvider: '',
    mobileNumber: '',
    transactionId: ''
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
      <section className="pt-8 pb-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-3">
              <Lock size={24} className="text-[#39366F]" />
              <h1 className="text-3xl sm:text-4xl font-bold text-black">
                Secure Payment
              </h1>
            </div>
            <p className="text-gray-600">
              Complete your enrollment in seconds with our secure payment system.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Form */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Payment Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-black mb-6">Payment Details</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 000 000 0000"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Payment Method
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                          paymentMethod === 'card'
                            ? 'bg-[#39366F] text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Credit/Debit Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('mobile')}
                        className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                          paymentMethod === 'mobile'
                            ? 'bg-[#39366F] text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Mobile Money
                      </button>
                    </div>
                  </div>

                  {/* Card Details (shown only for card payment) */}
                  {paymentMethod === 'card' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 1234 1234 1234"
                          maxLength="19"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Expiry
                          </label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            placeholder="MM / YY"
                            maxLength="7"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="***"
                            maxLength="3"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Mobile Money Details (shown only for mobile money payment) */}
                  {paymentMethod === 'mobile' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Mobile Money Provider
                        </label>
                        <select
                          name="mobileProvider"
                          value={formData.mobileProvider}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all bg-white"
                        >
                          <option value="">Select Provider</option>
                          <option value="mtn">MTN Mobile Money</option>
                          <option value="vodafone">Vodafone Cash</option>
                          <option value="airteltigo">AirtelTigo Money</option>
                        </select>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Mobile Money Number
                        </label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="+233 000 000 0000"
                          maxLength="15"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Make sure this number is registered for mobile money services
                        </p>
                      </div>

                      <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                        <p className="text-sm text-blue-900">
                          <span className="font-semibold">📱 How it works:</span><br />
                          1. Click "Complete Payment" below<br />
                          2. You'll receive a prompt on your phone<br />
                          3. Enter your PIN to authorize the payment<br />
                          4. You'll receive confirmation via SMS
                        </p>
                      </div>
                    </>
                  )}

                  {/* Submit Button */}
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
                      Cancel / Go Back
                    </button>
                  </div>

                  {/* Security Badges */}
                  <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield size={18} className="text-green-600" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={18} className="text-green-600" />
                      <span>PCI-compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Lock size={18} className="text-green-600" />
                      <span>Trusted</span>
                    </div>
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
                    <span className="text-sm font-semibold text-gray-700">Item:</span>
                    <span className="text-sm text-gray-900 font-medium text-right">{program.name}</span>
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-semibold text-gray-700">Duration:</span>
                    <span className="text-sm text-gray-600">{program.duration}</span>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-base font-bold text-black">Amount</span>
                      <span className="text-2xl font-bold text-[#39366F]">${program.price}.00</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 mb-6">
                    Your payment supports ERA AXIS education and innovation.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Complete Payment
                  </button>
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                  >
                    Contact for Help
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

export default PaymentPage;