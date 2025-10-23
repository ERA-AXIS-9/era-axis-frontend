import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';
import Breadcrumb from '../../Breadcrumb';

const SoftwareContactHero = () => {
  const breadcrumbItems = [
    { label: 'Services', link: '/services/software' },
    { label: 'Contact' }
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-12 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Content - Contact Form */}
          <div className={`p-6 sm:bg-white sm:rounded-2xl sm:border sm:border-gray-200 sm:shadow-lg hover:shadow-2xl sm:p-8 transition-all duration-700 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                Let's Build Your Solution Together
              </h1>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-300 text-sm hover:border-gray-400"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-300 text-sm hover:border-gray-400"
                  placeholder="Work Email"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-300 text-sm hover:border-gray-400"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-300 text-sm hover:border-gray-400"
                  placeholder="Organization Name"
                />
              </div>

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-300 text-sm hover:border-gray-400 appearance-none bg-white"
              >
                <option value="">Select Project Type</option>
                <option value="custom">Custom Software Development</option>
                <option value="iot">IoT & Data Platforms</option>
                <option value="household">Household Solutions</option>
                <option value="consulting">Software Consulting</option>
                <option value="other">Other</option>
              </select>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-300 text-sm hover:border-gray-400 appearance-none bg-white"
                >
                  <option value="">Budget Range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                </select>

                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-300 text-sm hover:border-gray-400"
                  placeholder="Timeline (e.g., Q2 2024, ASAP)"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F]/20 focus:border-[#39366F] transition-all duration-300 resize-vertical text-sm hover:border-gray-400"
                placeholder="Describe your project, timeline, and goals..."
              ></textarea>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </div>

              <div className="text-center pt-1">
                <p className="text-xs text-gray-500">
                  We respond within 24 business hours
                </p>
              </div>
            </form>
          </div>

          {/* Right Content - Contact Information */}
          <div className="space-y-6">
            
            {/* Contact Details */}
            <div className="space-y-4">
              
              <div className="group bg-white border border-gray-200 hover:border-[#39366F]/30 px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#39366F]/10 group-hover:bg-[#39366F]/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <MapPin className="text-[#39366F]" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Our Location</div>
                    <span className="text-base text-gray-900 font-semibold">ERA AXIS HQ - Faslbadz, Ghana</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-gray-200 hover:border-[#39366F]/30 px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#39366F]/10 group-hover:bg-[#39366F]/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Mail className="text-[#39366F]" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email Address</div>
                    <span className="text-base text-gray-900 font-semibold">info@era-axis.com</span>
                  </div>
                </div>
              </div>

              <div className="group bg-white border border-gray-200 hover:border-[#39366F]/30 px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#39366F]/10 group-hover:bg-[#39366F]/20 rounded-lg flex items-center justify-center transition-colors duration-300">
                    <Phone className="text-[#39366F]" size={18} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone Number</div>
                    <span className="text-base text-gray-900 font-semibold">+233 [Insert Number]</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div className="bg-white border border-gray-200 px-5 py-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#39366F] hover:bg-[#39366F]/5 transition-all duration-300 group">
                  <Facebook className="text-[#39366F] group-hover:text-[#2a2850]" size={18} />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#39366F]">Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#39366F] hover:bg-[#39366F]/5 transition-all duration-300 group">
                  <Linkedin className="text-[#39366F] group-hover:text-[#2a2850]" size={18} />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#39366F]">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#39366F] hover:bg-[#39366F]/5 transition-all duration-300 group">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <span className="text-[#39366F] group-hover:text-[#2a2850] font-bold text-sm">𝕏</span>
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#39366F]">X</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#39366F] hover:bg-[#39366F]/5 transition-all duration-300 group">
                  <Youtube className="text-[#39366F] group-hover:text-[#2a2850]" size={18} />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#39366F]">YouTube</span>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-[#39366F] hover:bg-[#39366F]/5 transition-all duration-300 group">
                  <Instagram className="text-[#39366F] group-hover:text-[#2a2850]" size={18} />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#39366F]">Instagram</span>
                </a>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SoftwareContactHero;
