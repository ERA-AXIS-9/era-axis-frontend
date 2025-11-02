import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const EducationFAQ = () => {
  const [openCategory, setOpenCategory] = useState(null);
  const [openFAQ, setOpenFAQ] = useState({});

  const faqCategories = [
    {
      title: "Enrollment",
      count: 4,
      faqs: [
        {
          question: "How do I enroll in a program?",
          answer: "You can enroll by selecting your preferred program on the education homepage, choosing your learning mode (online or in-person), and completing the enrollment form. The process takes about 5-10 minutes."
        },
        {
          question: "What are the prerequisites for each program?",
          answer: "Junior STEM Basics: No prior experience needed, basic computer skills helpful. Maker Hardware: Basic electronics knowledge recommended. Coder Software: Basic computer literacy required, no prior coding experience needed."
        },
        {
          question: "Can I switch between programs after enrolling?",
          answer: "Yes, you can switch programs within the first week of enrollment. Contact our support team for assistance with program changes."
        },
        {
          question: "What is the refund policy?",
          answer: "We offer a full refund within 7 days of enrollment if you haven't started the program. After that, refunds are prorated based on completion. See our terms and conditions for details."
        }
      ]
    },
    {
      title: "Programs",
      count: 4,
      faqs: [
        {
          question: "How long does each program take?",
          answer: "Junior STEM Basics: 3 months. Maker Hardware & Repair: 6 months. Coder Software Foundations: 4 months. All programs include both learning time and project work."
        },
        {
          question: "What is the difference between online and in-person learning?",
          answer: "Online: Learn from anywhere with 24/7 course access, virtual mentorship, and digital certificate. In-Person: Face-to-face instruction at our facility with hands-on lab access, direct mentorship, and physical certificate."
        },
        {
          question: "What equipment do I need for online learning?",
          answer: "You need a computer or tablet with internet access, a webcam for virtual sessions, and basic software (we provide free alternatives). For hardware programs, we provide a kit with necessary components."
        },
        {
          question: "Are there age restrictions for the programs?",
          answer: "Junior STEM is designed for ages 10-16. Maker Hardware and Coder Software are suitable for ages 14 and above, including adults. We welcome learners of all ages!"
        }
      ]
    },
    {
      title: "Payment",
      count: 4,
      faqs: [
        {
          question: "What payment methods are accepted?",
          answer: "We accept mobile money (MTN, Vodafone, AirtelTigo), bank transfers, credit/debit cards, and cash payments at our facility. Payment plans are available for all programs."
        },
        {
          question: "Are there payment plans available?",
          answer: "Yes! We offer flexible payment plans: Pay in full (5% discount), 2-month installments, or 3-month installments. Contact us to set up a plan that works for you."
        },
        {
          question: "Are there scholarships or discounts available?",
          answer: "We offer early bird discounts (10% off), group discounts (3+ students), and need-based scholarships. Contact our team to learn about current opportunities."
        },
        {
          question: "What does the program fee include?",
          answer: "Fees include all course materials, access to online platform, mentorship sessions, project kits (for hardware programs), certificate issuance, and career support services."
        }
      ]
    },
    {
      title: "Learning",
      count: 4,
      faqs: [
        {
          question: "What is the time commitment per week?",
          answer: "Junior STEM: 6-8 hours per week. Maker Hardware: 8-10 hours per week. Coder Software: 8-12 hours per week. This includes class time, projects, and self-study."
        },
        {
          question: "Can I learn at my own pace?",
          answer: "Online programs offer flexible pacing with 24/7 access. In-person programs follow a structured schedule but include self-paced components. All programs have deadlines for project completion."
        },
        {
          question: "What if I miss a class (for in-person learning)?",
          answer: "Recorded sessions are available within 24 hours. You can also attend makeup sessions or schedule one-on-one time with instructors to catch up."
        },
        {
          question: "How are the instructors qualified?",
          answer: "Our instructors have industry experience, teaching certifications, and passion for education. They include engineers, developers, and educators with real-world expertise."
        }
      ]
    },
    {
      title: "Certificates",
      count: 4,
      faqs: [
        {
          question: "Will I get a certificate after completion?",
          answer: "Yes! All graduates receive a certificate of completion. Online students get digital certificates, in-person students receive both digital and physical certificates."
        },
        {
          question: "Are the certificates recognized?",
          answer: "Our certificates are recognized by industry partners and educational institutions. Many graduates use them for college applications and job opportunities."
        },
        {
          question: "What career opportunities are available?",
          answer: "Graduates can pursue careers in tech support, web development, electronics repair, IT consulting, or continue to advanced education. We provide career guidance and job placement support."
        },
        {
          question: "Do you help with job placement?",
          answer: "Yes! We offer career counseling, resume workshops, interview preparation, and connect graduates with our network of hiring partners."
        }
      ]
    },
    {
      title: "Support",
      count: 4,
      faqs: [
        {
          question: "How do I get technical support?",
          answer: "Technical support is available via email, phone, or live chat Monday-Friday, 9am-6pm. We also have a comprehensive help center with tutorials and troubleshooting guides."
        },
        {
          question: "Is there a community for students?",
          answer: "Yes! We have an online community where students can connect, share projects, ask questions, and collaborate. We also host regular virtual meetups and events."
        },
        {
          question: "What if I need extra help with coursework?",
          answer: "We offer one-on-one tutoring sessions, study groups, and office hours with instructors. Additional support is available at no extra cost."
        },
        {
          question: "How can I contact the education team?",
          answer: "Email us at education@eraaxis.org, call +233 XXX XXXXXX, or visit our facility. Our team is always happy to help with any questions or concerns."
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
    <section id="faq" className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQ Categories - Following Main FAQ Design */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-black mb-4">FAQ Categories</h2>
          
          <div className="space-y-3 sm:space-y-4">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-base sm:text-lg font-semibold text-black">{category.title}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs sm:text-sm">
                      {category.count}
                    </span>
                  </div>
                  {openCategory === categoryIndex ? (
                    <ChevronUp className="text-gray-400" size={18} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={18} />
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
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm sm:text-base font-medium text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="text-[#39366F]" size={14} />
                            ) : (
                              <ChevronDown className="text-gray-400" size={14} />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-4 sm:px-6 pb-3 sm:pb-4 bg-gray-50">
                              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
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

        {/* Still Have Questions - Following Main FAQ Design */}
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold text-black mb-4">Still Have Questions?</h2>
          
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-black mb-2">Need Personal Assistance?</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Contact our team for anything not covered here. We're here to help with personalized support.
                </p>
              </div>
              <a
                href="/contact"
                className="bg-gradient-to-r from-[#39366F] to-[#2a2850] hover:from-[#2a2850] hover:to-[#1a1a3a] text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 self-start"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationFAQ;
