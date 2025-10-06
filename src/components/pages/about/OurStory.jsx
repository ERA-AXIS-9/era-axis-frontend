import React from 'react';
import { Lightbulb, Building2, ArrowRight } from 'lucide-react';

const OurStory = () => {
  return (
    <section id="story" className="pt-4 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Content */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">Our Story</h2>
            
            {/* Brief Intro */}
            <p className="text-xl text-[#39366F] font-medium mb-8 leading-relaxed">
              From vision to reality - how ERA AXIS became West Africa's leading innovation ecosystem.
            </p>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-black">Founded in 2020</span> and incorporated in 2024, ERA AXIS was created to respond to what innovation means in our context. We are more than a training program - we are a 
                <span className="font-semibold text-[#39366F]"> complete ecosystem</span> combining education, manufacturing, software development, and open labs into one unified platform.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We partner with <span className="font-semibold text-black">schools, community groups, and industry</span> to create solutions that are inclusive, affordable, and sustainable. By developing unique and 
                transformative open-source tools, we <span className="font-semibold text-[#39366F]">minimize costs while maximizing impact</span> across communities.
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <a 
                href="/impact" 
                className="inline-flex items-center gap-2 text-lg text-[#39366F] hover:text-[#2a2850] font-semibold transition-colors group"
              >
                See our impact in action
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Sidebar - Timeline & Stats */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <h3 className="font-bold text-black mb-6">Our Journey</h3>
              
              {/* Timeline */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#39366F]/5 transition-all duration-200 cursor-pointer">
                  <div className="w-3 h-3 bg-[#39366F] rounded-full shadow-sm"></div>
                  <div>
                    <div className="font-semibold text-black">2020</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#5B9BD5]/5 transition-all duration-200 cursor-pointer">
                  <div className="w-3 h-3 bg-[#5B9BD5] rounded-full shadow-sm"></div>
                  <div>
                    <div className="font-semibold text-black">2024</div>
                    <div className="text-sm text-gray-600">Incorporated</div>
                  </div>
                </div>
              </div>

              {/* Key Stats */}
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold text-black mb-3 group-hover:text-[#39366F] transition-colors">Key Focus Areas</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#39366F]/5 transition-all duration-200 cursor-pointer">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#39366F] to-[#2a2850] rounded-full shadow-sm"></div>
                    <span className="text-sm text-gray-700 hover:text-[#39366F] transition-colors">Education & Training</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#5B9BD5]/5 transition-all duration-200 cursor-pointer">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#5B9BD5] to-[#4a8bc2] rounded-full shadow-sm"></div>
                    <span className="text-sm text-gray-700 hover:text-[#5B9BD5] transition-colors">Manufacturing</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2a2850]/5 transition-all duration-200 cursor-pointer">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#2a2850] to-[#1a1a3a] rounded-full shadow-sm"></div>
                    <span className="text-sm text-gray-700 hover:text-[#2a2850] transition-colors">Software Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-md hover:bg-[#4a8bc2]/5 transition-all duration-200 cursor-pointer">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#4a8bc2] to-[#5B9BD5] rounded-full shadow-sm"></div>
                    <span className="text-sm text-gray-700 hover:text-[#4a8bc2] transition-colors">Open Labs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
