import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManufacturingNavbar from '../../../components/ManufacturingNavbar';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ManufacturingContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Manufacturing contact form submitted:', formData);
    alert('Thank you for your inquiry! Our team will contact you soon.');
    navigate('/services/manufacturing');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ManufacturingNavbar />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-gradient-to-br from-[#5B9BD5] to-[#39366F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact Manufacturing Team
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Need custom fabrication, repairs, or product development? Let's discuss your project and bring your ideas to life.
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
                Our manufacturing team is ready to help with custom fabrication, maintenance, repairs, and product development.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5B9BD5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#5B9BD5]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Email</h3>
                    <p className="text-gray-600">manufacturing@eraaxis.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5B9BD5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#5B9BD5]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Phone</h3>
                    <p className="text-gray-600">+233 XX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#5B9BD5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#5B9BD5]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1">Workshop Location</h3>
                    <p className="text-gray-600">Accra, Ghana</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#5B9BD5]/5 rounded-xl border border-[#5B9BD5]/20">
                <h3 className="font-semibold text-black mb-2">Workshop Hours</h3>
                <p className="text-gray-600 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-600 text-sm">Saturday: 9:00 AM - 3:00 PM</p>
                <p className="text-gray-600 text-sm">Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Request a Quote</h2>
              
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-fabrication">Custom Fabrication</option>
                    <option value="maintenance">Maintenance & Repairs</option>
                    <option value="product-development">Product Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent resize-none"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5B9BD5] hover:bg-[#39366F] text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Send Request
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

export default ManufacturingContactPage;
