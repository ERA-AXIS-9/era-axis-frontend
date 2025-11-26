import React from 'react';
import { ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with title and Read More link */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight">About Era Axis</h2>
          <a 
            href="/about" 
            className="hidden sm:inline-flex text-[#39366F] hover:text-[#2a2850] font-semibold items-center gap-1 transition-colors text-base underline hover:no-underline whitespace-nowrap"
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
            
            {/* Mobile Read More Button */}
            <a 
              href="/about" 
              className="sm:hidden mt-4 inline-flex items-center gap-1 text-[#39366F] hover:text-[#2a2850] font-semibold text-base transition-colors"
            >
              Read More
              <ChevronRight size={18} />
            </a>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="/images/Homepage/about.png" 
              alt="ERA AXIS team collaborating in modern workspace" 
              className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
