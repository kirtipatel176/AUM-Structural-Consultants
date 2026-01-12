import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { X, MapPin, Layers, User, Maximize2, AlertTriangle, CheckCircle2, Box, MousePointer2 } from 'lucide-react';
import { Project } from '../types';

// Define ModelViewer as a customized component to bypass JSX.IntrinsicElements type check
const ModelViewer = 'model-viewer' as any;

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const card3D: Variants = {
    hidden: { opacity: 0, rotateX: 30, y: 50 },
    visible: { 
      opacity: 1, 
      rotateX: 0, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 20 } 
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6"
      >
        {/* Strong Blur Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-all"
          onClick={onClose}
        ></div>

        {/* Modal Window */}
        <motion.div
          layoutId={`project-${project.id}`}
          className="relative w-full max-w-[1400px] h-full md:h-[90vh] bg-white md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-3 bg-white/80 hover:bg-black text-black hover:text-white rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm"
          >
            <X size={20} />
          </motion.button>

          {/* Scrollable Container */}
          <div ref={containerRef} className="overflow-y-auto flex-grow custom-scrollbar bg-white">
            
            {/* 1. HERO SECTION */}
            <div className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden group">
              <motion.img
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3, duration: 0.8 }}
                 >
                   <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
                     {project.category}
                   </span>
                   <h1 className="text-4xl md:text-7xl font-bold font-heading text-white leading-tight tracking-tight">
                     {project.name}
                   </h1>
                 </motion.div>
              </div>
            </div>

            <div className="px-6 py-12 md:px-16 md:py-16 space-y-24">
              
              {/* 2. PROJECT INFO GRID */}
              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-gray-100"
              >
                {[
                  { icon: MapPin, label: "Location", value: project.location },
                  { icon: Maximize2, label: "Area", value: project.area },
                  { icon: Layers, label: "Structure", value: project.structure },
                  { icon: User, label: "Architect", value: project.architect || "N/A" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col space-y-3 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center text-gray-400 mb-1">
                      <item.icon size={16} />
                      <span className="text-[10px] uppercase tracking-widest font-bold ml-2">{item.label}</span>
                    </div>
                    <p className="text-aum-black font-semibold font-heading text-sm md:text-lg leading-snug">
                      {item.value}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* 3. NARRATIVE SECTION */}
              {project.description && (
                <motion.div 
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="max-w-4xl"
                >
                  <h3 className="text-2xl font-bold font-heading text-aum-black mb-6 flex items-center">
                    Project Overview
                  </h3>
                  <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              )}

              {/* 4. 3D MODEL VIEWER SECTION */}
              {project.modelUrl && (
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-aum-orange/10 rounded-2xl">
                      <Box className="w-8 h-8 text-aum-orange" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold font-heading text-aum-black">Interactive 3D Structure</h3>
                        <p className="text-sm text-gray-500 mt-1">Rotate, zoom, and explore the engineering details.</p>
                    </div>
                  </div>
                  
                  <div className="relative w-full h-[600px] bg-gray-100 rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-inner group">
                    <ModelViewer
                      src={project.modelUrl}
                      camera-controls
                      auto-rotate
                      shadow-intensity="1"
                      camera-orbit="45deg 55deg 2.5m"
                      alt={`3D model of ${project.name}`}
                      poster={project.imageUrl}
                      style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f7' }}
                    >
                      <div slot="progress-bar"></div>
                      <div slot="poster" className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${project.imageUrl})`}}></div>
                    </ModelViewer>
                    
                    {/* Interaction Hint */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-xs font-bold text-aum-black shadow-xl border border-white/50 flex items-center gap-3 pointer-events-none z-10">
                      <MousePointer2 size={16} className="text-aum-orange animate-bounce" />
                      <span className="tracking-wide">Click & Drag to Rotate • Scroll to Zoom</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* 5. CHALLENGES & SOLUTIONS */}
              {(project.challenges || project.solutions) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {project.challenges && (
                    <motion.div 
                      variants={card3D}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="p-10 rounded-[2rem] bg-red-50 border border-red-100/50"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-red-500 shadow-sm">
                        <AlertTriangle size={24} />
                      </div>
                      <h4 className="text-xl font-bold font-heading text-aum-black mb-4">The Challenge</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {project.challenges}
                      </p>
                    </motion.div>
                  )}

                  {project.solutions && (
                    <motion.div 
                      variants={card3D}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="p-10 rounded-[2rem] bg-green-50 border border-green-100/50"
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-green-600 shadow-sm">
                        <CheckCircle2 size={24} />
                      </div>
                      <h4 className="text-xl font-bold font-heading text-aum-black mb-4">The Solution</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {project.solutions}
                      </p>
                    </motion.div>
                  )}
                </div>
              )}

              {/* 6. GALLERY */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-10">
                  <motion.div 
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <h3 className="text-2xl font-bold font-heading text-aum-black">Visual Gallery</h3>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.gallery.map((img, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden shadow-md h-64 md:h-80 group cursor-zoom-in"
                      >
                        <img 
                          src={img} 
                          alt={`${project.name} view ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

            </div>
            
            <div className="py-12 flex items-center justify-center text-gray-300">
               <div className="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
               <div className="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
               <div className="w-2 h-2 rounded-full bg-gray-300 mx-1"></div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;