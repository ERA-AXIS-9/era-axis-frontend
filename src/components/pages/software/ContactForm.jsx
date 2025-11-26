import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
            Contact & Request Demo
          </h2>
          <p className="text-gray-600 text-sm">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Work email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Row 2: Organization */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Organization name
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Your organization"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
            />
          </div>

          {/* Row 3: Phone and Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What's your budget?
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </select>
            </div>
          </div>

          {/* Row 4: Timeline */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Proposed start date
            </label>
            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              placeholder="e.g., Q2 2024, ASAP, 3-6 months"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
            />
          </div>

          {/* Row 5: Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Describe your project, timeline, and goals
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-transparent resize-none"
              required
            ></textarea>
          </div>

          {/* Submit Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-3 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Submit Request
            </button>
            <button
              type="button"
              className="border-2 border-gray-300 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-8 py-3 font-medium rounded-lg transition-all duration-200"
            >
              Schedule a Call
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
