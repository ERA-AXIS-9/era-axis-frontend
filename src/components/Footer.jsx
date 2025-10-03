import React from 'react';
import { Twitter, Linkedin, Github, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    about: ['Our Story', 'Impact & Vision', 'Team'],
    getInvolved: ['Donate', 'Partner', 'Join Us'],
    resources: ['Blog', 'Gallery', 'FAQ'],
    programs: ['Education', 'Manufacturing', 'Software', 'Open Labs']
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6">
          {/* ERA AXIS Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">EA</span>
              </div>
              <h3 className="text-lg font-bold text-black">ERA AXIS</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Empowering Innovators, Transforming Communities
            </p>
          </div>
          
          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Mission & Vision</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Team</a></li>
            </ul>
          </div>
          
          {/* Get Involved */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Donate</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Partner</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Join Us</a></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Address: ERA AXIS HQ – Essikado, Ghana</p>
              <p className="text-sm text-gray-600">Email: info@eraaxis.com</p>
              <p className="text-sm text-gray-600">Phone: +233 [insert]</p>
              <div className="flex items-center space-x-3 mt-3">
                <a href="#" className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <Twitter size={14} />
                </a>
                <a href="#" className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <Instagram size={14} />
                </a>
                <a href="#" className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                  <Linkedin size={14} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Gallery</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Programs */}
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Education</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Software</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-black transition-colors">Open Labs</a></li>
            </ul>
          </div>
          
          {/* Newsletter Signup - As 7th Column */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-sm font-semibold text-black mb-4">Newsletter Signup</h4>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="w-full bg-black hover:bg-gray-800 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 ERA AXIS. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
