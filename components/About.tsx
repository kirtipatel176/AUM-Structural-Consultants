import React, { useRef } from 'react';
import { Target, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll hooks
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax values
  const yMain = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const ySecondary = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden scroll-mt-28" ref={containerRef}>
      
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <div className="flex items-center space-x-4 mb-6">
                <span className="w-12 h-[2px] bg-aum-orange"></span>
                <span className="text-aum-orange font-bold tracking-[0.2em] uppercase text-sm">Our Story</span>
             </div>

             <h2 className="text-5xl md:text-7xl font-bold font-heading text-aum-black mb-8 leading-[1.05] tracking-tight">
              Structuring the <br/>
              <span className="relative inline-block">
                Imaginable.
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-aum-orange/20 -z-10"
                />
              </span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 font-light leading-relaxed mb-10">
              <p className="mb-4">
                Founded in 2022, <strong className="text-aum-black font-medium">Aum Consultants</strong> emerged from a desire to redefine structural engineering. We engineer the skeleton of modern life with mathematical precision and creative problem-solving.
              </p>
              <p>
                From complex high-rises to sprawling industrial complexes, our approach merges aesthetic vision with unyielding structural integrity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 rounded-xl text-aum-orange">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-aum-black">Vision</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">To be the silent strength behind global skylines, innovating for a sustainable tomorrow.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-50 rounded-xl text-aum-orange">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-aum-black">Mission</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mt-1">Delivering tailored, safe, and efficient engineering solutions with a client-centric focus.</p>
                  </div>
               </div>
            </div>

            <a href="#team" className="group inline-flex items-center text-sm font-bold uppercase tracking-widest text-aum-black hover:text-aum-orange transition-colors">
              Meet The Team 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </a>
          </motion.div>

          {/* RIGHT: Layered Architectural Composition */}
          <div className="relative h-[600px] w-full hidden md:block perspective-1000">
             
             {/* Decorative Background Block */}
             <div className="absolute right-0 top-12 w-3/4 h-[85%] bg-gray-100 rounded-[3rem] -z-10"></div>
             
             {/* Main Large Image */}
             <motion.div 
               style={{ y: yMain, opacity }}
               className="absolute right-8 top-0 w-[70%] h-[80%] rounded-[2.5rem] overflow-hidden shadow-2xl z-10"
             >
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" 
                  alt="Structural Framework" 
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
             </motion.div>

             {/* Secondary Floating Image */}
             <motion.div 
               style={{ y: ySecondary, opacity }}
               className="absolute left-4 bottom-12 w-[55%] h-[55%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 border-[8px] border-white"
             >
                <img 
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" 
                  alt="Detailed Blueprint" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                />
             </motion.div>

             {/* Floating Stats Badge */}
             <motion.div 
               initial={{ scale: 0, rotate: -10 }}
               whileInView={{ scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6, type: "spring" }}
               className="absolute top-[40%] left-[15%] w-24 h-24 bg-aum-black rounded-full flex flex-col items-center justify-center text-white z-30 shadow-xl border-4 border-white/20 backdrop-blur-sm"
             >
               <span className="text-2xl font-bold font-heading">100+</span>
               <span className="text-[8px] uppercase tracking-widest text-aum-orange">Projects</span>
             </motion.div>

             {/* Wireframe Decoration */}
             <div className="absolute bottom-0 right-12 w-32 h-32 border-2 border-aum-orange/20 rounded-full z-0"></div>
          </div>

          {/* Mobile Image Layout (Simple Stack) */}
          <div className="md:hidden relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" 
              alt="Structural Framework" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                 <p className="font-bold text-2xl">Excellence</p>
                 <p className="text-sm opacity-80">Since 2022</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;