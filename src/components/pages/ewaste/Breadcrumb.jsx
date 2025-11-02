import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumb = () => {
  return (
    <nav className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link 
            to="/donate" 
            className="text-gray-500 hover:text-[#39366F] transition-colors duration-200"
          >
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link 
            to="/donate" 
            className="text-gray-500 hover:text-[#39366F] transition-colors duration-200"
          >
            Donate
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">E-Waste Donation</span>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
