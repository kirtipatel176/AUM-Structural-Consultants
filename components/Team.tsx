import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 relative scroll-mt-28">
      <div className="max-w-[94%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center md:text-left">
           <span className="text-aum-orange font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Leadership</span>
          <h2 className="text-5xl md:text-6xl font-bold font-heading text-aum-black tracking-tight">
            The Team
          </h2>
        </div>

        <div className="space-y-24">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}>
              
              {/* Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-5/12 aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl"
              >
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-7/12"
              >
                <div className="glass-card p-10 md:p-14 rounded-[3rem]">
                  <h3 className="text-3xl md:text-5xl font-bold font-heading text-aum-black mb-2">{member.name}</h3>
                  <p className="text-aum-orange font-bold tracking-widest uppercase text-xs mb-8">{member.role}</p>
                  
                  <div className="space-y-6">
                    <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase tracking-widest">
                      {member.education}
                    </div>
                    <p className="text-gray-600 text-lg font-light leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;