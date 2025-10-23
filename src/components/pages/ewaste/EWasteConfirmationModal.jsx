import React from 'react';
import { X } from 'lucide-react';

const EWasteConfirmationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-lg font-bold text-black">Thank You for Donating Your E-Waste</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">
            You've turned old devices into tools for learning and innovation.
          </p>

          {/* Success Message */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-green-700">Your donation has been successfully scheduled.</span>
            </div>
            <p className="text-sm text-gray-700">
              Our team will contact you within 24 hours to arrange pickup/drop-off.
            </p>
          </div>

          {/* Donation Summary */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-black mb-3">
              Donation Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Items Donated</label>
                <input
                  type="text"
                  value="Laptops x1, Phone x2"
                  readOnly
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Method</label>
                <input
                  type="text"
                  value="Pickup Requested"
                  readOnly
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Date</label>
                <input
                  type="text"
                  value="Mon, 22 Sep • 10:00 AM"
                  readOnly
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Donor</label>
                <input
                  type="text"
                  value="Jane Doe • jane@acme.org • ACME Foundation"
                  readOnly
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-black mb-3">
              Next Steps
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-[#39366F] mt-1">•</span>
                <span>We will email or call you with confirmation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#39366F] mt-1">•</span>
                <span>If pickup was requested, our logistics team will arrive at the scheduled time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#39366F] mt-1">•</span>
                <span>If drop-off, please bring items to 123 Innovation Way, Accra, Ghana.</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mb-4">
              Learn how your donation creates impact.
            </p>
          </div>

          {/* Impact Message */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-black mb-2">Your Impact</h4>
            <p className="text-sm text-gray-700">
              "Every device you donate becomes a tool for innovation and learning in the hands of young minds."
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md">
              Track My Donation
            </button>
            <button 
              onClick={onClose}
              className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200"
            >
              Donate Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EWasteConfirmationModal;
