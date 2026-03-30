import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          <a href="https://github.com/shrey815" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all hover:-translate-y-1">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shreya-choudhary08/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all hover:-translate-y-1">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contact@example.com" className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-emerald-400 hover:bg-gray-700 transition-all hover:-translate-y-1">
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm text-center">
          &copy; {currentYear} Shreya Choudhary. Built with React, Tailwind CSS & Framer Motion.<br/>
          Designed and developed for web perfection.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
