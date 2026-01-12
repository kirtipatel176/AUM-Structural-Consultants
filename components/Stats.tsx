import React from 'react';
import { motion } from 'framer-motion';

const Stats: React.FC = () => {
  return (
    <div className="py-20 relative">
      <div className="max-w-[94%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-16 rounded-[3rem] shadow-xl border border-white/60"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-200/50">
            
            <div className="md:pr-12">
              <h3 className="text-6xl md:text-7xl font-bold font-heading text-aum-black mb-2 tracking-tighter">
                7.5M<span className="text-aum-orange text-4xl align-top">+</span>
              </h3>
              <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">Sq. Ft. Built-Up Area</p>
            </div>

            <div className="py-12 md:py-0 md:px-12">
              <h3 className="text-6xl md:text-7xl font-bold font-heading text-aum-black mb-2 tracking-tighter">
                100<span className="text-aum-orange text-4xl align-top">+</span>
              </h3>
              <p className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">Structures Designed</p>
            </div>

            <div className="pt-12 md:pt-0 md:pl-12 flex items-center">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700">
                <span className="text-aum-orange text-4xl font-serif mr-2 opacity-50">"</span>
                Building success through consistent engineering excellence since 2022.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Stats;