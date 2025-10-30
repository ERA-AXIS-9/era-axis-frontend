import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Users, CheckCircle } from 'lucide-react';
import Breadcrumb from '../../../components/pages/open-labs/Breadcrumb';

const BookSessionPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    preferredDate: '',
    preferredTime: '',
    numberOfPeople: '',
    projectDescription: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
              Book a Session at ERA AXIS Open Labs
            </h1>
            <p className="text-gray-600 text-lg">
              Reserve your time to work on projects, get training, or explore our facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-black mb-6">Booking Request</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Mensah"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
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
                  </div>

                  {/* Phone and Session Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
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
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Session Type
                      </label>
                      <select
                        name="sessionType"
                        value={formData.sessionType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select Type</option>
                        <option value="project-work">Project Work</option>
                        <option value="training">Equipment Training</option>
                        <option value="tour">Facility Tour</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date and Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select Time</option>
                        <option value="morning">Morning (8 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 6 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Number of People */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of People
                    </label>
                    <input
                      type="number"
                      name="numberOfPeople"
                      value={formData.numberOfPeople}
                      onChange={handleInputChange}
                      placeholder="1"
                      min="1"
                      max="20"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Project Description */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      What do you plan to work on? (Optional)
                    </label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      rows="4"
                      placeholder="Brief description of your project or what you'd like to learn..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Submit Request
                    </button>
                    <button
                      type="button"
                      onClick={() => window.history.back()}
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3.5 rounded-lg font-semibold transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Column - What to Expect */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sticky top-6">
                <h2 className="text-xl font-bold text-black mb-6">What to expect</h2>
                
                {/* Expectations List */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#39366F]/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[#39366F]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1">Quick Response</p>
                      <p className="text-sm text-gray-600">We'll confirm within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#5B9BD5]/10 flex items-center justify-center flex-shrink-0">
                      <Users size={20} className="text-[#5B9BD5]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1">Guided Tour</p>
                      <p className="text-sm text-gray-600">First-time visitors get a facility walkthrough.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2a2850]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-[#2a2850]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1">Equipment Access</p>
                      <p className="text-sm text-gray-600">Use tools based on your membership level.</p>
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <span className="font-semibold">💡 Note:</span> Membership required for extended access. Walk-ins welcome for tours!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-8">Contact Us</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#39366F]/10 flex items-center justify-center flex-shrink-0">
                <Phone size={24} className="text-[#39366F]" />
              </div>
              <div>
                <p className="font-semibold text-black mb-1">Phone</p>
                <a href="tel:+233000000000" className="text-sm text-[#39366F] hover:underline">
                  +233 000 000 000
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#5B9BD5]/10 flex items-center justify-center flex-shrink-0">
                <Mail size={24} className="text-[#5B9BD5]" />
              </div>
              <div>
                <p className="font-semibold text-black mb-1">Email</p>
                <a href="mailto:labs@era-axis.com" className="text-sm text-[#5B9BD5] hover:underline">
                  labs@era-axis.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#2a2850]/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="text-[#2a2850]" />
              </div>
              <div>
                <p className="font-semibold text-black mb-1">Location</p>
                <p className="text-sm text-gray-600">Accra, Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-black mb-3">
              Need immediate assistance?
            </h3>
            <p className="text-gray-600 mb-6">
              Call us directly or visit during our open hours.
            </p>
            <a
              href="/contact"
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                A
              </div>
              <div>
                <p className="text-gray-700 text-base leading-relaxed mb-3 italic">
                  "Booking was quick and seamless. I got confirmation the same day, and the team helped me every step of the way."
                </p>
                <p className="font-semibold text-black">Ama Osei</p>
                <p className="text-sm text-gray-500">Startup Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 mb-6">
            Your innovation starts here.
          </p>
          <a
            href="/services/open-labs"
            className="text-[#39366F] hover:text-[#2a2850] font-semibold hover:underline"
          >
            Learn more about our labs →
          </a>
        </div>
      </section>
    </div>
  );
};

export default BookSessionPage;
