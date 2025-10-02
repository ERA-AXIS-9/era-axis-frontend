import React from 'react';

const Footer = () => {
  const links = {
    about: ['Our Story', 'Team', 'Careers', 'Press'],
    programs: ['Education', 'Manufacturing', 'Software', 'Open Labs'],
    resources: ['Blog', 'Documentation', 'Guides', 'FAQ'],
    contact: ['hello@eraaxis.org', '+1 (555) 123-4567', 'Contact Form']
  };

  const socialLinks = [
    { name: 'Twitter', icon: '🐦' },
    { name: 'LinkedIn', icon: '🔗' },
    { name: 'GitHub', icon: '💻' },
    { name: 'Instagram', icon: '📷' },
    { name: 'YouTube', icon: '▶️' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">ERA AXIS</h3>
            <p className="text-sm mb-6">
              Empowering communities through technology education, sustainable manufacturing, and open innovation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">About</h4>
            <ul className="space-y-2">
              {links.about.map((item, index) => (
                <li key={index}><a href="#" className="text-sm hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Programs</h4>
            <ul className="space-y-2">
              {links.programs.map((item, index) => (
                <li key={index}><a href="#" className="text-sm hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((item, index) => (
                <li key={index}><a href="#" className="text-sm hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-center text-gray-400">
            © 2025 ERA AXIS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
