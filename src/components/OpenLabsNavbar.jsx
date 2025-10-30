import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const OpenLabsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openLabsLinks = [
    { name: 'Home', path: '/services/open-labs' },
    { name: 'Facilities', path: '/services/open-labs/facilities' },
    { name: 'Membership', path: '/services/open-labs/membership' },
    { name: 'Projects', path: '/services/open-labs/projects' },
    { name: 'Book Session', path: '/services/open-labs/book-session' },
    { name: 'Contact', path: '/contact', state: { from: 'open-labs' } }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Brand */}
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-[#39366F] hover:text-[#2a2850] transition-colors">
              ERA AXIS
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {openLabsLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                state={link.state}
                end={link.path === '/services/open-labs'}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-[#39366F] px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap rounded-lg ${
                    isActive ? 'bg-[#39366F]/10 text-[#39366F] font-semibold' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Back to Main Site */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-[#39366F] hover:bg-[#2a2850] text-white px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Main Site
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {openLabsLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                state={link.state}
                end={link.path === '/services/open-labs'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium transition-colors rounded-lg ${
                    isActive
                      ? 'text-[#39366F] bg-purple-50 font-semibold'
                      : 'text-gray-700 hover:text-[#39366F] hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Back to Main Site - Mobile */}
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-base font-medium text-white bg-[#39366F] hover:bg-[#2a2850] rounded-lg transition-colors mt-4"
            >
              Main Site
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default OpenLabsNavbar;
