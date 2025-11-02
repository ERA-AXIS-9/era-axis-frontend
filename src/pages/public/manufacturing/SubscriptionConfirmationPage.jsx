import React from 'react';
import { CheckCircle, ArrowRight, Phone, Mail, Calendar, FileText, Clock, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubscriptionConfirmationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-6 shadow-xl">
            <CheckCircle size={56} className="text-white" strokeWidth={2.5} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Subscription Request Received!
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Thank you for subscribing to our maintenance service plan. Our team will review your request and contact you within 24 hours to finalize the details.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Left Column - What's Next */}
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#5B9BD5]/10 flex items-center justify-center">
                <Calendar className="text-[#5B9BD5]" size={20} />
              </span>
              What happens next?
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#5B9BD5] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div className="w-0.5 h-16 bg-[#5B9BD5] absolute top-12"></div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-lg text-black mb-2">Review & Confirmation</h3>
                  <p className="text-gray-600 leading-relaxed">Our team will review your subscription details and contact you to confirm your plan and service requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#39366F] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div className="w-0.5 h-16 bg-[#39366F] absolute top-12"></div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-lg text-black mb-2">Service Agreement</h3>
                  <p className="text-gray-600 leading-relaxed">We'll send you the service agreement and payment details via email for your review and approval.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#39366F] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <Clock className="text-white" size={24} />
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-bold text-lg text-black mb-2">Service Activation</h3>
                  <p className="text-gray-600 leading-relaxed">Once confirmed, we'll schedule your first service visit and activate your maintenance plan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="bg-[#39366F] rounded-3xl shadow-2xl p-8 sm:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Need immediate assistance?</h2>
            </div>
            
            <p className="text-white/90 mb-8 text-lg">Our support team is here to help you with any questions.</p>
            
            <div className="space-y-4">
              <a 
                href="tel:+233XXXXXXXXX" 
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Phone size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white/70 mb-1">Call us</div>
                  <div className="font-semibold text-lg">+233 XX XXX XXXX</div>
                </div>
              </a>
              
              <a 
                href="mailto:support@eraaxis.com" 
                className="flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-xl p-5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Mail size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-white/70 mb-1">Email us</div>
                  <div className="font-semibold text-lg">support@eraaxis.com</div>
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Building size={18} className="text-white/70" />
                <span className="text-sm font-semibold text-white/90">Business Hours</span>
              </div>
              <p className="text-white/70 text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-white/70 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/services/manufacturing/maintenance"
            className="bg-[#39366F] hover:bg-[#2a2850] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 text-center inline-flex items-center justify-center gap-2"
          >
            Back to Maintenance
            <ArrowRight size={20} />
          </Link>
          
          <Link
            to="/"
            className="bg-white hover:bg-gray-50 text-[#39366F] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 text-center border-2 border-[#39366F]"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionConfirmationPage;
