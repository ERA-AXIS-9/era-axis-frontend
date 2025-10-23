import React from 'react';

const HouseholdSuccessStory = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Success Story
          </h2>
        </div>

        {/* Story Card */}
        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-start gap-6">
            {/* Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg flex-shrink-0">
              <img 
                src="/images/workingspace.png"
                alt="User"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <blockquote className="text-base text-gray-800 leading-relaxed mb-4 italic">
                "I've been using the budget tracker ERA AXIS built, and it's helped me save 30% more each month!"
              </blockquote>
              
              <div>
                <div className="text-base font-bold text-black">
                  Amina K.
                </div>
                <div className="text-sm text-gray-600">
                  Small Business Owner
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HouseholdSuccessStory;
