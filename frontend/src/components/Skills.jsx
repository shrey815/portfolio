import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Vite"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "MongoDB"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C++", "C", "JavaScript"]
    },
    {
      title: "Tools & Others",
      icon: <Wrench size={48} className="mx-auto text-blue-500 mb-6" />,
      skills: ["Git", "GitHub", "Postman", "VS Code"]
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
    <section id="skills" className="py-20 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Technical Arsenal</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies I've worked with throughout my academic and personal projects.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-xl flex flex-col items-center hover:border-emerald-500/50 transition-colors"
            >
              {category.icon && category.icon}
              <h3 className="text-2xl font-bold text-gray-100 mb-8">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-5 py-2.5 bg-[#6b58be] hover:bg-[#5b4a9e] text-white rounded-full text-sm font-semibold shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    {skill}
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

export default Skills;
