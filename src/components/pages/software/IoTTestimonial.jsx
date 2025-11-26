import React from 'react';

const IoTTestimonial = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Testimonial
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg flex-shrink-0">
              <img 
                src="/images/workingspace.png"
                alt="Client"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <blockquote className="text-base text-gray-800 leading-relaxed mb-4 italic">
                "Our IoT dashboard helped us track community energy use in real time—it's been a game changer for our sustainability efforts."
              </blockquote>
              
              <div>
                <div className="text-base font-bold text-black">
                  Sarah Johnson
                </div>
                <div className="text-sm text-gray-600">
                  Director, Green Energy Initiative
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoTTestimonial;
