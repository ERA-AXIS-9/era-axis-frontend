import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EducationNavbar from '../../../components/EducationNavbar';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const EducationContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Education contact form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    navigate('/services/education');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EducationNavbar />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-gradient-to-br from-[#39366F] to-[#2a2850] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact Education Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Have questions about our programs? Want to enroll? We're here to help you start your learning journey.
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
                Our education team is ready to answer your questions about programs, enrollment, learning modes, and more.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#39366F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#39366F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <p className="text-gray-600">education@eraaxis.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#39366F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#39366F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <p className="text-gray-600">+233 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#39366F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#39366F]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Location</h3>
                    <p className="text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#39366F]/5 rounded-xl border border-[#39366F]/20">
                <h3 className="font-semibold text-black mb-2">Office Hours</h3>
                <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-600 text-sm">Sunday: Closed</p>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Program of Interest
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
                  >
                    <option value="">Select a program</option>
                    <option value="junior-stem">Junior STEM Basics</option>
                    <option value="maker-hardware">Maker: Hardware & Repair</option>
                    <option value="coder-software">Coder: Software Foundations</option>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent resize-none"
                    placeholder="Tell us about your interest in our programs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
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

export default EducationContactPage;
