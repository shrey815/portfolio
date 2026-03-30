import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projectsList = [
    {
      title: 'Movie Ticket Booking Website',
      description: 'A responsive platform for booking movie tickets online. Allows users to easily browse current movies, select seats, and manage their bookings.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/shrey815/Movie-ticket-website',
      live: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with MERN stack. Features user authentication, product management, and Stripe integration for payments.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/shrey815/mern-ecommerce',
      live: '#'
    },
    {
      title: 'Math Chatbot',
      description: 'An interactive AI chatbot designed to help users solve math problems step by step and explain mathematical concepts clearly.',
      techStack: ['Python', 'Natural Language Processing', 'APIs'],
      github: 'https://github.com/shrey815/Math-bot',
      live: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mr-4">Featured Projects</h2>
          <div className="h-px bg-gray-600 flex-grow max-w-sm"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => window.open(project.github, '_blank')}
              className="bg-gray-900 rounded-xl p-8 border border-gray-700 flex flex-col h-full hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-center mb-6">
                <Folder size={40} className="text-emerald-400 group-hover:text-blue-400 transition-colors" />
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-800">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-sm font-mono text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
