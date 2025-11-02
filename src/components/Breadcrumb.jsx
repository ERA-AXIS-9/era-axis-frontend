import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items, homePath = "/" }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <Link 
        to={homePath} 
        className="flex items-center gap-1 hover:text-[#39366F] transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.link ? (
            <Link 
              to={item.link}
              className="hover:text-[#39366F] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
