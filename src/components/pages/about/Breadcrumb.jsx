import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link 
            to="/about" 
            className="text-gray-600 hover:text-[#39366F] transition-colors"
          >
            Home
          </Link>
          
          <ChevronRight size={16} className="text-gray-400" />
          
          <span className="text-black font-medium">
            About
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
