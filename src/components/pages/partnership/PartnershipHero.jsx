import React, { useState } from 'react';

const PartnershipHero = () => {
  const [activeTab, setActiveTab] = useState('Corporate');

  const tabs = [
    'Corporate',
    'Foundations', 
    'Universities',
    'NGOs',
    'Government',
    'Local Businesses'
  ];

  const tabContent = {
    'Corporate': {
      title: 'Corporate Partnerships',
      description: 'Partner with us to drive innovation, develop talent pipelines, and create meaningful social impact through STEM education initiatives.',
      benefits: ['Brand visibility and CSR impact', 'Access to emerging talent', 'Innovation ecosystem participation', 'Sustainable development goals alignment']
    },
    'Foundations': {
      title: 'Foundation Partnerships',
      description: 'Collaborate with us to scale educational impact and support sustainable development through strategic grant partnerships and program funding.',
      benefits: ['Measurable impact metrics', 'Program sustainability', 'Community-driven initiatives', 'Long-term educational outcomes']
    },
    'Universities': {
      title: 'University Partnerships',
      description: 'Join our network of academic institutions to enhance STEM education, research collaboration, and student exchange programs.',
      benefits: ['Research collaboration opportunities', 'Student and faculty exchange', 'Curriculum development', 'Joint program initiatives']
    },
    'NGOs': {
      title: 'NGO Partnerships',
      description: 'Work together to amplify grassroots impact and create sustainable community-based STEM education programs across Africa.',
      benefits: ['Community reach expansion', 'Local expertise sharing', 'Resource optimization', 'Collaborative program delivery']
    },
    'Government': {
      title: 'Government Partnerships',
      description: 'Collaborate with government agencies to integrate STEM education into national curricula and policy frameworks.',
      benefits: ['Policy integration support', 'National scale implementation', 'Regulatory alignment', 'Public sector innovation']
    },
    'Local Businesses': {
      title: 'Local Business Partnerships',
      description: 'Partner with local enterprises to create practical learning opportunities and support community-based innovation ecosystems.',
      benefits: ['Local market insights', 'Practical skill development', 'Community economic growth', 'Entrepreneurship support']
    }
  };

  return (
    <>
      {/* Hero Section - About Style */}
      <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Card Container with Border Radius */}
          <div className="p-4 sm:p-6 sm:bg-[#39366F] sm:rounded-xl sm:border sm:border-[#39366F] sm:shadow-sm md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="max-w-xl">
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Build Strategic Partnerships.
                  <br />
                  <span className="text-green-400">Transform Communities Together.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
                  Join forces with ERA AXIS to drive innovation, develop talent, and create lasting social impact across Africa.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href="#partnership-tabs"
                    className="bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2 text-base w-full sm:w-auto"
                  >
                    Explore Partnership Opportunities
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Right Content - Hero Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/Partnership/partnership.png" 
                    alt="ERA AXIS Partnership Programs" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tabs Section */}
      <section id="partnership-tabs" className="pt-12 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Partnership Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-[#39366F] text-white border-b-2 border-[#39366F]'
                      : 'text-gray-600 hover:text-[#39366F] hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white">
              <div className="max-w-4xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 leading-tight">
                  {tabContent[activeTab].title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  {tabContent[activeTab].description}
                </p>
                
                {/* Key Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tabContent[activeTab].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#39366F] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnershipHero;
