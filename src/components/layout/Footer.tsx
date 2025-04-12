
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">CareerGuide</h3>
            <p className="text-blue-100">
              Empowering career decisions with AI-driven guidance, personalized resume building, 
              and global job market insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Career Assistant', 'Resume Builder', 'Job Statistics'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['Blog', 'Job Market', 'Interview Tips', 'Career Development', 'Professional Network'].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, GithubIcon].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-blue-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-r-md transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300">© {new Date().getFullYear()} CareerGuide. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-blue-300 hover:text-white transition-colors text-sm">Terms</Link>
            <Link to="/privacy" className="text-blue-300 hover:text-white transition-colors text-sm">Privacy</Link>
            <Link to="/cookies" className="text-blue-300 hover:text-white transition-colors text-sm">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
