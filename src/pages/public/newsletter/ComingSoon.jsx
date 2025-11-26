import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Clock, ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-[#39366F]/10 flex items-center justify-center mb-6">
          <Wrench className="text-[#39366F]" size={28} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Article Layout Update In Progress</h1>
        <p className="text-gray-600 mb-8">
          We're updating our article experience. Please check back soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/newsletter" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
            <ArrowLeft size={16} />
            Back to Newsletter
          </Link>
          <Link to="/news" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#39366F] text-white hover:bg-[#2a2850]">
            Back to News & Insights
          </Link>
        </div>
        <div className="mt-8 inline-flex items-center gap-2 text-sm text-gray-500">
          <Clock size={14} />
          <span>Thanks for your patience</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
