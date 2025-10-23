import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, Target, Lightbulb } from 'lucide-react';

const WhyPartnerWithUs = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-4 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Why Partner With Us
          </h2>
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            
            {/* Left Side - Benefits */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Visibility */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#39366F] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-sm font-semibold text-black mb-2">
                    Visibility
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Showcase your commitment to education and innovation globally
                  </p>
                </div>
              </div>

              {/* Impact */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#39366F] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-sm font-semibold text-black mb-2">
                    Impact
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Make measurable difference in African STEM education
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#39366F] rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-sm font-semibold text-black mb-2">
                    Innovation
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Access cutting-edge educational technologies and approaches
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-4">
                <button 
                  onClick={() => navigate('/partner/apply')}
                  className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  Become a Partner
                </button>
              </div>
            </div>

            {/* Right Side - Statistics Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-right mb-6">
                  <span className="text-sm text-gray-500 font-medium">Impact Metrics</span>
                </div>
                
                <div className="space-y-4">
                  {/* Row 1 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#39366F] mb-1">250K+</div>
                      <div className="text-xs font-semibold text-black mb-1">Students reached</div>
                      <div className="text-xs text-gray-500">across Africa</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#39366F] mb-1">80+</div>
                      <div className="text-xs font-semibold text-black mb-1">Partner organizations</div>
                      <div className="text-xs text-gray-500">globally</div>
                    </div>
                  </div>
                  
                  {/* Row 2 */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#39366F] mb-1">120</div>
                      <div className="text-xs font-semibold text-black mb-1">Programs delivered</div>
                      <div className="text-xs text-gray-500">successfully</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#39366F] mb-1">30%</div>
                      <div className="text-xs font-semibold text-black mb-1">Increase in STEM</div>
                      <div className="text-xs text-gray-500">engagement</div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-sm text-gray-600 text-center italic leading-relaxed">
                    "Together, we're building the next generation of African innovators and leaders."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
