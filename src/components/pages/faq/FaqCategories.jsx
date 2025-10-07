import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FaqCategories = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openFAQ, setOpenFAQ] = useState({});

  const faqCategories = [
    {
      title: "Education",
      count: 6,
      faqs: [
        {
          question: "Can illiterate youth learn STEM at ERA AXIS?",
          answer: "Yes, through visuals, demonstrations, and local languages."
        },
        {
          question: "What age groups do you serve?",
          answer: "We serve youth and adults of all ages, with programs designed for different skill levels and learning needs."
        },
        {
          question: "Do you offer certification programs?",
          answer: "Yes, we provide certificates for completed courses and skill-based training programs."
        },
        {
          question: "What languages do you teach in?",
          answer: "We teach in English and local languages to ensure accessibility for all learners."
        },
        {
          question: "How long are your programs?",
          answer: "Program duration varies from short workshops (1-3 days) to comprehensive courses (3-6 months)."
        },
        {
          question: "Do you provide materials and tools?",
          answer: "Yes, all necessary materials, tools, and equipment are provided during training sessions."
        }
      ]
    },
    {
      title: "Services",
      count: 5,
      faqs: [
        {
          question: "Do you build for companies and households?",
          answer: "Yes, through Manufacturing, Software, and Open Labs."
        },
        {
          question: "What manufacturing services do you offer?",
          answer: "We provide custom manufacturing, prototyping, and small-scale production services."
        },
        {
          question: "Can you develop custom software solutions?",
          answer: "Yes, we develop web applications, mobile apps, and custom software for businesses."
        },
        {
          question: "What is included in Open Labs access?",
          answer: "Access to equipment, tools, workspace, mentorship, and collaborative project opportunities."
        },
        {
          question: "Do you offer consulting services?",
          answer: "Yes, we provide technical consulting, project planning, and implementation support."
        }
      ]
    },
    {
      title: "Donations",
      count: 4,
      faqs: [
        {
          question: "How do I donate e-waste?",
          answer: "Contact us to arrange collection/drop-off."
        },
        {
          question: "What types of e-waste do you accept?",
          answer: "We accept computers, phones, tablets, electronic components, and other functional devices."
        },
        {
          question: "Can I donate money instead of equipment?",
          answer: "Yes, monetary donations help us purchase materials, pay instructors, and expand programs."
        },
        {
          question: "Do you provide donation receipts?",
          answer: "Yes, we provide official receipts for all donations for tax and record-keeping purposes."
        }
      ]
    },
    {
      title: "Payments",
      count: 3,
      faqs: [
        {
          question: "Can I pay securely online?",
          answer: "Yes, through our payment portal for education and services."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept mobile money, bank transfers, credit cards, and cash payments."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans for longer programs and larger projects."
        }
      ]
    }
  ];

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleFAQ = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFAQ(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Categories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">FAQ Categories</h2>
          
          <div className="space-y-4">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-black">{category.title}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </div>
                  {openCategory === categoryIndex ? (
                    <ChevronUp className="text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </button>

                {/* Category FAQs */}
                {openCategory === categoryIndex && (
                  <div className="border-t border-gray-200">
                    {category.faqs.map((faq, faqIndex) => {
                      const faqKey = `${categoryIndex}-${faqIndex}`;
                      const isOpen = openFAQ[faqKey];
                      
                      return (
                        <div key={faqIndex} className="border-b border-gray-100 last:border-b-0">
                          <button
                            onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-base font-medium text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="text-[#39366F]" size={16} />
                            ) : (
                              <ChevronDown className="text-gray-400" size={16} />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-4 bg-gray-50">
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaqCategories;
