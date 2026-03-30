import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-mono tracking-[0.2em] mb-4 text-sm font-bold shadow-sm"
        >
          &quot;Learning, Building, and Loving the Process.&quot;
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-gray-100 mb-6 tracking-tight"
        >
          Shreya Choudhary.
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-gray-400 mb-8"
        >
          I build scalable digital experiences.
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I'm a 3rd year BTech CSE student specializing in full-stack development. 
          Currently focused on building accessible, human-centered products using React and Node.js.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex justify-center gap-6 mb-10"
        >
          <a href="https://github.com/shrey815" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/shreya-choudhary08/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-200">
            <Linkedin size={28} />
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/resume.pdf"
            download="Shreya_Choudhary_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border border-emerald-400 text-emerald-400 font-medium rounded-lg hover:bg-emerald-400/10 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
          
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            View Projects
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-white cursor-pointer">
          <ChevronDown size={32} />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
