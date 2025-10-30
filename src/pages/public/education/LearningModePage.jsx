import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Monitor, Users, ChevronRight, Check } from 'lucide-react';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const programs = {
  'junior-stem': { name: 'Junior STEM Basics', duration: '3 months' },
  'maker-hardware': { name: 'Maker: Hardware & Repair', duration: '6 months' },
  'coder-software': { name: 'Coder: Software Foundations', duration: '4 months' }
};

const LearningModePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('program') || 'junior-stem';
  const program = programs[programId] || programs['junior-stem'];

  const handleModeSelection = (mode) => {
    if (mode === 'online') {
      // Redirect to payment page for online learning
      navigate(`/services/education/payment?program=${programId}`);
    } else {
      // Redirect to physical enrollment form
      navigate(`/services/education/physical-enrollment?program=${programId}`);
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
              Selected Program: <span className="font-semibold text-[#39366F]">{program.name}</span>
            </p>
            <p className="text-gray-500 text-sm">
              Duration: {program.duration}
            </p>
          </div>
        </div>
      </section>

      {/* Learning Mode Selection */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Online Learning Option */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-[#39366F] transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#39366F]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Monitor size={40} className="text-[#39366F]" />
                </div>
                <h2 className="text-2xl font-bold text-black mb-2 group-hover:text-[#39366F] transition-colors">
                  Online Learning
                </h2>
                <p className="text-gray-600 text-sm">
                  Learn from anywhere at your own pace
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Access course materials 24/7</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Learn at your own pace</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Virtual mentorship and support</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Online project submissions</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Digital certificate upon completion</span>
                </li>
              </ul>

              {/* Price Badge */}
              <div className="mb-6 p-4 bg-[#39366F]/5 rounded-lg border border-[#39366F]/20">
                <p className="text-sm text-gray-600 mb-1">Program Fee</p>
                <p className="text-2xl font-bold text-[#39366F]">Payment Required</p>
              </div>

              {/* Select Button */}
              <button
                onClick={() => handleModeSelection('online')}
                className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                Continue with Online
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Physical Classroom Option */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-[#5B9BD5] transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#5B9BD5]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users size={40} className="text-[#5B9BD5]" />
                </div>
                <h2 className="text-2xl font-bold text-black mb-2 group-hover:text-[#5B9BD5] transition-colors">
                  Physical Classroom
                </h2>
                <p className="text-gray-600 text-sm">
                  In-person learning at our facility
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Face-to-face instruction</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Hands-on lab access</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Direct mentorship</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Collaborative learning environment</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Physical certificate upon completion</span>
                </li>
              </ul>

              {/* Price Badge */}
              <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-sm text-gray-600 mb-1">Program Fee</p>
                <p className="text-2xl font-bold text-green-700">Free Registration</p>
                <p className="text-xs text-gray-500 mt-1">No payment required now</p>
              </div>

              {/* Select Button */}
              <button
                onClick={() => handleModeSelection('physical')}
                className="w-full bg-[#5B9BD5] hover:bg-[#4a8bc2] text-white px-6 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
              >
                Continue with Physical
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Info Note */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-blue-900 text-center">
              <span className="font-semibold">💡 Note:</span> You can switch between learning modes later. Contact us for assistance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningModePage;
