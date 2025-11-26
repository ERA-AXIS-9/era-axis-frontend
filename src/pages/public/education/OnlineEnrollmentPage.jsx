import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Monitor, Calendar, Clock } from 'lucide-react';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const membershipProgram = {
  name: 'ERA AXIS Membership Dues',
  duration: 'Monthly',
  price: 15,
  priceType: 'month'
};

const OnlineEnrollmentPage = () => {
  const navigate = useNavigate();
  const programId = 'junior-stem';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    country: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to payment page with form data
    navigate(`/services/education/payment?program=${programId}`, { 
      state: { enrollmentData: formData } 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Professional Hero Section */}
      <section className="pt-6 pb-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#39366F] rounded-lg flex items-center justify-center shadow-sm">
              <Monitor size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">Online Learning Enrollment</h1>
              <p className="text-sm text-gray-600">
                Program: <span className="font-semibold text-[#39366F]">{membershipProgram.name}</span> • {membershipProgram.duration}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Professional Card Layout */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Form Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Card Header */}
                <div className="px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-black">Student Information</h2>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Required Fields *</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Complete the form to proceed with enrollment</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6">
                  {/* Personal Information Card */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-[#39366F] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <h3 className="text-sm font-bold text-black">Personal Information</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="John Mensah"
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+233 000 000 000"
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-[#39366F] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <h3 className="text-sm font-bold text-black">Location Information</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Accra"
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country *
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          placeholder="Ghana"
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>


                  {/* Submit Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <button
                      type="submit"
                      className="flex-1 bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm"
                    >
                      Continue to Payment
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm"
                    >
                      Go Back
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Sidebar - Program Details Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 sticky top-6">
                <div className="p-6">
                  <h2 className="text-lg font-bold text-black mb-4">Program Details</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-[#39366F] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Monitor size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-black mb-1">Membership Access</p>
                        <p className="text-sm text-gray-600">Full access to Open Lab & tools</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-[#5B9BD5] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-black mb-1">Duration</p>
                        <p className="text-sm text-gray-600">{membershipProgram.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-[#2a2850] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-black mb-1">Flexible Schedule</p>
                        <p className="text-sm text-gray-600">Access when it works for you</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
                    <p className="text-sm text-blue-900 font-semibold mb-2">What's Next?</p>
                    <p className="text-sm text-blue-800">
                      After completing this form, you'll proceed to payment to activate your membership.
                    </p>
                  </div>

                  <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                    <p className="text-sm text-green-900 font-semibold mb-2">💡 Membership Benefits:</p>
                    <div className="space-y-1">
                      <p className="text-sm text-green-800">✓ 24/7 lab access</p>
                      <p className="text-sm text-green-800">✓ Expert mentorship</p>
                      <p className="text-sm text-green-800">✓ Tools & equipment</p>
                      <p className="text-sm text-green-800">✓ Community projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineEnrollmentPage;
