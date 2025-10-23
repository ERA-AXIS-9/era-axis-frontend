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
    <section className="pt-20 pb-12 bg-white">
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
              <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 leading-tight">
                {tabContent[activeTab].title}
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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
  );
};

export default PartnershipHero;
