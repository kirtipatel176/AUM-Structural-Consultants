import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown } from 'lucide-react';

const HERO_SLIDES = [
  {
    id: 1,
    type: 'image',
    mediaUrl: 'assets/hero-1.avif',
    title: 'AUM CONSULTANTS',
    subtitle: 'Precision engineering for the world of tomorrow. We build the backbone of modern infrastructure.',
    category: 'Est. 2022',
    location: 'Gota, Ahmedabad'
  },
  {
    id: 2,
    type: 'image',
    mediaUrl: 'assets/hero-2.avif',
    title: 'THE OAK RESIDENCY',
    subtitle: 'Sustainable Luxury Living. Engineered for resilience and aesthetic harmony.',
    category: 'Residential',
    location: 'Gandhinagar'
  },
  {
    id: 3,
    type: 'image',
    mediaUrl: 'assets/hero-3.avif',
    title: 'SKYLINE TOWER',
    subtitle: 'Next-Gen Commercial Hub. Defying gravity with advanced structural steel design.',
    category: 'Commercial',
    location: 'Gift City'
  },
  {
    id: 4,
    type: 'image',
    mediaUrl: 'assets/hero-4.avif',
    title: 'FUTURE TECH PARK',
    subtitle: 'Industrial Innovation Center. Large-span structures optimized for manufacturing.',
    category: 'Industrial',
    location: 'Sanand'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Preload ALL images on mount
  useEffect(() => {
    HERO_SLIDES.forEach((slide) => {
      if (slide.type === 'image') {
        const img = new Image();
        img.src = slide.mediaUrl;
      }
    });
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <div id="home" className="relative h-[100dvh] w-full overflow-hidden bg-[#0a0a0a]">

      {/* Background Media with Ken Burns Effect */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {activeSlide.type === 'video' ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src={activeSlide.mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <img
              src={activeSlide.mediaUrl}
              alt={activeSlide.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
          {/* Top gradient for Navbar visibility */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
          {/* Grain */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end md:justify-center px-4 md:px-12 pb-24 md:pb-0 pt-20">
        <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">

          {/* Left: Typography Section */}
          <div className="lg:col-span-8 pointer-events-none">
            <motion.div
              key={`content-${activeSlide.id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-left"
            >
              <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-8">
                <span className="px-3 py-1 md:px-4 md:py-1.5 border border-white/20 text-white text-[9px] md:text-[10px] font-bold tracking-[0.25em] uppercase rounded-full bg-white/5 backdrop-blur-sm">
                  {activeSlide.category}
                </span>
                <div className="h-[1px] w-8 md:w-12 bg-white/30"></div>
                <span className="text-white/80 text-[10px] md:text-xs font-bold tracking-widest uppercase">
                  {activeSlide.location}
                </span>
              </div>

              {/* Responsive Heading */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold font-heading text-white leading-[1.1] md:leading-[0.9] mb-4 md:mb-8 tracking-tighter mix-blend-overlay break-words">
                {activeSlide.title}
              </h1>

              {/* Fallback opaque heading for better mobile visibility */}
              <h1 className="md:hidden absolute top-[140px] left-0 text-4xl sm:text-6xl font-bold font-heading text-white/90 leading-[1.1] mb-4 tracking-tighter -z-10 opacity-0">
                {activeSlide.title}
              </h1>

              <p className="text-sm md:text-xl text-gray-300 font-light max-w-xl leading-relaxed mb-8 md:mb-12 border-l border-aum-orange pl-4 md:pl-6">
                {activeSlide.subtitle}
              </p>

              <div className="flex items-center gap-6 pointer-events-auto">
                <motion.a
                  href="#projects"
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-4 text-white"
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-aum-orange group-hover:text-white transition-all duration-300">
                    <ArrowRight size={18} className="md:w-5 md:h-5" />
                  </div>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] group-hover:text-aum-orange transition-colors">View Project</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right: Navigation & Counter */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col items-end justify-between lg:justify-end h-auto lg:h-full lg:pb-12 pointer-events-auto w-full">

            {/* Progress Bar (Mobile: Top of section, Desktop: Bottom) */}
            <div className="w-full max-w-[100px] md:max-w-xs h-[2px] bg-white/10 rounded-full overflow-hidden order-2 lg:order-3 mb-4 lg:mb-0">
              <motion.div
                key={currentSlide}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-full bg-aum-orange"
              />
            </div>

            {/* Large Counter */}
            <div className="flex items-baseline gap-2 md:gap-4 lg:mb-12 order-1 lg:order-1">
              <span className="text-4xl md:text-8xl font-heading font-bold text-white leading-none">
                0{currentSlide + 1}
              </span>
              <span className="text-lg md:text-4xl font-heading font-light text-white/30">
                / 0{HERO_SLIDES.length}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-2 md:gap-4 lg:mb-12 order-3 lg:order-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 group"
              >
                <ArrowLeft size={18} className="md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 group"
              >
                <ArrowRight size={18} className="md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={14} className="md:w-4 md:h-4" />
      </motion.div>

    </div>
  );
};

export default Hero;