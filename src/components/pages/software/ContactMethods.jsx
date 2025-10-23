import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactMethods = () => {
  const methods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'hello@eraaxis.org',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+250 788 123 456',
      subtext: 'Mon-Fri, 9am-5pm EAT'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      description: 'Kigali, Rwanda',
      subtext: 'Visit us - Schedule ahead'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Prefer another way?
          </h2>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#39366F]/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-[#39366F]" />
                </div>
                
                <h3 className="text-lg font-semibold text-black mb-2">
                  {method.title}
                </h3>
                
                <p className="text-base text-gray-700 mb-1">
                  {method.description}
                </p>
                
                <p className="text-sm text-gray-500">
                  {method.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
