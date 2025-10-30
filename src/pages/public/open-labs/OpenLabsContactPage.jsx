import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OpenLabsNavbar from '../../../components/OpenLabsNavbar';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const OpenLabsContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Open Labs contact form submitted:', formData);
    alert('Thank you for your interest! We will get back to you soon.');
    navigate('/services/open-labs');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <OpenLabsNavbar />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-gradient-to-br from-[#2a2850] to-[#39366F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact Open Labs Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Interested in using our facilities, becoming a member, or booking a session? We're here to help you innovate.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Our Open Labs team is ready to help you access our facilities, answer questions about membership, and book sessions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2a2850]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#2a2850]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <p className="text-gray-600">openlabs@eraaxis.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2a2850]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#2a2850]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <p className="text-gray-600">+233 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2a2850]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#2a2850]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Lab Location</h3>
                    <p className="text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#2a2850]/5 rounded-xl border border-[#2a2850]/20">
                <h3 className="font-semibold text-black mb-2">Lab Hours</h3>
                <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 6:00 PM</p>
                <p className="text-gray-600 text-sm">Sunday: 12:00 PM - 5:00 PM</p>
              </div>

              <div className="mt-6 p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-black mb-2">Walk-ins Welcome!</h3>
                <p className="text-gray-600 text-sm">
                  Feel free to visit us during lab hours. We offer tours and can answer questions in person.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2850] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2850] focus:border-transparent"
                    placeholder="your@email.com"
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
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2850] focus:border-transparent"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm Interested In
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2850] focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="membership">Membership Plans</option>
                    <option value="booking">Booking a Session</option>
                    <option value="facilities">Facility Information</option>
                    <option value="tour">Scheduling a Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2a2850] focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2a2850] hover:bg-[#39366F] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpenLabsContactPage;
