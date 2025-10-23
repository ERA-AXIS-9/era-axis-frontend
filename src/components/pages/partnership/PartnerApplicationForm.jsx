import React, { useState } from 'react';
import { Upload, X, Check } from 'lucide-react';

const PartnerApplicationForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPersonName: '',
    emailAddress: '',
    phoneNumber: '',
    partnershipType: '',
    organizationWebsite: '',
    howToApply: '',
    logoFile: null,
    logoAltText: '',
    uploadProposal: null,
    partnershipGoals: ''
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const partnershipTypes = [
    'Corporate',
    'Government',
    'Academic Research',
    'Strategic Knowledge',
    'Community'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e, fieldName) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      [fieldName]: file
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Partnership application submitted:', formData);
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
            Become a Partner
          </h2>
          <p className="text-sm text-gray-600">
            Submit your partnership request and collaborate with ERA AXIS to transform communities.
          </p>
        </div>

        {/* Main Layout - Form Left, Guidelines Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Form - Left Side (2/3 width) */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#39366F]/20">
          <form onSubmit={handleSubmit}>
            
            {/* Basic Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organizationName"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    placeholder="Enter organization name"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-200 hover:border-[#39366F]/50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="name@organization.org"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-200 hover:border-[#39366F]/50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Partnership Type
                  </label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-200 hover:border-[#39366F]/50"
                    required
                  >
                    <option value="">Select partnership type</option>
                    {partnershipTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Contact Person (Full Name)
                  </label>
                  <input
                    type="text"
                    name="contactPersonName"
                    value={formData.contactPersonName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-200 hover:border-[#39366F]/50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+1 555 000 0000"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-200 hover:border-[#39366F]/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Organization Website (optional)
                  </label>
                  <input
                    type="url"
                    name="organizationWebsite"
                    value={formData.organizationWebsite}
                    onChange={handleInputChange}
                    placeholder="https://"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-200 hover:border-[#39366F]/50"
                  />
                </div>
              </div>
            </div>

            {/* Logo Upload Section - Simplified */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Organization Logo
              </label>
              <div className="border border-gray-200 rounded-lg p-3 bg-gray-50 hover:bg-gray-100 hover:border-[#39366F]/30 transition-all duration-200">
                <div className="flex items-center gap-2 mb-2">
                  <Upload className="w-4 h-4 text-gray-400 group-hover:text-[#39366F] transition-colors duration-200" />
                  <span className="text-sm text-gray-600">Upload logo</span>
                </div>
                
                <input
                  type="file"
                  accept=".png,.jpg,.jpeg,.svg,.webp"
                  onChange={(e) => handleFileUpload(e, 'logoFile')}
                  className="w-full text-xs hover:cursor-pointer"
                />
                
                <p className="text-xs text-gray-500 mt-1">
                  Max size: 5MB
                </p>
              </div>
            </div>

            {/* Terms Agreement - Compact */}
            <div className="mb-4">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 text-[#39366F] border-gray-300 rounded focus:ring-[#39366F] mt-0.5"
                  required
                />
                <span className="text-xs text-gray-700">
                  I agree to terms and privacy policy
                </span>
              </label>
            </div>

            {/* Upload Proposal Section - Simplified */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Supporting Documents (optional)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileUpload(e, 'uploadProposal')}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#39366F] focus:border-[#39366F]"
              />
            </div>

            {/* Partnership Goals - Compact */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2">
                Message / Partnership Goals
              </label>
              <textarea
                name="partnershipGoals"
                value={formData.partnershipGoals}
                onChange={handleInputChange}
                rows={3}
                placeholder="Describe your goals, scope, timeline, and expected outcomes..."
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-200 hover:border-[#39366F]/50"
                required
              />
            </div>

            {/* Submit Buttons - Interactive */}
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                Submit Partnership Request
              </button>
              <button
                type="button"
                className="border border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                Cancel
              </button>
            </div>
          </form>
            </div>
          </div>

          {/* Guidelines - Right Side (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#39366F]/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">
                    How to apply
                  </h3>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Complete all required fields and complete supporting documents.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Select the partnership type that best aligns with your organization.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Upload any documentation or supporting documents.</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">
                    Review timeline
                  </h3>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>Applications reviewed in 2-4 business days.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>We will contact you via email with next steps.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerApplicationForm;
