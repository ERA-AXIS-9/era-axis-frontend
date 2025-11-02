import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Check, ChevronRight, Building, User, Calendar } from 'lucide-react';
import Breadcrumb from '../../../components/pages/manufacturing/Breadcrumb';

const SubscribePlanPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preSelectedPlan = searchParams.get('plan') || 'monthly';
  
  const [formData, setFormData] = useState({
    plan: preSelectedPlan,
    name: '',
    email: '',
    phone: '',
    company: '',
    equipmentCount: '',
    startDate: '',
    additionalInfo: ''
  });

  const plans = {
    'one-timeservice': {
      title: 'One-time Service',
      price: '50',
      currency: 'GHS',
      period: 'per visit',
      features: ['No commitment', 'Flexible scheduling', 'Pay as you go']
    },
    'monthly': {
      title: 'Monthly Plan',
      price: '200',
      currency: 'GHS',
      period: 'per month',
      features: ['Monthly inspections', 'Priority response', 'Discounted rates']
    },
    'organizationpackage': {
      title: 'Organization Package',
      price: 'Custom',
      currency: '',
      period: 'pricing',
      features: ['Dedicated technician', '24/7 emergency support', 'Custom SLA agreements']
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Plan subscription:', formData);
    navigate('/services/manufacturing/subscription-confirmation');
  };

  const selectedPlan = plans[formData.plan] || plans['monthly']; // Fallback to monthly if plan not found

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-8 pb-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
              Subscribe to a Service Plan
            </h1>
            <p className="text-gray-600 text-lg">
              Choose a plan that fits your maintenance needs and get ongoing support for your equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-black mb-6">Subscription Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Plan Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Plan
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(plans).map(([key, plan]) => (
                        <label
                          key={key}
                          className={`relative flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                            formData.plan === key
                              ? 'border-[#5B9BD5] bg-[#5B9BD5]/5 shadow-md'
                              : 'border-gray-200 hover:border-[#5B9BD5]/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="plan"
                            value={key}
                            checked={formData.plan === key}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-black text-sm">{plan.title}</span>
                            {formData.plan === key && (
                              <Check size={18} className="text-[#5B9BD5]" />
                            )}
                          </div>
                          <div className="flex items-baseline gap-1">
                            {plan.currency && (
                              <span className="text-xs text-gray-500">{plan.currency}</span>
                            )}
                            <span className="text-xl font-bold text-[#39366F]">{plan.price}</span>
                            <span className="text-xs text-gray-500">/{plan.period.split(' ')[1] || plan.period}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Number of Equipment/Devices
                      </label>
                      <input
                        type="number"
                        name="equipmentCount"
                        value={formData.equipmentCount}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all"
                        placeholder="e.g., 5"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Start Date
                      </label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5B9BD5] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your equipment, specific needs, or any questions..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#39366F] to-[#5B9BD5] text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-[#2a2850] hover:to-[#39366F] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    Subscribe to Plan
                    <ChevronRight size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Right - Plan Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#39366F] to-[#2a2850] rounded-2xl shadow-xl p-6 text-white sticky top-8">
                <h3 className="text-xl font-bold mb-4">Plan Summary</h3>
                
                <div className="mb-6">
                  <div className="text-sm text-white/70 mb-1">Selected Plan</div>
                  <div className="text-2xl font-bold">{selectedPlan.title}</div>
                </div>

                <div className="mb-6 pb-6 border-b border-white/20">
                  <div className="flex items-baseline gap-2">
                    {selectedPlan.currency && (
                      <span className="text-lg text-white/70">{selectedPlan.currency}</span>
                    )}
                    <span className="text-4xl font-bold">{selectedPlan.price}</span>
                    <span className="text-sm text-white/70">/ {selectedPlan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="text-sm font-semibold text-white/90 mb-2">What's included:</div>
                  {selectedPlan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={18} className="text-[#5B9BD5] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-xs text-white/70 mb-2">Need help choosing?</div>
                  <a href="/contact" className="text-sm text-white hover:text-[#5B9BD5] transition-colors underline">
                    Contact our team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscribePlanPage;
