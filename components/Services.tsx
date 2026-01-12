import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Ruler, Activity, Factory, FileText, Briefcase, RefreshCw, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = [Ruler, Activity, Factory, FileText, Briefcase, RefreshCw];

// High-quality architectural/engineering images for background context
const serviceImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop", // Comprehensive Design
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop", // Structural Analysis
  "https://images.unsplash.com/photo-1535198030299-478052ebf3a3?q=80&w=2000&auto=format&fit=crop", // Industrial Steel
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop", // BIM/Detailing
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop", // Consultancy
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop"  // Retrofitting
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="relative py-32 bg-[#050505] text-white overflow-hidden transition-colors duration-1000 scroll-mt-28">
      
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='popLayout'>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.25, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
             <img 
               src={serviceImages[activeIndex % serviceImages.length]} 
               alt="Service Background" 
               className="w-full h-full object-cover grayscale"
             />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlays for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]/50 z-10"></div>
      </div>

      <div className="relative z-20 max-w-[94%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-aum-orange"></span>
              <span className="text-aum-orange font-bold tracking-[0.3em] uppercase text-xs">Our Expertise</span>
            </span>
            <h2 className="text-5xl md:text-7xl font-bold font-heading tracking-tighter leading-[1.1]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Excellence.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-md mt-8 md:mt-0 text-lg font-light leading-relaxed text-right md:text-left hidden md:block"
          >
            We combine advanced technology with deep structural knowledge to deliver solutions that stand the test of time.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[index % iconMap.length];
            const isActive = activeIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group relative p-8 md:p-10 rounded-[2rem] border backdrop-blur-md transition-all duration-500 cursor-pointer overflow-hidden ${
                  isActive 
                    ? 'bg-white/10 border-aum-orange/50 shadow-[0_20px_40px_rgba(0,0,0,0.4)]' 
                    : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {/* Active Indicator Glow */}
                {isActive && (
                  <motion.div 
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-gradient-to-br from-aum-orange/10 via-transparent to-transparent pointer-events-none" 
                    transition={{ duration: 0.5 }}
                  />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-10">
                    <div className={`p-4 rounded-2xl transition-all duration-500 ${
                      isActive 
                        ? 'bg-aum-orange text-white shadow-lg shadow-orange-500/20' 
                        : 'bg-white/10 text-gray-400 group-hover:bg-white group-hover:text-black'
                    }`}>
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-bold text-gray-700 font-heading">0{index + 1}</span>
                  </div>

                  <h3 className={`text-2xl font-bold font-heading mb-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light min-h-[40px] group-hover:text-gray-400 transition-colors">
                    {service.description}
                  </p>

                  <div className="mt-auto border-t border-white/10 pt-6">
                    <ul className="space-y-3">
                      {service.points && service.points.slice(0, 2).map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                          <ArrowUpRight className={`w-3 h-3 shrink-0 mt-0.5 transition-colors duration-300 ${isActive ? 'text-aum-orange' : 'text-gray-600 group-hover:text-aum-orange'}`} />
                          <span className="line-clamp-2">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;