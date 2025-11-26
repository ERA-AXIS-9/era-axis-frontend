import React, { useState } from 'react';
import { X, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 mb-6">
          {/* ERA AXIS Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img 
                src="/ERA AXIS LOGO.png" 
                alt="ERA AXIS Logo" 
                className="h-32 w-auto object-contain filter brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering Innovators, Transforming Communities.
            </p>
          </div>
          
          {/* About & Programs */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">About</h4>
            <ul className="space-y-1.5 mb-4">
              <li><a href="/about" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Our Story</a></li>
              <li><a href="/impact" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Mission & Vision</a></li>
              <li><a href="/about#team" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Team</a></li>
            </ul>
            
            <h4 className="text-sm font-semibold text-white mb-3">Programs</h4>
            <ul className="space-y-1.5">
              <li><a href="/services/education" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Education</a></li>
              <li><a href="/services/manufacturing" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Manufacturing</a></li>
              <li><a href="/services/software" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Software</a></li>
              <li><a href="/services/open-labs" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Open Labs</a></li>
            </ul>
          </div>
          
          {/* Get Involved & Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Get Involved</h4>
            <ul className="space-y-1.5 mb-4">
              <li><a href="/donate" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Donate</a></li>
              <li><a href="/partner" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Partner</a></li>
              <li><a href="/contact" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Join Us</a></li>
            </ul>
            
            <h4 className="text-sm font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-1.5">
              <li><a href="/blog" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Blog</a></li>
              <li><a href="/gallery" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">Gallery</a></li>
              <li><a href="/faq" className="text-sm text-gray-300 hover:text-[#39366F] transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact Us & Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold text-white mb-3">Contact Us</h4>
            <div className="space-y-1.5 mb-3">
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">Address:</span> ERA AXIS HQ – Essikado, Ghana
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">Email:</span> <a href="mailto:info@eraaxis.com" className="hover:text-[#39366F] transition-colors">info@eraaxis.com</a>
              </p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">Phone:</span> +233 [insert]
              </p>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center space-x-3 mb-4">
              <a href="https://x.com/eraaxis" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#39366F] rounded flex items-center justify-center hover:bg-white hover:text-[#39366F] transition-colors" aria-label="X (formerly Twitter)">
                <X size={16} />
              </a>
              <a href="https://instagram.com/eraaxis" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#39366F] rounded flex items-center justify-center hover:bg-white hover:text-[#39366F] transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com/company/eraaxis" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-[#39366F] rounded flex items-center justify-center hover:bg-white hover:text-[#39366F] transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
            
            {/* Newsletter Signup */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Newsletter Signup</h4>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-col lg:flex-row items-stretch lg:items-center gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-3 py-2 bg-white border border-gray-600 rounded text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#39366F] focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="bg-[#39366F] hover:bg-white hover:text-[#39366F] text-white px-4 py-2 rounded text-sm font-medium transition-colors w-full lg:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-6 border-t border-gray-800">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2025 ERA AXIS. All rights reserved. | <a href="/privacy" className="hover:text-[#39366F] transition-colors">Privacy Policy</a> | <a href="/terms" className="hover:text-[#39366F] transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
