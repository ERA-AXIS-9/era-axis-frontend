import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Breadcrumb from '../../../components/pages/manufacturing/Breadcrumb';

const BookTechnicianPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Booking request submitted successfully!');
    navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Hero Section */}
      <motion.section 
        className="pt-8 pb-6 bg-white border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
              Book a Technician
            </h1>
            <p className="text-gray-600 text-lg">
              Schedule a Maintenance Services. Fast, reliable, and tailored to your needs.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Booking Form Section */}
      <motion.section 
        className="py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            
            {/* Left Column - Booking Form */}
            <motion.div 
              className="lg:col-span-2"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8"
                whileHover={{ shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h2 className="text-xl font-bold text-black mb-6">Booking Form</h2>
                
                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Enter full name
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

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
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
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+233"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Type and Preferred Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Choose Service Type</option>
                        <option value="repair">General Repair & Support</option>
                        <option value="maintenance">Preventive Maintenance</option>
                        <option value="emergency">Emergency Fix</option>
                        <option value="it-support">IT Support/Upkeep</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        placeholder="DD / MM / YYYY"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Describe what's wrong and any info you'd like to share
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Provide details about the issue..."
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#39366F] focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 w-4 h-4 text-[#39366F] border-gray-300 rounded focus:ring-[#39366F]"
                      />
                      <span className="text-sm text-gray-700">
                        By clicking submit, you agree to receive updates and confirmations via email or SMS.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Submit Request
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate(-1)}
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3.5 rounded-lg font-semibold transition-all duration-300"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>

            {/* Right Column - Need urgent help? */}
            <motion.div 
              className="lg:col-span-1"
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sticky top-6"
                whileHover={{ shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <h2 className="text-xl font-bold text-black mb-6">Need urgent help?</h2>
                
                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#39366F]/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-[#39366F]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1">Call us at</p>
                      <a href="tel:+233000000000" className="text-sm text-[#39366F] hover:underline font-medium">
                        +233 000 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#5B9BD5]/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-[#5B9BD5]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1">We're here</p>
                      <p className="text-sm text-gray-600">Mon-Fri, 8 AM - 6 PM</p>
                      <p className="text-sm text-gray-600">Sat, 9 AM - 2 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2a2850]/10 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-[#2a2850]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-black mb-1">What to expect</p>
                      <p className="text-sm text-gray-600">We aim to confirm all bookings within 24 hours.</p>
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-900">
                      <span className="font-semibold">Quick response guaranteed.</span> Our team will reach out shortly to confirm your booking.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default BookTechnicianPage;
