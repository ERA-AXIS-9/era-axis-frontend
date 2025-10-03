import React from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with title and Read More link */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-4xl font-bold text-black tracking-tight">About Era Axis</h2>
          <a 
            href="/about" 
            className="text-[#39366F] hover:text-[#2a2850] font-semibold inline-flex items-center gap-1 transition-colors text-base underline hover:no-underline whitespace-nowrap"
          >
            Read More
            <ChevronRight size={18} />
          </a>
        </div>
        
        {/* Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <p className="text-xl text-gray-800 leading-relaxed font-medium">
              We build pathways for learners and communities to co-create solutions through education, 
              ethical manufacturing, open-source software, and shared lab spaces.
            </p>
          </div>
          
          {/* Image */}
          <div className="relative flex justify-center">
            <img 
              src="/images/manufacturing.png" 
              alt="ERA AXIS manufacturing and circular fabrication" 
              className="w-4/5 h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
