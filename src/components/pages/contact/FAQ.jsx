import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Can illiterate youth join ERA AXIS programs?",
      answer: "Yes. We design inclusive programs with hands-on learning and mentorship pathways that do not require prior literacy."
    },
    {
      question: "Do you accept e-waste donations on-site?",
      answer: "We accept select components and devices during designated drop-off windows. Please contact us to confirm accepted items."
    },
    {
      question: "How can my company collaborate?",
      answer: "We offer partnerships across education, manufacturing, and events. Share your goals via the form and our team will follow up."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="pt-4 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
              >
                <h3 className="text-base font-semibold text-gray-900 pr-4 group-hover:text-[#39366F] transition-colors">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="text-[#39366F]" size={18} />
                  ) : (
                    <ChevronDown className="text-gray-500 group-hover:text-[#39366F]" size={18} />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-5 bg-gray-50">
                  <div className="pt-3">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See Full FAQ Link */}
        <div className="mt-6">
          <a
            href="/faq"
            className="inline-flex items-center gap-2 text-sm text-gray-900 hover:text-[#39366F] font-medium transition-colors"
          >
            See Full FAQ Page
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
