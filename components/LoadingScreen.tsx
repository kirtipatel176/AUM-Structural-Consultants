import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2200; // Slightly faster for better UX
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(onComplete, 500);
      }
      setCount(Math.round(current));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col justify-between overflow-hidden text-white"
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      {/* Subtle Architectural Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:6rem_6rem] md:bg-[size:8rem_8rem] pointer-events-none"></div>

      <div className="relative z-10 w-full h-full max-w-[1800px] mx-auto p-6 md:p-12 flex flex-col justify-between">

        {/* Top Section */}
        <div className="flex justify-between items-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">Est. 2022</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase text-right block">Ahmedabad, IN</span>
          </motion.div>
        </div>

        {/* Center Content - Architectural Typo */}
        <div className="flex flex-col items-center justify-center relative">

          {/* Main Title Wrapper */}
          <div className="relative overflow-hidden mb-2 md:mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
              className="text-[15vw] md:text-[12rem] font-bold font-heading leading-none tracking-tighter text-white mix-blend-difference"
            >
              AUM
            </motion.h1>
          </div>

          {/* Divider Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            className="h-[1px] bg-white/20 w-full max-w-[200px] md:max-w-[400px]"
          />

          {/* Subtitle Wrapper */}
          <div className="relative overflow-hidden mt-2 md:mt-6">
            <motion.p
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
              className="text-xs md:text-xl font-light tracking-[0.5em] md:tracking-[0.8em] text-aum-orange uppercase text-center"
            >
              Structural Consultants
            </motion.p>
          </div>
        </div>

        {/* Bottom Section - Progress */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4 md:gap-0">

          {/* Quote or Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:block max-w-xs"
          >
            <p className="text-xs text-gray-500 font-mono leading-relaxed">
              WELCOME<br />
              STRUCTURING DREAMS...
            </p>
          </motion.div>

          {/* Percentage Counter */}
          <div className="flex items-end gap-4 md:gap-8 w-full md:w-auto justify-between md:justify-end">
            <div className="h-[2px] w-full md:w-64 bg-gray-800 self-center relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </div>
            <h2 className="text-6xl md:text-8xl font-light font-heading leading-none tracking-tighter tabular-nums min-w-[120px] text-right">
              {count}
              <span className="text-xl md:text-2xl ml-1 text-aum-orange font-bold">%</span>
            </h2>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;