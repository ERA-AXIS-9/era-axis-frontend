import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, Mail, Phone, MapPin, ChevronRight, Calendar, Users } from 'lucide-react';
import Breadcrumb from '../../../components/pages/education/Breadcrumb';

const programs = {
  'junior-stem': { name: 'Junior STEM Basics', duration: '3 months' },
  'maker-hardware': { name: 'Maker: Hardware & Repair', duration: '3 months' },
  'coder-software': { name: 'Coder: Software Foundations', duration: '3 months' }
};

const PhysicalConfirmationPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const programId = searchParams.get('program') || 'junior-stem';
  const program = programs[programId] || programs['junior-stem'];

  const enrollmentDetails = {
    referenceNumber: 'PHYS-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
    status: 'Pending Confirmation'
  };

  const nextSteps = [
    {
      icon: Phone,
      title: 'Confirmation Call',
      description: 'We\'ll call you within 48 hours to verify your enrollment and discuss class schedules.',
      color: '#39366F'
    },
    {
      icon: Mail,
      title: 'Email Confirmation',
      description: 'You\'ll receive an email with enrollment details and preparation instructions.',
      color: '#5B9BD5'
    },
    {
      icon: Calendar,
      title: 'Class Schedule',
      description: 'Get your personalized timetable and lab access schedule.',
      color: '#2a2850'
    },
    {
      icon: MapPin,
      title: 'Location Details',
      description: 'Receive directions and facility information for your first day.',
      color: '#39366F'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Breadcrumb />
      
      {/* Success Section */}
      <section className="pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle size={56} className="text-green-600" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 w-24 h-24 border-4 border-green-200 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Success Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-4">
              Enrollment Submitted Successfully
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Welcome to ERA AXIS!
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your enrollment for <span className="font-semibold text-[#39366F]">{program.name}</span> has been received.
            We're excited to start this innovation journey with you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <button
              onClick={() => navigate('/services/education')}
              className="bg-[#39366F] hover:bg-[#2a2850] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Explore More Programs
              <ChevronRight size={18} />
            </button>
            
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-[#39366F] text-[#39366F] hover:bg-[#39366F] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 inline-flex items-center justify-center gap-2"
            >
              Contact Support
            </button>

            <button
              onClick={() => navigate('/')}
              className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Enrollment Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Enrollment Details Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
                <h2 className="text-xl font-bold text-black mb-6">Enrollment Details</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="pb-4 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Program</p>
                      <p className="text-base text-gray-900 font-medium">
                        {program.name}
                      </p>
                    </div>

                    <div className="pb-4 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Duration</p>
                      <p className="text-sm text-gray-600">
                        {program.duration}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Learning Mode</p>
                      <p className="text-sm text-gray-600">
                        In-Person Classroom
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="pb-4 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Reference Number</p>
                      <p className="text-sm text-gray-500 font-mono">
                        {enrollmentDetails.referenceNumber}
                      </p>
                    </div>

                    <div className="pb-4 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-700 mb-1">Registration Status</p>
                      <p className="text-sm font-medium text-green-600">
                        ✓ Confirmed
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Next Contact</p>
                      <p className="text-sm text-gray-600">
                        Within 48 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Box */}
                <div className="mt-6 p-4 bg-green-50 border border-green-100 rounded-lg">
                  <p className="text-sm text-green-900">
                    <span className="font-semibold">🎉 Congratulations!</span> Your spot in the program is reserved. 
                    We'll contact you soon with the next steps.
                  </p>
                </div>

                {/* Important Note */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <span className="font-semibold">💡 Note:</span> All tools and materials for hands-on activities 
                    will be provided by ERA AXIS at no additional cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Next Steps */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sticky top-6">
                <h2 className="text-xl font-bold text-black mb-6">What Happens Next?</h2>
                
                <div className="space-y-6">
                  {nextSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        {/* Step Number */}
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-[#39366F] text-white flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" 
                                 style={{ backgroundColor: `${step.color}15`, border: `2px solid ${step.color}30` }}>
                              <IconComponent size={20} style={{ color: step.color }} />
                            </div>
                            <div>
                              <h3 className="text-base font-bold text-black mb-1">
                                {step.title}
                              </h3>
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-semibold text-black mb-2">Have Questions?</p>
                    <p className="text-sm text-gray-600 mb-3">
                      Our team is here to help you succeed.
                    </p>
                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full bg-[#39366F] hover:bg-[#2a2850] text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                    >
                      Get Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysicalConfirmationPage;
