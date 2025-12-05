import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Monitor, Users, ChevronRight, Check, DollarSign, CreditCard, Lightbulb } from 'lucide-react';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const programs = {
  'junior-stem': { name: 'Junior STEM Basics', duration: '3 months' },
  'maker-hardware': { name: 'Maker: Hardware & Repair', duration: '3 months' },
  'coder-software': { name: 'Coder: Software Foundations', duration: '3 months' }
};

const LearningModePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('program') || 'junior-stem';
  const program = programs[programId] || programs['junior-stem'];

  const handleModeSelection = (mode) => {
    if (mode === 'online') {
      // Redirect to online enrollment form first, then payment
      navigate(`/services/education/online-enrollment?program=${programId}`);
    } else if (mode === 'in-person') {
      // Redirect to in-person enrollment form
      navigate(`/services/education/in-person-enrollment?program=${programId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
              Choose Your Learning Mode
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              Selected Program: <span className="font-semibold text-[#2A2D7C]">{program.name}</span>
            </p>
            <p className="text-gray-500 text-sm">
              Duration: {program.duration}
            </p>
          </div>
        </div>
      </section>

      {/* Learning Mode Selection */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Online Learning Option - Compact Professional Card */}
            <div className="relative group">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A2D7C] to-[#1a1d4d] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              {/* Main Card */}
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2A2D7C] to-[#1a1d4d] rounded-lg flex items-center justify-center shadow-sm">
                    <Monitor size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-black mb-1">Online Learning</h2>
                    <p className="text-xs text-gray-500">Learn from anywhere at your own pace</p>
                  </div>
                </div>

                {/* Compact Features Grid */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 bg-[#2A2D7C] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-700">24/7 course access</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 bg-[#2A2D7C] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-700">Self-paced learning</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 bg-[#2A2D7C] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-700">Virtual mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 bg-[#2A2D7C] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-700">Digital certificate</span>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="mb-4 p-3 bg-gradient-to-r from-[#2A2D7C]/5 to-[#1a1d4d]/5 rounded-lg border border-[#2A2D7C]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600">Program Fee</p>
                      <p className="text-lg font-bold text-[#2A2D7C]">Payment Required</p>
                    </div>
                    <div className="w-8 h-8 bg-[#2A2D7C]/10 rounded-full flex items-center justify-center">
                      <CreditCard size={16} className="text-[#2A2D7C]" />
                    </div>
                  </div>
                </div>

                {/* Select Button */}
                <button
                  onClick={() => handleModeSelection('online')}
                  className="w-full bg-gradient-to-r from-[#2A2D7C] to-[#1a1d4d] hover:from-[#1a1d4d] hover:to-[#0f1028] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  Continue with Online
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* In-Person Classroom Option - Compact Professional Card */}
            <div className="relative group">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A2D7C] to-[#1a1d4d] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              
              {/* Main Card */}
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                {/* Header with Icon */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2A2D7C] to-[#1a1d4d] rounded-lg flex items-center justify-center shadow-sm">
                    <Users size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-black mb-1">In-Person Classroom</h2>
                    <p className="text-xs text-gray-500">Face-to-face learning at our facility</p>
                  </div>
                </div>

                {/* Compact Features Grid */}
                <div className="grid grid-cols-1 gap-2 mb-4">
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 bg-[#2A2D7C] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-700">Face-to-face instruction</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 bg-[#2A2D7C] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-700">Hands-on lab access</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-5 h-5 bg-[#2A2D7C] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-700">Direct mentorship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#2A2D7C] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="text-white" />
                    </div>
                    <span className="text-xs text-gray-700">In-Person certificate</span>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="mb-4 p-3 bg-gradient-to-r from-[#2A2D7C]/5 to-[#1a1d4d]/5 rounded-lg border border-[#2A2D7C]/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-600">Program Fee</p>
                      <p className="text-lg font-bold text-[#2A2D7C]">Payment Required</p>
                    </div>
                    <div className="w-8 h-8 bg-[#2A2D7C]/10 rounded-full flex items-center justify-center">
                      <DollarSign size={16} className="text-[#2A2D7C]" />
                    </div>
                  </div>
                </div>

                {/* Select Button */}
                <button
                  onClick={() => handleModeSelection('in-person')}
                  className="w-full bg-gradient-to-r from-[#2A2D7C] to-[#1a1d4d] hover:from-[#1a1d4d] hover:to-[#0f1028] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                >
                  Continue with In-Person
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Compact Info Note */}
          <div className="mt-6 p-3 bg-gradient-to-r from-[#2A2D7C]/5 to-[#1a1d4d]/5 border border-[#2A2D7C]/20 rounded-lg max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#2A2D7C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb size={14} className="text-[#2A2D7C]" />
              </div>
              <p className="text-xs text-gray-700">
                <span className="font-semibold">Note:</span> You can switch between learning modes later. Contact us for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningModePage;
