import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MonthlySupporter = () => {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState('Monthly');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const frequencyOptions = ['Monthly', 'Quarterly', 'Annually'];
  
  const amountOptions = [
    { amount: 'GHS 50', description: 'Support 1 learner' },
    { amount: 'GHS 125', description: 'Support 3 learners' },
    { amount: 'GHS 250', description: 'Fund a community project' }
  ];

  const impactStats = [
    '"Every month, you unlock innovation opportunities for someone new."',
    'Open Labs sustained monthly: 6+',
    'Average learners reached per GHS 125: 3',
    'Recurring supporters community size: 1,200+'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Join Our Circle of Supporters
            </h1>
          </div>

          {/* Main Layout - Side by Side */}
          <div className="flex flex-col lg:flex-row gap-6 max-w-4xl mx-auto">
            
            {/* Left Column - Donation Form */}
            <div className="flex-1">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300 w-full">
                
                {/* Donation Frequency */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Donation Frequency
                  </h3>
                  <div className="flex gap-1">
                    {frequencyOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => setFrequency(option)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                          frequency === option
                            ? 'bg-[#39366F] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Choose Amount */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Choose an Amount
                  </h3>
                  
                  {/* Preset Amounts - Grid Layout */}
                  <div className="grid grid-cols-1 gap-2 mb-3">
                    {amountOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedAmount(option.amount);
                          setCustomAmount('');
                        }}
                        className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg border transition-all duration-200 ${
                          selectedAmount === option.amount
                            ? 'border-[#39366F] bg-[#39366F] text-white'
                            : 'border-gray-200 text-gray-700 hover:border-[#39366F] hover:bg-gray-50'
                        }`}
                      >
                        {option.amount} / month • {option.description}
                      </button>
                    ))}
                  </div>

                  {/* Custom Amount */}
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount('');
                      }}
                      className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-[#39366F] transition-colors duration-200"
                    />
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    Your monthly gift is billed automatically. You can modify or cancel anytime.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => navigate('/donate/payment')}
                    className="bg-[#39366F] hover:bg-[#2a2850] text-white px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                  >
                    Become a Monthly Supporter
                  </button>
                  <button className="border-2 border-gray-200 text-gray-700 hover:border-[#39366F] hover:text-[#39366F] px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200">
                    Back to Donation Options
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Impact Stats */}
            <div className="flex-1">
              <div className="space-y-3">
                {impactStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md hover:border-[#39366F] transition-all duration-300"
                  >
                    <p className="text-sm text-gray-600">
                      {stat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MonthlySupporter;
