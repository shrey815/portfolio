import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certificates = () => {
  const certificatesList = [
    {
      title: 'C Programming Bootcamp',
      issuer: 'Udemy',
      date: 'Feb 2024',
      description: 'Completed 44 total hours of comprehensive C programming instruction covering memory management, pointers, and data structures.',
      image: '/cert-c.jpg'
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google (Coursera)',
      date: 'Sep 2024',
      description: 'Learned fundamental networking protocols, IP addressing, routing, and network troubleshooting from Google networking experts.',
      image: '/cert-networking.jpg'
    },
    {
      title: 'Alpha (DSA with Java)',
      issuer: 'Apna College',
      date: '2024',
      description: 'Mastered Data Structures and Algorithms using Java, focusing on optimization, competitive programming, and problem-solving techniques.',
      image: '/cert-dsa.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="certificates" className="py-20 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mr-4">Certifications</h2>
          <div className="h-px bg-gray-600 flex-grow max-w-sm"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificatesList.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 flex flex-col h-full hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group overflow-hidden"
            >
              <div className="w-full h-48 mb-6 overflow-hidden rounded-lg bg-gray-900 border border-gray-700 flex-shrink-0">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain bg-gray-100 p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-start gap-3 mb-3">
                <Award size={24} className="text-emerald-400 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-100 leading-tight">{cert.title}</h3>
              </div>
              
              <div className="flex justify-between items-center text-sm font-mono text-blue-400 mb-4">
                <span>{cert.issuer}</span>
                <span>{cert.date}</span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
