import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Box } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = Object.values(ProjectCategory);

  const filteredProjects = activeCategory === ProjectCategory.ALL
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="py-24 relative scroll-mt-28">
        <div className="max-w-[94%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-aum-orange font-bold tracking-[0.2em] uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-aum-black mt-4">
              Featured Projects
            </h2>
          </motion.div>

          {/* Filter Buttons - Glass Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-aum-black text-white border-aum-black shadow-lg scale-105'
                    : 'bg-white/40 backdrop-blur-md border-white/50 text-gray-500 hover:bg-white hover:text-aum-black hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div 
                  layout
                  layoutId={`project-${project.id}`}
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] shadow-lg border border-white/50 bg-gray-100">
                    <img 
                      src={project.imageUrl} 
                      alt={project.name} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* 3D Model Indicator */}
                    {project.modelUrl && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full text-aum-orange shadow-lg z-20">
                        <Box size={20} />
                      </div>
                    )}
                    
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center border-t border-b border-white/30">
                       <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 min-w-[200px]">
                         <p className="text-aum-orange text-[10px] font-bold tracking-widest uppercase mb-2">{project.category}</p>
                         <h3 className="text-aum-black text-lg font-bold font-heading uppercase mb-0 leading-tight">{project.name}</h3>
                         {project.modelUrl && (
                           <div className="mt-3 flex items-center justify-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                             <Box size={12} /> View 3D Model
                           </div>
                         )}
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </>
  );
};

export default Portfolio;