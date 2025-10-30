import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Users, MapPin, Calendar } from 'lucide-react';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const programs = {
  'junior-stem': { name: 'Junior STEM Basics', duration: '3 months' },
  'maker-hardware': { name: 'Maker: Hardware & Repair', duration: '6 months' },
  'coder-software': { name: 'Coder: Software Foundations', duration: '4 months' }
};

const PhysicalEnrollmentPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('program') || 'junior-stem';
  const program = programs[programId] || programs['junior-stem'];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    emergencyContact: '',
    emergencyPhone: '',
    educationLevel: '',
    whyJoin: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to physical enrollment confirmation
    navigate('/services/education/physical-confirmation');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
              Physical Classroom Enrollment
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              Program: <span className="font-semibold text-[#39366F]">{program.name}</span>
            </p>
            <p className="text-gray-500 text-sm">
              Complete this form to register for in-person classes
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-black mb-6">Student Information</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Mensah"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233 000 000 000"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Address Information */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Residential Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="House number, street name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Accra"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Emergency Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Emergency Contact Name *
                      </label>
                      <input
                        type="text"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleInputChange}
                        placeholder="Parent/Guardian name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Emergency Contact Phone *
                      </label>
                      <input
                        type="tel"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        placeholder="+233 000 000 000"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Education Level */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Education Level *
                    </label>
                    <select
                      name="educationLevel"
                      value={formData.educationLevel}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all bg-white"
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

                  {/* Why Join */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Why do you want to join this program? *
                    </label>
                    <textarea
                      name="whyJoin"
                      value={formData.whyJoin}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Tell us about your goals and what you hope to achieve..."
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Submit Enrollment
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

            {/* Right Column - Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sticky top-6">
                <h2 className="text-xl font-bold text-black mb-6">What to Expect</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#39366F]/10 flex items-center justify-center flex-shrink-0">
                      <Users size={20} className="text-[#39366F]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1">Confirmation Call</p>
                      <p className="text-sm text-gray-600">We'll contact you within 48 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#5B9BD5]/10 flex items-center justify-center flex-shrink-0">
                      <Calendar size={20} className="text-[#5B9BD5]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1">Class Schedule</p>
                      <p className="text-sm text-gray-600">Receive your class timetable.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2a2850]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#2a2850]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1">Location Details</p>
                      <p className="text-sm text-gray-600">Get directions to our facility.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
                  <p className="text-sm text-green-900">
                    <span className="font-semibold">✓ Free Registration</span><br />
                    No payment required at this stage.
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

export default PhysicalEnrollmentPage;
