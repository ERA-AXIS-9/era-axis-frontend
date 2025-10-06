import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Can Ethiopian youth join ERA AXIS programs?",
      answer: "Yes, Ethiopian students regularly join our workshops, learning and manufacturing, and events. Share your goals via our form and we team will follow up."
    },
    {
      question: "Do you accept visitors/donations on-site?",
      answer: "We often accept components and devices during the breakfast drop-off window. Please contact us to confirm accepted items and schedule your visit."
    },
    {
      question: "How can my company collaborate?",
      answer: "We offer several collaboration opportunities including manufacturing, educational partnerships, technology sharing, and community outreach programs. Contact us to discuss how we can work together to create meaningful impact."
    },
    {
      question: "What services do you offer?",
      answer: "We provide technology education, manufacturing services, innovation labs, community workshops, and consultation services. Our programs are designed to build local capacity and create sustainable solutions."
    },
    {
      question: "How do I schedule a visit?",
      answer: "You can schedule a visit by contacting us through our contact form or calling our office directly. We offer guided tours, workshop visits, and meeting facilities for potential partners and collaborators."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="pt-4 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about ERA AXIS and how we can work together.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-black pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="text-[#39366F]" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See Full FAQ Link */}
        <div className="text-center mt-8">
          <a
            href="/faq"
            className="inline-flex items-center gap-2 text-lg text-[#39366F] hover:text-[#2a2850] font-semibold transition-colors group"
          >
            See Full FAQ Page
            <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
