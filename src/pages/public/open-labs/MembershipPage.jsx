import React from 'react';
import { Check, Star, ChevronRight, ChevronDown } from 'lucide-react';
import Breadcrumb from '../../../components/pages/open-labs/Breadcrumb';

const plans = [
  {
    title: 'Student Plan',
    price: '$5',
    period: '/month',
    description: 'Perfect for students learning and exploring.',
    features: [
      'Access during school hours',
      'Basic training included',
      'Community support',
      'Equipment orientation'
    ],
    color: '#39366F',
    popular: false
  },
  {
    title: 'Startup Plan',
    price: '$25',
    period: '/month',
    description: 'Ideal for entrepreneurs and small teams.',
    features: [
      'Extended hours access',
      'Expert mentorship',
      'Priority booking',
      'Advanced workshops',
      'Project showcase opportunities'
    ],
    color: '#5B9BD5',
    popular: true
  },
  {
    title: 'Organization Plan',
    price: '$65',
    period: '/month',
    description: 'Comprehensive access for teams and companies.',
    features: [
      'Full 24/7 access',
      'Dedicated support',
      'Custom workshops',
      'Private sessions',
      'Equipment reservations',
      'Team collaboration space'
    ],
    color: '#2a2850',
    popular: false
  }
];

const comparisonFeatures = [
  { name: 'Lab Access', student: 'School hours', startup: 'Extended hours', organization: '24/7' },
  { name: 'Training', student: 'Basic', startup: 'Advanced', organization: 'Custom' },
  { name: 'Mentorship', student: '—', startup: 'Available', organization: 'Dedicated' },
  { name: 'Equipment Priority', student: 'Standard', startup: 'Priority', organization: 'Reserved' }
];

const faqs = [
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your membership at any time with no penalties or hidden fees.'
  },
  {
    question: 'What if I need to freeze my membership?',
    answer: 'You can freeze your membership for up to 3 months. Contact us to arrange a freeze period.'
  }
];

const MembershipPage = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="pt-12 pb-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3">
              Membership Plans for Every Innovator
            </h1>
            <p className="text-gray-600 text-lg">
              Flexible pricing to match your goals and schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Choose Your Plan */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-8">Choose Your Plan</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                  plan.popular ? 'border-[#39366F] shadow-md' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#39366F] text-white rounded-full text-xs font-semibold">
                      <Star size={14} className="fill-white" />
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-black mb-2">{plan.title}</h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold" style={{ color: plan.color }}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-lg">{plan.period}</span>
                </div>

                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <ChevronRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare Features */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-8">Compare Features</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-black">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-black">Student</th>
                  <th className="text-center py-4 px-4 font-bold text-black">Startup</th>
                  <th className="text-center py-4 px-4 font-bold text-black">Organization</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium text-gray-700">{feature.name}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{feature.student}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{feature.startup}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{feature.organization}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-black mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-black">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 text-gray-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#39366F] to-[#5B9BD5] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                K
              </div>
              <div>
                <p className="text-gray-700 text-base leading-relaxed mb-3 italic">
                  "As a student, the $5/month plan gave me access to tools I could never afford on my own. I used the lab to build my final year project!"
                </p>
                <p className="font-semibold text-black">Kofi Mensah</p>
                <p className="text-sm text-gray-500">Engineering Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-2xl p-8 sm:p-12 text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Choose a membership today and start innovating.
            </h2>
            <a
              href="/contact"
              className="bg-white text-[#39366F] hover:bg-gray-100 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Get Started Now
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MembershipPage;
