import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const dropdownMenus = {
    services: [
      { name: 'Education', path: '/services/education' },
      { name: 'Manufacturing', path: '/services/manufacturing' },
      { name: 'Software', path: '/services/software' },
      { name: 'Open Labs', path: '/services/open-labs' }
    ],
    projects: [
      { name: 'Projects', path: '/projects' },
      { name: 'Impact & Stories', path: '/impact' }
    ],
    getInvolved: [
      { name: 'Donations', path: '/donate' },
      { name: 'E-Waste', path: '/donate/ewaste' },
      { name: 'Partnerships', path: '/partner' }
    ],
    blogMedia: [
      { name: 'Blog', path: '/blog' },
      { name: 'Media Gallery', path: '/gallery' },
      { name: 'Newsletter', path: '/newsletter' }
    ]
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', dropdown: 'services' },
    { name: 'Projects & Impact', dropdown: 'projects' },
    { name: 'Get Involved', dropdown: 'getInvolved' },
    { name: 'Blog & Media', dropdown: 'blogMedia' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-[#39366F] hover:text-[#2a2850] transition-colors">
              ERA AXIS
            </NavLink>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.dropdown ? (
                <div 
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.dropdown)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="text-gray-700 hover:text-[#39366F] px-3 py-2 text-base font-medium transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </button>
                  {openDropdown === item.dropdown && (
                    <div className="absolute left-0 mt-0 pt-2 w-56 z-50">
                      <div className="bg-white shadow-lg rounded-lg border border-gray-100 py-2">
                        {dropdownMenus[item.dropdown].map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            target={subItem.name === 'Software' ? '_blank' : undefined}
                            rel={subItem.name === 'Software' ? 'noopener noreferrer' : undefined}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-base text-gray-700 hover:bg-purple-50 hover:text-[#39366F] transition-colors"
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-gray-700 hover:text-[#39366F] px-3 py-2 text-base font-medium transition-colors whitespace-nowrap ${
                      isActive ? 'text-[#39366F] font-semibold' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
            <a 
              href="/services/education"
              className="border-2 border-[#39366F] text-[#39366F] px-5 py-2 rounded-lg text-base font-medium hover:bg-[#39366F] hover:text-white transition-all ml-4"
            >
              Enroll
            </a>
            <a 
              href="/donate"
              className="bg-[#39366F] border-2 border-[#39366F] text-white px-5 py-2 rounded-lg text-base font-medium hover:bg-[#2a2850] hover:border-[#2a2850] transition-all ml-3"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === item.dropdown ? null : item.dropdown)}
                    className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-[#39366F] hover:bg-gray-50 transition-colors"
                  >
                    <span>{item.name}</span>
                    <svg 
                      className={`w-4 h-4 transition-transform ${mobileDropdown === item.dropdown ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdown === item.dropdown && (
                    <div className="pl-6 space-y-1">
                      {dropdownMenus[item.dropdown].map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          target={subItem.name === 'Software' ? '_blank' : undefined}
                          rel={subItem.name === 'Software' ? 'noopener noreferrer' : undefined}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileDropdown(null);
                          }}
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium transition-colors ${
                              isActive
                                ? 'text-[#39366F] bg-purple-50 font-semibold'
                                : 'text-gray-600 hover:text-[#39366F] hover:bg-gray-50'
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'text-[#39366F] bg-purple-50 font-semibold'
                        : 'text-gray-700 hover:text-[#39366F] hover:bg-gray-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-3 px-3">
                <a 
                  href="/services/education"
                  className="text-center border-2 border-[#39366F] text-[#39366F] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#39366F] hover:text-white transition-all"
                >
                  Enroll
                </a>
                <a 
                  href="/donate"
                  className="text-center bg-[#39366F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#2a2850] transition-all"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
