import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, ChevronRight, Calendar, Zap, Users, Wrench, Lightbulb, Award, ChevronDown, Check } from 'lucide-react';
import EducationNavbar from '../../../components/EducationNavbar';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const membershipData = {
  title: 'ERA AXIS Membership Dues',
  tagline: 'Access Innovation. Build Skills. Shape the Future.',
  price: 15,
  priceType: 'month',
  description: 'Becoming a member of ERA AXIS gives students, innovators, hobbyists, and young creators access to practical, inclusive, and affordable STEM learning. Your dues help us keep our tools running, support new projects, and make innovation accessible to everyone.',
  
  benefits: [
    'Continuous access to workshop tools and digital resources',
    'Priority use of Open Lab equipment for projects and assignments',
    'Support for your ongoing prototypes (simulation, CAD, hardware, software)',
    'Reduced fees for special trainings and competitions',
    'Maintenance of shared machines and tools, ensuring reliability and safety',
    'Mentorship & Expert Support'
  ],

  whyDuesMatter: [
    {
      title: 'For New Members',
      description: 'Your dues help us onboard you smoothly, maintain the learning environment, and keep our resources affordable and accessible.'
    },
    {
      title: 'For Renewing Members',
      description: 'Renewing your monthly dues helps sustain the ecosystem that benefits you, including continuous access to workshop tools and digital resources, priority use of Open Lab equipment for projects and assignments, support for your ongoing prototypes (simulation, CAD, hardware, software), reduced fees for special trainings and competitions, and maintenance of shared machines and tools, ensuring reliability and safety. Your contribution allows us to keep improving the hub while ensuring every member benefits from high-quality, well-maintained resources.'
    }
  ],

  whatSupported: [
    'Maintain tools, printers, electronics kits, and computers',
    'Buy consumables like solder, components, and workshop materials',
    'Clean and secure the labs',
    'Provide expert instructors and mentors',
    'Expand access to under-resourced learners',
    'Sustain community-led innovation projects'
  ],

  membershipBenefits: [
    'Open Lab Access',
    'Tools & Equipment Usage',
    'Community Projects & Hackathons',
    'Mentorship & Expert Support',
    'Innovation Challenges',
    'Certificate Pathways',
    'Affordable STEM Learning'
  ],

  projects: [
    {
      title: 'Custom Electronics Builds',
      description: 'Design and assemble functional hardware such as power banks, sensors, alarms, smart home systems, and more.'
    },
    {
      title: '3D-Printed & Fabricated Devices',
      description: 'Use 3D printers, laser cutters, and fabrication tools to create enclosures, mechanical parts, and small machines.'
    },
    {
      title: 'E-Waste Transformation Projects',
      description: 'Convert discarded electronics into new working devices, reducing waste while strengthening engineering skills.'
    },
    {
      title: 'Capstone Hardware Project',
      description: 'Build a full working prototype combining electronics, fabrication, and repair skills — fully documented for your portfolio.'
    }
  ],

  testimonials: [
    {
      name: 'Member',
      role: 'ERA AXIS Member',
      text: 'The membership dues are worth every pesewa. Access to tools, mentorship, and a community of innovators has transformed my projects.',
      rating: 5
    }
  ],

  faqs: [
    {
      question: 'Can I cancel my membership anytime?',
      answer: 'Yes, you can cancel your membership at any time with no penalties or hidden fees. Simply notify us before your next billing cycle.'
    },
    {
      question: 'What if I need to pause my membership?',
      answer: 'You can pause your membership for up to 3 months. Contact us to arrange a pause period, and you can resume whenever you\'re ready.'
    },
    {
      question: 'Is there a long-term commitment?',
      answer: 'No, there is no long-term commitment. Your membership is month-to-month, giving you complete flexibility.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, mobile money, and bank transfers. Choose the method that works best for you during checkout.'
    }
  ],

  comparisonFeatures: [
    { name: 'Lab Access', basic: 'School hours', standard: 'Extended hours', premium: '24/7' },
    { name: 'Tools & Equipment', basic: 'Limited', standard: 'Full Access', premium: 'Priority Access' },
    { name: 'Mentorship', basic: 'Community', standard: 'Expert Support', premium: 'Dedicated' },
    { name: 'Projects', basic: 'Basic', standard: 'Advanced', premium: 'Custom' },
    { name: 'Certifications', basic: 'Basic', standard: 'Professional', premium: 'Advanced' }
  ]
};

const courseData = {
  'maker-hardware': {
    title: 'Maker: Hardware & Repair',
    tagline: 'Master Electronics, Fabrication & Repair',
    price: 400,
    priceType: 'one-time',
    duration: '6 months',
    description: 'Master electronics, fabrication, and repair skills. Build devices from e-waste and access professional tools. This comprehensive course teaches you hands-on skills in electronics, 3D printing, laser cutting, and device repair.',
    benefits: [
      'Learn electronics fundamentals and circuit design',
      'Master 3D printing and laser cutting',
      'Repair and refurbish electronic devices',
      'Build functional hardware projects',
      'Access to professional fabrication tools',
      'Expert mentorship throughout the course'
    ],
    whatYouLearn: [
      'Electronics & Circuit Design',
      'Soldering & Component Assembly',
      '3D Printing & Design',
      'Laser Cutting & Fabrication',
      'Device Repair Techniques',
      'Project Documentation'
    ],
    projects: [
      { title: 'Custom Electronics Build', description: 'Design and build a functional electronic device of your choice' },
      { title: '3D Printed Device', description: 'Create a 3D-printed enclosure or mechanical part' },
      { title: 'Device Repair Project', description: 'Repair and refurbish a broken electronic device' },
      { title: 'Capstone Project', description: 'Complete a comprehensive hardware project combining all skills' }
    ]
  },
  'coder-software': {
    title: 'Coder: Software Foundations',
    tagline: 'Learn to Code from Scratch',
    price: 400,
    priceType: 'one-time',
    duration: '4 months',
    description: 'Learn to code from scratch and build practical applications. From mobile apps to smart home systems. This course covers programming fundamentals, web development, and application building with hands-on projects.',
    benefits: [
      'Learn programming from the ground up',
      'Build web and mobile applications',
      'Understand software design principles',
      'Work on real-world projects',
      'Access to development tools and resources',
      'Guidance from experienced developers'
    ],
    whatYouLearn: [
      'Programming Fundamentals',
      'Web Development (HTML, CSS, JavaScript)',
      'Backend Development',
      'Mobile App Development',
      'Database Design',
      'Software Best Practices'
    ],
    projects: [
      { title: 'Personal Website', description: 'Build a responsive personal or portfolio website' },
      { title: 'Web Application', description: 'Create a functional web app with database integration' },
      { title: 'Mobile App', description: 'Develop a mobile application for iOS or Android' },
      { title: 'Capstone Project', description: 'Build a complete software solution from concept to deployment' }
    ]
  },
  'junior-stem-basic': {
    title: 'Junior STEM Basic',
    tagline: 'Perfect for Beginners',
    price: 400,
    priceType: 'one-time',
    duration: '3 months',
    description: 'Perfect for beginners. Learn fundamental STEM concepts through hands-on projects and interactive workshops. This course introduces you to electronics, coding, and fabrication in an accessible way.',
    benefits: [
      'Learn STEM fundamentals in an engaging way',
      'Hands-on projects and experiments',
      'Introduction to electronics and coding',
      'Explore 3D printing and fabrication',
      'Build confidence in technical skills',
      'Supportive learning environment'
    ],
    whatYouLearn: [
      'STEM Fundamentals',
      'Basic Electronics',
      'Introduction to Coding',
      'Problem Solving',
      '3D Design Basics',
      'Project Planning'
    ],
    projects: [
      { title: 'LED Circuit Project', description: 'Build your first electronic circuit with LEDs' },
      { title: 'Simple Code Program', description: 'Write your first program and see it in action' },
      { title: '3D Design & Print', description: 'Design and 3D print a simple object' },
      { title: 'Final Project', description: 'Combine all skills in a fun STEM project' }
    ]
  }
};

const ProgramDetailsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [openFaq, setOpenFaq] = useState(null);
  
  const programId = searchParams.get('program') || 'junior-stem';
  const isMembership = programId === 'junior-stem';
  const currentData = isMembership ? membershipData : courseData[programId];

  if (!currentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Program Not Found</h1>
          <button
            onClick={() => navigate('/services/education')}
            className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Programs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <EducationNavbar />
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-14 md:py-16 lg:py-20 bg-[#39366F] text-white overflow-hidden">
        {/* Background Image - Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-3/5 lg:w-1/2 opacity-100">
          <img 
            src="/images/Educationpage/junior%20sterm%20basic.png" 
            alt="ERA AXIS Membership"
            className="w-full h-full object-cover"
          />
          {/* Ultra light overlay for mobile visibility, minimal gradient for desktop */}
          <div className="absolute inset-0 bg-black/10 sm:bg-gradient-to-l sm:from-transparent sm:via-white/5 sm:to-white/10"></div>
        </div>

        {/* Ultra minimal dark overlay on mobile for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/10 sm:bg-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-full sm:max-w-[55%] md:max-w-lg lg:max-w-xl sm:pr-6 md:pr-12 bg-[#39366F]/90 sm:bg-transparent md:bg-transparent backdrop-blur-md sm:backdrop-blur-none md:backdrop-blur-none p-5 pb-6 sm:p-0 md:p-0 rounded-xl sm:rounded-none md:rounded-none">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight drop-shadow-lg">
              {currentData.title}
            </h1>
            <p className="text-lg sm:text-lg md:text-xl font-semibold text-white mb-3 drop-shadow-md">
              {currentData.tagline}
            </p>
            <p className="text-sm sm:text-sm md:text-base text-white mb-4 sm:mb-4 md:mb-6 leading-relaxed drop-shadow-md">
              {currentData.description}
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="flex-shrink-0" />
                <span className="text-xs sm:text-sm whitespace-nowrap">{currentData.duration}</span>
              </div>
              {isMembership && (
                <>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="flex-shrink-0" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">500+ Active Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="flex-shrink-0" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">Expert Support</span>
                  </div>
                </>
              )}
            </div>

            {/* CTA Row with Badge and Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Price Badge */}
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-4 py-2 sm:py-2.5 rounded shadow-lg">
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                  <strong>GHS {currentData.price}</strong> / {currentData.priceType}
                </span>
              </span>
              
              <button
                onClick={() => navigate(isMembership ? '/services/education/online-enrollment' : `/services/education/in-person-enrollment?program=${programId}`)}
                className="bg-white text-[#39366F] hover:bg-gray-100 px-6 sm:px-8 py-3 rounded font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base shadow-lg"
              >
                <span className="whitespace-nowrap">{isMembership ? 'Join Now' : 'Enroll Now'}</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            {isMembership ? 'Membership Benefits' : 'What You Get'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {currentData.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#39366F] transition-all">
                <CheckCircle size={18} className="text-[#39366F] flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-xs sm:text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Membership Dues Matter - Only for Membership */}
      {isMembership && (
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">Why Membership Dues Matter</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {membershipData.whyDuesMatter.map((item, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What Your GHS 15 Supports - Only for Membership */}
      {isMembership && (
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">What Your GHS {membershipData.price} Supports</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 max-w-3xl">
              Your dues directly power the ERA AXIS mission by helping us:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {membershipData.whatSupported.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 sm:p-5 bg-gradient-to-br from-[#39366F]/5 to-[#39366F]/10 rounded-lg border border-[#39366F]/20">
                  <Wrench size={18} className="text-[#39366F] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What You'll Learn - Only for Courses */}
      {!isMembership && (
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">What You'll Learn</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {currentData.whatYouLearn.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 sm:p-6 border border-gray-200 hover:border-[#39366F] hover:shadow-md transition-all text-center">
                  <Lightbulb size={24} className="text-[#39366F] mx-auto mb-3" />
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Membership Benefits at a Glance - Only for Membership */}
      {isMembership && (
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">Membership Benefits at a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {membershipData.membershipBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-5 sm:p-6 border border-gray-200 hover:border-[#39366F] hover:shadow-md transition-all text-center">
                  <Lightbulb size={24} className="text-[#39366F] mx-auto mb-3" />
                  <p className="text-gray-900 font-semibold text-sm sm:text-base">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Compare Features - Only for Membership */}
      {isMembership && (
        <section className="py-8 sm:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">Compare Membership Tiers</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-bold text-black">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-black">Basic</th>
                    <th className="text-center py-4 px-4 font-bold text-black">Standard</th>
                    <th className="text-center py-4 px-4 font-bold text-black">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {membershipData.comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4 font-medium text-gray-900">{feature.name}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{feature.basic}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{feature.standard}</td>
                      <td className="py-4 px-4 text-center text-gray-600">{feature.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Projects You Can Do */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
            {isMembership ? 'Projects You Can Do as a Member' : 'Course Projects'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {currentData.projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">Member Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {membershipData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {membershipData.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gray-500 transition-transform flex-shrink-0 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-5 pb-4 text-gray-600 text-sm sm:text-base border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 sm:py-12 lg:py-16 bg-[#39366F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Join ERA AXIS?</h2>
            <p className="text-white/90 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Start your innovation journey today with unlimited access to tools, mentorship, and a community of creators.
            </p>
            <button
              onClick={() => navigate('/services/education/online-enrollment')}
              className="bg-white hover:bg-gray-100 text-[#39366F] px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-base sm:text-lg shadow-lg"
            >
              <span>Join Now - GHS {membershipData.price}/Month</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetailsPage;
