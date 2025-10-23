import React from 'react';

const OurProcess = () => {
  const steps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We listen, understand your needs, and define project goals.'
    },
    {
      number: '2',
      title: 'Design',
      description: 'Create wireframes, mockups, and user flows tailored to you.'
    },
    {
      number: '3',
      title: 'Development',
      description: 'Build with agile sprints, keeping you updated every step.'
    },
    {
      number: '4',
      title: 'Deployment',
      description: 'Launch, test, and provide training and ongoing support.'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Our Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index}>
              {/* Step Number */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#39366F] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-black">
                  {step.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed pl-11">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
