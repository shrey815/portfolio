import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mr-4">About Me</h2>
            <div className="h-px bg-gray-600 flex-grow max-w-sm"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-400 space-y-8 text-base">
              <p className="text-lg text-gray-300 border-l-4 border-emerald-400 pl-4 py-1">
                I am Shreya Choudhary, a BTech CSE student passionate about transforming complex problems into elegant, scalable web applications.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-900 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
                  <div className="p-3 bg-emerald-400/10 rounded-lg text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-gray-100 mb-1">Education</h3>
                    <p className="text-sm"><strong>B.Tech CSE</strong> @ Lovely Professional University (CGPA: 7.2)</p>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Previous: Shanti Mission Academy (71.2%) & Carmel School (74.8%)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-900 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                  <div className="p-3 bg-blue-400/10 rounded-lg text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h3 className="text-md font-bold text-gray-100 mb-1">Achievements</h3>
                    <p className="text-sm">Built & deployed 5+ scalable apps and solved 100+ DSA algorithmic challenges.</p>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">Shortlisted for Hack Chrono (Technicia'25) at Chandigarh University.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mx-auto flex justify-center mt-8 md:mt-0 relative group">
              {/* Floating stars that appear on hover */}
              <div className="absolute -top-6 -right-6 text-yellow-300 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700 delay-100 z-20">✨</div>
              <div className="absolute top-1/2 -left-8 text-blue-300 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700 delay-300 z-20">⭐</div>
              <div className="absolute -bottom-8 right-10 text-emerald-300 opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-700 delay-200 z-20">🌟</div>
              
              {/* Lamp light cone effect on hover */}
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[100px] border-r-[100px] border-b-[350px] border-l-transparent border-r-transparent border-b-yellow-400/0 group-hover:border-b-yellow-400/20 transition-all duration-1000 z-0 pointer-events-none rounded-t-full blur-xl"></div>

              <div className="w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden shadow-none group-hover:shadow-[0_0_60px_-15px_rgba(253,224,71,0.5)] border-2 border-gray-700 group-hover:border-yellow-400/50 bg-gray-900 transition-all duration-700 relative z-10">
                {/* Dark overlay that disappears to simulate turning on the light */}
                <div className="absolute inset-0 bg-gray-900/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                <img 
                  src="/image.jpg" 
                  alt="Shreya Choudhary" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-800 to-gray-700 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 blur-3xl -z-10 rounded-[2rem] scale-110 transition-colors duration-700"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
