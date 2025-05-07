import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Yagel Maimon</h2>
            <p className="text-gray-400 mt-1">Software Engineer</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Navigate
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-gray-300 hover:text-white transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:maimonyagel@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left text-gray-400 text-sm">
          <p>© {currentYear} Yagel Maimon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;