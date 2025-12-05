import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Monitor, Calendar, Clock } from 'lucide-react';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const programs = {
  'junior-stem': { name: 'Junior STEM Basics', duration: '3 months' },
  'maker-hardware': { name: 'Maker: Hardware & Repair', duration: '3 months' },
  'coder-software': { name: 'Coder: Software Foundations', duration: '3 months' }
};

const OnlineEnrollmentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('program') || 'junior-stem';
  const program = programs[programId] || programs['junior-stem'];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    city: '',
    country: '',
    emergencyContact: '',
    emergencyPhone: '',
    educationLevel: '',
    whyJoin: '',
    experience: '',
    goals: ''
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
            <div className="w-10 h-10 bg-[#2A2D7C] rounded-lg flex items-center justify-center shadow-sm">
              <Monitor size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black">Online Learning Enrollment</h1>
              <p className="text-sm text-gray-600">
                Program: <span className="font-semibold text-[#2A2D7C]">{program.name}</span> • {program.duration}
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
                      <div className="w-6 h-6 bg-[#2A2D7C] rounded-full flex items-center justify-center">
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
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all text-sm bg-white"
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
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all text-sm bg-white"
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
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-[#2A2D7C] rounded-full flex items-center justify-center">
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
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all text-sm bg-white"
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
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Emergency Contact Card */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-[#2A2D7C] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <h3 className="text-sm font-bold text-black">Emergency Contact</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          placeholder="Jane Mensah"
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Contact Phone *
                        </label>
                        <input
                          type="tel"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          placeholder="+233 000 000 000"
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Education & Goals Card */}
                  <div className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-[#2A2D7C] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">4</span>
                      </div>
                      <h3 className="text-sm font-bold text-black">Education & Goals</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Education Level *
                        </label>
                        <select
                          name="educationLevel"
                          value={formData.educationLevel}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all bg-white text-sm"
                        >
                          <option value="">Select Level</option>
                          <option value="primary">Primary School</option>
                          <option value="jhs">Junior High School (JHS)</option>
                          <option value="shs">Senior High School (SHS)</option>
                          <option value="tertiary">Tertiary/University</option>
                          <option value="graduate">Graduate</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Why do you want to join this program? *
                        </label>
                        <textarea
                          name="whyJoin"
                          value={formData.whyJoin}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="Tell us about your goals and what you hope to achieve..."
                          required
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all resize-none text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Previous Experience (if any)
                        </label>
                        <textarea
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="Any previous coding, electronics, or STEM experience..."
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all resize-none text-sm bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          What do you want to achieve after this program?
                        </label>
                        <textarea
                          name="goals"
                          value={formData.goals}
                          onChange={handleInputChange}
                          rows="3"
                          placeholder="Your career goals, projects you want to build, skills you want to develop..."
                          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A2D7C] focus:border-transparent outline-none transition-all resize-none text-sm bg-white"
                        />
                      </div>
                    </div>
                  </div>


                  {/* Submit Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <button
                      type="submit"
                      className="flex-1 bg-[#2A2D7C] hover:bg-[#1a1d4d] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md text-sm"
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
                      <div className="w-8 h-8 bg-[#2A2D7C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Monitor size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-black mb-1">Online Learning</p>
                        <p className="text-sm text-gray-600">Learn from anywhere at your own pace</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-[#2A2D7C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-black mb-1">Duration</p>
                        <p className="text-sm text-gray-600">{program.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-[#2A2D7C] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-black mb-1">Flexible Schedule</p>
                        <p className="text-sm text-gray-600">Access when it works for you</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F0F4FF] border border-[#2A2D7C]/20 rounded-lg p-4 mb-4">
                    <p className="text-sm text-[#2A2D7C] font-semibold mb-2">What's Next?</p>
                    <p className="text-sm text-[#2A2D7C]">
                      After completing this form, you'll proceed to payment to activate your membership.
                    </p>
                  </div>

                  <div className="bg-[#F0F4FF] border border-[#2A2D7C]/20 rounded-lg p-4">
                    <p className="text-sm text-[#2A2D7C] font-semibold mb-2">💡 Online Learning Benefits:</p>
                    <div className="space-y-1">
                      <p className="text-sm text-[#2A2D7C]">✓ 24/7 course access</p>
                      <p className="text-sm text-[#2A2D7C]">✓ Self-paced learning</p>
                      <p className="text-sm text-[#2A2D7C]">✓ Virtual mentorship</p>
                      <p className="text-sm text-[#2A2D7C]">✓ Digital certificate</p>
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
