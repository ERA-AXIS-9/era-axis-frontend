import React from 'react';
import { FlaskConical } from 'lucide-react';

const OpenLabsHero = () => {
  return (
    <section className="relative w-full py-5 bg-transparent">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="relative bg-[#f4f8fb] border border-gray-200 rounded-2xl shadow-lg flex flex-col md:flex-row items-stretch overflow-hidden min-h-[170px]">
          {/* Left: Text/Badge */}
          <div className="flex-1 flex flex-col justify-center p-6 sm:p-9 md:p-11 lg:p-14 z-10">
            {/* Badge */}
            <div className="flex items-center mb-2 opacity-0 translate-y-4 animate-hero-fadein [animation-delay:0.2s]">
              <span className="inline-flex items-center px-3 py-1 text-xs bg-emerald-50 text-emerald-800 rounded-full font-medium mr-1 shadow-sm">
                <FlaskConical size={16} className="mr-1 -ml-1" /> Open Labs
              </span>
            </div>
            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#191d24] mb-1 tracking-tight opacity-0 translate-y-4 animate-hero-fadein [animation-delay:0.3s]">
              Shared Innovation Spaces for All
            </h1>
            {/* Subline/subtext */}
            <div className="text-gray-500 text-base mb-5 opacity-0 translate-y-4 animate-hero-fadein [animation-delay:0.45s]">
              Prototype, test, and build real solutions in our community-driven labs.
            </div>
            {/* Buttons Row */}
            <div className="flex flex-row gap-3 opacity-0 translate-y-4 animate-hero-fadein [animation-delay:0.6s]">
              <a
                href="#join-labs"
                className="bg-[#002D25] text-white font-semibold px-5 py-2 rounded-lg shadow-sm hover:bg-[#032c28] text-sm transition"
              >
                Join the Labs
              </a>
              <a
                href="#book-session"
                className="bg-white border border-gray-300 text-black font-semibold px-5 py-2 rounded-lg shadow-sm hover:bg-gray-100 text-sm transition"
              >
                Book a Session
              </a>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center bg-transparent p-4 md:p-0">
            <img
              src="/images/Homepage/about eraaxis.jpg"
              alt="Open Labs workspace preview"
              className="w-full h-48 md:h-72 object-cover rounded-2xl md:rounded-l-none md:rounded-r-2xl shadow-md border border-gray-200"
              style={{ maxWidth: '330px' }}
            />
          </div>
        </div>
      </div>
      <style>{`
        @keyframes hero-fadein {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-fadein {
          animation: hero-fadein 0.7s cubic-bezier(.67,.01,.16,.99) forwards;
        }
        .animate-hero-fadein[style*="[animation-delay:0.2s]"] { animation-delay: 0.2s; }
        .animate-hero-fadein[style*="[animation-delay:0.3s]"] { animation-delay: 0.3s; }
        .animate-hero-fadein[style*="[animation-delay:0.45s]"] { animation-delay: 0.45s; }
        .animate-hero-fadein[style*="[animation-delay:0.6s]"] { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default OpenLabsHero;


