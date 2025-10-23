import React, { useState } from 'react';
import { Send } from 'lucide-react';

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    organizationType: 'Corporate',
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipInterest: '',
    message: ''
  });

  const organizationTypes = [
    'Corporate',
    'Educational Institution',
    'International Organization',
    'Community Organization',
    'Government Agency',
    'NGO/Non-Profit',
    'Other'
  ];

  const partnershipInterests = [
    'STEM Education Programs',
    'Innovation Labs Setup',
    'Teacher Training',
    'Student Scholarships',
    'Equipment Donation',
    'Curriculum Development',
    'Research Collaboration',
    'Community Outreach',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Partnership inquiry submitted:', formData);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Start a Partnership
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to make an impact? Tell us about your organization and how we can collaborate.
          </p>
        </div>

        {/* Partnership Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
            
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Organization Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Type
                </label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                >
                  {organizationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Organization Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    placeholder="Your organization name"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="contact@organization.com"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+233 000 000 000"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Partnership Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Interest
                </label>
                <select
                  name="partnershipInterest"
                  value={formData.partnershipInterest}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  required
                >
                  <option value="">Select your area of interest</option>
                  {partnershipInterests.map((interest) => (
                    <option key={interest} value={interest}>{interest}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your partnership goals
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe how you'd like to partner with ERA AXIS and the impact you hope to achieve..."
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Partnership Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipForm;
