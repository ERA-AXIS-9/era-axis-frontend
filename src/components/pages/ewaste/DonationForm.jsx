import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EWasteConfirmationModal from './EWasteConfirmationModal';

const DonationForm = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [pickupMethod, setPickupMethod] = useState('Request Pickup');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    organization: ''
  });

  const itemCategories = [
    { id: 'laptops', label: 'Laptops' },
    { id: 'phones', label: 'Phones' },
    { id: 'circuit-boards', label: 'Circuit Boards' },
    { id: 'tablets', label: 'Tablets' },
    { id: 'other-electronics', label: 'Other Electronics' }
  ];

  const pickupOptions = [
    'Request Pickup',
    'Fit Drop & Off',
    'Pickup address',
    'Preferred time'
  ];

  const handleItemToggle = (itemId) => {
    setSelectedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSubmit = () => {
    // Show confirmation modal instead of navigating
    setShowConfirmationModal(true);
  };

  const handleCloseModal = () => {
    setShowConfirmationModal(false);
  };

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 max-w-4xl mx-auto">
          
          {/* Left Column - Donation Form */}
          <div className="flex-1 w-full">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300 w-full">
              
              {/* Donation Details */}
              <div className="mb-3">
                <h3 className="text-sm font-semibold text-black mb-2">
                  Donation Details
                </h3>
                
                {/* What Are You Donating */}
                <div className="mb-2">
                  <label className="block text-xs font-medium text-gray-700 mb-2">
                    What Are You Donating?
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {itemCategories.map((item) => (
                      <label key={item.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)}
                          onChange={() => handleItemToggle(item.id)}
                          className="w-4 h-4 text-[#39366F] border-gray-300 rounded focus:ring-[#39366F] mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Quantity and Condition */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Quantity (total items)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 5"
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Condition
                    </label>
                    <select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200">
                      <option>Working</option>
                      <option>Needs Repair</option>
                      <option>For Parts Only</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="mb-2">
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Additional notes (optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe the items, any specific details..."
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Pickup or Drop-off */}
              <div className="mb-3">
                <h3 className="text-sm font-semibold text-black mb-2">
                  Pickup or Drop-off
                </h3>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {pickupOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => setPickupMethod(option)}
                      className={`px-4 py-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                        pickupMethod === option
                          ? 'border-[#39366F] bg-[#39366F] text-white'
                          : 'border-gray-200 text-gray-700 hover:border-[#39366F] hover:bg-gray-50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>

                {/* Address Fields */}
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Nearest collection point / HQ address"
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  />
                  <textarea
                    rows={2}
                    placeholder="Please provide clear directions so our address shown."
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Donor Details */}
              <div className="mb-3">
                <h3 className="text-sm font-semibold text-black mb-2">
                  Donor Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Organization / Company (optional)"
                    value={donorInfo.organization}
                    onChange={(e) => setDonorInfo({...donorInfo, organization: e.target.value})}
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="mb-3">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#39366F] border-gray-300 rounded focus:ring-[#39366F] mt-0.5"
                  />
                  <span className="text-sm text-gray-700">
                    I certify that I legally own and agree they will be repurposed for learning and innovation.
                  </span>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleSubmit}
                  className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Schedule Donation
                </button>
                <button 
                  onClick={handleSubmit}
                  className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                >
                  Confirm Donation
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Impact Info */}
          <div className="flex-1 max-w-xs">
            <div className="space-y-4">
              {/* Your Impact */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                <h4 className="text-sm font-semibold text-black mb-3">Your Impact</h4>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-[#39366F] mb-1">1 Laptop = 5 STEM toolkits</div>
                </div>
              </div>

              {/* E-waste Impact */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300">
                <h4 className="text-sm font-semibold text-black mb-3">Your e-waste empowers learners.</h4>
                <p className="text-xs text-gray-600 mb-3">
                  Saves the same while enabling young STEM education.
                </p>
                <p className="text-xs text-gray-600">
                  We transform used electronics into learning opportunities and innovation platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <EWasteConfirmationModal 
        isOpen={showConfirmationModal} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default DonationForm;
