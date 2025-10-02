import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-black">ERA AXIS</div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-sm">
          <NavLink to="/" className="text-black hover:text-blue-600">Home</NavLink>
          <NavLink to="/about" className="text-black hover:text-blue-600">About Us</NavLink>
          <span className="text-black hover:text-blue-600 cursor-pointer">Services ▼</span>
          <span className="text-black hover:text-blue-600 cursor-pointer">Projects & Impact ▼</span>
          <span className="text-black hover:text-blue-600 cursor-pointer">Get Involved ▼</span>
          <span className="text-black hover:text-blue-600 cursor-pointer">Blog & Media ▼</span>
          <NavLink to="/faq" className="text-black hover:text-blue-600">FAQ</NavLink>
          <NavLink to="/contact" className="text-black hover:text-blue-600">Contact</NavLink>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 border border-gray-400 rounded text-sm">
            Enroll
          </button>
          <button className="px-4 py-2 bg-black text-white rounded text-sm">
            Donate
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
